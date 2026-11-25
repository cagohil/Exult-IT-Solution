"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Phone } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const menuId = useId();
  const svcId = useId();
  const svcRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
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

  const solid = scrolled && !open;
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href.split("/").slice(0, 2).join("/") + "/"));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300 ${
        solid ? "bg-chart/92 text-ink shadow-[0_1px_0_var(--color-rule),0_10px_30px_-18px_rgba(3,21,48,.35)] backdrop-blur-md" : "text-foam"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-buoy focus:px-3 focus:py-2 focus:text-night">
        Skip to content
      </a>
      <div className="container-chart flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Exult IT Solution home" className="shrink-0">
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} ref={svcRef} className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
                  <button
                    type="button"
                    aria-expanded={svcOpen}
                    aria-controls={svcId}
                    onClick={() => setSvcOpen((v) => !v)}
                    className={`flex h-10 items-center gap-1 rounded-[2px] px-3 text-[0.94rem] font-semibold transition-colors ${
                      pathname.startsWith("/services/") ? "text-buoy" : "hover:text-buoy"
                    }`}
                  >
                    {item.label}
                    <ChevronDown aria-hidden className={`h-4 w-4 transition-transform duration-200 ${svcOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    id={svcId}
                    hidden={!svcOpen}
                    className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-2"
                  >
                    <ul className="overflow-hidden rounded-[2px] border border-rule bg-paper p-1.5 text-ink shadow-[0_24px_60px_-24px_rgba(3,21,48,.45)]">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={`group flex items-center justify-between rounded-[2px] px-3.5 py-2.5 text-[0.95rem] font-medium hover:bg-chart ${
                              pathname === c.href ? "text-brand" : ""
                            }`}
                          >
                            {c.label}
                            <ArrowRight aria-hidden className="h-4 w-4 -translate-x-1 text-brand opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex h-10 items-center rounded-[2px] px-3 text-[0.94rem] font-semibold transition-colors ${
                      isActive(item.href) ? "text-buoy" : "hover:text-buoy"
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
          <Link href="/contact-us/" className="btn btn-primary hidden !min-h-10 sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-night text-foam lg:hidden"
      >
        <nav aria-label="Mobile" className="container-chart py-6">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            <li>
              <Link href="/" className="block py-4 font-display text-3xl font-bold">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-3xl font-bold">
                      {item.label}
                      <ChevronDown aria-hidden className="h-6 w-6 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="pb-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-2 pl-1 text-lg text-shallow hover:text-white">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className="block py-4 font-display text-3xl font-bold">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact-us/" className="block py-4 font-display text-3xl font-bold">
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/contact-us/" className="btn btn-primary">
              Get a quote <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost-dark">
              <Phone aria-hidden className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
