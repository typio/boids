@binding(0) @group(0) var<uniform> uniforms : Uniforms;
struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    inverseViewProjectionMatrix: mat4x4<f32>,  
    cameraP: vec3<f32>,
    cameraTarget: vec3<f32>,
    lightP: vec3<f32>,
};

struct VertexInput {
    @location(0) pos: vec3f,
    @location(1) normal: vec3f,
    @location(2) boid_p: vec3f,
    @location(3) boid_v: vec3f,
};

struct VertexOutput {
    @builtin(position) p: vec4f,
    @location(0) worldPos: vec3f,
    @location(1) normal: vec3f,
    @location(2) clipPos: vec4f,  
};

@vertex
fn vs(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
        
    // If this is a sky vertex
    if input.normal.x == 0.0 && input.normal.y == 0.0 && input.normal.z == 0.0 {
        output.p = vec4f(input.pos.xy, 0.9999, 1.0);
        output.clipPos = output.p;
        output.worldPos = vec3f(0.0);
        output.normal = vec3f(0.0);
    } else {
        let boid_dir = normalize(input.boid_v);
        let up = vec3f(0.0, 1.0, 0.0);
        let right = normalize(cross(boid_dir, up));
        let new_up = cross(right, boid_dir);
        let rotMat = mat3x3f(right, new_up, boid_dir);
        output.worldPos = rotMat * input.pos + input.boid_p;
        output.normal = normalize(rotMat * input.normal);
        output.p = uniforms.viewProjectionMatrix * vec4f(output.worldPos, 1.0);
        output.clipPos = output.p;
    }
    return output;
}

@fragment
fn fs(input: VertexOutput) -> @location(0) vec4f {
    let sunDir = normalize(vec3f(0.5, 0.1, 0.0));
    let sunColor = vec3f(1.0, 0.4, 0.2);
    let glowColor = vec3f(0.0, 0.0, 0.2);
    let skyTop = vec3f(0.0, 0.0, 0.05);
    let skyHorizon = vec3f(0.8, 0.2, 0.3);

    if length(input.normal) < 0.01 {
        let clip = vec4f(input.clipPos.xy / input.clipPos.w, 1.0, 1.0);
        let worldSpace = uniforms.inverseViewProjectionMatrix * clip;
        let worldDir = normalize(worldSpace.xyz / worldSpace.w - uniforms.cameraP);

        let up = vec3f(0.0, 1.0, 0.0);
        let t = clamp((dot(worldDir, up) + 1.0) * 0.5, 0.0, 1.0);

        let skyColor = mix(skyHorizon, skyTop, pow(t, 0.25));

        let sunDot = dot(worldDir, sunDir);
        let sun = pow(max(0.0, sunDot), 2048.0);  // Sharp sun disk
        let sunGlow = pow(max(0.0, sunDot), 16.0); // Wider, softer glow

        return vec4f(skyColor + sun * sunColor + sunGlow * glowColor * 0.2, 1.0);
    } else {
        let ambientColor = vec3f(0.2, 0.2, 0.3);

        let ambient = ambientColor * 0.5;
        let NdotL = dot(normalize(input.normal), sunDir);
        let diff = smoothstep(-0.5, 1.0, NdotL);
        let diffuse = sunColor * diff * 0.7;

        let viewDir = normalize(uniforms.cameraP - input.worldPos);
        var rim = 1.0 - max(dot(viewDir, input.normal), 0.0);
        rim = pow(rim, 3.0) * 0.3;

        return vec4f(ambient + diffuse + rim, 1.0);
    }
}