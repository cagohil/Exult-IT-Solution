import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
        <header className="bg-night pb-0 pt-32 text-foam md:pt-40">
          <div className="container-chart">
            <Link href="/blog/" className="inline-flex items-center gap-1.5 text-sm text-mist hover:text-white">
              <ArrowLeft aria-hidden className="h-4 w-4" /> All articles
            </Link>
            <p className="mt-6 text-sm font-semibold text-shoal">
              {b.category} · {minutes(b.blocks)} min read
            </p>
            <h1 className="display mt-3 max-w-[22ch] text-[clamp(2.4rem,1.5rem+3.6vw,5rem)] text-white">{b.title}</h1>
          </div>
          <div className="container-chart mt-12">
            <div className="relative -mb-24 aspect-[21/9] overflow-hidden rounded-[2px] bg-lake md:-mb-40">
              <Image src={b.image} alt="" fill priority sizes="(min-width: 1344px) 1264px, 100vw" className="object-cover" />
            </div>
          </div>
        </header>
        <div className="bg-paper pb-20 pt-32 md:pb-28 md:pt-52">
          <div className="container-chart">
            <div className="prose-chart mx-auto">
              <RichText blocks={b.blocks} />
            </div>
            {b.tags.length > 0 && (
              <ul className="mx-auto mt-12 flex max-w-[68ch] flex-wrap gap-2 border-t border-rule pt-6" aria-label="Tags">
                {b.tags.map((t) => (
                  <li key={t} className="rounded-[2px] bg-chart px-3 py-1.5 text-sm text-ink-2">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>

      <section aria-labelledby="more-title" className="border-t border-rule bg-chart py-16 md:py-20">
        <div className="container-chart">
          <h2 id="more-title" className="display text-[clamp(2rem,1.5rem+2vw,3.2rem)] text-ink">
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blogs/${p.slug}/`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-lake">
                    <Image src={p.image} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold leading-[1.02] text-ink group-hover:text-brand">{p.title}</h3>
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
