import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Building2, Clock, PiggyBank, TrendingUp } from "lucide-react";
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
  { Icon: Globe2, t: "Access to a wider pool of talent", d: "With a global workforce, there is no limit to the talent and diversity you can bring into your team." },
  { Icon: Building2, t: "Reduced office costs", d: "No need to grow your office to fit new hires, so you can say goodbye to rising office and rental costs." },
  { Icon: Clock, t: "Saves time", d: "No commuting and fewer distractions. Pure focus on getting the work done." },
  { Icon: PiggyBank, t: "Lower employee costs", d: "Depending on your company's norms, you can save on payroll, paperwork, benefits, taxes and insurance, to name a few." },
  { Icon: TrendingUp, t: "Flexibility and scale", d: "Hire as you need, hourly or project-based. It's also easier to scale your operations across a wider region or market." },
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
        title="Dedicated remote talent, ready when you are"
        lead="Struggling to find the right talent or to grow your business? We help you pick the best people from across the globe, vetted by us, at an affordable price, so you can focus on your ROI."
        crumbs={[{ label: "Remote Staff" }]}
      >
        <Link href="/contact-us/" className="btn btn-primary mt-8 !min-h-12 !px-6">
          Hire with us <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </PageHero>

      <section aria-labelledby="domains-title" className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="domains-title" className="h-section text-ink">
              Pick the best in any domain
            </h2>
            <p className="max-w-[40ch] text-lg text-ink-2">We&rsquo;ll get you the right team, on time and within budget. And a lot more.</p>
          </div>
          <ul className="reveal-stagger mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map((d) => (
              <li key={d} className="rounded-2xl border border-line bg-subtle px-5 py-4 font-medium text-ink">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="why-title" className="bg-subtle py-16 md:py-24">
        <div className="container-x">
          <h2 id="why-title" className="h-section max-w-[18ch] text-ink">
            Why a remote team?
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-2">
            Whether you&rsquo;re a small business next door or a funded tech start-up, remote staffing keeps you ahead of the daily problems business throws at you. Our services are tailored to your needs and built for long-term success.
          </p>
          <ul className="reveal-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ Icon, t, d }) => (
              <li key={t} className="card p-7">
                <Icon aria-hidden className="h-6 w-6 text-brand" />
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink">{t}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="steps-title" className="bg-white py-16 md:py-24">
        <div className="container-x">
          <h2 id="steps-title" className="h-section text-ink">
            Start hiring in four steps
          </h2>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
            <span aria-hidden className="absolute left-5 right-5 top-5 hidden h-px bg-line-strong md:block" />
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand font-mono text-sm font-medium text-white ring-4 ring-white">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-2">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Hire with us" text="Join our list of happy clients who have grown their business with a remote team from Exult." />
    </>
  );
}
