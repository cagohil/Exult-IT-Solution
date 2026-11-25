import blogsJson from "@/content/blogs.json";
import industriesJson from "@/content/industries.json";
import servicesJson from "@/content/services.json";
import technologiesJson from "@/content/technologies.json";
import clientsJson from "@/content/clients.json";
import testimonialsJson from "@/content/testimonials.json";

export type Block =
  | { type: "h2" | "h3" | "p" | "li"; text: string }
  | { type: "img"; src: string; alt?: string };

export type Blog = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  placeholder: boolean;
  blocks: Block[];
};

export type Industry = {
  slug: string;
  title: string;
  image: string;
  detailImage: string;
  points: { title: string; text: string }[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  blocks: Block[];
};

export type TechGroup = { id: string; title: string; items: { name: string; image: string }[] };
export type Client = { link: string; img: string };
export type Testimonial = { quote: string; name: string; company: string };

export const blogs = blogsJson as Blog[];
export const industries = industriesJson as Industry[];
export const services = servicesJson as Service[];
export const techGroups = (technologiesJson as { groups: TechGroup[] }).groups;
export const clients = clientsJson as Client[];
export const testimonials = testimonialsJson as Testimonial[];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Short, human service names used in pickers and the course list. */
export const serviceShort: Record<string, string> = {
  "website-development": "Websites",
  "crm-development-company": "CRM software",
  "ecommerce-web-development": "E-commerce",
  "cloud-computing-services": "Cloud",
  "mobile-app-development": "Mobile apps",
  "search-engine-optimization": "SEO",
  "data-ai-solutions": "Data & AI",
  "erp-software-development": "ERP",
};

/** Display title tidy-up for industry names that arrive lower-cased. */
export const industryTitle = (t: string) => t.replace(/\bindustry\b/, "Industry");

/** Client names for alt text, derived from the logo file name. */
export const clientName = (c: Client) => {
  try {
    const host = new URL(c.link).hostname.replace(/^www\./, "");
    return host.split(".")[0].replace(/-/g, " ");
  } catch {
    return "Client";
  }
};
