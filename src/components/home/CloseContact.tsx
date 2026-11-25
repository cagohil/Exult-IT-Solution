import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export default function CloseContact() {
  return (
    <section id="project" aria-labelledby="close-title" className="relative scroll-mt-20 overflow-hidden bg-brand py-20 text-white md:py-28">
      {/* Faint chart contours on the closing field */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]" preserveAspectRatio="none" viewBox="0 0 800 600">
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M-20 ${90 + i * 60} C 180 ${40 + i * 62}, 320 ${150 + i * 58}, 520 ${80 + i * 60} S 760 ${140 + i * 55}, 840 ${100 + i * 60}`}
            fill="none"
            stroke="#fff"
            strokeWidth={i % 4 === 3 ? 1.6 : 0.8}
          />
        ))}
      </svg>
      <div className="container-chart relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20">
        <div>
          <h2 id="close-title" className="display text-[clamp(2.8rem,1.6rem+4.4vw,6rem)] text-white">
            Ready to set a course?
          </h2>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-white/90">
            Tell us where you&rsquo;re headed. We&rsquo;ll come back with a plan, a timeline and a clear quote.
          </p>
          <dl className="mt-10 grid gap-5 text-white/90">
            <div>
              <dt className="coord text-white/70">Call</dt>
              <dd>
                <a href={site.phoneHref} className="font-display text-3xl font-bold text-white hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="coord text-white/70">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-lg font-semibold text-white underline decoration-white/40 hover:decoration-white">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-[2px] bg-night/90 p-6 shadow-[0_30px_80px_-30px_rgba(3,21,48,.8)] md:p-9">
          <Suspense>
            <ContactForm tone="dark" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
