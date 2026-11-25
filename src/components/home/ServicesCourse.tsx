"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

const firstSentences = (s: string, n = 2) => {
  const parts = s.match(/[^.!?]+[.!?]+/g) ?? [s];
  return parts.slice(0, n).join(" ").trim();
};

export default function ServicesCourse() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section aria-labelledby="services-title" className="relative overflow-hidden bg-deep py-20 text-foam md:py-32">
      <div className="container-chart grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="services-title" className="display text-[clamp(2.6rem,1.6rem+3.6vw,5rem)] text-white">
            Six waypoints. One course for your business.
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-mist">
            Most clients start with one service and grow into the rest. We plan the route so your website, apps, CRM and cloud all work as one system.
          </p>
          <Link href="/contact-us/" className="btn btn-primary mt-8">
            Plan my route
          </Link>
        </div>

        <ol ref={listRef} className="relative">
          {/* The course line, drawn as the visitor reads down */}
          <span className="absolute bottom-6 left-[11px] top-6 w-px bg-white/12" aria-hidden="true" />
          <motion.span
            className="absolute bottom-6 left-[11px] top-6 w-[2px] origin-top bg-buoy motion-reduce:!transform-none"
            style={{ scaleY: progress }}
            aria-hidden="true"
          />
          {services.map((s) => (
            <li key={s.slug} className="relative">
              <Link
                href={`/services/${s.slug}/`}
                className="group grid grid-cols-[24px_minmax(0,1fr)] gap-x-6 border-b border-white/10 py-8 md:grid-cols-[24px_minmax(0,1fr)_11rem] md:gap-x-8 md:py-10"
              >
                <span className="relative mt-3 flex h-6 w-6 items-center justify-center" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full border-2 border-foam/70 bg-deep transition-colors duration-300 group-hover:border-buoy" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-foam transition-colors duration-300 group-hover:bg-buoy" />
                </span>
                <div>
                  <h3 className="flex items-start gap-3 font-display text-[clamp(2rem,1.5rem+1.8vw,3.2rem)] font-extrabold leading-[0.95] text-white">
                    {s.title}
                    <ArrowUpRight
                      aria-hidden
                      className="mt-1 h-7 w-7 shrink-0 text-buoy opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-3 max-w-[58ch] leading-relaxed text-mist">{firstSentences(s.summary)}</p>
                </div>
                <div className="relative col-start-2 mt-5 aspect-[4/3] w-full max-w-[16rem] overflow-hidden rounded-[2px] bg-brand md:col-start-3 md:mt-0 md:max-w-none">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 176px, 256px"
                    className="object-cover opacity-70 mix-blend-luminosity transition-[opacity,transform,filter] duration-500 ease-[var(--ease-out-expo)] group-hover:scale-[1.04] group-hover:opacity-100 group-hover:mix-blend-normal"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
