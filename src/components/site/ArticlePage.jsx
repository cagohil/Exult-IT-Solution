import Link from 'next/link';
import Seo from './Seo';
import PageHero from './PageHero';
import Button from './Button';
import { ArrowUpRight } from './Icons';
import blogMeta from '@data/blogMeta.json';
import blogIndex from '@data/OurBlogs/blogsDetails.json';
import { services, serviceHref } from '@data/site';

export default function ArticlePage({ slug, children }) {
  const meta = blogMeta[slug];
  const list = blogIndex.blogs;
  const i = list.findIndex((b) => b.link.replace(/\/$/, '').endsWith('/' + slug));
  const more = [1, 2, 3].map((k) => list[(i + k) % list.length]);

  return (
    <>
      <Seo title={meta.metaTitle} description={meta.metaDescription} />
      <PageHero className="article-hero" crumbs={[{ label: 'Blog', href: '/blog/' }, { label: 'Article' }]} title={meta.heading}>
        {meta.tags && meta.tags.length ? (
          <div className="article-meta" data-reveal>{meta.tags.map((t) => <span key={t}>{t}</span>)}</div>
        ) : null}
      </PageHero>

      <section className="section" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
        <div className="wrap doc">
          <div className="doc__main">
            {meta.image ? (
              <figure className="article-cover" data-reveal><img src={meta.image} alt="" /></figure>
            ) : null}
            <article className="prose" data-reveal>{children}</article>
          </div>
          <aside className="doc__aside">
            <div className="card" data-reveal>
              <p className="card__title">Keep reading</p>
              <ul className="linklist">
                {more.map((b) => (
                  <li key={b.link}><Link href={b.link}><span>{b.title}</span><ArrowUpRight /></Link></li>
                ))}
              </ul>
            </div>
            <div className="card" data-reveal>
              <p className="card__title">Service Category</p>
              <ul className="linklist">
                {services.map((s) => (
                  <li key={s.slug}><Link href={serviceHref(s.slug)}><span>{s.navTitle || s.title}</span><ArrowUpRight /></Link></li>
                ))}
              </ul>
            </div>
            <div className="cta-card" data-reveal>
              <p className="eyebrow">Call To Action</p>
              <h3>Make A Custom Request</h3>
              <Button href="/contact-us/" variant="light" size="sm">Get A Quote</Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
