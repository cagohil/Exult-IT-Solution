"use client";

import { useEffect, useRef } from "react";
import { contours } from "d3-contour";
import { createNoise3D } from "simplex-noise";

type Props = {
  /** Called with a 0..1 depth sample and the pointer's position (0..1) whenever the pointer moves. */
  onSound?: (s: { x: number; y: number; depth: number } | null) => void;
  className?: string;
};

// Depth bands, from the shallows (brand blue) down to lake night.
const BANDS = ["#2a8ff7", "#1d78f2", "#1769ff", "#135ad9", "#0f4bb6", "#0b3f88", "#0a336f", "#082a5c", "#06224a", "#041a3b", "#031530"];
const LEVELS = BANDS.length;

/** Seeded PRNG so the chart reads the same on every visit. */
function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Bathymetry({ onSound, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const soundRef = useRef(onSound);
  useEffect(() => {
    soundRef.current = onSound;
  }, [onSound]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const noise = createNoise3D(mulberry32(4204));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0,
      h = 0,
      cols = 0,
      rows = 0,
      cell = 12,
      dpr = 1;
    let grid = new Float64Array(0);
    const pointer = { x: -1, y: -1, tx: -1, ty: -1, strength: 0, target: 0 };
    let t = 0;
    let raf = 0;
    let visible = true;
    let last = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      cell = w < 640 ? 10 : w < 1200 ? 12 : 14;
      cols = Math.ceil(w / cell) + 2;
      rows = Math.ceil(h / cell) + 2;
      grid = new Float64Array(cols * rows);
    };

    /** Elevation: 0 is deep, 1 is shallow. Deep on the left under the text, shoaling to the right-hand shore. */
    const field = (gx: number, gy: number) => {
      const px = (gx * cell) / w;
      const py = (gy * cell) / h;
      const s = 0.0042 * cell;
      let v = noise(gx * s, gy * s, t) * 0.5 + noise(gx * s * 2.3, gy * s * 2.3, t * 1.4 + 9) * 0.22;
      v = v * 0.5 + 0.5; // 0..1
      const shore = Math.pow(Math.min(1, Math.max(0, (px - 0.28) / 0.78)), 1.35);
      v = v * 0.62 + shore * 0.55 - (1 - py) * 0.04;
      if (pointer.strength > 0.001) {
        const dx = gx * cell - pointer.x;
        const dy = gy * cell - pointer.y;
        const r = Math.min(w, h) * 0.16;
        v += pointer.strength * 0.42 * Math.exp(-(dx * dx + dy * dy) / (r * r));
      }
      return v;
    };

    const sample = (x: number, y: number) => {
      const gx = x / cell;
      const gy = y / cell;
      return Math.min(1, Math.max(0, field(gx, gy)));
    };

    const generator = contours();
    const thresholds = Array.from({ length: LEVELS }, (_, i) => 0.06 + (i / LEVELS) * 1.0);

    const draw = () => {
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) grid[y * cols + x] = field(x, y);
      generator.size([cols, rows]).thresholds(thresholds);
      const polys = generator(Array.from(grid));

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = BANDS[BANDS.length - 1];
      ctx.fillRect(0, 0, w, h);

      // Fill bands deepest to shallowest. Each contour polygon encloses values >= its threshold.
      polys.forEach((p, i) => {
        ctx.beginPath();
        for (const poly of p.coordinates)
          for (const ring of poly) {
            ring.forEach(([x, y], k) => {
              const X = (x - 1) * cell;
              const Y = (y - 1) * cell;
              if (k === 0) ctx.moveTo(X, Y);
              else ctx.lineTo(X, Y);
            });
            ctx.closePath();
          }
        ctx.fillStyle = BANDS[BANDS.length - 1 - Math.min(i + 1, BANDS.length - 1)];
        ctx.fill("evenodd");
        const index = i % 4 === 3;
        ctx.lineWidth = index ? 1.15 : 0.6;
        ctx.strokeStyle = index ? "rgba(214,233,251,0.55)" : "rgba(214,233,251,0.22)";
        ctx.stroke();
      });
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      if (now - last < 33) return; // ~30fps is plenty for drifting water
      const dt = Math.min(100, now - last || 16);
      last = now;
      t += dt * 0.000045;
      pointer.x += (pointer.tx - pointer.x) * 0.18;
      pointer.y += (pointer.ty - pointer.y) * 0.18;
      pointer.strength += (pointer.target - pointer.strength) * 0.08;
      draw();
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return onLeave();
      if (pointer.x < 0) {
        pointer.x = x;
        pointer.y = y;
      }
      pointer.tx = x;
      pointer.ty = y;
      pointer.target = e.pointerType === "touch" ? 0 : 1;
      soundRef.current?.({ x: x / rect.width, y: y / rect.height, depth: 1 - sample(x, y) });
      if (reduced) draw();
    };
    const onLeave = () => {
      pointer.target = 0;
      soundRef.current?.(null);
    };

    resize();
    draw();
    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    const onVis = () => (visible = document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    const host = canvas.parentElement ?? canvas;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    if (!reduced) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
