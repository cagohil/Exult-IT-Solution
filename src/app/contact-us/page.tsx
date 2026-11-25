import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { offices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get a quote for website development, mobile apps, CRM, e-commerce, cloud or SEO. Call (248) 894-4428 or send us your project details.",
  alternates: { canonical: "/contact-us/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Plot your project with us"
        lead="Tell us about your project. Pick the services you need, add a few lines, and our team will be in touch."
        crumbs={[{ label: "Contact" }]}
      />
      <section id="project" className="scroll-mt-20 bg-chart py-14 md:py-20">
        <div className="container-chart grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="rounded-[2px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-40px_rgba(3,21,48,.45)] md:p-10">
            <h2 className="font-display text-4xl font-extrabold leading-none text-ink">Send your project details</h2>
            <p className="mb-8 mt-3 text-ink-2">
              Fields marked <span className="text-buoy">*</span> are required.
            </p>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2px] bg-night p-7 text-foam">
              <p className="font-display text-3xl font-extrabold text-white">Prefer to talk?</p>
              <a href={site.phoneHref} className="mt-4 flex items-center gap-3 text-lg font-semibold text-white hover:text-shallow">
                <Phone aria-hidden className="h-5 w-5 text-buoy" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-3 text-lg font-semibold text-white hover:text-shallow">
                <Mail aria-hidden className="h-5 w-5 text-buoy" /> {site.email}
              </a>
            </div>
            {offices.map((o) => (
              <address key={o.id} className="border-t-2 border-ink pt-5 not-italic">
                <p className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-3xl font-extrabold text-ink">{o.name}</span>
                  <span className="text-ink-3">{o.region}</span>
                </p>
                <p className="coord mt-1 text-brand">
                  {o.lat} {o.lon}
                </p>
                <p className="mt-3 text-ink-2">
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                  <a href={`mailto:${o.email}`} className="mt-1 block font-semibold text-ink hover:text-brand">
                    {o.email}
                  </a>
                </p>
              </address>
            ))}
          </aside>
        </div>
      </section>
      <section aria-label="Map of the Macomb office" className="h-[22rem] border-t border-rule bg-shallow md:h-[28rem]">
        <iframe
          title="Map showing the Exult IT Solution office in Macomb, Michigan"
          src="https://www.google.com/maps?q=48788+Brandford+Drive,+Macomb,+MI+48044&output=embed"
          className="h-full w-full border-0 [filter:saturate(.6)_hue-rotate(-8deg)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
