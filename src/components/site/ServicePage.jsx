import Link from 'next/link';
import Seo from './Seo';
import PageHero from './PageHero';
import Button from './Button';
import { ArrowUpRight } from './Icons';
import { services, getService, serviceHref, pageSubline } from '@data/site';

export default function ServicePage({ slug, children }) {
  const svc = getService(slug);
  const i = services.findIndex((s) => s.slug === slug);
  const prev = services[(i - 1 + services.length) % services.length];
  const next = services[(i + 1) % services.length];

  return (
    <>
      <Seo title={svc.metaTitle} description={svc.metaDescription} />
      <PageHero
        crumbs={[{ label: 'Services', href: serviceHref(services[0].slug) }, { label: svc.title }]}
        eyebrow={<><span className="mono">Service {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>{svc.isNew ? <span className="tag-new">New</span> : null}</>}
        title={svc.title}
        sub={pageSubline}
        image={svc.detailImage || svc.image}
        imageAlt=""
        contain
      />

      <section className="section">
        <div className="wrap doc">
          <article className="doc__main prose" data-reveal>
            {children}
          </article>

          <aside className="doc__aside">
            <div className="card" data-reveal>
              <p className="card__title">Service Category</p>
              <ul className="linklist">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={serviceHref(s.slug)} aria-current={s.slug === slug ? 'page' : undefined}>
                      <span>{s.navTitle || s.title} {s.isNew ? <span className="tag-new" style={{ marginLeft: 6 }}>New</span> : null}</span>
                      <ArrowUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {svc.relevantBlogs && svc.relevantBlogs.length ? (
              <div className="card" data-reveal>
                <p className="card__title">Relevant Blogs</p>
                <ul className="linklist">
                  {svc.relevantBlogs.map((b) => (
                    <li key={b.href}><Link href={b.href}><span>{b.title}</span><ArrowUpRight /></Link></li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="cta-card" data-reveal>
              <p className="eyebrow">Call To Action</p>
              <h3>Make A Custom Request</h3>
              <Button href="/contact-us/" variant="light" size="sm">Get A Quote</Button>
            </div>
          </aside>
        </div>

        <div className="wrap">
          <nav className="pager" aria-label="More services">
            <Link href={serviceHref(prev.slug)}><small>Previous service</small><strong>{prev.title}</strong></Link>
            <Link href={serviceHref(next.slug)}><small>Next service</small><strong>{next.title}</strong></Link>
          </nav>
        </div>
      </section>
    </>
  );
}
