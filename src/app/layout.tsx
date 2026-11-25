import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Hanken_Grotesk, Martian_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Big_Shoulders({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-big-shoulders", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const mono = Martian_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-martian", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Exult IT Solution | IT Services & Software Development in Macomb, MI",
    template: "%s | Exult IT Solution",
  },
  description: site.description,
  keywords: [
    "IT services Macomb",
    "website development Michigan",
    "mobile app development Macomb",
    "CRM development company",
    "e-commerce web development",
    "cloud computing services",
    "SEO Michigan",
    "IT company Sarnia",
  ],
  authors: [{ name: "Exult IT Solution" }],
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#031530",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  telephone: "+1-248-894-4428",
  email: site.email,
  areaServed: ["Michigan", "Ontario"],
  address: [
    { "@type": "PostalAddress", streetAddress: "48788 Brandford Drive", addressLocality: "Macomb", addressRegion: "MI", postalCode: "48044", addressCountry: "US" },
    { "@type": "PostalAddress", streetAddress: "225 Algonquin Crt", addressLocality: "Sarnia", addressRegion: "ON", postalCode: "N7S 6A1", addressCountry: "CA" },
  ],
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
