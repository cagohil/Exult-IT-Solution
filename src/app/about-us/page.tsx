import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Handshake, MapPin, Phone, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { office, site } from "@/lib/site";
import { services, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Exult IT Solution is a software development and IT services company in Macomb, Michigan. IT consulting, application development, maintenance, AWS setup and remote database administration.",
  alternates: { canonical: "/about-us/" },
};

const capabilities = [
  "IT consulting",
  "Application and software development",
  "Software customization",
  "Application maintenance",
  "AWS server setup and configuration",
  "API development",
  "Mobile and web apps",
  "Remote database administration",
];

export default function AboutPage() {
  const quote = testimonials[2];
  return (
    <>
      <PageHero
        title="Your idea. Our expert hands."
        lead="We are a software development and IT services company in Macomb, Michigan, with over two decades of experience and deep expertise across many technologies."
        crumbs={[{ label: "About" }]}
      />

      <section aria-labelledby="why-title" className="bg-white py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 id="why-title" className="h-section text-ink">
              Why choose us?
            </h2>
            <div className="mt-7 max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                Exult IT Solution is a software development and IT services company. We provide IT consulting, application and software development and customization, application maintenance, and AWS server setup and configuration. We also deliver API development, mobile and web apps, and remote database administration.
              </p>
              <p>Our team of professionals brings deep expertise in their fields and delivers quality work that fits your needs.</p>
              <p>Our multi-level approach and world-class standards make us a strong choice for a growth-oriented business.</p>
            </div>
          </div>
          <div className="card p-7">
            <h3 className="text-lg font-semibold text-ink">What we do</h3>
            <ul className="mt-5 grid gap-3">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center gap-3 text-ink-2">
                  <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Goal and philosophy" className="bg-subtle py-16 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { Icon: Target, t: "Our goal", d: "To keep a friendly, healthy professional relationship by understanding the current and future needs of your business in a globalized world." },
            { Icon: Handshake, t: "Our philosophy", d: "We build an active, two-way relationship with every client and help whenever they need us. Efficient work habits mean solutions are delivered as early as possible." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="card p-8 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand-100">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-ink">{t}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Client testimonial" className="bg-white py-16 md:py-24">
        <figure className="container-x max-w-[60rem] text-center">
          <blockquote className="text-[clamp(1.5rem,1.1rem+1.6vw,2.3rem)] font-medium leading-snug tracking-[-0.025em] text-ink">“{quote.quote}”</blockquote>
          <figcaption className="mt-6 text-ink-2">
            <span className="font-semibold text-ink">{quote.name}</span>
            {quote.company && <span>, {quote.company}</span>}
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="office-title" className="bg-subtle py-16 md:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="card p-8">
            <h2 id="office-title" className="text-2xl font-semibold tracking-[-0.03em] text-ink">
              Visit our office
            </h2>
            <ul className="mt-6 space-y-4 text-ink-2">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>
                  {office.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 hover:text-brand">
                  <Phone aria-hidden className="h-5 w-5 text-brand" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-brand">
                  <Mail aria-hidden className="h-5 w-5 text-brand" /> {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)]">
            <iframe
              title="Map showing the Exult IT Solution office in Macomb, Michigan"
              src={`https://www.google.com/maps?q=${office.mapQuery}&output=embed`}
              className="h-full min-h-[20rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="svc-title" className="bg-white py-16 md:py-20">
        <div className="container-x">
          <h2 id="svc-title" className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            Explore our services
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="card group flex items-center justify-between p-5 font-medium text-ink hover:border-brand-100 hover:text-brand">
                  {s.title}
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
