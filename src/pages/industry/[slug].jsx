import Link from 'next/link';
import Seo from '@components/site/Seo';
import PageHero from '@components/site/PageHero';
import Button from '@components/site/Button';
import industries from '@data/industries.json';

export default function IndustryPage({ slug }) {
  const ind = industries.find((x) => x.slug === slug);
  const i = industries.indexOf(ind);
  const next = industries[(i + 1) % industries.length];
  const prev = industries[(i - 1 + industries.length) % industries.length];

  return (
    <>
      <Seo title={ind.metaTitle} description={ind.metaDescription} />
      <PageHero
        crumbs={[{ label: 'Industries', href: '/industry/' }, { label: ind.title }]}
        eyebrow={<span className="mono">Industry {String(i + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}</span>}
        title={ind.title}
        sub="Execute Imperative & Unique Solution for Different Industries"
        image={ind.detailImage || ind.image}
        imageAlt=""
      />
      <section className="section">
        <div className="wrap">
          <div className="caps">
            {ind.items.map((it, k) => (
              <div className="cap" key={it.label} data-reveal>
                <span className="cap__num">{String(k + 1).padStart(2, '0')}</span>
                <h3>{it.label}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 48 }}>
            <Button href="/contact-us/">Get A Quote</Button>
            <Button href="/industry/" variant="ghost">All Industries</Button>
          </div>
          <nav className="pager" aria-label="More industries">
            <Link href={`/industry/${prev.slug}/`}><small>Previous industry</small><strong>{prev.title}</strong></Link>
            <Link href={`/industry/${next.slug}/`}><small>Next industry</small><strong>{next.title}</strong></Link>
          </nav>
        </div>
      </section>
    </>
  );
}

export function getStaticPaths() {
  return { paths: industries.map((x) => ({ params: { slug: x.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
