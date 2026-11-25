"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";

const initials = (n: string) =>
  n
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

/** Scroll-snap carousel: swipe on touch, arrows and dots on desktop, gentle autoplay that pauses on interaction. */
export default function TestimonialSlider() {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  const goTo = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const target = el.children[(i + n) % n] as HTMLElement | undefined;
    if (target) el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, [n]);

  // Track the leading slide from the scroll position.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const first = el.children[0] as HTMLElement | undefined;
        const second = el.children[1] as HTMLElement | undefined;
        if (!first) return;
        const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        setIndex(atEnd && el.scrollLeft > 0 ? Math.max(Math.round(el.scrollLeft / step), 0) : Math.round(el.scrollLeft / step));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => goTo(index + 1), 6000);
    return () => clearTimeout(id);
  }, [index, paused, goTo]);

  return (
    <div
      className="reveal grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:items-center lg:gap-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      aria-roledescription="carousel"
    >
      <div>
        <h2 id="reviews-title" className="h-section max-w-[14ch] text-ink">
          What our clients say
        </h2>
        <p className="mt-4 flex items-center gap-2 text-ink-2">
          <span className="flex text-warn" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </span>
          Every review, five stars
        </p>
        <div className="mt-7 hidden items-center gap-2 lg:flex">
          <button type="button" onClick={() => goTo(index - 1)} aria-label="Previous review" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink ring-1 ring-line-strong transition-colors hover:bg-brand hover:text-white hover:ring-brand">
            <ArrowLeft aria-hidden className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => goTo(index + 1)} aria-label="Next review" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink ring-1 ring-line-strong transition-colors hover:bg-brand hover:text-white hover:ring-brand">
            <ArrowRight aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="min-w-0">
        <ul ref={track} className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              data-i={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
              className="w-[88%] shrink-0 snap-start sm:w-[70%] lg:w-[calc(50%-0.5rem)]"
            >
              <figure className="card relative flex h-full flex-col p-6 md:p-7">
                <Quote aria-hidden className="absolute right-6 top-6 h-8 w-8 text-brand-100" />
                <span className="flex text-warn" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, k) => (
                    <Star key={k} aria-hidden className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan text-sm font-semibold text-white" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t.name}</span>
                    {t.company && <span className="block text-sm text-ink-3">{t.company}</span>}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start" role="tablist" aria-label="Choose review">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Review ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${index === i ? "w-7 bg-brand" : "w-2 bg-line-strong hover:bg-ink-3"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
