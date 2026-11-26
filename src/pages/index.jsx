import { useRef, useState } from 'react';
import Link from 'next/link';
import Seo from '@components/site/Seo';
import Button from '@components/site/Button';
import { ArrowUpRight, Star } from '@components/site/Icons';
import CurtainSlider from '@components/anm/curtain-slider';
import TextReveal from '@components/anm/text-reveal';
import RotatingWords from '@components/anm/rotating-words';
import StackingCards from '@components/anm/stacking-cards';
import EchoHeadline from '@components/anm/echo-headline';
import { heroSlides, services, serviceHref } from '@data/site';
import clients from '@data/Home/clients.json';
import testimonials from '@data/Home/testimonials.json';

const WHEEL = [...services.map((s) => s.short), 'your success.'];

const serviceCards = services.map((s, i) => ({
  src: s.image,
  alt: '',
  label: s.title,
  render: () => (
    <span className="svc-cap">
      <span className="svc-cap__top">
        <span className="svc-cap__num">{String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
        {s.isNew ? <span className="tag-new">New service</span> : null}
      </span>
      <span className="svc-cap__title">{s.title}</span>
      <span className="svc-cap__text">{s.details}</span>
      <Link href={serviceHref(s.slug)} className="svc-cap__link">
        Explore {s.short} <ArrowUpRight />
      </Link>
    </span>
  ),
}));

const allClients = [...clients.row1, ...clients.row2, ...clients.row3];

function clientName(url) {
  try { return new URL(url).hostname.replace(/^www\./, '').split('.')[0]; } catch (e) { return 'Client'; }
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef(null);
  const current = heroSlides[slide];

  return (
    <>
      <Seo
        title="Top Managed IT Services Macomb – Best IT Company in Macomb - Exult it Solution"
        description="Exult it Solution is leading company provides IT services and solutions, we expert in web design and development, software development, cloud computing and SEO services."
      />

      {/* ---------- Hero: curtain slider ---------- */}
      <section className="home-hero" aria-label="Introduction">
        <CurtainSlider
          className="home-hero__slider"
          images={heroSlides.map((s) => ({ src: s.image, alt: s.alt, title: s.title, label: s.name }))}
          auto={6}
          duration={1.15}
          onChange={({ index }) => setSlide(index)}
        />
        <div className="home-hero__aside">
          <p key={slide} className="home-hero__desc">{current.desc}</p>
          <div className="home-hero__ctas">
            <Button href="/about-us/" variant="glass" size="sm">About Us</Button>
            <Button href="/contact-us/" size="sm">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* ---------- Rotating words ---------- */}
      <section className="wheel-sec" aria-label="What we build">
        <div className="wheel-sec__track" ref={trackRef} data-anm-rw-track="">
          <div className="wheel-sec__stage">
            <p className="wheel-sec__lead">
              <span className="eyebrow">Exult IT Solution</span>
              <span className="wheel-sec__we">We engineer</span>
            </p>
            <RotatingWords className="wheel-sec__wheel" words={WHEEL} scrub spin={2.4} step={18} nav={false} blur={6} trackRef={trackRef} align="left" />
          </div>
        </div>
        {/* Reduced-motion version: the wheel would park on its last word, so list every service instead */}
        <div className="wheel-static wrap">
          <p className="wheel-static__lead"><span className="eyebrow">Exult IT Solution</span>We engineer</p>
          <ul className="wheel-static__list">
            {services.map((s) => (
              <li key={s.slug}><Link href={serviceHref(s.slug)}>{s.short}</Link></li>
            ))}
          </ul>
          <p className="wheel-static__end">…and <span className="hl">your success.</span></p>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="section about-home">
        <div className="wrap about-home__grid">
          <div className="about-home__head">
            <p className="eyebrow" data-scramble>About</p>
            <TextReveal as="h2" className="about-home__title" type="words" stagger={0.06}>
              About <span className="hl">Exult IT Solution</span>
            </TextReveal>
            <p className="about-home__claim" data-reveal>
              <strong>Exult IT Solution had professional experience in providing IT solutions for over two decades.</strong>
            </p>
          </div>
          <figure className="about-home__img" data-reveal>
            <img src="/assets/img/home/about/about2.png" alt="Illustration of the Exult team building digital products" loading="lazy" />
          </figure>
          <div className="about-home__body" data-reveal>
            <p className="lede">
              Our team of tech experts has constantly engaged with clients to offer a variety of innovative solutions across various verticals. We provide our proficient services for IT Services in website development and designing, along with other services which include extensive technology development, artificial intelligence, augmentation intelligence, custom CRM software development, and mobile applications. We carefully analyze the needs of our clients and offer solutions that are tech-oriented and feature-driven. Along with the functionality-focused approach and innovative implementation, we try to deliver and maintain a healthy and thriving collaboration with you. Our proven track record over the years make us a reliable option for IT Services and IT Solutions. We promise you a very delightful experience and a full customer commitment throughout our relationship.
            </p>
            <div style={{ marginTop: 34 }}>
              <Button href="/about-us/" variant="ghost">Read More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="services-home" aria-labelledby="services-title">
        <div className="wrap services-home__head">
          <p className="eyebrow" data-scramble>Our Services · 08</p>
          <h2 id="services-title" className="h2" data-reveal>Our <span className="hl">Services</span></h2>
          <p className="lede" data-reveal>Elevate Your Business with Exult IT Solutions: Where Cutting-Edge Technology Meets Expertise</p>
        </div>
        <StackingCards className="svc-stack" cards={serviceCards} ariaLabel="Our services" stepHeight={70} tilt={1.5} drop={14} zoom={1.08} radius={28} shade={0.6} labelDelay={40} />
      </section>

      {/* ---------- Clients ---------- */}
      <section className="section clients-home">
        <div className="wrap section-head section-head--center">
          <p className="eyebrow" data-scramble>Clients</p>
          <h2 className="h2" data-reveal>Our <span className="hl">Clients</span></h2>
          <p className="lede" data-reveal>Power Your Business with Exceptional IT Services: Partner with Exult IT Solutions for Success</p>
        </div>
        {[allClients.slice(0, 9), allClients.slice(9)].map((row, r) => (
          <div key={r} className={`marquee${r ? ' marquee--rev' : ''}`} style={{ '--dur': r ? '56s' : '48s', marginTop: r ? 18 : 0 }}>
            <div className="marquee__track">
              {[...row, ...row].map((c, i) => (
                <a key={i} href={c.link} target="_blank" rel="noreferrer" className="logo-chip" aria-hidden={i >= row.length} tabIndex={i >= row.length ? -1 : 0}>
                  <img src={c.img} alt={i >= row.length ? '' : `${clientName(c.link)} logo`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        ))}
        <p className="wrap muted" style={{ textAlign: 'right', marginTop: 20, fontSize: 15 }}>Many more…</p>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section section--mist testi">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div style={{ display: 'grid', gap: 22 }}>
              <p className="eyebrow" data-scramble>Testimonials</p>
              <h2 className="h2" data-reveal>Testi<span className="hl">monials</span></h2>
            </div>
            <p className="lede" data-reveal>Empowering Businesses in the Tech-Driven World with Innovative Solutions and Unmatched Customer Commitment!</p>
          </div>
          <div className="testi__grid">
            {testimonials.map((t, i) => (
              <figure key={t.author.name} className={`testi__card testi__card--${i}`} data-reveal>
                <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, k) => <Star key={k} />)}
                </div>
                <blockquote>{t.comment.replace(/^“|”$/g, '')}</blockquote>
                <figcaption>
                  <span className="testi__avatar" aria-hidden="true">{t.author.name.split(' ').map((w) => w[0]).join('')}</span>
                  <span>
                    <strong>{t.author.name}</strong>
                    {t.author.position && t.author.position !== '.' ? <small>{t.author.position}</small> : null}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Echo sign-off ---------- */}
      <section className="echo-sec" aria-label="Exult">
        <EchoHeadline className="echo-sec__head" copies={9} rotateX={22} rotateY={-18} fade="opacity" scrub={0.6} hold={0.25}>
          Exult
        </EchoHeadline>
        <p className="echo-sec__line">Your idea, our expert hands makes the product success.</p>
      </section>
    </>
  );
}
