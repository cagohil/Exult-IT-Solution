import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { industries, industryTitle } from "@/lib/content";

export default function IndustryGrid({ limit, headingLevel = "h3" }: { limit?: number; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  const list = limit ? industries.slice(0, limit) : industries;
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((ind) => (
        <li key={ind.slug}>
          <Link href={`/industry/${ind.slug}/`} className="group block h-full overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
              <Image src={ind.image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105" />
            </div>
            <div className="flex items-start justify-between gap-3 p-5">
              <div>
                <H className="font-semibold leading-snug tracking-[-0.015em] text-ink">{industryTitle(ind.title)}</H>
                <p className="mt-1 line-clamp-2 text-sm text-ink-3">{ind.points.map((p) => p.title).filter(Boolean).slice(0, 3).join(" · ")}</p>
              </div>
              <ArrowUpRight aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-ink-3 transition-colors group-hover:text-brand" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
