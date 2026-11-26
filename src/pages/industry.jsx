import Link from 'next/link';
import Seo from '@components/site/Seo';
import DiagonalGallery from '@components/anm/diagonal-gallery';
import { ArrowUpRight } from '@components/site/Icons';
import industries from '@data/industries.json';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const photos = industries.map((ind) => ({
  title: ind.title,
  image: ind.image,
  alt: '',
  text: `${ind.items.slice(0, 3).map((it) => esc(it.label)).join(' · ')}. <a href="/industry/${ind.slug}/">Explore&nbsp;→</a>`,
}));

function Industries() {
  return (
    <>
      <Seo title="Industries - Exult It Solution" />
      <div style={{ height: 'clamp(96px, 10vw, 120px)', background: 'var(--paper)' }} aria-hidden="true" />
      <DiagonalGallery
        className="ind-gallery"
        photos={photos}
        headline="Industries"
        headlineDim="we serve"
        headingTag="h1"
        step={90}
        duration={0.9}
        thumb={20}
      />

      <section className="section section--mist">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div style={{ display: 'grid', gap: 22 }}>
              <p className="eyebrow" data-scramble>All industries · {industries.length}</p>
              <h2 className="h2" data-reveal>INDUSTRIES</h2>
            </div>
            <p className="lede" data-reveal>Execute Imperative & Unique Solution for Different Industries</p>
          </div>
          <div className="ind-list">
            {industries.map((ind, i) => (
              <Link key={ind.slug} href={`/industry/${ind.slug}/`} className="ind-card" data-reveal>
                <div className="ind-card__img"><img src={ind.image} alt="" loading="lazy" /></div>
                <div className="ind-card__body">
                  <small>{String(i + 1).padStart(2, '0')}</small>
                  <h3>{ind.title}</h3>
                  <p>{ind.items.map((it) => it.label).join(' · ')}</p>
                  <span className="text-link" style={{ fontSize: 14.5 }}>Explore <ArrowUpRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Industries.lightHeader = true;
export default Industries;
