import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import IndustryMosaic from "@/components/IndustryMosaic";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Software, cloud and data solutions for transportation and logistics, health care, automotive, manufacturing, finance, insurance, telecom, utilities, education, automation and e-commerce.",
  alternates: { canonical: "/industry/" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries we know by heart"
        lead="Every industry has its own currents. We build software, cloud and data systems shaped around how yours actually works."
        crumbs={[{ label: "Industries" }]}
      />
      <section className="bg-chart py-16 md:py-24">
        <div className="container-chart">
          <IndustryMosaic headingLevel="h2" />
        </div>
      </section>
      <CtaBand title="Don't see your industry?" text="We've likely charted something close. Tell us about your business." />
    </>
  );
}
