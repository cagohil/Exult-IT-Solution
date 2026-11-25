"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Phone, Globe, Cloud, Smartphone, Users, ShoppingCart, Search } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

const ICONS = [Globe, Cloud, Smartphone, Users, ShoppingCart, Search];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const menuId = useId();
  const svcId = useId();
  const svcRef = useRef<HTMLLIElement>(null);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide on scroll down, reveal on scroll up. Applied below the lg breakpoint only (see className).
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      setScrolled(y > 8);
      if (y < 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      if (Math.abs(delta) > 6 || y < 80) lastY = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setSvcOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSvcOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!svcOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!svcRef.current?.contains(e.target as Node)) setSvcOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [svcOpen]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href.split("/").slice(0, 2).join("/") + "/"));
  const services = nav.find((n) => n.children)?.children ?? [];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,translate] duration-500 ease-[var(--ease-out-expo)] ${
        scrolled || open ? "border-line bg-white/85 shadow-[0_8px_30px_-20px_rgba(10,16,34,.25)] backdrop-blur-xl" : "border-transparent bg-white/0"
      } ${hidden && !open ? "max-lg:-translate-y-full max-lg:shadow-none" : ""}`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Exult IT Solution home" className="shrink-0">
          <Logo className="h-11 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} ref={svcRef} className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
                  <button
                    type="button"
                    aria-expanded={svcOpen}
                    aria-controls={svcId}
                    onClick={() => setSvcOpen((v) => !v)}
                    className={`flex h-10 items-center gap-1 rounded-full px-3.5 text-[0.94rem] font-medium transition-colors hover:bg-subtle ${
                      pathname.startsWith("/services/") ? "text-brand" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <ChevronDown aria-hidden className={`h-4 w-4 transition-transform duration-200 ${svcOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div id={svcId} hidden={!svcOpen} className="absolute left-0 top-full w-[38rem] pt-3">
                    <div className="card grid grid-cols-2 gap-1 p-2 shadow-[var(--shadow-float)]">
                      {item.children.map((c, i) => {
                        const Icon = ICONS[i];
                        return (
                          <Link key={c.href} href={c.href} className={`group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-subtle ${pathname === c.href ? "bg-brand-50" : ""}`}>
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand ring-1 ring-brand-100 transition-colors group-hover:bg-brand group-hover:text-white">
                              <Icon aria-hidden className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-[0.95rem] font-semibold text-ink">{c.label}</span>
                              <span className="block text-sm text-ink-3">{c.blurb}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex h-10 items-center rounded-full px-3.5 text-[0.94rem] font-medium transition-colors hover:bg-subtle ${
                      isActive(item.href) ? "text-brand" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden items-center gap-2 rounded-full px-3 text-sm font-medium text-ink-2 hover:text-ink xl:flex">
            <Phone aria-hidden className="h-4 w-4 text-brand" /> {site.phone}
          </a>
          <Link href="/contact-us/" className="btn btn-primary hidden !min-h-10 sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-subtle lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>

      <div id={menuId} hidden={!open} className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-white lg:hidden">
        <nav aria-label="Mobile" className="container-x py-6">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-ink-3">Services</p>
          <ul className="mt-3 grid gap-1">
            {services.map((c, i) => {
              const Icon = ICONS[i];
              return (
                <li key={c.href}>
                  <Link href={c.href} className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-subtle">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand">
                      <Icon aria-hidden className="h-[18px] w-[18px]" />
                    </span>
                    <span className="font-medium text-ink">{c.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {[{ label: "Home", href: "/" }, ...nav.filter((n) => !n.children), { label: "Contact", href: "/contact-us/" }].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="flex items-center justify-between py-3.5 text-lg font-semibold text-ink">
                  {item.label}
                  <ArrowRight aria-hidden className="h-4 w-4 text-ink-3" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/contact-us/" className="btn btn-primary">
              Get a quote <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              <Phone aria-hidden className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
