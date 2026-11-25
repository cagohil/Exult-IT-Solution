"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Blog } from "@/lib/content";

export default function BlogIndex({ posts }: { posts: Blog[] }) {
  const cats = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  const [lead, ...rest] = shown;

  return (
    <section className="bg-subtle py-14 md:py-20">
      <div className="container-x">
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                cat === c ? "bg-ink text-white" : "bg-white text-ink-2 ring-1 ring-line-strong hover:text-ink hover:ring-ink-3"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-3" aria-live="polite">
          {shown.length} {shown.length === 1 ? "article" : "articles"}
        </p>

        {lead && (
          <Link href={`/blogs/${lead.slug}/`} className="card group mt-6 grid overflow-hidden md:grid-cols-2">
            <div className="relative aspect-[16/10] bg-subtle md:aspect-auto md:min-h-[22rem]">
              <Image src={lead.image} alt="" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">{lead.category}</span>
              <h2 className="mt-4 text-[clamp(1.6rem,1.3rem+1.2vw,2.3rem)] font-semibold leading-tight tracking-[-0.03em] text-ink group-hover:text-brand">{lead.title}</h2>
              <p className="mt-3 max-w-[52ch] text-ink-2">{lead.excerpt}</p>
              <span className="link-arrow mt-6">
                Read article <ArrowRight aria-hidden className="h-4 w-4" />
              </span>
            </div>
          </Link>
        )}

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link href={`/blogs/${p.slug}/`} className="card group flex h-full flex-col overflow-hidden transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
                  <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand">{p.category}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-[-0.02em] text-ink group-hover:text-brand">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[0.95rem] text-ink-2">{p.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
