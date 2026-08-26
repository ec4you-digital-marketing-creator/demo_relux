import type { Metadata } from "next";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "Reliable EV Charging Solutions Across India | Relux Electric",
  description:
    "Explore reliable EV charging solutions for homes, businesses, highways & fleets with fast, scalable EV charging infrastructure tailored to every need.",
  keywords: [
    "Residential EV Charging",
    "Home EV Charging Station",
    "Home EV Charger Installation",
    "Smart Home EV Charger",
    "Residential EV Charger",
    "Public EV Charging Station",
    "DC Fast Charger",
    "Commercial EV Charging",
    "EV Charging Infrastructure",
    "EV Charging Network",
    "Highway EV Charging",
    "EV Charging Installation",
    "EV Charging Company",
    "Commercial Fleet Charging",
    "Electric Bus Charging",
    "High Power EV Charging",
    "Solar EV Charging",
    "Battery Energy Storage System",
    "BESS Integration",
    "Energy Management System",
    "Industrial EV Charging",
  ],
  alternates: {
    canonical: `${SITE_URL}/business/service`,
  },
  openGraph: {
    title: "Reliable EV Charging Solutions Across India | Relux Electric",
    description:
      "Explore reliable EV charging solutions for homes, businesses, highways & fleets with fast, scalable EV charging infrastructure tailored to every need.",
    url: `${SITE_URL}/business/service`,
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
