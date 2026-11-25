export const site = {
  name: "Exult IT Solution",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://exultitsolution.com",
  phone: "(248) 894-4428",
  phoneHref: "tel:+12488944428",
  email: "info@exultitsolution.com",
  salesEmail: "sales@exultitsolution.com",
  description:
    "Exult IT Solution is an IT services company in Macomb, Michigan and Sarnia, Ontario. We provide website development, cloud services, mobile apps, CRM software, e-commerce and SEO.",
  socials: [
    { label: "X (Twitter)", href: "https://twitter.com/exultitsolution", icon: "x" },
    { label: "Facebook", href: "https://www.facebook.com/exultitsolution", icon: "facebook" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/exultit-solutions/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/exultitsolution/", icon: "instagram" },
  ],
} as const;

export const offices = [
  {
    id: "macomb",
    name: "Macomb",
    region: "Michigan, USA",
    lines: ["48788 Brandford Drive", "Macomb, MI 48044, US"],
    email: "info@exultitsolution.com",
    phone: "(248) 894-4428",
    phoneHref: "tel:+12488944428",
    lat: "42°40′N",
    lon: "82°55′W",
  },
  {
    id: "sarnia",
    name: "Sarnia",
    region: "Ontario, Canada",
    lines: ["225 Algonquin Crt", "Sarnia, ON N7S 6A1, Canada"],
    email: "sales@exultitsolution.com",
    phone: "(248) 894-4428",
    phoneHref: "tel:+12488944428",
    lat: "42°58′N",
    lon: "82°23′W",
  },
] as const;

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "About", href: "/about-us/" },
  {
    label: "Services",
    href: "/services/website-development/",
    children: [
      { label: "Website Development", href: "/services/website-development/" },
      { label: "Cloud Services", href: "/services/cloud-computing-services/" },
      { label: "Mobile App Development", href: "/services/mobile-app-development/" },
      { label: "CRM Software Development", href: "/services/crm-development-company/" },
      { label: "E-commerce Web Development", href: "/services/ecommerce-web-development/" },
      { label: "Search Engine Optimization", href: "/services/search-engine-optimization/" },
    ],
  },
  { label: "Industries", href: "/industry/" },
  { label: "Technologies", href: "/technologies/" },
  { label: "Remote Staff", href: "/remote-staff/" },
  { label: "Blog", href: "/blog/" },
];
