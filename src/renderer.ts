import { Mat4, Vec3 } from "gl-matrix";
import { Boid } from "./main";

const wgsl = String.raw;

export class Camera {
  p: Vec3;
  target: Vec3;
  up: Vec3;
  aspect: number;
  fov: number;
  near: number;
  far: number;

  private canvas: HTMLCanvasElement;
  private lastMouse: { x: number; y: number };
  private clicked: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    aspect: number
  ) {
    this.p = Vec3.fromValues(0, -10, 0);
    this.target = Vec3.fromValues(0, 10, 0);
    this.up = Vec3.fromValues(0, 0, -1);
    this.aspect = aspect;
    this.fov = Math.PI / 5;
    this.near = 0.1;
    this.far = 100;

    this.canvas = canvas;
    this.lastMouse = { x: 0, y: 0 };
    this.clicked = false;

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.canvas.addEventListener("mousedown", (e) => {
      this.clicked = true;
      this.lastMouse.x = e.clientX;
      this.lastMouse.y = e.clientY;
    });

    window.addEventListener("mouseup", () => {
      this.clicked = false;
    });

    this.canvas.addEventListener("mousemove", (e) => {
      if (this.clicked) {
        const deltaX = (e.clientX - this.lastMouse.x) * 0.01;
        const deltaY = (e.clientY - this.lastMouse.y) * 0.01;

        const newX = this.target[0] + deltaX;
        const newZ = this.target[2] - deltaY;

        const potentialLookDir = Vec3.sub(Vec3.create(),
          Vec3.fromValues(newX, this.target[1], newZ),
          this.p
        );
        Vec3.normalize(potentialLookDir, potentialLookDir);

        const upVector = Vec3.fromValues(0, 1, 0);
        const angle = Math.acos(Vec3.dot(potentialLookDir, upVector));

        const maxAngle = Math.PI / 4; // 45 degrees
        if (angle < maxAngle) {
          this.target[0] = newX;
          this.target[2] = newZ;
        }

        this.lastMouse.x = e.clientX;
        this.lastMouse.y = e.clientY;
      }
    });
  }

  getViewProjectionMatrix(): Mat4 {
    const viewMatrix = Mat4.lookAt(Mat4.create(), this.p, this.target, this.up);
    const projectionMatrix = Mat4.perspective(
      Mat4.create(),
      this.fov,
      this.aspect,
      this.near,
      this.far,
    );

    return new Mat4(Mat4.multiply(Mat4.create(), projectionMatrix, viewMatrix));
  }

  getInverseViewProjectionMatrix(): Mat4 {
    const viewProjectionMatrix = this.getViewProjectionMatrix();
    return new Mat4(Mat4.invert(Mat4.create(), viewProjectionMatrix)!);
  }
}

class Light {
  p: Vec3;
  color: Vec3;

  constructor() {
    this.p = Vec3.fromValues(100, 100, 100);
    this.color = Vec3.fromValues(1, 1, 1);
  }
}

export default class Renderer {
  canvas: HTMLCanvasElement;
  context: GPUCanvasContext;
  adapter: GPUAdapter | undefined;
  device: GPUDevice | undefined;
  textureFormat: GPUTextureFormat | undefined;

  camera: Camera;
  light: Light;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.context = ((context) => {
      if (context === null) throw new Error("Failed to get canvas context");
      else return context;
    })(this.canvas.getContext("webgpu"));

    this.camera = new Camera(
      this.canvas,
      this.canvas.width / this.canvas.height
    );
    this.light = new Light();
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
    }

    this.camera.aspect = this.canvas.width / this.canvas.height;
  };

  async init(): Promise<void> {
    const entry: GPU = navigator.gpu;
    if (!entry) {
      throw new Error(
        "Failed to connect to GPU, your device or browser might not support webGPU yet.",
      );
    }

    this.adapter = ((a) => {
      if (a === null) throw new Error("Failed to get adapter");
      else return a;
    })(await entry.requestAdapter());

    this.device = ((d) => {
      if (d === null) throw new Error();
      else return d;
    })(await this.adapter.requestDevice());
    this.device.lost.then((info) => {
      console.error(`WebGPU device was lost: ${info.message}`);
    });

    this.textureFormat = navigator.gpu.getPreferredCanvasFormat();

    this.resize();
    window.addEventListener("resize", this.resize);
  }

  render = (_timeElapsed: number, boids: Boid[]) => {
    const uniformBufferSize = 16 * 4 + 16 * 4 + (3 * 4 + 4) + (3 * 4 + 4) + (3 * 4 + 4);
    const uniformBuffer = this.device!.createBuffer({
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    const uniformData = new Float32Array(uniformBufferSize / 4);
    uniformData.set(this.camera.getViewProjectionMatrix() as Float32Array, 0);
    uniformData.set(this.camera.getInverseViewProjectionMatrix() as Float32Array, 16);
    uniformData.set(this.camera.p, 32);
    uniformData.set(this.camera.target, 36);
    uniformData.set(this.light.p, 40);
    this.device!.queue.writeBuffer(uniformBuffer, 0, uniformData);

    const vertexData = new Float32Array([
      // Sky quad (first 6 vertices)
      -1.0, -1.0, 0.99, 0.0, 0.0, 0.0,  // bottom left
      1.0, -1.0, 0.99, 0.0, 0.0, 0.0,  // bottom right
      -1.0, 1.0, 0.99, 0.0, 0.0, 0.0,  // top left
      1.0, -1.0, 0.99, 0.0, 0.0, 0.0,  // bottom right
      1.0, 1.0, 0.99, 0.0, 0.0, 0.0,  // top right
      -1.0, 1.0, 0.99, 0.0, 0.0, 0.0,  // top left

      // Boid

      // Back face (triangle)
      0.0, 0.05, -0.1, 0.0, 0.0, -1.0,  // top
      -0.05, -0.05, -0.1, 0.0, 0.0, -1.0,  // left
      0.05, -0.05, -0.1, 0.0, 0.0, -1.0,  // right

      // Right side face
      0.0, 0.0, 0.2, 0.87, -0.5, 0.0,  // nose
      0.05, -0.05, -0.1, 0.87, -0.5, 0.0,  // back right
      0.0, 0.05, -0.1, 0.87, -0.5, 0.0,  // back top

      // Left side face
      0.0, 0.0, 0.2, -0.87, -0.5, 0.0,  // nose
      0.0, 0.05, -0.1, -0.87, -0.5, 0.0,  // back top
      -0.05, -0.05, -0.1, -0.87, -0.5, 0.0,  // back left

      // Bottom face
      0.0, 0.0, 0.2, 0.0, -1.0, 0.0,  // nose
      -0.05, -0.05, -0.1, 0.0, -1.0, 0.0,  // back left
      0.05, -0.05, -0.1, 0.0, -1.0, 0.0,  // back right
    ]);

    const vertexBuffer = this.device!.createBuffer({
      label: `vertex buffer`,
      size: vertexData.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    });
    this.device!.queue.writeBuffer(vertexBuffer, 0, vertexData);

    const INSTANCE_DATA_PER_BOID = 6
    const instanceData = new Float32Array(boids.length * INSTANCE_DATA_PER_BOID);
    boids.forEach((boid, i) => {
      instanceData.set([
        boid.p.x, boid.p.y, boid.p.z,
        boid.v.x, boid.v.y, boid.v.z,
      ], i * INSTANCE_DATA_PER_BOID);
    });

    const instanceBuffer = this.device!.createBuffer({
      label: "instance buffer",
      size: instanceData.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    });
    this.device!.queue.writeBuffer(instanceBuffer, 0, instanceData);

    const module = this.device!.createShaderModule({
      label: "main module",
      code: wgsl`
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
    
    @vertex fn vs(input: VertexInput) -> VertexOutput {
        var output: VertexOutput;
        
        // If this is a sky vertex
        if (input.normal.x == 0.0 && input.normal.y == 0.0 && input.normal.z == 0.0) {
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
    @fragment fn fs(input: VertexOutput) -> @location(0) vec4f {
      let sunDir = normalize(vec3f(0.5, 0.1, 0.0));
      let sunColor = vec3f(1.0, 0.4, 0.2);    
      let glowColor = vec3f(0.0, 0.0, 0.2);    
      let skyTop = vec3f(0.0, 0.0, 0.05);     
      let skyHorizon = vec3f(0.8, 0.2, 0.3);      
      
      if (length(input.normal) < 0.01) {
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

      `,
    });

    const bindGroupLayout = this.device!.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: { type: "uniform" },
        },
      ],
    });

    const bindGroup = this.device!.createBindGroup({
      layout: bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: uniformBuffer },
        },
      ],
    });

    const pipeline = this.device!.createRenderPipeline({
      layout: this.device!.createPipelineLayout({
        bindGroupLayouts: [bindGroupLayout],
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
            arrayStride: 6 * 4,
            attributes: [
              { shaderLocation: 2, offset: 0, format: "float32x3" },
              { shaderLocation: 3, offset: 3 * 4, format: "float32x3" }
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

    const depthTexture = this.device!.createTexture({
      size: [this.canvas.width, this.canvas.height],
      format: "depth24plus",
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });

    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [],
    };

    renderPassDescriptor.colorAttachments = [
      {
        view: this.context.getCurrentTexture().createView(),
        clearValue: [0, 0, 0, 1],
        loadOp: "clear",
        storeOp: "store",
      },
    ];

    renderPassDescriptor.depthStencilAttachment = {
      view: depthTexture.createView(),
      depthClearValue: 1.0,
      depthLoadOp: "clear",
      depthStoreOp: "store",
    };

    const encoder = this.device!.createCommandEncoder();

    const pass = encoder.beginRenderPass(renderPassDescriptor);

    // if (first_run) {
    //   first_run = false
    // }

    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);

    pass.setVertexBuffer(0, vertexBuffer);
    pass.setVertexBuffer(1, instanceBuffer);
    pass.draw(6 + 12, boids.length)
    pass.end();

    const commandBuffer = encoder.finish();
    this.device!.queue.submit([commandBuffer]);
  };
}
