import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Seo from '@components/site/Seo';
import PageHero from '@components/site/PageHero';
import Button from '@components/site/Button';
import { Phone, Mail, Pin } from '@components/site/Icons';
import { company, services } from '@data/site';

// Same EmailJS service, template and public key as the previous site; field names unchanged.
const EMAILJS = { service: 'service_3h9ovdp', template: 'template_dj0z8m8', key: 'QGeVygFDTemL6Dwwd' };

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle');

  const send = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form.current, EMAILJS.key);
      setStatus('ok');
      form.current.reset();
    } catch (err) {
      setStatus('err');
    }
  };

  return (
    <>
      <Seo title="Contact Us - Exult It Solution" />
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        title={<>Get In <span className="hl">Touch</span></>}
        sub="Looking For Exclusive Digital Services? Services you are looking for?"
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-card" data-reveal>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Make A Request</p>
            <h2 className="h3" style={{ marginBottom: 30 }}>Tell us what you’re building.</h2>
            <form ref={form} className="form" onSubmit={send}>
              <div className="field">
                <label htmlFor="f-name">Full name <span className="req">*</span></label>
                <input id="f-name" type="text" name="Name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone number <span className="req">*</span></label>
                <input id="f-phone" type="tel" name="Phone" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email address <span className="req">*</span></label>
                <input id="f-email" type="email" name="Email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="f-service">Service</label>
                <select id="f-service" name="Service" defaultValue="Website Development">
                  {services.map((s) => {
                    const v = s.navTitle || s.title;
                    return <option key={s.slug} value={v}>{v}</option>;
                  })}
                </select>
              </div>
              <div className="field full">
                <label htmlFor="f-msg">Message</label>
                <textarea id="f-msg" name="Message" rows="6" placeholder="How can we help you?" />
              </div>
              <div className="full" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
                <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Make A Request'}</Button>
                <p role="status" aria-live="polite" style={{ flex: 1, minWidth: 220 }}>
                  {status === 'ok' ? <span className="form-status form-status--ok" style={{ display: 'inline-block' }}>Submitted successfully! We’ll get back to you shortly.</span> : null}
                  {status === 'err' ? <span className="form-status form-status--err" style={{ display: 'inline-block' }}>That didn’t go through. Please try again, or call us at {company.phone}.</span> : null}
                </p>
              </div>
            </form>
          </div>

          <aside>
            {company.offices.map((o) => (
              <div className="office" key={o.region} data-reveal>
                <p className="eyebrow">Office</p>
                <h3>{o.region}</h3>
                <span><Pin />{o.lines.join(' ')}</span>
                <a href={`mailto:${o.email}`}><Mail />{o.email}</a>
                <a href={o.phoneHref}><Phone />{o.phone}</a>
              </div>
            ))}
            <div className="office" data-reveal>
              <Button href={company.phoneHref} variant="ghost">Call us now</Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
