import { Vec3, Mat4 } from "gl-matrix";

export class Camera {
  p: Vec3;
  target: Vec3;
  up: Vec3;
  aspect: number;
  fov: number;
  near: number;
  far: number;

  private canvas: HTMLCanvasElement;
  private lastMouse: { x: number; y: number; };
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
      this.far
    );

    return new Mat4(Mat4.multiply(Mat4.create(), projectionMatrix, viewMatrix));
  }

  getInverseViewProjectionMatrix(): Mat4 {
    const viewProjectionMatrix = this.getViewProjectionMatrix();
    return new Mat4(Mat4.invert(Mat4.create(), viewProjectionMatrix)!);
  }
}
