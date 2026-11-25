import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { RichText } from "@/components/RichText";
import { getService, services } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: { images: [s.heroImage] },
  };
}

const lead = (t: string) => (t.match(/[^.!?]+[.!?]+/g) ?? [t]).slice(0, 2).join(" ").trim();

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero title={s.title} lead={lead(s.summary)} crumbs={[{ label: "Services" }, { label: s.title }]} image={s.heroImage} chartRef={`Service · ${s.slug}`}>
        <Link href={`/contact-us/?services=${s.slug}#project`} className="btn btn-primary mt-8">
          Get a quote for {s.title.toLowerCase()} <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </PageHero>

      <div className="bg-paper">
        <div className="container-chart grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <article className="prose-chart">
            <RichText blocks={s.blocks} />
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Other services">
            <p className="font-display text-2xl font-extrabold text-ink">All services</p>
            <ul className="mt-4 border-t border-rule">
              {services.map((o) => (
                <li key={o.slug} className="border-b border-rule">
                  <Link
                    href={`/services/${o.slug}/`}
                    aria-current={o.slug === s.slug ? "page" : undefined}
                    className={`group flex items-center justify-between gap-3 py-3 font-semibold transition-colors ${
                      o.slug === s.slug ? "text-brand" : "text-ink hover:text-brand"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={`h-2.5 w-2.5 rounded-full border-2 ${o.slug === s.slug ? "border-buoy bg-buoy" : "border-ink-3 group-hover:border-brand"}`}
                      />
                      {o.title}
                    </span>
                    <ArrowRight aria-hidden className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[2px] bg-night p-6 text-foam">
              <p className="font-display text-2xl font-extrabold text-white">Make a custom request</p>
              <p className="mt-2 text-sm text-mist">Tell us what you need built and we&rsquo;ll come back with a plan.</p>
              <Link href={`/contact-us/?services=${s.slug}#project`} className="btn btn-primary mt-5 w-full">
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
