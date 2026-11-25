import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { offices } from "@/lib/site";
import { services, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Exult IT Solution is a software development and IT services company in Macomb, Michigan and Sarnia, Ontario. IT consulting, application development, maintenance, AWS setup and remote database administration.",
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
        lead="We are a software development and IT services company with over two decades of experience, and expert hands in many technologies, turning ideas into products that succeed."
        crumbs={[{ label: "About" }]}
      />

      <section aria-labelledby="why-title" className="bg-paper py-16 md:py-24">
        <div className="container-chart grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 id="why-title" className="display text-[clamp(2.4rem,1.6rem+3vw,4.25rem)] text-ink">
              Why choose us?
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                Exult IT Solution is a software development and IT services company. We provide IT consulting, application and software development and customization, application maintenance, and AWS server setup and configuration. We also deliver API development, mobile and web apps, and remote database administration.
              </p>
              <p>Our team of professionals brings deep expertise in their fields and delivers quality work that fits your needs.</p>
              <p>Our multi-level approach and world-class standards make us a strong choice for a growth-oriented business.</p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold text-ink">What we do</h3>
            <ul className="mt-4 border-t border-rule">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center gap-3 border-b border-rule py-3 text-ink">
                  <span aria-hidden className="h-2.5 w-2.5 rounded-full border-2 border-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Goal and philosophy" className="bg-deep py-16 text-foam md:py-24">
        <div className="container-chart grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="border-t border-white/20 pt-6">
            <h2 className="font-display text-5xl font-extrabold leading-none text-white">Our goal</h2>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-mist">
              To keep a friendly, healthy professional relationship by understanding the current and future needs of your business in a globalized world.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <h2 className="font-display text-5xl font-extrabold leading-none text-white">Our philosophy</h2>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-mist">
              We build an active, two-way relationship with every client and help whenever they need us. Efficient work habits mean solutions are delivered as early as possible.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="offices-title" className="bg-chart py-16 md:py-24">
        <div className="container-chart">
          <h2 id="offices-title" className="display text-[clamp(2.4rem,1.6rem+3vw,4.25rem)] text-ink">
            Two offices, one river apart
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offices.map((o) => (
              <address key={o.id} className="neatline bg-paper p-7 not-italic text-rule md:p-9">
                <p className="coord text-brand">
                  {o.lat} {o.lon}
                </p>
                <p className="mt-2 font-display text-4xl font-extrabold text-ink">{o.name}</p>
                <p className="text-ink-3">{o.region}</p>
                <p className="mt-5 text-ink-2">
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <p className="mt-4 text-ink">
                  <a href={`mailto:${o.email}`} className="block font-semibold hover:text-brand">
                    {o.email}
                  </a>
                  <a href={o.phoneHref} className="block hover:text-brand">
                    {o.phone}
                  </a>
                </p>
              </address>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Client testimonial" className="bg-shallow py-16 md:py-24">
        <figure className="container-chart">
          <blockquote className="max-w-[30ch] font-display text-[clamp(2rem,1.3rem+2.4vw,3.6rem)] font-bold leading-[1.02] text-lake">“{quote.quote}”</blockquote>
          <figcaption className="mt-6 text-ink">
            <span className="font-bold">{quote.name}</span>
            {quote.company && <span className="text-ink-2">, {quote.company}</span>}
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="svc-title" className="bg-paper py-16 md:py-20">
        <div className="container-chart">
          <h2 id="svc-title" className="font-display text-3xl font-extrabold text-ink">
            Explore our services
          </h2>
          <ul className="mt-6 grid gap-x-8 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-rule">
                <Link href={`/services/${s.slug}/`} className="group flex items-center justify-between py-4 text-lg font-semibold text-ink hover:text-brand">
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
