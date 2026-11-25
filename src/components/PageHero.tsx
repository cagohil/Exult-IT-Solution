import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/** Interior page header: soft gradient mesh, breadcrumbs, title, lead and an optional image. */
export default function PageHero({
  title,
  lead,
  crumbs = [],
  image,
  children,
}: {
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden border-b border-line pt-[4.5rem]">
      <div className="mesh opacity-70" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className={`container-x relative grid gap-12 pb-16 pt-12 md:pb-20 md:pt-16 ${image ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center" : ""}`}>
        <div>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-3">
                <li>
                  <Link href="/" className="hover:text-brand">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-1">
                    <ChevronRight aria-hidden className="h-3.5 w-3.5 opacity-60" />
                    {c.href ? (
                      <Link href={c.href} className="hover:text-brand">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-ink-2">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="h-display max-w-[20ch] text-[clamp(2.4rem,1.6rem+3.2vw,4rem)] text-ink">{title}</h1>
          {lead && <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink-2 md:text-xl">{lead}</p>}
          {children}
        </div>
        {image && (
          <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-float)]">
            <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </figure>
        )}
      </div>
    </section>
  );
}
