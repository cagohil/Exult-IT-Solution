import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Page-level motion, re-run on every route:
 *  - [data-reveal]   fades and rises in, batched so neighbours stagger
 *  - [data-scramble] the starter pack's dual scramble: glyphs flicker through
 *                    the brand colour, then settle on the real words
 */
export function usePageMotion(key) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('[data-reveal]:not(.is-in)');
      if (reduced()) { items.forEach((el) => el.classList.add('is-in')); }
      else {
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => batch.forEach((el, i) => setTimeout(() => el.classList.add('is-in'), i * 90)),
        });
      }

      gsap.utils.toArray('[data-scramble]').forEach((el) => {
        if (reduced() || el.dataset.scrambled) return;
        const text = el.textContent;
        el.setAttribute('aria-label', text);
        const run = () => {
          el.dataset.scrambled = '1';
          gsap.fromTo(el, { '--scr': 1 }, { '--scr': 0, duration: 1.1, ease: 'power2.out' });
          gsap.to(el, {
            duration: 1.1,
            ease: 'none',
            scrambleText: { text, chars: '01<>/{}#*+=_', revealDelay: 0.25, speed: 0.6, newClass: 'scr-final', oldClass: 'scr-glyph' },
          });
        };
        ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: run });
      });
    });
    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => { clearTimeout(t); ctx.revert(); };
  }, [key]);
}
