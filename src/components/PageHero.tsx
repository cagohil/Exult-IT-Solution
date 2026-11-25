import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/** Interior page header: a deep-water band with contour hairlines, breadcrumbs and an optional plate image. */
export default function PageHero({
  title,
  lead,
  crumbs = [],
  image,
  chartRef,
  children,
}: {
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  image?: string;
  chartRef?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night pb-14 pt-32 text-foam md:pb-20 md:pt-40">
      <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 520">
        <defs>
          <linearGradient id="ph-fade" x1="0" x2="1">
            <stop offset="0" stopColor="#031530" />
            <stop offset="1" stopColor="#0b3f88" />
          </linearGradient>
        </defs>
        <rect width="1200" height="520" fill="url(#ph-fade)" />
        {Array.from({ length: 14 }, (_, i) => (
          <ellipse
            key={i}
            cx="1040"
            cy="120"
            rx={60 + i * 62}
            ry={40 + i * 44}
            transform={`rotate(-14 1040 120)`}
            fill="none"
            stroke="#d6e9fb"
            strokeOpacity={i % 4 === 3 ? 0.28 : 0.11}
            strokeWidth={i % 4 === 3 ? 1.4 : 0.8}
          />
        ))}
      </svg>
      <div className={`container-chart grid gap-10 ${image ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end" : ""}`}>
        <div>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-mist">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-1">
                    <ChevronRight aria-hidden className="h-3.5 w-3.5 opacity-60" />
                    {c.href ? (
                      <Link href={c.href} className="hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-foam">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="display max-w-[18ch] text-[clamp(2.8rem,1.6rem+4.6vw,6rem)] text-white">{title}</h1>
          {lead && <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-shallow md:text-xl">{lead}</p>}
          {children}
        </div>
        {image && (
          <figure className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-white/15 bg-lake">
            <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            {chartRef && (
              <figcaption className="coord absolute bottom-0 left-0 bg-night/80 px-2.5 py-1.5 text-shallow">{chartRef}</figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
