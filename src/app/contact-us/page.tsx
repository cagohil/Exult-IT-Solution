import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { office, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get a quote for website development, mobile apps, CRM, e-commerce, cloud or SEO. Call (248) 894-4428 or send us your project details.",
  alternates: { canonical: "/contact-us/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Let's talk about your project" lead="Pick the services you need, add a few lines about your goals, and our team will be in touch." crumbs={[{ label: "Contact" }]} />
      <section id="project" className="scroll-mt-20 bg-subtle py-14 md:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
          <div className="card p-6 md:p-10">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">Send us a message</h2>
            <p className="mb-8 mt-2 text-ink-3">
              Fields marked <span className="text-brand">*</span> are required.
            </p>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="grid content-start gap-5">
            {[
              { Icon: Phone, t: "Call us", v: site.phone, href: site.phoneHref },
              { Icon: Mail, t: "Email us", v: site.email, href: `mailto:${site.email}` },
            ].map(({ Icon, t, v, href }) => (
              <a key={t} href={href} className="card group flex items-center gap-4 p-6 hover:border-brand-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand-100 transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-3">{t}</span>
                  <span className="block text-lg font-semibold text-ink">{v}</span>
                </span>
              </a>
            ))}
            <address className="card overflow-hidden not-italic">
              <div className="flex gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand-100">
                  <MapPin aria-hidden className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-3">Visit us</span>
                  {office.lines.map((l) => (
                    <span key={l} className="block font-medium text-ink">
                      {l}
                    </span>
                  ))}
                </span>
              </div>
              <iframe
                title="Map showing the Exult IT Solution office in Macomb, Michigan"
                src={`https://www.google.com/maps?q=${office.mapQuery}&output=embed`}
                className="h-56 w-full border-0 border-t border-line"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </address>
          </aside>
        </div>
      </section>
    </>
  );
}
