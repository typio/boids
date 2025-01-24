struct Boid { p: vec3f, v: vec3f }
struct Cell { start: u32, count: u32 }
struct ModelParams {
    boids: u32, 
    range: f32, 
    coh: f32, 
    align: f32, 
    sep: f32, 
    sepRange: f32,
    boundsXMin: f32, boundsXMax: f32, boundsYMin: f32, boundsYMax: f32, boundsZMin: f32, boundsZMax: f32, 
    dt: f32
}
struct GridParams { dims: vec3f, size: f32 }

// Cell indices computation
@group(0) @binding(0) var<storage, read> idx_boids_in: array<Boid>;
@group(0) @binding(1) var<storage, read_write> idx_cells_out: array<u32>;
@group(0) @binding(2) var<storage, read_write> idx_indices: array<u32>;
@group(0) @binding(3) var<uniform> idx_grid: GridParams;

@compute @workgroup_size(64)
fn compute_cell_indices(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&idx_boids_in) { return; }
    let boid = idx_boids_in[id.x];
    idx_cells_out[id.x] = get_cell_index(boid.p, idx_grid);
    idx_indices[id.x] = id.x;
}

// Sorting
@group(0) @binding(0) var<storage, read> sort_cells_in: array<u32>;
@group(0) @binding(1) var<storage, read_write> sort_counts: array<atomic<u32>>;
@group(0) @binding(2) var<storage, read_write> sort_offsets: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read_write> sort_indices: array<u32>;
@group(0) @binding(4) var<uniform> sort_grid: GridParams;

@compute @workgroup_size(64)
fn count_cells(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&sort_cells_in) { return; }
    atomicAdd(&sort_counts[sort_cells_in[id.x]], 1u);
}

@compute @workgroup_size(64)
fn compute_offsets(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&sort_counts) { return; }
    var offset = 0u;
    for (var i = 0u; i < id.x; i++) {
        offset += atomicLoad(&sort_counts[i]);
    }
    atomicStore(&sort_offsets[id.x], offset); 
}

@compute @workgroup_size(64)
fn place_indices(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&sort_cells_in) { return; }
    let cell_idx = sort_cells_in[id.x];
    let pos = atomicAdd(&sort_offsets[cell_idx], 1u);
    sort_indices[pos] = id.x;
}

// Grid building
@group(0) @binding(0) var<storage, read> grid_boid_cells: array<u32>;
@group(0) @binding(1) var<storage, read> grid_sorted_boids: array<u32>;
@group(0) @binding(2) var<storage, read_write> grid_out: array<Cell>;

@compute @workgroup_size(64)
fn build_grid(@builtin(global_invocation_id) id: vec3<u32>) {
    // if id.x >= arrayLength(&grid_sorted_boids) { return; }
    // let i = id.x;
    // let cell_idx = grid_boid_cells[grid_sorted_boids[i]];

    // if i == 0u || grid_boid_cells[grid_sorted_boids[i - 1u]] != cell_idx {
    //     grid_out[cell_idx].start = i;
    // }
    // if i == arrayLength(&grid_sorted_boids) - 1u || grid_boid_cells[grid_sorted_boids[i + 1u]] != cell_idx {
    //     grid_out[cell_idx].count = i - grid_out[cell_idx].start + 1u;
    // }

    // Safe version

    // Basic bounds check
    if id.x >= arrayLength(&grid_sorted_boids) { return; }
    let i = id.x;
    
    // Validate indices
    let sorted_idx = grid_sorted_boids[i];
    if sorted_idx >= arrayLength(&grid_boid_cells) { return; }

    let cell_idx = grid_boid_cells[sorted_idx];
    // Validate cell index against grid dimensions
    let total_cells = arrayLength(&grid_out);
    if cell_idx >= total_cells { return; }

    // Safe previous cell check
    let prev_cell = select(
        grid_boid_cells[grid_sorted_boids[i - 1u]], cell_idx,  // Default to current if i == 0
        i == 0u
    );

    // Safe next cell check
    let is_last = i == arrayLength(&grid_sorted_boids) - 1u;
    let next_cell = select(
        grid_boid_cells[grid_sorted_boids[i + 1u]], cell_idx,  // Default to current if last
        is_last
    );

    // Start of cell
    if i == 0u || prev_cell != cell_idx {
        grid_out[cell_idx].start = min(i, arrayLength(&grid_sorted_boids) - 1u);
    }

    // End of cell
    if is_last || next_cell != cell_idx {
        let count = i - grid_out[cell_idx].start + 1u;
        grid_out[cell_idx].count = min(count, arrayLength(&grid_sorted_boids));
    }
}

// Main simulation
@group(0) @binding(0) var<storage, read> sim_boids_in: array<Boid>;
@group(0) @binding(1) var<storage, read_write> sim_boids_out: array<Boid>;
@group(0) @binding(2) var<uniform> sim_params: ModelParams;
@group(0) @binding(3) var<storage, read> sim_cells: array<Cell>;
@group(0) @binding(4) var<storage, read> sim_indices: array<u32>;
@group(0) @binding(5) var<uniform> sim_grid: GridParams;

@compute @workgroup_size(64)
fn sim_boids(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= sim_params.boids { return; }
    var boid = sim_boids_in[id.x];
    let cell = get_cell_index(boid.p, sim_grid);

    var new_v = vec3f(0);
    var align = vec3f(0);
    var coh_pos = vec3f(0);
    var coh_w = 0.0;
    var sep = vec3f(0);
    var sep_w = 0.0;
    var n_count = 0u;

    for (var ox = -1; ox <= 1; ox++) {
        for (var oy = -1; oy <= 1; oy++) {
            for (var oz = -1; oz <= 1; oz++) {
                let n_cell = get_neighbor_cell(cell, vec3<i32>(ox, oy, oz), sim_grid);
                if n_cell >= arrayLength(&sim_cells) { continue; }

                let c = sim_cells[n_cell];
                for (var i = c.start; i < c.start + c.count; i++) {
                    let other_idx = sim_indices[i];
                    if other_idx == id.x { continue; }
                    let other = sim_boids_in[other_idx];
                    n_count++;

                    let dist = distance(boid.p, other.p);
                    if dist < 0.0001 || dist > sim_params.range { continue; }
                    let w = 1.0 - (dist / sim_params.range);

                    align += other.v * w;
                    coh_pos += other.p * w;
                    coh_w += w;

                    if dist < sim_params.sepRange {
                        let sw = 1.0 - (dist / sim_params.sepRange);
                        sep += safe_normalize(boid.p - other.p) * sw;
                        sep_w += sw;
                    }
                }
            }
        }
    }

    if n_count > 0u {
        new_v += safe_normalize(align) * sim_params.align;
    }
    if coh_w > 0.0 {
        coh_pos = coh_pos / coh_w;
        new_v += safe_normalize(coh_pos - boid.p) * sim_params.coh;
    }
    if sep_w > 0.0 {
        new_v += (sep / sep_w) * sim_params.sep;
    }

    // Boundary forces
    let margin = 1.0;
    new_v += vec3f(
        boundaryForce(boid.p.x, sim_params.boundsXMin, sim_params.boundsXMax, margin),
        boundaryForce(boid.p.y, sim_params.boundsYMin, sim_params.boundsYMax, margin),
        boundaryForce(boid.p.z, sim_params.boundsZMin, sim_params.boundsZMax, margin)
    );

    // Apply new velocity
    boid.v += new_v * sim_params.dt;

    // Speed limits
    let speed = length(boid.v);
    if speed < 0.5 {
        boid.v = safe_normalize(boid.v) * 0.5;
    } else if speed > 3.0 {
        boid.v = safe_normalize(boid.v) * 3.0;
    }

    // Move boid
    boid.p += boid.v * sim_params.dt;

    // Set new boid to next buffer
    sim_boids_out[id.x] = boid;
}

fn boundaryForce(pos: f32, minP: f32, maxP: f32, margin: f32) -> f32 {
    return max(0.0, (minP + margin - pos) / margin) * 10.0 + max(0.0, (pos - (maxP - margin)) / margin) * -10.0;
}

fn safe_normalize(v: vec3f) -> vec3f {
    let len = length(v);
    return select(vec3f(0.0), v / len, len > 0.0001);
}

fn get_cell_index(p: vec3f, grid: GridParams) -> u32 {
    let cell_pos = clamp(floor(p / grid.size), vec3(0.0), grid.dims - vec3(1.0));
    let index = u32(cell_pos.x + (cell_pos.y * grid.dims.x) + (cell_pos.z * grid.dims.x * grid.dims.y));
    return min(index, u32(grid.dims.x * grid.dims.y * grid.dims.z) - 1u);
}

fn get_neighbor_cell(cell: u32, offset: vec3<i32>, grid: GridParams) -> u32 {
    let z = cell / (u32(grid.dims.x) * u32(grid.dims.y));
    let y = (cell % (u32(grid.dims.x) * u32(grid.dims.y))) / u32(grid.dims.x);
    let x = cell % u32(grid.dims.x);

    let nx = i32(x) + offset.x;
    let ny = i32(y) + offset.y;
    let nz = i32(z) + offset.z;

    if nx < 0 || nx >= i32(grid.dims.x) || ny < 0 || ny >= i32(grid.dims.y) || nz < 0 || nz >= i32(grid.dims.z) { return cell; }

    return u32(nx + ny * i32(grid.dims.x) + nz * i32(grid.dims.x) * i32(grid.dims.y));
}