import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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
      <section className="bg-white py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="h-section text-ink">What we deliver</h2>
            <ul className="mt-8 grid gap-4">
              {ind.points.map((p, i) => (
                <li key={i} className="card flex gap-4 p-6">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                  <div>
                    {p.title && <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">{p.title}</h3>}
                    <p className="mt-1.5 leading-relaxed text-ink-2">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-subtle shadow-[var(--shadow-card)]">
              <Image src={ind.detailImage} alt="" fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
            </figure>
          </div>
        </div>
      </section>
      <nav aria-label="More industries" className="border-t border-line bg-subtle">
        <div className="container-x grid grid-cols-2 gap-4 py-8">
          <Link href={`/industry/${prev.slug}/`} className="card group flex flex-col gap-1 p-5 hover:border-brand-100">
            <span className="flex items-center gap-1.5 text-sm text-ink-3">
              <ArrowLeft aria-hidden className="h-4 w-4" /> Previous
            </span>
            <span className="font-semibold text-ink group-hover:text-brand md:text-lg">{industryTitle(prev.title)}</span>
          </Link>
          <Link href={`/industry/${next.slug}/`} className="card group flex flex-col items-end gap-1 p-5 text-right hover:border-brand-100">
            <span className="flex items-center gap-1.5 text-sm text-ink-3">
              Next <ArrowRight aria-hidden className="h-4 w-4" />
            </span>
            <span className="font-semibold text-ink group-hover:text-brand md:text-lg">{industryTitle(next.title)}</span>
          </Link>
        </div>
      </nav>
      <CtaBand title={`Building for ${title.toLowerCase()}?`} />
    </>
  );
}
