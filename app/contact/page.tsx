import type { Metadata } from "next";
import ContactHero from "./include/hero";
import ContactForm from "./include/form";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "Contact Relux Electric | Partner & Franchise Support",
  description:
    "Get in touch with Relux Electric. Contact us for franchise opportunities, customer support, or charging station installation inquiries across India.",
  keywords: [
    "contact Relux Electric",
    "EV charging support",
    "install EV charger India",
    "Relux franchise inquiry",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Relux Electric | Partner & Franchise Support",
    description:
      "Get in touch with Relux Electric. Contact us for franchise opportunities, customer support, or charging station installation inquiries across India.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
