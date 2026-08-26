import type { Metadata } from "next";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "Activity Hub | Videos, Blogs & Events | Relux Electric",
  description:
    "Explore Relux Electric's Activity Hub — watch EV charging demos, read in-depth blogs on green mobility, and stay updated with events from India's leading EV charging network.",
  keywords: [
    "Relux Electric blogs",
    "EV charging videos India",
    "EV events India",
    "Relux Electric news",
    "electric vehicle content India",
  ],
  alternates: {
    canonical: `${SITE_URL}/activity-hub`,
  },
  openGraph: {
    title: "Activity Hub | Videos, Blogs & Events | Relux Electric",
    description:
      "Explore Relux Electric's Activity Hub — watch EV charging demos, read in-depth blogs on green mobility, and stay updated with events.",
    url: `${SITE_URL}/activity-hub`,
  },
};

export default function ActivityHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
