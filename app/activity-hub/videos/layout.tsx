import type { Metadata } from "next";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "EV Charging Videos | Corporate & Demo Videos | Relux Electric",
  description:
    "Watch Relux Electric's corporate videos, EV charging station demos, site tours, and hyper-charging demonstrations. Explore our growing EV network through video.",
  keywords: [
    "Relux Electric videos",
    "EV charging demo video",
    "EV station tour India",
    "electric vehicle video",
    "Relux corporate video",
  ],
  alternates: {
    canonical: `${SITE_URL}/activity-hub/videos`,
  },
  openGraph: {
    title: "EV Charging Videos | Corporate & Demo Videos | Relux Electric",
    description:
      "Watch Relux Electric's corporate videos, EV charging station demos, site tours, and hyper-charging demonstrations.",
    url: `${SITE_URL}/activity-hub/videos`,
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
