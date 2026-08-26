import type { Metadata } from "next";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "EV Charging Blogs | Green Mobility & EV Technology | Relux Electric",
  description:
    "Read in-depth articles about EV technology, green mobility, franchise opportunities, and the future of electric vehicle charging in India from Relux Electric.",
  keywords: [
    "EV charging blogs India",
    "electric vehicle articles",
    "green mobility blog",
    "Relux Electric news",
    "EV franchise insights",
  ],
  alternates: {
    canonical: `${SITE_URL}/activity-hub/blogs`,
  },
  openGraph: {
    title: "EV Charging Blogs | Green Mobility & EV Technology | Relux Electric",
    description:
      "Read in-depth articles about EV technology, green mobility, franchise opportunities, and the future of electric vehicle charging in India.",
    url: `${SITE_URL}/activity-hub/blogs`,
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
