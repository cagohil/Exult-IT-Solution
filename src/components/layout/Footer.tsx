import Link from "next/link";
import Logo from "./Logo";
import { nav, offices, site } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";

function CompassRose({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <circle cx="100" cy="100" r="92" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" strokeWidth="0.75" strokeDasharray="1 4.1" />
      {Array.from({ length: 72 }, (_, i) => {
        const a = (i * 5 * Math.PI) / 180;
        const r1 = i % 6 === 0 ? 80 : 86;
        return (
          <line
            key={i}
            x1={100 + Math.sin(a) * r1}
            y1={100 - Math.cos(a) * r1}
            x2={100 + Math.sin(a) * 92}
            y2={100 - Math.cos(a) * 92}
            strokeWidth={i % 18 === 0 ? 1.4 : 0.6}
          />
        );
      })}
      <path d="M100 30 L110 100 L100 170 L90 100 Z" fill="currentColor" fillOpacity="0.12" strokeWidth="1" />
      <path d="M30 100 L100 92 L170 100 L100 108 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="1" />
      <path d="M100 30 L110 100 L100 100 Z" fill="#ff5a24" stroke="none" />
      <text x="100" y="22" textAnchor="middle" fontSize="12" fill="currentColor" stroke="none" fontFamily="var(--font-mono)">
        N
      </text>
    </svg>
  );
}

export default function Footer() {
  const services = nav.find((n) => n.children)?.children ?? [];
  const pages = [
    { label: "Home", href: "/" },
    ...nav.filter((n) => !n.children),
    { label: "Contact", href: "/contact-us/" },
  ];
  return (
    <footer className="relative overflow-hidden bg-night text-mist">
      <CompassRose className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] text-white/10" />
      <div className="container-chart relative pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-[34ch] text-[0.98rem] leading-relaxed">
              IT services, software and support for businesses on both sides of the St. Clair River, for more than two decades.
            </p>
            <ul className="mt-6 flex gap-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] text-foam shadow-[inset_0_0_0_1px_rgba(234,243,255,.22)] transition-colors hover:bg-white/10"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {offices.map((o) => (
            <address key={o.id} className="not-italic">
              <p className="font-display text-2xl font-bold text-white">{o.name}</p>
              <p className="coord mt-1 text-shoal">
                {o.lat} {o.lon} · {o.region}
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed">
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-[0.95rem]">
                <a className="block hover:text-white" href={`mailto:${o.email}`}>
                  {o.email}
                </a>
                <a className="block hover:text-white" href={o.phoneHref}>
                  {o.phone}
                </a>
              </p>
            </address>
          ))}

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
            <div>
              <p className="font-semibold text-white">Services</p>
              <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-white">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Company</p>
              <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                {pages.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="hover:text-white">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Exult IT Solution. All rights reserved.</p>
          <p className="coord text-shoal/80">Macomb 42°40′N · Sarnia 42°58′N · Lake St. Clair</p>
        </div>
      </div>
    </footer>
  );
}
