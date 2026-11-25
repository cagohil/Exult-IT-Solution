"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const n = testimonials.length;
  const t = testimonials[i];

  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(() => setI((v) => (v + 1) % n), 9000);
    return () => clearTimeout(id);
  }, [i, paused, reduce, n]);

  return (
    <section
      aria-labelledby="voices-title"
      aria-roledescription="carousel"
      className="relative overflow-hidden bg-shallow py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container-chart grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] lg:gap-16">
        <div className="flex flex-col justify-between gap-8">
          <h2 id="voices-title" className="display text-[clamp(2.2rem,1.6rem+2.4vw,3.6rem)] text-ink">
            In their words
          </h2>
          <div className="flex items-center gap-3">
            <button type="button" className="btn btn-ghost !min-h-11 !px-3" aria-label="Previous testimonial" onClick={() => setI((i - 1 + n) % n)}>
              <ArrowLeft aria-hidden className="h-5 w-5" />
            </button>
            <button type="button" className="btn btn-ghost !min-h-11 !px-3" aria-label="Next testimonial" onClick={() => setI((i + 1) % n)}>
              <ArrowRight aria-hidden className="h-5 w-5" />
            </button>
            <p className="coord ml-2 text-ink-2" aria-live="polite">
              {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="min-h-[19rem] md:min-h-[16rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={i}
              initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote
                className={`font-display font-bold leading-[1.04] text-lake ${
                  t.quote.length > 200
                    ? "text-[clamp(1.6rem,1.1rem+1.5vw,2.5rem)]"
                    : t.quote.length > 110
                      ? "text-[clamp(1.8rem,1.2rem+2vw,3rem)]"
                      : "text-[clamp(2rem,1.3rem+2.6vw,3.6rem)]"
                }`}
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 flex flex-wrap items-baseline gap-x-3 text-ink">
                <span className="text-lg font-bold">{t.name}</span>
                {t.company && <span className="text-ink-2">{t.company}</span>}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
