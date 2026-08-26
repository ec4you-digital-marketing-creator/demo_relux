import type { Metadata } from "next";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "DC Fast Charger Products | LAX 60, SIMHA 120 & SIMHA 240 | Relux Electric",
  description:
    "Explore Relux Electric's Dual Gun DC Fast Charger lineup — LAX 60 (60kW), SIMHA 120 (120kW), and SIMHA 240 (240kW). Made in India. OCPP 1.6 ready, IP54 certified, IEC compliant.",
  keywords: [
    "DC Fast Charger India",
    "60kW DC Charger",
    "120kW DC Fast Charger",
    "240kW DC Fast Charger",
    "Dual Gun DC Charger",
    "Relux Electric LAX 60",
    "SIMHA 120 charger",
    "SIMHA 240 charger",
    "EV Fast Charger specification",
    "OCPP 1.6 EV charger",
    "IP54 EV charger India",
    "IEC 61851 compliant charger",
    "Make in India EV charger",
    "commercial EV charger India",
    "fleet DC fast charger",
  ],
  alternates: {
    canonical: `${SITE_URL}/business/products`,
  },
  openGraph: {
    title: "DC Fast Charger Products | LAX 60, SIMHA 120 & SIMHA 240 | Relux Electric",
    description:
      "Explore Relux Electric's Dual Gun DC Fast Charger lineup — LAX 60 (60kW), SIMHA 120 (120kW), and SIMHA 240 (240kW). Made in India. OCPP 1.6 ready, IP54 certified, IEC compliant.",
    url: `${SITE_URL}/business/products`,
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
