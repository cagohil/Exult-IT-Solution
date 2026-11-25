import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, ArrowUpRight, Award, Headphones, Layers, MapPin, Star, Cloud, Server, Database, ShoppingCart, Users } from "lucide-react";
import { BrowserMock, PhoneMock, PipelineMock, SearchMock } from "./Mockups";
import ContactForm from "@/components/contact/ContactForm";
import { clients, clientName, techGroups, testimonials } from "@/lib/content";
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

/* ---------------- Services bento ---------------- */
function Tile({ href, title, text, className = "", children }: { href: string; title: string; text: string; className?: string; children?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-[box-shadow,translate,border-color] duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:border-brand-100 hover:shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="relative z-10">
        <h3 className="flex items-center justify-between gap-3 text-[1.35rem] font-semibold tracking-[-0.025em] text-ink">
          {title}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-subtle text-ink-2 transition-colors group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </span>
        </h3>
        <p className="mt-2 max-w-[42ch] text-[0.98rem] leading-relaxed text-ink-2">{text}</p>
      </div>
      {children && <div className="relative mt-7 flex flex-1 items-end">{children}</div>}
    </Link>
  );
}

export function ServicesBento() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-subtle py-20 md:py-28">
      <div className="container-x">
        <div className="reveal flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 id="services-title" className="h-section max-w-[18ch] text-ink">
            Everything your business needs to run on technology
          </h2>
          <p className="max-w-[44ch] text-lg text-ink-2">From your first website to the cloud systems behind it, one team plans, builds and supports it all.</p>
        </div>

        <div className="reveal-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Tile href="/services/website-development/" title="Website Development" text="Fast, responsive websites that look sharp on every device and turn visitors into customers." className="lg:col-span-2">
            <BrowserMock className="w-full translate-y-10 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-6" />
          </Tile>
          <Tile href="/services/mobile-app-development/" title="Mobile Apps" text="iOS and Android apps your customers and staff will actually use." className="lg:row-span-2">
            <div className="flex w-full justify-center">
              <PhoneMock className="w-[78%] max-w-[19rem] translate-y-10 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-5" />
            </div>
          </Tile>
          <Tile href="/services/crm-development-company/" title="CRM Software" text="Custom CRM that follows how your sales and service teams really work.">
            <PipelineMock className="w-full" />
          </Tile>
          <Tile href="/services/search-engine-optimization/" title="Search Engine Optimization" text="Rank higher on Google and get found by customers searching right now.">
            <SearchMock className="w-full" />
          </Tile>
          <Tile href="/services/ecommerce-web-development/" title="E-commerce" text="Online stores with smooth checkout, inventory and payments built in." className="lg:col-span-1">
            <div className="grid w-full grid-cols-[auto_1fr] items-center gap-4 rounded-2xl bg-subtle p-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan text-white">
                <ShoppingCart aria-hidden className="h-6 w-6" />
              </span>
              <span>
                <span className="block h-2 w-3/4 rounded-full bg-ink/70" />
                <span className="mt-2 block h-2 w-1/2 rounded-full bg-line-strong" />
                <span className="mt-3 inline-flex rounded-full bg-brand px-3 py-1 text-[0.7rem] font-semibold text-white">Add to cart</span>
              </span>
            </div>
          </Tile>
          <Tile href="/services/cloud-computing-services/" title="Cloud Services" text="Secure cloud setup, migration and management on AWS and Azure." className="lg:col-span-2">
            <div className="flex w-full flex-wrap items-center gap-3">
              {[
                [Server, "Servers"],
                [Database, "Databases"],
                [Cloud, "Backups"],
                [Users, "Remote access"],
              ].map(([Icon, l], i) => {
                const I = Icon as typeof Server;
                return (
                  <span key={l as string} className="flex items-center gap-2.5 rounded-xl border border-line bg-subtle px-4 py-3">
                    <I aria-hidden className="h-5 w-5 text-brand" />
                    <span className="text-sm font-medium text-ink-2">{l as string}</span>
                    {i < 3 && <span aria-hidden className="ml-1 hidden h-px w-6 bg-line-strong md:block" />}
                  </span>
                );
              })}
            </div>
          </Tile>
        </div>
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

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="bg-subtle py-20 md:py-28">
      <div className="container-x">
        <div className="reveal flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 id="reviews-title" className="h-section max-w-[16ch] text-ink">
            What our clients say
          </h2>
          <p className="flex items-center gap-2 text-ink-2">
            <span className="flex text-warn" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </span>
            Every review, five stars
          </p>
        </div>
        <ul className="reveal-stagger mt-12 columns-1 gap-5 md:columns-2 [&>li]:mb-5 [&>li]:break-inside-avoid">
          {testimonials.map((t) => (
            <li key={t.name} className="card p-7 md:p-8">
              <figure>
                <span className="flex text-warn" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} aria-hidden className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <blockquote className="mt-4 text-[1.08rem] leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan text-sm font-semibold text-white" aria-hidden="true">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t.name}</span>
                    {t.company && <span className="block text-sm text-ink-3">{t.company}</span>}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Tech stack ---------------- */
export function TechStack() {
  const items = techGroups.flatMap((g) => g.items);
  return (
    <section aria-labelledby="tech-title" className="bg-white py-20 md:py-24">
      <div className="reveal container-x flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <h2 id="tech-title" className="h-section max-w-[20ch] text-ink">
          Built with {items.length} proven technologies
        </h2>
        <Link href="/technologies/" className="link-arrow">
          View our full stack <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
      <div className="container-x mt-10">
        <ul className="reveal-stagger grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {items.slice(0, 24).map((t) => (
            <li key={t.name} className="group flex aspect-square flex-col items-center justify-center gap-2.5 rounded-2xl border border-line bg-white p-3 text-center transition-[border-color,box-shadow] duration-300 hover:border-brand-100 hover:shadow-[var(--shadow-card)]">
              <Image src={t.image} alt="" width={166} height={94} className="h-14 w-auto" />
              <span className="text-[0.78rem] font-medium leading-tight text-ink-2">{t.name}</span>
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
    <section id="project" aria-labelledby="cta-title" className="scroll-mt-20 bg-white pb-20 md:pb-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-12 text-white md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan/60 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-violet/50 blur-[100px]" aria-hidden="true" />
          <div className="reveal relative grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <h2 id="cta-title" className="h-section max-w-[14ch]">
                Let&rsquo;s build something great together
              </h2>
              <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-white/90">
                Tell us about your project. We&rsquo;ll come back with a plan, a timeline and a clear quote.
              </p>
              <ul className="mt-10 grid gap-4">
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
            <div className="rounded-3xl bg-white p-6 text-ink shadow-[var(--shadow-float)] md:p-8">
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
