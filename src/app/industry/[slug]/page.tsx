import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { getIndustry, industries, industryTitle } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => industries.map((i) => ({ slug: i.slug }));

export async function generateMetadata({ params }: PageProps<"/industry/[slug]">): Promise<Metadata> {
  const ind = getIndustry((await params).slug);
  if (!ind) return {};
  const title = industryTitle(ind.title);
  return {
    title: `${title} Software & IT Solutions`,
    description: `IT and software solutions for ${title.toLowerCase()}: ${ind.points
      .map((p) => p.title)
      .filter(Boolean)
      .slice(0, 4)
      .join(", ")}.`,
    alternates: { canonical: `/industry/${ind.slug}/` },
    openGraph: { images: [ind.image] },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industry/[slug]">) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const idx = industries.findIndex((i) => i.slug === slug);
  const prev = industries[(idx - 1 + industries.length) % industries.length];
  const next = industries[(idx + 1) % industries.length];
  const title = industryTitle(ind.title);

  return (
    <>
      <PageHero
        title={title}
        lead={`The systems we build and support for ${title.toLowerCase()}, from data and automation to customer-facing portals.`}
        crumbs={[{ label: "Industries", href: "/industry/" }, { label: title }]}
        image={ind.image}
      />
      <section className="bg-paper py-16 md:py-24">
        <div className="container-chart grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <ol className="border-t border-rule">
            {ind.points.map((p, i) => (
              <li key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-b border-rule py-7">
                <span aria-hidden className="mt-2 block h-3 w-3 rounded-full border-2 border-brand" />
                <div>
                  {p.title && <h2 className="font-display text-[1.9rem] font-extrabold leading-none text-ink">{p.title}</h2>}
                  <p className="mt-2.5 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-2">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-lake">
              <Image src={ind.detailImage} alt="" fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
            </figure>
          </div>
        </div>
      </section>
      <nav aria-label="More industries" className="border-t border-rule bg-chart">
        <div className="container-chart grid grid-cols-2 divide-x divide-rule">
          <Link href={`/industry/${prev.slug}/`} className="group flex flex-col gap-1 py-8 pr-4 hover:text-brand">
            <span className="flex items-center gap-1.5 text-sm text-ink-3">
              <ArrowLeft aria-hidden className="h-4 w-4" /> Previous
            </span>
            <span className="font-display text-xl font-extrabold leading-none md:text-3xl">{industryTitle(prev.title)}</span>
          </Link>
          <Link href={`/industry/${next.slug}/`} className="group flex flex-col items-end gap-1 py-8 pl-4 text-right hover:text-brand">
            <span className="flex items-center gap-1.5 text-sm text-ink-3">
              Next <ArrowRight aria-hidden className="h-4 w-4" />
            </span>
            <span className="font-display text-xl font-extrabold leading-none md:text-3xl">{industryTitle(next.title)}</span>
          </Link>
        </div>
      </nav>
      <CtaBand title={`Building for ${title.toLowerCase()}?`} />
    </>
  );
}
