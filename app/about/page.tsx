import type { Metadata } from "next";
import AboutUs from "./include/aboutus";
import WhyChooseUs from "./include/whychoose";
import WhyTxt from "./include/whytxt";
import AboutDeep from "./include/about-deep";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "About Relux Electric | India's Leading EV Charging Network",
  description:
    "Learn about Relux Electric, our mission to build India's largest EV charging network, and our commitment to sustainable electric vehicle mobility solutions.",
  keywords: [
    "about Relux Electric",
    "EV charging network provider",
    "sustainable energy solutions India",
    "Relux EV charging",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Relux Electric | India's Leading EV Charging Network",
    description:
      "Learn about Relux Electric, our mission to build India's largest EV charging network, and our commitment to sustainable electric vehicle mobility solutions.",
    url: `${SITE_URL}/about`,
  },
};

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Relux Electric",
      "legalName": "Relux Electric India Private Limited",
      "url": SITE_URL,
      "logo": `${SITE_URL}/assets/hero_franchise.png`,
      "description": "India's leading EV Charging Station Network Provider & Franchise Operator.",
      "telephone": "+91-9884866993",
      "email": "enquiry@reluxelectric.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No:16/8, PRV Towers, Ground floor, Grand Southern Trunk Rd, Ramapuram, Guindy",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600032",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://www.facebook.com/reluxelectric",
        "https://www.instagram.com/reluxelectric/",
        "https://www.linkedin.com/company/relux-electric/",
        "https://www.youtube.com/@reluxelectric7550",
        "https://x.com/reluxelectric",
      ],
      "knowsAbout": [
        "Electric Vehicle Charging Stations",
        "DC Fast Chargers",
        "EV Franchise Opportunities in India",
        "OCPP 1.6 Protocol",
        "Clean Energy and E-Mobility",
      ],
    },
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutUs />
      <WhyChooseUs />
      <AboutDeep />
      <WhyTxt />
    </main>
  );
}
