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
        title="The instruments we navigate by"
        lead={`${total} proven technologies across eight disciplines. We pick the right tool for your project, not the trendiest one.`}
        crumbs={[{ label: "Technologies" }]}
      >
        <nav aria-label="Jump to discipline" className="mt-8 flex flex-wrap gap-2">
          {techGroups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="rounded-[2px] px-3 py-2 text-sm font-semibold text-foam shadow-[inset_0_0_0_1px_rgba(234,243,255,.3)] hover:shadow-[inset_0_0_0_1px_#eaf3ff]">
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>
      <div className="bg-chart py-12 md:py-16">
        <div className="container-chart">
          {techGroups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-t`} className="grid scroll-mt-24 gap-6 border-b border-rule py-10 last:border-b-0 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-12">
              <div>
                <h2 id={`${g.id}-t`} className="font-display text-4xl font-extrabold leading-none text-ink">
                  {g.title}
                </h2>
                <p className="coord mt-2 text-ink-3">{g.items.length} in use</p>
              </div>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {g.items.map((t) => (
                  <li key={t.name} className="flex h-20 items-center gap-3.5 rounded-[2px] border border-rule bg-paper px-4">
                    <Image src={t.image} alt="" width={40} height={40} className="h-9 w-9 shrink-0 object-contain" />
                    <span className="font-semibold leading-tight text-ink">{t.name}</span>
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
