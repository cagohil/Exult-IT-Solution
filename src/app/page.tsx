import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesCourse from "@/components/home/ServicesCourse";
import Testimonials from "@/components/home/Testimonials";
import TechBand from "@/components/home/TechBand";
import CloseContact from "@/components/home/CloseContact";
import IndustryMosaic from "@/components/IndustryMosaic";

export const metadata: Metadata = {
  title: { absolute: "Exult IT Solution | Managed IT Services & Software Development in Macomb, MI" },
  description:
    "Exult IT Solution builds websites, mobile apps, CRM software, e-commerce, cloud and SEO for businesses in Macomb, Michigan and Sarnia, Ontario. Over two decades of IT experience.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <AboutIntro />
      <ServicesCourse />
      <section aria-labelledby="industries-title" className="bg-chart py-20 md:py-28">
        <div className="container-chart">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="industries-title" className="display max-w-[16ch] text-[clamp(2.4rem,1.6rem+3vw,4.25rem)] text-ink">
              Charted waters: the industries we know
            </h2>
            <Link href="/industry/" className="link-arrow text-brand">
              All industries <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <IndustryMosaic />
        </div>
      </section>
      <Testimonials />
      <TechBand />
      <CloseContact />
    </>
  );
}
