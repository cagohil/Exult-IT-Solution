import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { offices } from "@/lib/site";

export default function AboutIntro() {
  return (
    <section aria-labelledby="about-title" className="border-t border-rule bg-paper py-20 md:py-28">
      <div className="container-chart grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <h2 id="about-title" className="display text-[clamp(2.4rem,1.5rem+3.4vw,4.75rem)] text-ink">
            Two decades of steady hands on the helm.
          </h2>
          <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-ink-2">
            Our team of tech experts works closely with every client to deliver practical, feature-driven solutions, from website design and development to custom CRM software, mobile applications, cloud and AI-assisted systems. We study what your business needs today and what it will need next, then build it and stay with you to keep it running.
          </p>
          <Link href="/about-us/" className="link-arrow mt-8 text-brand">
            More about Exult <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>

        {/* Office plates: the two plotted points from the hero, at reading scale */}
        <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {offices.map((o) => (
            <div key={o.id} className="grid grid-cols-[auto_1fr] items-start gap-5 border-t-2 border-ink pt-5">
              <span className="mt-1.5 block h-3.5 w-3.5 rounded-full border-2 border-buoy" aria-hidden="true" />
              <div>
                <p className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-3xl font-extrabold text-ink">{o.name}</span>
                  <span className="text-ink-3">{o.region}</span>
                </p>
                <p className="coord mt-1 text-brand">
                  {o.lat} {o.lon}
                </p>
                <p className="mt-3 text-ink-2">
                  {o.lines.join(", ")}
                  <br />
                  <a href={`mailto:${o.email}`} className="underline decoration-rule hover:decoration-ink">
                    {o.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
