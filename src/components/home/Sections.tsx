import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, Award, Headphones, Layers, MapPin } from "lucide-react";
import ServiceArt from "@/components/ServiceArt";
import TestimonialSlider from "./TestimonialSlider";
import ContactForm from "@/components/contact/ContactForm";
import { clients, clientName, services, techGroups } from "@/lib/content";
import { office, site } from "@/lib/site";

/* ---------------- Client logos ---------------- */
export function LogoStrip() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Clients" className="border-y border-line bg-white py-10">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-ink-3">Trusted by manufacturers, clinics, realtors and growing businesses across Michigan</p>
      </div>
      <div className="group relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="flex w-max items-center gap-14 [animation:marquee_55s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
          {row.map((c, i) => (
            <li key={`${c.img}-${i}`} aria-hidden={i >= clients.length ? true : undefined} className="flex h-12 w-32 shrink-0 items-center justify-center">
              <a href={c.link} target="_blank" rel="noreferrer" tabIndex={i >= clients.length ? -1 : undefined}>
                <Image
                  src={c.img}
                  alt={clientName(c)}
                  width={140}
                  height={56}
                  unoptimized={c.img.endsWith(".gif")}
                  className="max-h-11 w-auto max-w-[8rem] object-contain opacity-60 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Services grid ---------------- */
const SERVICE_TEXT: Record<string, string> = {
  "website-development": "Fast, responsive websites that look sharp on every device and turn visitors into customers.",
  "cloud-computing-services": "Secure cloud setup, migration and management on AWS, Azure and Google Cloud.",
  "mobile-app-development": "iOS and Android apps your customers and staff will actually use.",
  "crm-development-company": "Custom CRM that follows how your sales and service teams really work.",
  "ecommerce-web-development": "Online stores with smooth checkout, inventory and payments built in.",
  "search-engine-optimization": "Rank higher on Google and get found by customers searching right now.",
  "data-ai-solutions": "Dashboards, automation and practical AI that turn your data into decisions.",
  "erp-software-development": "One connected system for inventory, purchasing, production, sales and finance.",
};

export function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-subtle py-20 md:py-28">
      <div className="container-x">
        <div className="reveal flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 id="services-title" className="h-section max-w-[18ch] text-ink">
            Everything your business needs to run on technology
          </h2>
          <p className="max-w-[44ch] text-lg text-ink-2">From your first website to the data and systems behind it, one team plans, builds and supports it all.</p>
        </div>

        <ul className="reveal-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition-[box-shadow,translate,border-color] duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-1.5 hover:border-brand-100 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative bg-gradient-to-b from-brand-50 to-white px-6 pt-6 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]">
                  <ServiceArt slug={s.slug} idPrefix="home" />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-3">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-2">{SERVICE_TEXT[s.slug] ?? s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn more <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Why Exult ---------------- */
export function WhyExult() {
  const points = [
    { Icon: Award, t: "Over two decades of experience", d: "A proven track record of IT services and solutions for businesses across many industries." },
    { Icon: Layers, t: "One team, full stack", d: "Design, development, cloud, databases and SEO under one roof, so nothing falls through the cracks." },
    { Icon: Headphones, t: "Support that stays", d: "We maintain and monitor what we build, and keep you up to date with the latest technology." },
    { Icon: MapPin, t: "Local to Macomb, Michigan", d: "A real team you can call and meet, with a full customer commitment throughout the relationship." },
  ];
  return (
    <section aria-labelledby="why-title" className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="why-title" className="h-section max-w-[16ch] text-ink">
            Your long-term technology partner
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-2">
            We study what your business needs today and what it will need next, then build practical, feature-driven solutions and stay with you to keep them running.
          </p>
          <Link href="/about-us/" className="link-arrow mt-7">
            About Exult <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <ul className="reveal-stagger grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {points.map(({ Icon, t, d }) => (
            <li key={t} className="border-t border-line pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand-100">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink">{t}</h3>
              <p className="mt-2 leading-relaxed text-ink-2">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function Process() {
  const steps = [
    { t: "Discover", d: "We learn your business, goals and the systems you already have." },
    { t: "Plan & design", d: "A clear scope, timeline and quote, plus designs you approve before we build." },
    { t: "Build & test", d: "Agile development with regular check-ins and thorough testing on every device." },
    { t: "Launch & support", d: "We go live, hand everything over, and keep it maintained and secure." },
  ];
  return (
    <section aria-labelledby="process-title" className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 left-10 h-[26rem] w-[26rem] rounded-full bg-cyan/20 blur-[100px]" aria-hidden="true" />
      <div className="container-x relative">
        <h2 id="process-title" className="h-section max-w-[18ch]">
          A simple process, from first call to launch day
        </h2>
        <ol className="reveal-stagger relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="grow-line absolute left-5 right-5 top-5 hidden h-px bg-gradient-to-r from-brand via-cyan to-brand/20 md:block" />
          {steps.map((s, i) => (
            <li key={s.t} className="relative">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-navy font-mono text-sm font-medium text-white ring-1 ring-white/25">
                <span className="absolute inset-1 rounded-full bg-brand" />
                <span className="relative">{i + 1}</span>
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">{s.t}</h3>
              <p className="mt-2 max-w-[30ch] leading-relaxed text-[#b9c6e0]">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Testimonials (slider) ---------------- */
export function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="overflow-hidden bg-subtle py-16 md:py-20">
      <div className="container-x">
        <TestimonialSlider />
      </div>
    </section>
  );
}

/* ---------------- Tech stack (compact strip) ---------------- */
export function TechStack() {
  const items = techGroups.flatMap((g) => g.items);
  const row = [...items, ...items];
  return (
    <section aria-labelledby="tech-title" className="bg-white py-14 md:py-16">
      <div className="reveal container-x flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="tech-title" className="text-xl font-semibold tracking-[-0.025em] text-ink md:text-2xl">
          Built with {items.length} proven technologies
        </h2>
        <Link href="/technologies/" className="link-arrow text-sm">
          View our full stack <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
      <div className="group relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max items-center gap-3 [animation:marquee_70s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
          {row.map((t, i) => (
            <li key={`${t.name}-${i}`} aria-hidden={i >= items.length ? true : undefined} className="flex h-14 shrink-0 items-center gap-1 rounded-full border border-line bg-white pl-1 pr-4">
              <Image src={t.image} alt="" width={166} height={94} className="h-11 w-auto" />
              <span className="text-sm font-medium text-ink-2">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA with form ---------------- */
export function FinalCta() {
  return (
    <section id="project" aria-labelledby="cta-title" className="scroll-mt-20 bg-white pb-16 sm:pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-[78rem] sm:px-8">
        <div className="relative overflow-hidden bg-brand px-4 py-12 text-white sm:rounded-[2rem] sm:px-8 md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan/60 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-violet/50 blur-[100px]" aria-hidden="true" />
          <div className="reveal relative grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div className="px-1 sm:px-0">
              <h2 id="cta-title" className="h-section max-w-[14ch]">
                Let&rsquo;s build something great together
              </h2>
              <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-white/90">
                Tell us about your project. We&rsquo;ll come back with a plan, a timeline and a clear quote.
              </p>
              <ul className="mt-8 grid gap-3 sm:mt-10 sm:gap-4">
                <li>
                  <a href={site.phoneHref} className="text-2xl font-semibold tracking-[-0.02em] hover:underline">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-lg text-white/90 underline decoration-white/40 hover:decoration-white">
                    {site.email}
                  </a>
                </li>
                <li className="text-white/80">{office.lines.slice(0, 2).join(", ")}</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 text-ink shadow-[var(--shadow-float)] sm:rounded-3xl sm:p-8">
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
