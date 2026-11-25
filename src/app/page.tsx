import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import { FinalCta, LogoStrip, Process, ServicesGrid, TechStack, Testimonials, WhyExult } from "@/components/home/Sections";
import IndustryGrid from "@/components/IndustryGrid";

export const metadata: Metadata = {
  title: { absolute: "Exult IT Solution | Managed IT Services & Software Development in Macomb, MI" },
  description:
    "Exult IT Solution builds websites, mobile apps, CRM software, e-commerce, cloud and SEO for businesses in Macomb, Michigan. Over two decades of IT experience.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesGrid />
      <WhyExult />
      <Process />
      <section aria-labelledby="industries-title" className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="reveal mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 id="industries-title" className="h-section max-w-[18ch] text-ink">
              Solutions shaped for your industry
            </h2>
            <Link href="/industry/" className="link-arrow">
              All industries <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <IndustryGrid limit={8} />
        </div>
      </section>
      <Testimonials />
      <TechStack />
      <FinalCta />
    </>
  );
}
