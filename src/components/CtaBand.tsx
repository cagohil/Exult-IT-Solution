import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBand({ title = "Have a project in mind?", text = "Tell us what you need and we'll plan it with you." }: { title?: string; text?: string }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-7 py-12 text-white md:px-14 md:py-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-cyan/60 blur-[80px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-violet/45 blur-[90px]" aria-hidden="true" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="h-section max-w-[18ch]">{title}</h2>
              <p className="mt-3 max-w-[48ch] text-lg text-white/90">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us/" className="btn btn-white !min-h-12 !px-6">
                Get a quote <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost-light !min-h-12 !px-6">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
