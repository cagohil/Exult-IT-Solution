import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { primaryNav, services, serviceHref, company } from '@data/site';
import { ArrowRight, ArrowLeft, Close } from './Icons';

/**
 * Two-level drawer, after the starter pack's multi-level drawer menu:
 * the panel slides in, rows rise in a stagger, and "Services" drills into
 * a second view that slides over the first.
 */
export default function Drawer({ open, onClose }) {
  const root = useRef(null);
  const panel = useRef(null);
  const scrim = useRef(null);
  const mainView = useRef(null);
  const subView = useRef(null);
  const closeBtn = useRef(null);
  const [level, setLevel] = useState(0);
  const lastFocus = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rows = mainView.current.querySelectorAll('.drawer__item, .drawer__foot');
    if (open) {
      lastFocus.current = document.activeElement;
      el.classList.add('is-open');
      document.documentElement.style.overflow = 'hidden';
      gsap.set(subView.current, { xPercent: 100, autoAlpha: 0 });
      gsap.set(mainView.current, { xPercent: 0, autoAlpha: 1 });
      setLevel(0);
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.to(scrim.current, { opacity: 1, duration: reduce ? 0 : 0.5 }, 0)
        .fromTo(panel.current, { xPercent: 105 }, { xPercent: 0, duration: reduce ? 0 : 0.9 }, 0)
        .fromTo(rows, { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: reduce ? 0 : 0.9, stagger: 0.05 }, 0.12);
      setTimeout(() => closeBtn.current?.focus(), 60);
      return () => tl.kill();
    }
    if (el.classList.contains('is-open')) {
      const tl = gsap.timeline({
        defaults: { ease: 'expo.inOut' },
        onComplete: () => {
          el.classList.remove('is-open');
          document.documentElement.style.overflow = '';
          if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
        },
      });
      tl.to(panel.current, { xPercent: 105, duration: reduce ? 0 : 0.6 }, 0)
        .to(scrim.current, { opacity: 0, duration: reduce ? 0 : 0.45 }, 0.1);
      return () => tl.kill();
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { if (level === 1) goLevel(0); else onClose(); }
      if (e.key === 'Tab') {
        const f = panel.current.querySelectorAll('a[href], button:not([disabled])');
        const visible = [...f].filter((n) => n.offsetParent !== null && getComputedStyle(n.closest('.drawer__view') || n).visibility !== 'hidden');
        if (!visible.length) return;
        const first = visible[0];
        const last = visible[visible.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  function goLevel(next) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const d = reduce ? 0 : 0.75;
    setLevel(next);
    if (next === 1) {
      gsap.to(mainView.current, { xPercent: -30, autoAlpha: 0, duration: d, ease: 'expo.inOut' });
      gsap.fromTo(subView.current, { xPercent: 100, autoAlpha: 1 }, { xPercent: 0, duration: d, ease: 'expo.inOut' });
      gsap.fromTo(subView.current.querySelectorAll('.drawer__item'), { yPercent: 50, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: d + 0.2, stagger: 0.04, ease: 'expo.out', delay: d * 0.35 });
      setTimeout(() => subView.current.querySelector('button, a')?.focus(), d * 1000);
    } else {
      gsap.to(subView.current, { xPercent: 100, duration: d, ease: 'expo.inOut', onComplete: () => gsap.set(subView.current, { autoAlpha: 0 }) });
      gsap.to(mainView.current, { xPercent: 0, autoAlpha: 1, duration: d, ease: 'expo.inOut' });
      setTimeout(() => mainView.current.querySelector('[data-services]')?.focus(), d * 1000);
    }
  }

  return (
    <div ref={root} id="site-drawer" className="drawer" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
      <div ref={scrim} className="drawer__scrim" onClick={onClose} />
      <div ref={panel} className="drawer__panel">
        <div className="drawer__top">
          <img src="/assets/img/logo-light.png" alt="Exult IT Solution" width="205" height="70" />
          <button ref={closeBtn} type="button" className="drawer__close" onClick={onClose} aria-label="Close menu"><Close /></button>
        </div>
        <div className="drawer__views">
          <div ref={mainView} className="drawer__view" aria-hidden={level !== 0}>
            <ul className="drawer__list">
              {primaryNav.map((item, i) => (
                <li className="drawer__item" key={item.label}>
                  {item.children ? (
                    <button type="button" data-services className="drawer__link" onClick={() => goLevel(1)} tabIndex={level === 0 ? 0 : -1}>
                      <span>{item.label}</span>
                      <ArrowRight />
                    </button>
                  ) : (
                    <Link href={item.href} className="drawer__link" onClick={onClose} tabIndex={level === 0 ? 0 : -1}>
                      <span>{item.label}</span>
                      <small>{String(i + 1).padStart(2, '0')}</small>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="drawer__foot">
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
          <div ref={subView} className="drawer__view drawer__sub" aria-hidden={level !== 1} style={{ visibility: 'hidden' }}>
            <button type="button" className="drawer__back" onClick={() => goLevel(0)} tabIndex={level === 1 ? 0 : -1}>
              <ArrowLeft /> All menu
            </button>
            <ul className="drawer__list">
              {services.map((s, i) => (
                <li className="drawer__item" key={s.slug}>
                  <Link href={serviceHref(s.slug)} className="drawer__link" onClick={onClose} tabIndex={level === 1 ? 0 : -1}>
                    <span>{s.navTitle || s.title}</span>
                    {s.isNew ? <span className="tag-new">New</span> : <small>{String(i + 1).padStart(2, '0')}</small>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
