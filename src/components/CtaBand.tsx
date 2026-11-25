import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBand({ title = "Have a project in mind?", text = "Tell us what you need and we'll plan the route with you." }: { title?: string; text?: string }) {
  return (
    <section className="bg-brand text-white">
      <div className="container-chart flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 className="display text-[clamp(2.2rem,1.6rem+2.4vw,3.6rem)]">{title}</h2>
          <p className="mt-3 max-w-[48ch] text-lg text-white/90">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact-us/" className="btn btn-primary">
            Start a project <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost-dark">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
