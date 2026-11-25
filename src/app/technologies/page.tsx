import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { techGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Technologies",
  description: "The frontend, backend, database, cloud, DevOps, CMS, testing and source-control technologies Exult IT Solution builds with.",
  alternates: { canonical: "/technologies/" },
};

export default function TechnologiesPage() {
  const total = techGroups.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <PageHero
        title="Our technology stack"
        lead={`${total} proven technologies across eight disciplines. We choose the right tool for your project, not the trendiest one.`}
        crumbs={[{ label: "Technologies" }]}
      >
        <nav aria-label="Jump to discipline" className="mt-8 flex flex-wrap gap-2">
          {techGroups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-2 ring-1 ring-line-strong hover:text-brand hover:ring-brand-100">
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>
      <div className="bg-white py-12 md:py-16">
        <div className="container-x">
          {techGroups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-t`} className="grid scroll-mt-24 gap-6 border-b border-line py-10 last:border-b-0 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-12">
              <div>
                <h2 id={`${g.id}-t`} className="text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {g.title}
                </h2>
                <p className="mt-1 text-sm text-ink-3">{g.items.length} technologies</p>
              </div>
              <ul className="reveal-stagger grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {g.items.map((t) => (
                  <li key={t.name} className="flex h-20 items-center gap-3.5 rounded-2xl border border-line bg-white px-4 transition-[border-color,box-shadow] hover:border-brand-100 hover:shadow-[var(--shadow-card)]">
                    <Image src={t.image} alt="" width={166} height={94} className="-mx-3 h-12 w-auto shrink-0" />
                    <span className="font-medium leading-tight text-ink">{t.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}
