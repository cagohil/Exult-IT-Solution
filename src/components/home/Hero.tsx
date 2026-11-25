"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { BrowserMock, CloudMock, PhoneMock, PipelineMock } from "./Mockups";

function Layer({ x, y, depth, className, children }: { x: MotionValue<number>; y: MotionValue<number>; depth: number; className: string; children: React.ReactNode }) {
  const tx = useTransform(x, (v) => v * depth);
  const ty = useTransform(y, (v) => v * depth);
  return (
    <motion.div style={{ x: tx, y: ty }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });
  const rotY = useTransform(x, (v) => v * 0.35);
  const rotX = useTransform(y, (v) => v * -0.35);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = stage.current?.getBoundingClientRect();
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

      <div className="container-x relative grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:pb-28 lg:pt-24">
        <div>
          <h1 id="hero-title" className="h-display max-w-[13ch] text-[clamp(2.75rem,1.6rem+4.4vw,5rem)] text-ink">
            Technology that moves your business <span className="text-brand">forward.</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-2 md:text-xl">
            Websites, mobile apps, custom CRM, cloud and SEO, designed, built and supported by one experienced IT team in Macomb, Michigan.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/contact-us/" className="btn btn-primary !min-h-12 !px-6 text-base">
              Get a quote <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link href="#services" className="btn btn-outline !min-h-12 !px-6 text-base">
              Explore services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-2">
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
        <div ref={stage} className="relative mx-auto w-full max-w-[38rem] [perspective:1400px]" aria-hidden="true">
          <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="relative aspect-[1/0.86] [transform-style:preserve-3d]">
            <Layer x={x} y={y} depth={0.4} className="absolute left-[6%] top-[4%] w-[84%]">
              <BrowserMock />
            </Layer>
            <Layer x={x} y={y} depth={1.1} className="absolute -left-[2%] bottom-[2%] hidden w-[52%] sm:-left-[6%] sm:block">
              <PipelineMock />
            </Layer>
            <Layer x={x} y={y} depth={1.5} className="absolute -right-[1%] bottom-[-4%] w-[30%] [animation:float-y_7s_ease-in-out_infinite]">
              <PhoneMock />
            </Layer>
            <Layer x={x} y={y} depth={0.9} className="absolute -right-[3%] -top-[3%] hidden w-[40%] sm:-right-[6%] sm:block">
              <CloudMock />
            </Layer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
