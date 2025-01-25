import { Vec3 } from "gl-matrix";
import { Boid, Bounds3, SimParams } from "./main";
import { Camera } from "./Camera";

import renderWGSL from "./shaders/render.wgsl?raw"
import simWGSL from "./shaders/sim.wgsl?raw"

export default class BoidEngine {
  canvas: HTMLCanvasElement;
  context: GPUCanvasContext;

  adapter!: GPUAdapter;
  device!: GPUDevice;
  textureFormat!: GPUTextureFormat;

  camera: Camera;
  light: {
    p: Vec3;
    color: Vec3;
  }

  #boids: Boid[]

  currentFrame: number;

  simParams: SimParams
  boidBounds: Bounds3
  gridParams: {
    cellSize: number,
    gridDims: {
      x: number,
      y: number,
      z: number
    }
  }

  #uniformBuffer!: GPUBuffer
  #uniformData!: Float32Array
  #vertexBuffer!: GPUBuffer
  #renderPipeline!: GPURenderPipeline
  #depthTexture!: GPUTexture
  #bindGroup!: GPUBindGroup
  #bindGroupLayout!: GPUBindGroupLayout
  #renderPassDescriptor!: GPURenderPassDescriptor

  #cellIndexPipeline!: GPUComputePipeline
  #sortPipelines!: {
    count: GPUComputePipeline;
    offset: GPUComputePipeline;
    place: GPUComputePipeline;
  };
  #buildGridPipeline!: GPUComputePipeline
  #simBoidsPipeline!: GPUComputePipeline

  // Data per boid
  #boidBuffers!: { a: GPUBuffer, b: GPUBuffer };
  #simParamsBuffer!: GPUBuffer;
  // Mapping from boid index to cell #
  #boidCellBuffer!: GPUBuffer;
  #cellCountsBuffer!: GPUBuffer // Count of boids in each cell
  #cellOffsetsBuffer!: GPUBuffer // Counts as offsets
  // Boid indices sorted by cell #
  #cellSortedBoidsBuffer!: GPUBuffer
  // Cell (start, length) of cellSortedBoids
  #cellsBuffer!: GPUBuffer
  #gridParamsBuffer!: GPUBuffer

  #cellIndexBindGroups!: { a: GPUBindGroup, b: GPUBindGroup };
  #sortBindGroup!: GPUBindGroup;
  #buildGridBindGroup!: GPUBindGroup;
  #simBoidsBindGroups!: { a: GPUBindGroup, b: GPUBindGroup };

  querySet!: any
  resolveBuffer!: any
  resultBuffer!: any
  gpuTimes: number[][]

  constructor(canvas: HTMLCanvasElement, boids: Boid[], simParams: SimParams, boidBounds: Bounds3) {
    this.canvas = canvas;

    this.context = ((context) => {
      if (context === null) throw new Error("Failed to get canvas context");
      else return context;
    })(this.canvas.getContext("webgpu"));

    this.camera = new Camera(
      this.canvas,
      this.canvas.width / this.canvas.height
    );

    this.light = {
      p: Vec3.fromValues(100, 100, 100),
      color: Vec3.fromValues(1, 1, 1)
    }

    this.#boids = boids

    this.currentFrame = 0

    this.simParams = simParams
    this.boidBounds = boidBounds

    const cellSize = this.simParams.range.v;
    this.gridParams = {
      cellSize,
      gridDims: {
        x: Math.ceil((this.boidBounds.x.max - this.boidBounds.x.min) / cellSize),
        y: Math.ceil((this.boidBounds.y.max - this.boidBounds.y.min) / cellSize),
        z: Math.ceil((this.boidBounds.z.max - this.boidBounds.z.min) / cellSize)
      }
    }

    this.gpuTimes = Array.from({ length: 7 }).map(_ => [])
  }

  resize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.canvas.style.width = window.innerWidth + "px";
    this.canvas.style.height = window.innerHeight + "px";

    if (this.device && this.textureFormat) {
      const canvasConfig: GPUCanvasConfiguration = {
        device: this.device!,
        format: this.textureFormat!,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        alphaMode: "opaque",
      };
      this.context.configure(canvasConfig);

      if (this.#depthTexture != undefined)
        this.#depthTexture.destroy();

      this.#depthTexture = this.device.createTexture({
        size: [this.canvas.width, this.canvas.height],
        format: "depth24plus",
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });
    }

    this.camera.aspect = this.canvas.width / this.canvas.height;
  };

  async init(): Promise<void> {
    const entry: GPU = navigator.gpu;
    if (!entry) {
      const errMsg = "Failed to connect to GPU, your device or browser might not support WebGPU yet."
      alert(errMsg)
      throw new Error(errMsg)
    }

    this.adapter = ((a) => {
      if (a === null) {
        const errMsg = "Failed to get WebGPU adapter"
        alert(errMsg)
        throw new Error(errMsg)
      }
      else return a;
    })(await entry.requestAdapter());

    const canTimestamp = this.adapter.features.has('timestamp-query');
    this.device = await this.adapter.requestDevice({
      requiredFeatures: [
        ...(canTimestamp ? ['timestamp-query' as GPUFeatureName] : []),
      ],
    });
    if (this.device === null) {
      const errMsg = "Failed to get WebGPU device"
      alert(errMsg)
      throw new Error(errMsg)
    }
    this.device.lost.then((info) => {
      const errMsg = `WebGPU device was lost: ${info.message}`
      alert(errMsg)
      throw new Error(errMsg)
    });

    this.textureFormat = navigator.gpu.getPreferredCanvasFormat();

    this.resize();
    window.addEventListener("resize", this.resize);

    const uniformBufferSize = 16 * 4 + 16 * 4 + (3 * 4 + 4) + (3 * 4 + 4) + (3 * 4 + 4);
    this.#uniformBuffer = this.device!.createBuffer({
      label: "uniformBuffer",
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    this.#uniformData = new Float32Array(this.#uniformBuffer.size / 4);
    this.#uniformData.set(this.camera.p, 32);
    this.#uniformData.set(this.light.p, 40);

    const vertexData = new Float32Array([
      // Sky quad
      -1.0, -1.0, 0.99, 0.0, 0.0, 0.0,  // bottom left
      1.0, -1.0, 0.99, 0.0, 0.0, 0.0,  // bottom right
      -1.0, 1.0, 0.99, 0.0, 0.0, 0.0,  // top left
      1.0, -1.0, 0.99, 0.0, 0.0, 0.0,  // bottom right
      1.0, 1.0, 0.99, 0.0, 0.0, 0.0,  // top right
      -1.0, 1.0, 0.99, 0.0, 0.0, 0.0,  // top left

      // Boid
      // Back face
      0.0, 0.05, -0.1, 0.0, 0.0, -1.0,  // top
      -0.05, -0.05, -0.1, 0.0, 0.0, -1.0,  // left
      0.05, -0.05, -0.1, 0.0, 0.0, -1.0,  // right

      // Right face
      0.0, 0.0, 0.2, 0.87, -0.5, 0.0,  // nose
      0.05, -0.05, -0.1, 0.87, -0.5, 0.0,  // back right
      0.0, 0.05, -0.1, 0.87, -0.5, 0.0,  // back top

      // Left face
      0.0, 0.0, 0.2, -0.87, -0.5, 0.0,  // nose
      0.0, 0.05, -0.1, -0.87, -0.5, 0.0,  // back top
      -0.05, -0.05, -0.1, -0.87, -0.5, 0.0,  // back left

      // Bottom face
      0.0, 0.0, 0.2, 0.0, -1.0, 0.0,  // nose
      -0.05, -0.05, -0.1, 0.0, -1.0, 0.0,  // back left
      0.05, -0.05, -0.1, 0.0, -1.0, 0.0,  // back right
    ]);

    this.#vertexBuffer = this.device!.createBuffer({
      label: `vertex buffer`,
      size: vertexData.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    });
    this.device!.queue.writeBuffer(this.#vertexBuffer, 0, vertexData);

    const module = this.device!.createShaderModule({
      label: "main module",
      code: renderWGSL,
    });

    this.#bindGroupLayout = this.device!.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: { type: "uniform" },
        },
      ],
    });

    this.#bindGroup = this.device!.createBindGroup({
      layout: this.#bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: this.#uniformBuffer },
        },
      ],
    });

    this.#renderPipeline = this.device!.createRenderPipeline({
      layout: this.device!.createPipelineLayout({
        bindGroupLayouts: [this.#bindGroupLayout],
      }),
      vertex: {
        module,
        entryPoint: 'vs',
        buffers: [
          {
            arrayStride: 6 * 4,
            attributes: [
              { shaderLocation: 0, offset: 0, format: "float32x3" },
              { shaderLocation: 1, offset: 3 * 4, format: "float32x3" }
            ],
            stepMode: "vertex",
          },
          {
            arrayStride: 8 * 4, // 8 floats * 4 bytes (1byte pad between vec3's)
            attributes: [
              { shaderLocation: 2, offset: 0, format: "float32x3" },      // position
              { shaderLocation: 3, offset: 4 * 4, format: "float32x3" }   // velocity
            ],
            stepMode: "instance",
          }
        ],
      },
      fragment: {
        module,
        entryPoint: "fs",
        targets: [{ format: this.textureFormat! }],
      },
      primitive: {
        topology: "triangle-list",
        cullMode: "none",
      },
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: "less",
        format: "depth24plus",
      }
    });

    const computeModule = this.device!.createShaderModule({
      label: 'Boid compute shader',
      code: simWGSL
    });

    const boidBufferSize = this.simParams.boids.max! * 32;
    this.#boidBuffers = {
      a: this.device!.createBuffer({
        label: "boidBufferA",
        size: boidBufferSize,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC | GPUBufferUsage.VERTEX,
      }),
      b: this.device!.createBuffer({
        label: "boidBufferB",
        size: boidBufferSize,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC | GPUBufferUsage.VERTEX,
      })
    }

    const simParamsBufferSize = 13 * 4
    this.#simParamsBuffer = this.device!.createBuffer({
      label: "simParamsBuffer",
      size: simParamsBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.#boidCellBuffer = this.device!.createBuffer({
      label: "boidCellBuffer",
      size: this.simParams.boids.max! * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    });

    this.#cellSortedBoidsBuffer = this.device!.createBuffer({
      label: "cellSortedBoidsBuffer",
      size: this.simParams.boids.max! * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    });

    this.#gridParamsBuffer = this.device!.createBuffer({
      label: "gridParamsBuffer",
      size: (3 * 4) + (4),
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    // Initialize grid params
    const gridParamsData = new Float32Array([
      this.gridParams.gridDims.x, this.gridParams.gridDims.y, this.gridParams.gridDims.z, this.gridParams.cellSize
    ]);
    this.device!.queue.writeBuffer(this.#gridParamsBuffer, 0, gridParamsData);

    // 1. Pipeline for computing cell indices
    this.#cellIndexPipeline = this.device!.createComputePipeline({
      layout: this.device!.createPipelineLayout({
        bindGroupLayouts: [
          this.device!.createBindGroupLayout({
            entries: [
              // Boids 
              { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: "read-only-storage" } },
              // Cell indices 
              { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
              // Sorted indices 
              { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
              // Grid params
              { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: "uniform" } },
            ],
          }),
        ],
      }),
      compute: {
        module: computeModule,
        entryPoint: 'compute_cell_indices',
      },
    });

    const sortBindGroupLayout = this.device!.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: "read-only-storage" } }, // Cell indices
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },          // Atomic counts
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },          // Offsets
        { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },          // Sorted indices out
        { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: "uniform" } },          // Grid params
      ],
    });

    this.#sortPipelines = {
      count: this.device!.createComputePipeline({
        layout: this.device!.createPipelineLayout({ bindGroupLayouts: [sortBindGroupLayout] }),
        compute: { module: computeModule, entryPoint: 'count_cells' }
      }),
      offset: this.device!.createComputePipeline({
        layout: this.device!.createPipelineLayout({ bindGroupLayouts: [sortBindGroupLayout] }),
        compute: { module: computeModule, entryPoint: 'compute_offsets' }
      }),
      place: this.device!.createComputePipeline({
        layout: this.device!.createPipelineLayout({ bindGroupLayouts: [sortBindGroupLayout] }),
        compute: { module: computeModule, entryPoint: 'place_indices' }
      })
    };

    this.#buildGridPipeline = this.device!.createComputePipeline({
      layout: this.device!.createPipelineLayout({
        bindGroupLayouts: [
          this.device!.createBindGroupLayout({
            entries: [
              // Cell indices 
              { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: "read-only-storage" } },
              // Sorted indices 
              { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: "read-only-storage" } },
              // Grid cells 
              { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
            ],
          }),
        ],
      }),
      compute: {
        module: computeModule,
        entryPoint: 'build_grid',
      },
    });

    this.#simBoidsPipeline = this.device!.createComputePipeline({
      layout: this.device!.createPipelineLayout({
        bindGroupLayouts: [
          this.device!.createBindGroupLayout({
            entries: [
              // Boids in
              { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: "read-only-storage" } },
              // Boids out
              { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
              // Sim Params
              { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: "uniform" } },
              // Grid cells
              { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: "read-only-storage" } },
              // Sorted indices
              { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: "read-only-storage" } },
              // Grid params
              { binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: "uniform" } },
            ],
          }),
        ],
      }),
      compute: {
        module: computeModule,
        entryPoint: 'sim_boids',
      },
    });

    const boidsData = new Float32Array(this.simParams.boids.max! * 8); // 8 floats per boid (w/ padding)
    this.#boids.forEach((boid, i) => {
      boidsData.set([
        boid.p.x, boid.p.y, boid.p.z, 0.0,
        boid.v.x, boid.v.y, boid.v.z, 0.0,
      ], i * 8);
    });
    this.device!.queue.writeBuffer(this.#boidBuffers.a, 0, boidsData);

    this.#cellIndexBindGroups = {
      a: this.device!.createBindGroup({
        layout: this.#cellIndexPipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: this.#boidBuffers.a } },
          { binding: 1, resource: { buffer: this.#boidCellBuffer } },
          { binding: 2, resource: { buffer: this.#cellSortedBoidsBuffer } },
          { binding: 3, resource: { buffer: this.#gridParamsBuffer } },
        ]
      }),
      b: this.device!.createBindGroup({
        layout: this.#cellIndexPipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: this.#boidBuffers.b } },
          { binding: 1, resource: { buffer: this.#boidCellBuffer } },
          { binding: 2, resource: { buffer: this.#cellSortedBoidsBuffer } },
          { binding: 3, resource: { buffer: this.#gridParamsBuffer } },
        ]
      })
    };

    this.#createGridSystem()

    this.querySet = this.device.createQuerySet({
      type: 'timestamp',
      count: 14,
    });
    this.resolveBuffer = this.device.createBuffer({
      size: this.querySet.count * 8,
      usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
    });
    this.resultBuffer = this.device.createBuffer({
      size: this.resolveBuffer.size,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
    });
  }

  #createGridSystem() {
    const cellSize = this.simParams.range.v;
    const newGridDims = {
      x: Math.ceil((this.boidBounds.x.max - this.boidBounds.x.min) / cellSize),
      y: Math.ceil((this.boidBounds.y.max - this.boidBounds.y.min) / cellSize),
      z: Math.ceil((this.boidBounds.z.max - this.boidBounds.z.min) / cellSize)
    };

    const totalCells = newGridDims.x * newGridDims.y * newGridDims.z;

    this.gridParams = {
      cellSize,
      gridDims: newGridDims
    };

    this.device!.queue.writeBuffer(
      this.#gridParamsBuffer,
      0,
      new Float32Array([newGridDims.x, newGridDims.y, newGridDims.z, cellSize])
    );

    if (this.#cellCountsBuffer !== undefined)
      this.#cellCountsBuffer.destroy();
    if (this.#cellOffsetsBuffer !== undefined)
      this.#cellOffsetsBuffer.destroy();
    if (this.#cellsBuffer !== undefined)
      this.#cellsBuffer.destroy();

    this.#cellCountsBuffer = this.device!.createBuffer({
      label: "cellCountsBuffer",
      size: totalCells * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });

    this.#cellOffsetsBuffer = this.device!.createBuffer({
      label: "cellOffsetsBuffer",
      size: totalCells * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });

    this.#cellsBuffer = this.device!.createBuffer({
      label: "cellsBuffer",
      size: totalCells * 8,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });

    this.#sortBindGroup = this.device!.createBindGroup({
      layout: this.#sortPipelines.count.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.#boidCellBuffer } },
        { binding: 1, resource: { buffer: this.#cellCountsBuffer } },
        { binding: 2, resource: { buffer: this.#cellOffsetsBuffer } },
        { binding: 3, resource: { buffer: this.#cellSortedBoidsBuffer } },
        { binding: 4, resource: { buffer: this.#gridParamsBuffer } },
      ]
    });

    this.#buildGridBindGroup = this.device!.createBindGroup({
      layout: this.#buildGridPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.#boidCellBuffer } },
        { binding: 1, resource: { buffer: this.#cellSortedBoidsBuffer } },
        { binding: 2, resource: { buffer: this.#cellsBuffer } },
      ]
    });

    this.#simBoidsBindGroups = {
      a: this.device!.createBindGroup({
        layout: this.#simBoidsPipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: this.#boidBuffers.a } },
          { binding: 1, resource: { buffer: this.#boidBuffers.b } },
          { binding: 2, resource: { buffer: this.#simParamsBuffer } },
          { binding: 3, resource: { buffer: this.#cellsBuffer } },
          { binding: 4, resource: { buffer: this.#cellSortedBoidsBuffer } },
          { binding: 5, resource: { buffer: this.#gridParamsBuffer } },
        ]
      }),
      b: this.device!.createBindGroup({
        layout: this.#simBoidsPipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: this.#boidBuffers.b } },
          { binding: 1, resource: { buffer: this.#boidBuffers.a } },
          { binding: 2, resource: { buffer: this.#simParamsBuffer } },
          { binding: 3, resource: { buffer: this.#cellsBuffer } },
          { binding: 4, resource: { buffer: this.#cellSortedBoidsBuffer } },
          { binding: 5, resource: { buffer: this.#gridParamsBuffer } },
        ]
      })
    };
  }

  pass = async (dt: number) => {
    if (this.simParams.range.v !== this.gridParams.cellSize) {
      this.#createGridSystem();
    }

    const encoder = this.device!.createCommandEncoder();
    const totalCells = this.gridParams.gridDims.x * this.gridParams.gridDims.y * this.gridParams.gridDims.z;
    const numWorkgroups = Math.ceil(this.simParams.boids.v / 64);

    //
    // Sim Boids (Compute Pass)
    //
    const simParams = new Float32Array([
      this.simParams.boids.v,
      this.simParams.range.v,
      this.simParams.coh.v,
      this.simParams.align.v,
      this.simParams.sep.v,
      this.simParams.sepRange.v,
      this.boidBounds.x.min,
      this.boidBounds.x.max,
      this.boidBounds.y.min,
      this.boidBounds.y.max,
      this.boidBounds.z.min,
      this.boidBounds.z.max,
      dt
    ]);
    this.device!.queue.writeBuffer(this.#simParamsBuffer, 0, simParams);

    // 1. Compute cell indices of boids
    const cellIndexPass = encoder.beginComputePass({
      timestampWrites: {
        querySet: this.querySet,
        beginningOfPassWriteIndex: 0,
        endOfPassWriteIndex: 1,
      }
    });
    cellIndexPass.setPipeline(this.#cellIndexPipeline);
    cellIndexPass.setBindGroup(0, this.#cellIndexBindGroups[this.currentFrame % 2 === 0 ? 'a' : 'b']);
    cellIndexPass.dispatchWorkgroups(numWorkgroups);
    cellIndexPass.end();

    // const boidsStagingBuffer = this.device!.createBuffer({
    //   size: this.boids.length * 8,
    //   usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST
    // });

    // encoder.copyBufferToBuffer(
    //   this.boidBuffers.a, 0,
    //   boidsStagingBuffer, 0,
    //   this.boids.length * 8
    // );

    // await boidsStagingBuffer.mapAsync(GPUMapMode.READ);
    // const _boids = new Float32Array(boidsStagingBuffer.getMappedRange());
    // console.log('p:', ..._boids.slice(0, 3)) 
    // console.log('v:', ..._boids.slice(4, 7))

    // Count cells
    // Clear cell counts
    this.device!.queue.writeBuffer(
      this.#cellCountsBuffer,
      0,
      new Uint32Array(totalCells).fill(0)
    );
    const countPass = encoder.beginComputePass({
      timestampWrites: {
        querySet: this.querySet,
        beginningOfPassWriteIndex: 2,
        endOfPassWriteIndex: 3,
      }
    });
    countPass.setBindGroup(0, this.#sortBindGroup);
    countPass.setPipeline(this.#sortPipelines.count);
    countPass.dispatchWorkgroups(numWorkgroups);
    countPass.end();

    // Compute offsets
    const offsetPass = encoder.beginComputePass({
      timestampWrites: {
        querySet: this.querySet,
        beginningOfPassWriteIndex: 4,
        endOfPassWriteIndex: 5,
      }
    });
    offsetPass.setBindGroup(0, this.#sortBindGroup);
    offsetPass.setPipeline(this.#sortPipelines.offset);
    offsetPass.dispatchWorkgroups(Math.ceil(totalCells / 64));
    offsetPass.end();

    // Place indices
    const placePass = encoder.beginComputePass({
      timestampWrites: {
        querySet: this.querySet,
        beginningOfPassWriteIndex: 6,
        endOfPassWriteIndex: 7,
      }
    });
    placePass.setBindGroup(0, this.#sortBindGroup);
    placePass.setPipeline(this.#sortPipelines.place);
    placePass.dispatchWorkgroups(numWorkgroups);
    placePass.end();


    this.device!.queue.writeBuffer(
      this.#cellsBuffer,
      0,
      new Uint32Array(totalCells * 2).fill(0)
    ); // TODO: try removing this to see if it's needed for safety
    const buildGridPass = encoder.beginComputePass({
      timestampWrites: {
        querySet: this.querySet,
        beginningOfPassWriteIndex: 8,
        endOfPassWriteIndex: 9,
      }
    });
    buildGridPass.setPipeline(this.#buildGridPipeline);
    buildGridPass.setBindGroup(0, this.#buildGridBindGroup);
    buildGridPass.dispatchWorkgroups(numWorkgroups);
    buildGridPass.end();

    // 4. Main boid simulation
    const simBoidsPass = encoder.beginComputePass({
      timestampWrites: {
        querySet: this.querySet,
        beginningOfPassWriteIndex: 10,
        endOfPassWriteIndex: 11,
      }
    });
    simBoidsPass.setPipeline(this.#simBoidsPipeline);
    simBoidsPass.setBindGroup(0, this.#simBoidsBindGroups[this.currentFrame % 2 === 0 ? 'a' : 'b']);
    simBoidsPass.dispatchWorkgroups(numWorkgroups);
    simBoidsPass.end();

    //
    // Render
    //
    this.#uniformData.set(this.camera.getViewProjectionMatrix() as Float32Array, 0);
    this.#uniformData.set(this.camera.getInverseViewProjectionMatrix() as Float32Array, 16);
    this.#uniformData.set(this.camera.target, 36);
    this.device!.queue.writeBuffer(this.#uniformBuffer, 0, this.#uniformData);

    this.#renderPassDescriptor = {
      colorAttachments: [],
      timestampWrites: {
        querySet: this.querySet,
        beginningOfPassWriteIndex: 12,
        endOfPassWriteIndex: 13,
      },
    };

    this.#renderPassDescriptor.colorAttachments = [
      {
        view: this.context.getCurrentTexture().createView(),
        clearValue: [0, 0, 0, 1],
        loadOp: "clear",
        storeOp: "store",
      },
    ];

    this.#renderPassDescriptor.depthStencilAttachment = {
      view: this.#depthTexture.createView(),
      depthClearValue: 1.0,
      depthLoadOp: "clear",
      depthStoreOp: "store",
    };

    const renderPass = encoder.beginRenderPass(this.#renderPassDescriptor);

    renderPass.setPipeline(this.#renderPipeline);
    renderPass.setBindGroup(0, this.#bindGroup);

    renderPass.setVertexBuffer(0, this.#vertexBuffer);
    renderPass.setVertexBuffer(1,
      this.#boidBuffers[this.currentFrame % 2 === 0 ? 'b' : 'a']
    );

    renderPass.draw(6 + 12, this.simParams.boids.v)
    renderPass.end();

    encoder.resolveQuerySet(this.querySet, 0, this.querySet.count, this.resolveBuffer, 0);
    if (this.resultBuffer.mapState === 'unmapped') {
      encoder.copyBufferToBuffer(this.resolveBuffer, 0, this.resultBuffer, 0, this.resultBuffer.size);
    }

    this.device!.queue.submit([encoder.finish()]);

    if (this.resultBuffer.mapState === 'unmapped')
      this.resultBuffer.mapAsync(GPUMapMode.READ).then(() => {
        const times = new BigInt64Array(this.resultBuffer.getMappedRange());
        for (let i = 0; i < 7; i++) {
          let t = Number(times[i + 1] - times[i]) / 1000;

          if (t > 0) {
            this.gpuTimes[i].push(t)
            if (this.gpuTimes[i].length > 1) {
              this.gpuTimes[i].shift()
            }
          }
        }
        this.resultBuffer.unmap();
      });

    this.currentFrame += 1
  };
}
