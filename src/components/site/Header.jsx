import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { primaryNav, services, serviceHref } from '@data/site';
import { Chevron, ArrowUpRight } from './Icons';
import Button from './Button';
import Drawer from './Drawer';

const DOCK_AT = 80;
const HIDE_AFTER = 520;
const HYSTERESIS = 24;

function isActive(pathname, item) {
  if (!pathname) return false;
  if (item.href === '/') return pathname === '/';
  if (item.children) return pathname.startsWith('/services');
  const base = item.href.replace(/\/$/, '');
  return pathname === base || pathname.startsWith(base + '/') || (base === '/blog' && pathname.startsWith('/blogs'));
}

export default function Header({ light = false }) {
  const router = useRouter();
  const [docked, setDocked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef(null);
  const megaRef = useRef(null);
  const triggerRef = useRef(null);
  // active route is resolved after mount so server and client markup always agree
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(router.asPath.split(/[?#]/)[0].replace(/\/$/, '') || '/');
  }, [router.asPath]);

  // Wide over the hero, folds into a floating pill once you scroll; tucks away on a
  // fast scroll down and returns on the first scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let anchor = lastY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setDocked(y > DOCK_AT);
      if (y < HIDE_AFTER) { setHidden(false); anchor = y; }
      else if (y > lastY && y - anchor > HYSTERESIS) { setHidden(true); anchor = y; }
      else if (y < lastY && anchor - y > HYSTERESIS) { setHidden(false); anchor = y; }
      if ((y > lastY && anchor > y) || (y < lastY && anchor < y)) anchor = y;
      lastY = y;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => { setMegaOpen(false); setDrawerOpen(false); };
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  useEffect(() => {
    if (!megaOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') { setMegaOpen(false); triggerRef.current?.focus(); } };
    const onDown = (e) => {
      if (!megaRef.current?.contains(e.target) && !triggerRef.current?.contains(e.target)) setMegaOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown); };
  }, [megaOpen]);

  // a hover that just opened the menu shouldn't let the click that follows close it again
  const hoverOpened = useRef(0);
  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen((v) => { if (!v) hoverOpened.current = Date.now(); return true; });
  };
  const clickMega = () => setMegaOpen((v) => (v && Date.now() - hoverOpened.current < 600 ? true : !v));
  const scheduleClose = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setMegaOpen(false), 160); };

  const cls = ['hdr', docked && 'is-docked', hidden && !megaOpen && 'is-hidden', light && 'is-light'].filter(Boolean).join(' ');

  return (
    <>
      <header className={cls}>
        <div className="hdr__bar">
          <Link href="/" className="hdr__logo" aria-label="Exult IT Solution — home">
            <img className="hdr__logo-light" src="/assets/img/logo-light.png" alt="Exult IT Solution" width="205" height="70" />
            <img className="hdr__logo-dark" src="/assets/img/Logo.png" alt="" aria-hidden="true" width="205" height="70" />
          </Link>

          <nav className="hdr__nav" aria-label="Main">
            <ul className="hdr__links">
              {primaryNav.map((item) => (
                <li key={item.label}
                  onMouseEnter={item.children ? openMega : undefined}
                  onMouseLeave={item.children ? scheduleClose : undefined}
                >
                  {item.children ? (
                    <>
                      <button
                        ref={triggerRef}
                        type="button"
                        className="hdr__link"
                        aria-expanded={megaOpen}
                        aria-controls="mega-services"
                        aria-current={isActive(path, item) ? 'page' : undefined}
                        onClick={clickMega}
                      >
                        {item.label} <Chevron />
                      </button>
                      <div id="mega-services" ref={megaRef} className={`mega${megaOpen ? ' is-open' : ''}`}>
                        <div className="mega__grid">
                          {services.map((s, i) => (
                            <Link key={s.slug} href={serviceHref(s.slug)} className="mega__item" tabIndex={megaOpen ? 0 : -1}>
                              <span className="mega__num">{String(i + 1).padStart(2, '0')}</span>
                              <span className="mega__title">{s.navTitle || s.title}</span>
                              {s.isNew ? <span className="tag-new">New</span> : <span />}
                            </Link>
                          ))}
                        </div>
                        <div className="mega__foot">
                          <span><strong>Not sure where to start?</strong> Tell us the problem; we’ll map the right service.</span>
                          <Link href="/contact-us/" className="text-link" style={{ color: 'var(--cyan)' }} tabIndex={megaOpen ? 0 : -1}>
                            Get a Quote <ArrowUpRight />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className="hdr__link" aria-current={isActive(path, item) ? 'page' : undefined}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hdr__side">
            <Button href="/contact-us/" size="sm" className="hdr__cta">Get a Quote</Button>
            <button type="button" className="hdr__menu" aria-expanded={drawerOpen} aria-controls="site-drawer" onClick={() => setDrawerOpen(true)}>
              Menu
              <span className="hdr__menu-lines" aria-hidden="true"><span /><span /></span>
            </button>
          </div>
        </div>
      </header>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
