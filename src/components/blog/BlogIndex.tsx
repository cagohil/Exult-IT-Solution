"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Blog } from "@/lib/content";

export default function BlogIndex({ posts }: { posts: Blog[] }) {
  const cats = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  const [lead, ...rest] = shown;

  return (
    <section className="bg-chart py-14 md:py-20">
      <div className="container-chart">
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-10 rounded-[2px] px-3.5 text-sm font-semibold transition-colors ${
                cat === c ? "bg-ink text-white" : "bg-paper text-ink shadow-[inset_0_0_0_1px_var(--color-rule)] hover:shadow-[inset_0_0_0_1px_var(--color-ink)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="coord mt-4 text-ink-3" aria-live="polite">
          {shown.length} {shown.length === 1 ? "article" : "articles"}
        </p>

        {lead && (
          <Link href={`/blogs/${lead.slug}/`} className="group mt-8 grid overflow-hidden rounded-[2px] border border-rule bg-paper md:grid-cols-2">
            <div className="relative aspect-[16/10] bg-lake md:aspect-auto md:min-h-[22rem]">
              <Image src={lead.image} alt="" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="text-sm font-semibold text-brand">{lead.category}</p>
              <h2 className="mt-3 font-display text-[clamp(2rem,1.5rem+1.8vw,3.2rem)] font-extrabold leading-[0.98] text-ink group-hover:text-brand">{lead.title}</h2>
              <p className="mt-4 max-w-[52ch] text-ink-2">{lead.excerpt}</p>
            </div>
          </Link>
        )}

        <ul className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link href={`/blogs/${p.slug}/`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-lake">
                  <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]" />
                </div>
                <p className="mt-4 text-sm font-semibold text-brand">{p.category}</p>
                <h3 className="mt-1.5 font-display text-[1.65rem] font-extrabold leading-[1.02] text-ink group-hover:text-brand">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-[0.98rem] text-ink-2">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
