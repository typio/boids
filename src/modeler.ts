import { Vec3 } from "gl-matrix";
import { Boid, Bounds3, ModelParams } from "./main";

const MAX_SPEED = 10, MIN_SPEED = 0.5, MAX_FORCE = 1;

const zOrder = (p: Vec3, gs: number) => {
  const x = Math.floor((p.x + 1) * gs / 2);
  const y = Math.floor((p.y + 1) * gs / 2);
  const z = Math.floor((p.z + 1) * gs / 2);
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
  params: ModelParams
  bounds: Bounds3

  private rEst = 20;

  constructor(sliderParams: ModelParams, bounds: Bounds3) {
    this.params = sliderParams
    this.bounds = bounds
  }

  step = async (dt: number, boids: Boid[]) => {
    this.update(boids, dt);
  }

  private avoidWalls(boid: Boid): Vec3 {
    const bounds = this.bounds;
    const pos = boid.p;

    const outsideMin = Vec3.fromValues(
      bounds.x.min - pos[0],
      bounds.y.min - pos[1],
      bounds.z.min - pos[2]
    );
    const outsideMax = Vec3.fromValues(
      pos[0] - bounds.x.max,
      pos[1] - bounds.y.max,
      pos[2] - bounds.z.max
    );

    const outside = Vec3.create();
    for (let i = 0; i < 3; i++) {
      outside[i] = Math.max(outsideMin[i], outsideMax[i]);
    }

    if (Math.max(outside[0], outside[1], outside[2]) > 0) {
      const force = Vec3.create();
      for (let i = 0; i < 3; i++) {
        if (outside[i] > 0) {
          force[i] = -Math.sign(outsideMax[i] > 0 ? 1 : -1) * outside[i];
        }
      }
      const res = new Vec3()
      Vec3.scale(res, Vec3.normalize(Vec3.create(), force), MAX_FORCE);
      return res
    }

    return Vec3.create();
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