import Link from 'next/link';
import { company, services, serviceHref, usefulLinks } from '@data/site';
import { Social } from './Icons';
import Button from './Button';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__cta">
          <div>
            <p className="eyebrow" style={{ marginBottom: 22 }}>Call To Action</p>
            <h2>Make A Custom Request</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Button href="/contact-us/">Get A Quote</Button>
            <Button href={company.phoneHref} variant="glass">Call us now</Button>
          </div>
        </div>

        <div className="ftr__grid">
          {company.offices.map((o) => (
            <div key={o.region}>
              <p className="ftr__title">{o.region}</p>
              <address className="ftr__addr" style={{ fontStyle: 'normal' }}>
                <span>{o.lines.join(' ')}</span>
                <a href={`mailto:${o.email}`}>{o.email}</a>
                <a href={o.phoneHref}>{o.phone}</a>
                <a href={o.phoneHref} className="ftr__call">Call us now</a>
              </address>
            </div>
          ))}
          <div>
            <p className="ftr__title">Useful Links</p>
            <ul className="ftr__list">
              {usefulLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="ftr__title">Helpful Services</p>
            <ul className="ftr__list">
              {services.map((s) => (
                <li key={s.slug}><Link href={serviceHref(s.slug)}>{s.navTitle || s.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="ftr__wordmark" aria-hidden="true">Exult</p>

      <div className="wrap">
        <div className="ftr__bottom">
          <div className="social">
            {company.social.map((s) => (
              <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><Social name={s.icon} /></a>
            ))}
          </div>
          <small>
            <a href="https://exultitsolution.com" target="_blank" rel="noreferrer" style={{ color: '#fff', fontWeight: 600 }}>Exult IT Solution</a>
            {' '}© Copyrights 2023 - {year}. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
