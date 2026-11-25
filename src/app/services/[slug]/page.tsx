import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceArt from "@/components/ServiceArt";
import CtaBand from "@/components/CtaBand";
import { RichText } from "@/components/RichText";
import { getService, services } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}/` },
  };
}

const lead = (t: string) => (t.match(/[^.!?]+[.!?]+/g) ?? [t]).slice(0, 2).join(" ").trim();

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero title={s.title} lead={lead(s.summary)} crumbs={[{ label: "Services" }, { label: s.title }]} art={<ServiceArt slug={s.slug} idPrefix="hero" />}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/contact-us/?services=${s.slug}#project`} className="btn btn-primary !min-h-12 !px-6">
            Get a quote <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="btn btn-outline !min-h-12 !px-6">
            <Phone aria-hidden className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </PageHero>

      <div className="bg-white">
        <div className="container-x grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <article className="prose-x">
            <RichText blocks={s.blocks} />
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Other services">
            <div className="card p-3">
              <p className="px-3 pb-2 pt-2 text-sm font-semibold text-ink">All services</p>
              <ul>
                {services.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/services/${o.slug}/`}
                      aria-current={o.slug === s.slug ? "page" : undefined}
                      className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[0.95rem] font-medium transition-colors ${
                        o.slug === s.slug ? "bg-brand-50 text-brand" : "text-ink-2 hover:bg-subtle hover:text-ink"
                      }`}
                    >
                      {o.title}
                      <ArrowRight aria-hidden className="h-4 w-4 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-navy p-6 text-white">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/50 blur-[60px]" aria-hidden="true" />
              <p className="relative text-xl font-semibold tracking-[-0.02em]">Make a custom request</p>
              <ul className="relative mt-4 space-y-2 text-sm text-[#c4d0e6]">
                {["Tell us your goals", "Get a clear quote and timeline", "Ongoing support after launch"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check aria-hidden className="h-4 w-4 text-cyan" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
              <Link href={`/contact-us/?services=${s.slug}#project`} className="btn btn-primary relative mt-6 w-full">
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
