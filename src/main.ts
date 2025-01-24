import "./style.css";
import BoidEngine from "./BoidEngine";
import { Vec3 } from "gl-matrix";
import "./utils"

const canvas = document.createElement("canvas");
document.querySelector<HTMLDivElement>("#app")!.appendChild(canvas);

interface Param {
  label: string,
  v: number,
  min?: number,
  max?: number,
}

interface Range {
  min: number,
  max: number
}

export interface Bounds3 {
  x: Range,
  y: Range,
  z: Range
}

export interface SimParams {
  boids: Param,
  range: Param,
  coh: Param,
  align: Param,
  sep: Param,
  sepRange: Param,
}

export interface Boid {
  p: Vec3
  v: Vec3
}

const randomInRange = (min: number, max: number) => {
  return (max - min) * Math.random() + min
}

export const newBoid = (bounds: Bounds3): Boid => {
  const theta = Math.random() * Math.PI * 2
  const phi = Math.random() * Math.PI
  let v = new Vec3(
    Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta)
  )

  return {
    p: new Vec3(
      randomInRange(bounds.x.min, bounds.x.max),
      randomInRange(bounds.y.min, bounds.y.max),
      randomInRange(bounds.z.min, bounds.z.max),
    ),
    v
  } as Boid
}

const initialParams = {
  boids: { label: "# Boids", v: 1500, min: 1, max: 5000 },
  range: { label: "Range", v: 5, min: 1, max: 100 },
  coh: { label: "Cohesion", v: 1 },
  align: { label: "Alignment", v: 2 },
  sep: { label: "Separation", v: 5 },
  sepRange: { label: "Sep. Range", v: 0.5, min: 0.1, max: 10 },
}

const main = async () => {
  console.log("Start!");

  let boidBoundsW = 15
  let boidBounds: Bounds3 = {
    x: { min: -boidBoundsW, max: boidBoundsW },
    y: { min: 20, max: 40 },
    z: { min: -boidBoundsW, max: boidBoundsW },
  }
  let boids: Boid[] = Array.from({ length: initialParams.boids.v }).map(() => newBoid(boidBounds))

  let screenSize = { w: window.innerWidth, h: window.innerHeight }
  let mousePos = { x: 0, y: 0 }

  const controlsParent = document.createElement("div");
  controlsParent.className = "controlsParent"
  let resetBtn = document.createElement("button")
  resetBtn.className = "resetBtn"

  window.addEventListener("resize", (_) => {
    screenSize = { w: window.innerWidth, h: window.innerHeight }
  })

  window.addEventListener("mousemove", (e) => {
    mousePos = { x: e.screenX, y: e.screenY }

    if (mousePos.x + 160 > screenSize.w) {
      controlsParent.classList.add("open")
      resetBtn.classList.add("open")
    }

    if (mousePos.x < screenSize.w - 250) {
      controlsParent.classList.remove("open")
      resetBtn.classList.remove("open")
    }
  })

  try {
    let paramSliders: SimParams = initialParams

    document.querySelector<HTMLDivElement>("#app")!.appendChild(controlsParent);
    for (const entry of Object.entries(paramSliders)) {
      const props = entry[1]

      const slider = document.createElement("input");
      slider.type = "range"
      slider.min = String(props.min ?? "0")
      slider.max = String(props.max ?? "10")
      slider.step = props.max > 10 ? "1" : "0.1"
      slider.value = String(props.v)

      const valueEl = document.createElement('span');
      valueEl.className = "sliderValue"
      valueEl.textContent = props.v;

      const rangeHolder = document.createElement('div')
      rangeHolder.className = "rangeHolder"

      slider.addEventListener("input", ({ target }) => {
        let newV = (target as HTMLInputElement).value;
        props.v = newV
        valueEl.innerText = newV
      })

      const label = document.createElement('label');
      label.textContent = props.label;
      label.setAttribute('for', 'myElement');

      controlsParent.appendChild(label);

      rangeHolder.appendChild(slider)
      controlsParent!.appendChild(rangeHolder);

      rangeHolder.appendChild(valueEl);
    }

    resetBtn.innerText = "Reset"
    resetBtn.addEventListener('click', () => {
      paramSliders = initialParams
      boids = Array.from({ length: initialParams.boids.v }).map(() => newBoid(boidBounds))
    })
    controlsParent.appendChild(resetBtn);

    const engine = new BoidEngine(canvas, boids, paramSliders, boidBounds);
    await engine.init()

    const fpsEl = document.createElement("p");
    fpsEl.className = "fps"
    document.querySelector<HTMLDivElement>("#app")!.appendChild(fpsEl);

    const zero = performance.now();
    let lastTime = zero;
    let lastFPSs = []
    const animate = (timestamp: number) => {
      const dt = (timestamp - lastTime) / 1e3;

      engine.pass(dt);

      lastFPSs.push(1 / dt)
      if (lastFPSs.length > 20) { lastFPSs.shift() }
      fpsEl.innerText = `${Math.round(
        lastFPSs.reduce((prev, curr) => prev + curr, 0) / lastFPSs.length
      )} fps`;

      lastTime = timestamp;
      requestAnimationFrame((t) => animate(t));
    };
    requestAnimationFrame(animate);
  } catch (e) {
    console.error(e);
  }
};

main();
