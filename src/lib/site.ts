export const site = {
  name: "Exult IT Solution",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://exultitsolution.com",
  phone: "(248) 894-4428",
  phoneHref: "tel:+12488944428",
  email: "info@exultitsolution.com",
  description:
    "Exult IT Solution is an IT services and software development company in Macomb, Michigan. Website development, cloud services, mobile apps, CRM software, e-commerce and SEO.",
  socials: [
    { label: "X (Twitter)", href: "https://twitter.com/exultitsolution", icon: "x" },
    { label: "Facebook", href: "https://www.facebook.com/exultitsolution", icon: "facebook" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/exultit-solutions/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/exultitsolution/", icon: "instagram" },
  ],
} as const;

export const office = {
  name: "Macomb, Michigan",
  lines: ["48788 Brandford Drive", "Macomb, MI 48044", "United States"],
  street: "48788 Brandford Drive",
  city: "Macomb",
  region: "MI",
  postal: "48044",
  mapQuery: "48788+Brandford+Drive,+Macomb,+MI+48044",
} as const;

export type NavItem = { label: string; href: string; children?: { label: string; href: string; blurb: string }[] };

export const nav: NavItem[] = [
  {
    label: "Services",
    href: "/services/website-development/",
    children: [
      { label: "Website Development", href: "/services/website-development/", blurb: "Fast, responsive business websites" },
      { label: "Cloud Services", href: "/services/cloud-computing-services/", blurb: "AWS, Azure and hybrid cloud" },
      { label: "Mobile App Development", href: "/services/mobile-app-development/", blurb: "iOS and Android apps" },
      { label: "CRM Software Development", href: "/services/crm-development-company/", blurb: "Custom CRM built around you" },
      { label: "E-commerce Development", href: "/services/ecommerce-web-development/", blurb: "Stores that convert" },
      { label: "Search Engine Optimization", href: "/services/search-engine-optimization/", blurb: "Get found on Google" },
    ],
  },
  { label: "Industries", href: "/industry/" },
  { label: "Technologies", href: "/technologies/" },
  { label: "Remote Staff", href: "/remote-staff/" },
  { label: "About", href: "/about-us/" },
  { label: "Blog", href: "/blog/" },
];
