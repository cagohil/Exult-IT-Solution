// Single source of truth for navigation, services and company details.
// Service blurbs for the original six are carried over verbatim from the previous site.
import serviceMeta from './serviceMeta.json';

export const company = {
  name: 'Exult IT Solution',
  phone: '(248) 894-4428',
  phoneHref: 'tel:+12488944428',
  email: 'info@exultitsolution.com',
  salesEmail: 'sales@exultitsolution.com',
  offices: [
    {
      region: 'U.S.A',
      lines: ['48788 Brandford Drive, Macomb,', 'MI 48044, US'],
      email: 'info@exultitsolution.com',
      phone: '(248) 894-4428',
      phoneHref: 'tel:+12488944428',
    },
    {
      region: 'Canada',
      lines: ['225 Algonquin Crt, Sarnia, N7S 6A1,', 'Ontario, Canada'],
      email: 'sales@exultitsolution.com',
      phone: '(248) 894-4428',
      phoneHref: 'tel:+12488944428',
    },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/exultitsolution', icon: 'twitter' },
    { label: 'Facebook', href: 'https://www.facebook.com/exultitsolution', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/exultit-solutions/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/exultitsolution/', icon: 'instagram' },
  ],
};

export const services = [
  {
    slug: 'website-development',
    title: 'Website Development',
    short: 'Websites',
    image: '/assets/img/home/services/websiteDevelopment.jpg',
    details:
      'Exult It Solution for IT Solutions has all services required to start or optimize your website. We develop dynamic and static websites to maximize business functionality. We have a vast amount of knowledge with a highly educated and diverse team with many years of combined expertise. We have responsive, custom software development and designs and have the ability to perform on all different devices.',
  },
  {
    slug: 'crm-development-company',
    title: 'CRM Software Development',
    navTitle: 'CRM Software Company',
    short: 'CRM Software',
    image: '/assets/img/home/services/crmSoftwareDevelopment.jpg',
    details:
      'CRM is providing a seamless CUSTOMER EXPERIENCE. By creating a deeper level of relationship with your clients, your business can easily lead to sustainable growth and profit. A custom CRM software that is suited to the needs of your business helps in smooth interaction between various units related to the customer’s journey- from sales and marketing to customer service.',
  },
  {
    slug: 'ecommerce-web-development',
    title: 'E-commerce Web Development',
    short: 'E-commerce',
    image: '/assets/img/home/services/eCommerceWebDevelopment.jpg',
    details:
      'Everything you buy or sell online is a part of e-commerce. This ELECTRONIC COMMERCE industry has grown to become the nucleus of every successful business strategy today. Having an e-commerce platform for your business facilitates easier product discovery and a smoother customer’s journey. Selling online has enabled numerous corporations and businesses to upscale which was not nearly possible through offline trade.',
  },
  {
    slug: 'cloud-computing-services',
    title: 'Cloud Services',
    short: 'Cloud',
    image: '/assets/img/home/services/cloudServices.jpg',
    details:
      'We enhance your business through all phases of your cloud adoption. We set up your cloud with data services, cloud services, security services and IT Services. Our cloud services for IT Services allow your potential and current clients to access your website portal via the internet.',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'Mobile Apps',
    image: '/assets/img/home/services/mobileAppDevelopment.jpg',
    details:
      'We have expert and adaptive technology on Mobile Applications. The Mobile Applications are continuously evolving and creating an essential requirement to upgrade your current mobile applications for the business. We propel your imagination to reality by using Big Data!',
  },
  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    short: 'SEO',
    image: '/assets/img/home/services/searchEngineOptimization.jpg',
    details:
      'Search Engine Optimization is all about knowing and implementing what can make your website visible. It focuses on attracting visitors organically by ranking higher in Google searches. This can be achieved through optimizing your website and content according to several factors that affect the rankings.',
  },
  {
    slug: 'data-and-ai',
    title: 'Data & AI',
    short: 'Data & AI',
    isNew: true,
    image: '/assets/img/services/data-ai.svg',
    details:
      'Your business already produces the data; we turn it into decisions. From data pipelines, warehousing and business-intelligence dashboards to machine learning models and AI assistants, we build the analytics and intelligent features that help you forecast demand, automate routine work and understand your customers better.',
  },
  {
    slug: 'erp-system',
    title: 'ERP System',
    navTitle: 'ERP System Development',
    short: 'ERP Systems',
    isNew: true,
    image: '/assets/img/services/erp-system.svg',
    details:
      'One system for the whole operation. We plan, customise and implement ERP solutions that connect finance, inventory, purchasing, manufacturing, HR and sales in a single source of truth, so every team works from the same real-time numbers and manual re-entry disappears.',
  },
];

const extraMeta = {
  'data-and-ai': {
    detailImage: '/assets/img/services/data-ai.svg',
    metaTitle: 'Data & AI Services - Exult It Solution',
    metaDescription:
      'Exult IT Solution builds data pipelines, business-intelligence dashboards, machine learning models and AI assistants that turn your business data into faster, better decisions.',
    relevantBlogs: [
      { href: '/blogs/top-six-mobile-app-development/', title: 'Top 6 Mobile App Development Trends For 2021' },
      { href: '/blogs/Effective-Digital-Ways-To-Improve-Your-Business/', title: 'Effective Digital Ways To Improve Your Business' },
      { href: '/blogs/What-is-Customer-Relationship-Management-and-Types-of-CRM-System/', title: 'What is Customer Relationship Management and Types of CRM System' },
    ],
  },
  'erp-system': {
    detailImage: '/assets/img/services/erp-system.svg',
    metaTitle: 'ERP System Development - Exult It Solution',
    metaDescription:
      'Exult IT Solution plans, customises and implements ERP systems that connect finance, inventory, purchasing, manufacturing, HR and sales in one real-time platform.',
    relevantBlogs: [
      { href: '/blogs/What-is-Customer-Relationship-Management-and-Types-of-CRM-System/', title: 'What is Customer Relationship Management and Types of CRM System' },
      { href: '/blogs/Why-Does-Your-Business-Need-To-Shift-To-E-Commerce-Now/', title: 'Why Does Your Business Need To Shift To E-Commerce Now?' },
      { href: '/blogs/Few-Important-Tips-before-Hiring-Company-for-Your-Web-Application-Needs/', title: 'Few Important Tips before Hiring Company for Your Web Application Needs' },
    ],
  },
};

export function getService(slug) {
  const s = services.find((x) => x.slug === slug);
  return { ...s, ...(serviceMeta[slug] || extraMeta[slug]) };
}

export const serviceHref = (slug) => `/services/${slug}/`;

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Services', href: '/services/website-development/', children: true },
  { label: 'Industries', href: '/industry/' },
  { label: 'Technologies', href: '/technologies/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Remote Staff', href: '/remote-staff/' },
  { label: 'Contact', href: '/contact-us/' },
];

export const usefulLinks = [
  { href: '/', title: 'Home' },
  { href: '/about-us/', title: 'About Us' },
  { href: '/technologies/', title: 'Our Technologies' },
  { href: '/industry/', title: 'Industries' },
  { href: '/blog/', title: 'Blogs' },
  { href: '/remote-staff/', title: 'Remote Staff' },
  { href: '/contact-us/', title: 'Contact Us' },
];

export const heroSlides = [
  {
    image: '/assets/img/home/slider/sliderfirst.webp',
    name: 'Exult IT Solution',
    title: 'IT Solutions And Services',
    desc: 'Experience the Future of Business with Expert IT Services - Exult IT Solution, Your Trusted Tech Partner for Unparalleled Growth and Success.',
    alt: 'Developers reviewing code on large monitors in a brick-walled office',
  },
  {
    image: '/assets/img/home/slider/slidersecond.webp',
    name: 'Exult IT Solution',
    title: 'Transforming Businesses with Technology Excellence.',
    desc: 'Exult IT Solution: Delivering excellence in software, website and mobile app development.',
    alt: 'A software team collaborating at their workstations',
  },
  {
    image: '/assets/img/home/slider/sliderthird.webp',
    name: 'Exult IT Solution',
    title: 'Enabling Global Enterprises To Achieve Their Maximum Potential.',
    desc: 'Your Idea, Our Expert Hands, Your Success: Unleashing Product Excellence Across Multiple Technologies.',
    alt: 'An engineer working at a multi-screen desk',
  },
];

export const pageSubline = 'Your idea, our expert hands makes the product success. We have expert hand in multiple technology.';
