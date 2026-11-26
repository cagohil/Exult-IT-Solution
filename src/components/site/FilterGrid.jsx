import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

if (typeof window !== 'undefined') gsap.registerPlugin(Flip);

const useIso = typeof window !== 'undefined' ? useLayoutEffect : () => {};

/**
 * Filter chips + grid. Items re-flow with GSAP Flip: survivors glide to their
 * new slots, newcomers scale in, leavers fade out.
 * filters: [{ title, filter }]  (filter "all" or a class-like key)
 * items:   [{ key, filter: "a b", node }]
 */
export default function FilterGrid({ filters, items, gridClass, label }) {
  const [active, setActive] = useState(filters[0].filter);
  const grid = useRef(null);
  const flipState = useRef(null);

  const matches = (it, f) => f === 'all' || it.filter.split(/\s+/).includes(f.replace(/^\./, ''));
  const count = (f) => items.filter((it) => matches(it, f)).length;

  const choose = (f) => {
    if (f === active) return;
    if (grid.current) flipState.current = Flip.getState(grid.current.children);
    setActive(f);
  };

  useIso(() => {
    if (!flipState.current || !grid.current) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Flip.from(flipState.current, {
      duration: reduce ? 0 : 0.7,
      ease: 'expo.out',
      stagger: 0.02,
      absolute: true,
      onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: reduce ? 0 : 0.6, ease: 'expo.out', delay: 0.1 }),
      onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.92, duration: reduce ? 0 : 0.3 }),
    });
    flipState.current = null;
  }, [active]);

  return (
    <>
      <div className="filters" role="group" aria-label={label}>
        {filters.map((f) => (
          <button key={f.filter} type="button" aria-pressed={active === f.filter} onClick={() => choose(f.filter)}>
            {f.title}<span className="count">{count(f.filter)}</span>
          </button>
        ))}
      </div>
      <div ref={grid} className={gridClass} aria-live="polite">
        {items.filter((it) => matches(it, active)).map((it) => (
          <div key={it.key} data-flip-id={it.key} style={{ display: 'grid' }}>{it.node}</div>
        ))}
      </div>
    </>
  );
}
