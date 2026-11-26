import Seo from '@components/site/Seo';
import Button from '@components/site/Button';

export default function NotFound() {
  return (
    <section className="phero not-found">
      <Seo title="Page not found - Exult It Solution" />
      <div className="phero__grid-bg" aria-hidden="true" />
      <div className="phero__glow" aria-hidden="true" />
      <div className="wrap" style={{ display: 'grid', justifyItems: 'center', gap: 24 }}>
        <p className="eyebrow">Error 404</p>
        <h1 className="display">This page took <span className="hl">a wrong turn.</span></h1>
        <p className="lede">The link may be old or mistyped. Everything else is one click away.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button href="/">Back to Home</Button>
          <Button href="/contact-us/" variant="glass">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
