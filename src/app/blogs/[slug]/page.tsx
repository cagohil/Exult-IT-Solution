import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { RichText } from "@/components/RichText";
import { blogs, getBlog, type Block } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => blogs.map((b) => ({ slug: b.slug }));

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const b = getBlog((await params).slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.description.slice(0, 160),
    alternates: { canonical: `/blogs/${b.slug}/` },
    openGraph: { type: "article", images: [b.image] },
    robots: b.placeholder ? { index: false } : undefined,
  };
}

const minutes = (blocks: Block[]) => Math.max(1, Math.round(blocks.reduce((n, b) => n + ("text" in b ? b.text.split(/\s+/).length : 0), 0) / 220));

export default async function BlogPost({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const b = getBlog(slug);
  if (!b) notFound();
  const related = blogs.filter((x) => x.slug !== b.slug && !x.placeholder && x.category === b.category).slice(0, 3);
  const more = related.length ? related : blogs.filter((x) => x.slug !== b.slug && !x.placeholder).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
          <div className="mesh opacity-60" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="container-x relative pt-12 md:pt-16">
            <div className="mx-auto max-w-[52rem] text-center">
              <Link href="/blog/" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-3 hover:text-brand">
                <ArrowLeft aria-hidden className="h-4 w-4" /> All articles
              </Link>
              <p className="mt-6 flex items-center justify-center gap-3 text-sm text-ink-3">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">{b.category}</span>
                <span className="flex items-center gap-1.5">
                  <Clock aria-hidden className="h-4 w-4" /> {minutes(b.blocks)} min read
                </span>
              </p>
              <h1 className="h-display mt-5 text-[clamp(2.2rem,1.5rem+2.8vw,3.75rem)] text-ink">{b.title}</h1>
            </div>
            <div className="relative mx-auto mt-12 aspect-[21/9] max-w-[64rem] overflow-hidden rounded-3xl border border-line bg-subtle shadow-[var(--shadow-float)]">
              <Image src={b.image} alt="" fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
            </div>
          </div>
        </header>
        <div className="bg-white py-14 md:py-20">
          <div className="container-x">
            <div className="prose-x mx-auto">
              <RichText blocks={b.blocks} />
            </div>
            {b.tags.length > 0 && (
              <ul className="mx-auto mt-12 flex max-w-[70ch] flex-wrap gap-2 border-t border-line pt-6" aria-label="Tags">
                {b.tags.map((t) => (
                  <li key={t} className="rounded-full bg-subtle px-3 py-1.5 text-sm text-ink-2 ring-1 ring-line">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>

      <section aria-labelledby="more-title" className="border-t border-line bg-subtle py-16 md:py-20">
        <div className="container-x">
          <h2 id="more-title" className="h-section text-ink">
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blogs/${p.slug}/`} className="card group block h-full overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
                    <Image src={p.image} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="p-5 font-semibold leading-snug tracking-[-0.02em] text-ink group-hover:text-brand">{p.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
