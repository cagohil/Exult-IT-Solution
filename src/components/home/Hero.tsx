"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { BrowserMock, CloudMock, PhoneMock, PipelineMock } from "./Mockups";

/** The composite is designed at a fixed size and scaled to its container, so it never collides at small widths. */
const STAGE_W = 600;
const STAGE_H = 520;

function Layer({ x, y, depth, className, delay, children }: { x: MotionValue<number>; y: MotionValue<number>; depth: number; className: string; delay: number; children: React.ReactNode }) {
  const tx = useTransform(x, (v) => v * depth);
  const ty = useTransform(y, (v) => v * depth);
  return (
    <motion.div style={{ x: tx, y: ty }} className={className}>
      <div className="pop-in" style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const frame = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });
  const rotY = useTransform(x, (v) => v * 0.35);
  const rotX = useTransform(y, (v) => v * -0.35);

  useLayoutEffect(() => {
    const el = frame.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / STAGE_W));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 24);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 24);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section aria-labelledby="hero-title" className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="mesh" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-12 md:gap-14 md:pb-20 md:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:pb-28 lg:pt-24">
        <div>
          <h1 id="hero-title" className="h-display max-w-[13ch] text-[clamp(2.6rem,1.6rem+4.4vw,5rem)] text-ink">
            <span className="rise inline-block" style={{ animationDelay: "0.05s" }}>
              Technology that moves
            </span>{" "}
            <span className="rise inline-block" style={{ animationDelay: "0.18s" }}>
              your business
            </span>{" "}
            <span className="rise inline-block text-brand" style={{ animationDelay: "0.32s" }}>
              forward.
            </span>
          </h1>
          <p className="rise mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-2 md:text-xl" style={{ animationDelay: "0.45s" }}>
            Websites, mobile apps, custom CRM, cloud and SEO, designed, built and supported by one experienced IT team in Macomb, Michigan.
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.58s" }}>
            <Link href="/contact-us/" className="btn btn-primary group !min-h-12 !px-6 text-base">
              Get a quote <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="#services" className="btn btn-outline !min-h-12 !px-6 text-base">
              Explore services
            </Link>
          </div>
          <div className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-2" style={{ animationDelay: "0.72s" }}>
            <span className="flex items-center gap-2">
              <span className="flex text-warn" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-ink">5-star</strong> client reviews
              </span>
            </span>
            <span className="hidden h-4 w-px bg-line-strong sm:block" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-ink">20+ years</strong> delivering IT solutions
            </span>
          </div>
        </div>

        {/* Product composite: what Exult builds, drawn as working UI */}
        <div ref={frame} className="relative mx-auto w-full max-w-[38rem] px-3 sm:px-6" aria-hidden="true" style={{ height: STAGE_H * scale }}>
          <div
            className="absolute left-1/2 top-0 [perspective:1400px]"
            style={{ width: STAGE_W, height: STAGE_H, transform: `translateX(-50%) scale(${scale})`, transformOrigin: "top center" }}
          >
            <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="relative h-full w-full [transform-style:preserve-3d]">
              <Layer x={x} y={y} depth={0.4} delay={0.35} className="absolute left-[6%] top-[6%] w-[84%]">
                <BrowserMock />
              </Layer>
              <Layer x={x} y={y} depth={1.1} delay={0.7} className="absolute -left-[3%] bottom-[2%] w-[52%]">
                <div className="[animation:float-y_8s_1s_ease-in-out_infinite]">
                  <PipelineMock />
                </div>
              </Layer>
              <Layer x={x} y={y} depth={1.5} delay={0.9} className="absolute right-0 bottom-[-2%] w-[30%]">
                <div className="[animation:float-y_7s_ease-in-out_infinite]">
                  <PhoneMock />
                </div>
              </Layer>
              <Layer x={x} y={y} depth={0.9} delay={1.05} className="absolute -right-[3%] top-0 w-[40%]">
                <div className="[animation:float-y_9s_0.5s_ease-in-out_infinite]">
                  <CloudMock />
                </div>
              </Layer>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
