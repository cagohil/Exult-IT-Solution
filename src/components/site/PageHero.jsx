import Link from 'next/link';
import TextReveal from '@components/anm/text-reveal';

/** Dark inner-page hero: breadcrumb, revealed title, subline, optional media. */
export default function PageHero({ crumbs = [], eyebrow, title, sub, image, imageAlt = '', contain = false, children, className = '' }) {
  return (
    <section className={`phero ${className}`}>
      <div className="phero__grid-bg" aria-hidden="true" />
      <div className="phero__glow" aria-hidden="true" />
      <div className="wrap">
        <div className={`phero__inner${image ? '' : ' phero__inner--solo'}`}>
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label} style={{ display: 'contents' }}>
                  <i aria-hidden="true" />
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
            {eyebrow ? <div className="svc-index">{eyebrow}</div> : null}
            <TextReveal as="h1" className="display" type="words" start="top 95%" stagger={0.07}>{title}</TextReveal>
            {sub ? <p className="lede" data-reveal>{sub}</p> : null}
            {children}
          </div>
          {image ? (
            <figure className={`phero__media${contain ? ' phero__media--contain' : ''}`} data-reveal style={{ margin: 0 }}>
              <img src={image} alt={imageAlt} />
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
