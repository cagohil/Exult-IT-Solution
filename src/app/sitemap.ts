import type { MetadataRoute } from "next";
import { blogs, industries, services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  return [
    { url: u("/"), priority: 1 },
    ...["/about-us/", "/contact-us/", "/industry/", "/technologies/", "/remote-staff/", "/blog/"].map((p) => ({ url: u(p), priority: 0.8 })),
    ...services.map((s) => ({ url: u(`/services/${s.slug}/`), priority: 0.9 })),
    ...industries.map((i) => ({ url: u(`/industry/${i.slug}/`), priority: 0.6 })),
    ...blogs.filter((b) => !b.placeholder).map((b) => ({ url: u(`/blogs/${b.slug}/`), priority: 0.5 })),
  ];
}
