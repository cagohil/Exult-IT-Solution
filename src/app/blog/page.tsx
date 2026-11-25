import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogIndex from "@/components/blog/BlogIndex";
import { blogs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog: Web, Mobile, CRM, E-commerce & SEO Insights",
  description: "Practical articles on website development, mobile apps, CRM, e-commerce and SEO from the Exult IT Solution team.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Insights & guides" lead="Practical articles on websites, mobile apps, CRM, e-commerce and search, written by our team." crumbs={[{ label: "Blog" }]} />
      <BlogIndex posts={blogs.filter((b) => !b.placeholder)} />
    </>
  );
}
