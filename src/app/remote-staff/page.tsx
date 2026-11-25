import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Remote Staff",
  description:
    "Dedicated, pre-vetted remote staff for IT, development, design, support, finance, marketing and more. Project-based staff augmentation or dedicated teams from Exult IT Solution.",
  alternates: { canonical: "/remote-staff/" },
};

const domains = [
  "IT sector",
  "Graphic design",
  "Mobile and web development",
  "CRM software development",
  "IT and tech support",
  "Accounting and finance",
  "Virtual assistants",
  "Content writing",
  "Multimedia and animation",
  "Digital marketing",
  "Data entry",
  "HR and recruitment",
];

const reasons = [
  { t: "Access to a wider pool of talent", d: "With a global workforce, there is no limit to the talent and diversity you can bring into your team." },
  { t: "Reduced office costs", d: "No need to grow your office to fit new hires, so you can say goodbye to rising office and rental costs." },
  { t: "Saves time", d: "No commuting and fewer distractions. Pure focus on getting the work done." },
  { t: "Lower employee costs", d: "Depending on your company's norms, you can save on payroll, paperwork, benefits, taxes and insurance, to name a few." },
  { t: "Flexibility and scale", d: "Hire as you need, hourly or project-based. It's also easier to scale your operations across a wider region or market." },
];

const steps = [
  { t: "Tell us what you need", d: "We offer project-based staff augmentation and dedicated teams." },
  { t: "Choose your service type", d: "Pick the most cost-effective option from our flexible plans." },
  { t: "Select your team size", d: "Project-based or full-time, our experts will find the right match quickly." },
  { t: "Connect and get going", d: "Reach out and get started today." },
];

export default function RemoteStaffPage() {
  return (
    <>
      <PageHero
        title="The right crew, wherever they sail from."
        lead="Struggling to find the right talent or to grow your business? We help you pick the best people from across the globe, vetted by us, at an affordable price, so you can focus on your ROI."
        crumbs={[{ label: "Remote Staff" }]}
      >
        <Link href="/contact-us/" className="btn btn-primary mt-8">
          Hire with us <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </PageHero>

      <section aria-labelledby="domains-title" className="bg-paper py-16 md:py-24">
        <div className="container-chart">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="domains-title" className="display text-[clamp(2.4rem,1.6rem+3vw,4.25rem)] text-ink">
              Pick the best in any domain
            </h2>
            <p className="max-w-[40ch] text-ink-2">We&rsquo;ll get you the right team, on time and within budget. And a lot more.</p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {domains.map((d) => (
              <li key={d} className="rounded-[2px] border border-rule bg-chart px-4 py-3 font-display text-2xl font-bold leading-none text-ink">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="why-title" className="bg-deep py-16 text-foam md:py-24">
        <div className="container-chart grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-20">
          <div>
            <h2 id="why-title" className="display text-[clamp(2.4rem,1.6rem+3vw,4.25rem)] text-white">
              Why a remote team?
            </h2>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-mist">
              Whether you&rsquo;re a small business next door or a funded tech start-up, remote staffing keeps you ahead of the daily problems business throws at you. Our services are tailored to your needs and built for long-term success.
            </p>
          </div>
          <dl className="border-t border-white/15">
            {reasons.map((r) => (
              <div key={r.t} className="grid gap-2 border-b border-white/15 py-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8">
                <dt className="font-display text-2xl font-extrabold leading-tight text-white">{r.t}</dt>
                <dd className="leading-relaxed text-mist">{r.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="steps-title" className="bg-chart py-16 md:py-24">
        <div className="container-chart">
          <h2 id="steps-title" className="display text-[clamp(2.4rem,1.6rem+3vw,4.25rem)] text-ink">
            Start hiring in four steps
          </h2>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
            <span aria-hidden className="absolute left-[11px] top-3 hidden h-px w-[calc(100%-22px)] bg-rule md:block" />
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand bg-chart font-mono text-[0.65rem] font-medium text-brand">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-3xl font-extrabold leading-none text-ink">{s.t}</h3>
                <p className="mt-3 text-ink-2">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Hire with us" text="Join our list of happy clients who have grown their business with a remote team from Exult." />
    </>
  );
}
