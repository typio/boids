import { Vec3 } from "gl-matrix";
import { Boid, ModelParams } from "./main";

const MAX_SPEED = 10, MIN_SPEED = 0.5, MAX_FORCE = 1;

const zOrder = (p: Vec3, gs: number) => {
  const x = Math.floor((p[0] + 1) * gs / 2);
  const y = Math.floor((p[1] + 1) * gs / 2);
  const z = Math.floor((p[2] + 1) * gs / 2);
  return z * gs * gs + y * gs + x;
}

const falloff = (d: number, r: number) => (1 / ((d / (2 * r)) - 1)) + 2;

const steer = (b: Boid, target: Vec3, maxF: number): Vec3 => {
  const des = Vec3.subtract(Vec3.create(), target, b.p);
  const dist = Vec3.mag(des);
  if (dist < 0.0001) return Vec3.create();

  Vec3.normalize(des, des);
  Vec3.scale(des, des, Math.min(MAX_SPEED, dist));

  const s = Vec3.subtract(Vec3.create(), des, b.v);
  if (Vec3.mag(s) > maxF) {
    Vec3.normalize(s, s);
    Vec3.scale(s, s, maxF);
  }
  return new Vec3(s);
}

const steerDir = (b: Boid, dir: Vec3, maxF: number): Vec3 => {
  const des = Vec3.scale(Vec3.create(), dir, MAX_SPEED);
  const s = Vec3.subtract(Vec3.create(), des, b.v);
  if (Vec3.mag(s) > maxF) {
    Vec3.normalize(s, s);
    Vec3.scale(s, s, maxF);
  }
  return new Vec3(s);
}

export default class Modeler {
  params: ModelParams;

  private rEst = 20;

  constructor(sliderParams: ModelParams) {
    this.params = sliderParams
  }

  step = async (dt: number, boids: Boid[]) => {
    this.update(boids, dt);
  }

  private avoidWalls(boid: Boid): Vec3 {
    const turn = Vec3.create();
    const bounds = {
      xMin: -20, xMax: 20,
      yMin: 5, yMax: 20,
      zMin: -20, zMax: 20,
    };

    const wallForceMultiplier = 5.0;
    const margin = 3.0;

    boid.p[0] = Math.max(bounds.xMin + 0.1, Math.min(bounds.xMax - 0.1, boid.p[0]));
    boid.p[1] = Math.max(bounds.yMin + 0.1, Math.min(bounds.yMax - 0.1, boid.p[1]));
    boid.p[2] = Math.max(bounds.zMin + 0.1, Math.min(bounds.zMax - 0.1, boid.p[2]));

    const points = [
      Vec3.fromValues(boid.p[0], bounds.yMin, boid.p[2]), // bottom
      Vec3.fromValues(boid.p[0], bounds.yMax, boid.p[2]), // top
      Vec3.fromValues(bounds.xMin, boid.p[1], boid.p[2]), // left
      Vec3.fromValues(bounds.xMax, boid.p[1], boid.p[2]), // right
      Vec3.fromValues(boid.p[0], boid.p[1], bounds.zMin), // front
      Vec3.fromValues(boid.p[0], boid.p[1], bounds.zMax)  // back
    ];

    for (const point of points) {
      const d = Vec3.distance(boid.p, point);
      if (d < margin) {
        const away = Vec3.subtract(Vec3.create(), boid.p, point);
        Vec3.normalize(away, away);

        const force = wallForceMultiplier * Math.exp(-d / margin);
        Vec3.scaleAndAdd(turn, turn, away, force);
      }
    }

    const emergencyMargin = 0.5;
    if (Math.abs(boid.p[0] - bounds.xMin) < emergencyMargin) Vec3.add(turn, turn, Vec3.fromValues(1, 0, 0));
    if (Math.abs(boid.p[0] - bounds.xMax) < emergencyMargin) Vec3.add(turn, turn, Vec3.fromValues(-1, 0, 0));
    if (Math.abs(boid.p[1] - bounds.yMin) < emergencyMargin) Vec3.add(turn, turn, Vec3.fromValues(0, 1, 0));
    if (Math.abs(boid.p[1] - bounds.yMax) < emergencyMargin) Vec3.add(turn, turn, Vec3.fromValues(0, -1, 0));
    if (Math.abs(boid.p[2] - bounds.zMin) < emergencyMargin) Vec3.add(turn, turn, Vec3.fromValues(0, 0, 1));
    if (Math.abs(boid.p[2] - bounds.zMax) < emergencyMargin) Vec3.add(turn, turn, Vec3.fromValues(0, 0, -1));

    return turn;
  }

  private update(bs: Boid[], dt: number) {
    const gs = Math.ceil(Math.sqrt(bs.length));
    bs.sort((a, b) => zOrder(a.p, gs) - zOrder(b.p, gs));

    for (let i = 0; i < bs.length; i++) {
      const b = bs[i];
      const alignDir = Vec3.create();
      const cohTarget = Vec3.create();
      const sepTarget = Vec3.create();

      let min = Math.max(0, i - this.rEst);
      let max = Math.min(bs.length - 1, i + this.rEst);

      let nCount = 0, sepNCount = 0, cohWeight = 0;

      for (let j = min; j <= max; j++) {
        if (i === j) continue;

        const d = Vec3.distance(bs[i].p, bs[j].p);
        if (d > this.params.range.v) continue;

        // Alignment
        Vec3.add(alignDir, alignDir, bs[j].v);
        nCount++;

        // Cohesion 
        const w = falloff(d, this.params.range.v);
        Vec3.scaleAndAdd(cohTarget, cohTarget, bs[j].p, w);
        cohWeight += w;

        // Separation
        if (d < this.params.sepRange.v) {
          sepNCount++;
          const pushStrength = falloff(d, this.params.sepRange.v);
          const away = Vec3.subtract(Vec3.create(), bs[i].p, bs[j].p);
          Vec3.normalize(away, away);
          Vec3.scaleAndAdd(sepTarget, sepTarget, away, pushStrength);
        }
      }

      if (nCount > 0) {
        // Alignment
        Vec3.scale(alignDir, alignDir, 1 / nCount);
        Vec3.normalize(alignDir, alignDir);
        Vec3.scaleAndAdd(b.v, b.v, steerDir(b, alignDir, MAX_FORCE), this.params.align.v * dt);

        // Cohesion
        Vec3.scale(cohTarget, cohTarget, 1 / cohWeight);
        Vec3.scaleAndAdd(b.v, b.v, steer(b, cohTarget, MAX_FORCE), this.params.coh.v * dt);
      }

      // Separation
      if (sepNCount > 0) {
        Vec3.normalize(sepTarget, sepTarget);
        Vec3.scaleAndAdd(b.v, b.v, steerDir(b, sepTarget, MAX_FORCE), this.params.sep.v * dt);
      }

      const wallForce = this.avoidWalls(b);
      if (Vec3.mag(wallForce) > 0.0001) {
        Vec3.normalize(wallForce, wallForce);

        Vec3.scaleAndAdd(b.v, b.v, steerDir(b, wallForce, MAX_FORCE * 2), this.params.sep.v * 3 * dt);

        const speed = Vec3.mag(b.v);
        if (speed > MIN_SPEED) {
          const dot = Vec3.dot(Vec3.normalize(Vec3.create(), b.v), wallForce);
          if (dot < 0) {
            Vec3.scale(b.v, b.v, 0.8);
          }
        }
      }

      const speed = Vec3.mag(b.v);
      if (speed > MAX_SPEED) {
        Vec3.scale(b.v, b.v, MAX_SPEED / speed);
      } else if (speed < MIN_SPEED) {
        Vec3.scale(b.v, b.v, MIN_SPEED / speed);
      }

      Vec3.scaleAndAdd(b.p, b.p, b.v, dt);
    }
  }
}