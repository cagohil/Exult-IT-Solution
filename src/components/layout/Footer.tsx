import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { SocialIcon } from "./SocialIcon";
import { nav, office, site } from "@/lib/site";

export default function Footer() {
  const services = nav.find((n) => n.children)?.children ?? [];
  const company = [
    { label: "About us", href: "/about-us/" },
    { label: "Industries", href: "/industry/" },
    { label: "Technologies", href: "/technologies/" },
    { label: "Remote staff", href: "/remote-staff/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/contact-us/" },
  ];
  return (
    <footer className="border-t border-line bg-subtle">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-5 max-w-[34ch] text-[0.97rem] leading-relaxed text-ink-2">
              IT services, custom software and long-term support for growing businesses, from Macomb, Michigan, for more than two decades.
            </p>
            <ul className="mt-6 flex gap-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-2 ring-1 ring-line transition-colors hover:text-brand hover:ring-brand-100"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Services</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-ink-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-brand">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Company</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-ink-2">
              {company.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-brand">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <address className="not-italic">
            <p className="text-sm font-semibold text-ink">Get in touch</p>
            <ul className="mt-4 space-y-3.5 text-[0.95rem] text-ink-2">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" />
                <span>
                  {office.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 hover:text-brand">
                  <Phone aria-hidden className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-brand">
                  <Mail aria-hidden className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" /> {site.email}
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Exult IT Solution. All rights reserved.</p>
          <p>Macomb, Michigan, USA</p>
        </div>
      </div>
    </footer>
  );
}
