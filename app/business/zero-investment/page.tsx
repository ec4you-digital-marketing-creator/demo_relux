import type { Metadata } from "next";
import ZeroHero from "./include/hero";
import ZeroFeatures from "./include/features";
import { Suspense } from "react";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "Zero Investment EV Charging Station Business | Relux Electric",
  description:
    "Start your EV charging station business with zero investment. Partner with Relux Electric to setup charging stations on your land and earn recurring income.",
  keywords: [
    "zero investment EV charging",
    "EV franchise zero cost",
    "partner with Relux Electric",
    "earn from EV charging India",
    "low investment EV business",
  ],
  alternates: {
    canonical: `${SITE_URL}/business/zero-investment`,
  },
  openGraph: {
    title: "Zero Investment EV Charging Station Business | Relux Electric",
    description:
      "Start your EV charging station business with zero investment. Partner with Relux Electric to setup charging stations on your land and earn recurring income.",
    url: `${SITE_URL}/business/zero-investment`,
  },
};

export default function ZeroInvestmentPage() {
  return (
    <main className="bg-black min-h-screen">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <ZeroHero />
        <ZeroFeatures />
      </Suspense>
    </main>
  );
}
