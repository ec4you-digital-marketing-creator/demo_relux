import type { Metadata } from "next";
import LocationMap from "../include/locationmap";
import { BASE_URL, SITE_URL } from "@/app/ui/baceurl";

export const dynamic = "force-static";
export const dynamicParams = false;

const generateSlug = (name: string, city: string) => {
  const combined = `${name}-${city}`;
  return combined
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const paths = [{ slug: [] as string[] }];

  try {
    const res = await fetch(`${BASE_URL}/api/locations/`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        data.forEach((station: any) => {
          if (station.name && station.city) {
            const s = generateSlug(station.name, station.city);
            paths.push({ slug: [s] });
          }
        });
      }
    }
  } catch (e) {
    console.error("Failed to generate static params for locations:", e);
  }

  return paths;
}

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slugArray = resolvedParams?.slug || [];
  const slugPath = slugArray.join("/");

  const baseUrl = SITE_URL;
  const canonicalUrl = slugPath
    ? `${baseUrl}/locations/${slugPath}`
    : `${baseUrl}/locations`;

  let title = "EV Charging Station Locations in India | Relux Electric";
  let description =
    "Find Relux Electric EV charging stations near you. Locate AC and fast DC charging points across our rapidly expanding national network.";

  if (slugPath) {
    const formattedName = slugPath
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    title = `${formattedName} EV Charging Station | Relux Electric`;
    description = `Find and charge at ${formattedName} EV charging station location. Fast DC & AC chargers available by Relux Electric.`;
  }

  return {
    title,
    description,
    keywords: [
      "EV charging station near me",
      "Relux charging stations map",
      "locate EV charger India",
      "DC fast charger locations",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
  };
}

import LocationDetailClient from "../include/LocationDetailClient";

export default async function LocationsPage({ params }: Props) {
  const resolvedParams = await params;
  const slugArray = resolvedParams?.slug || [];
  const hasSlug = slugArray.length > 0;

  if (hasSlug) {
    return <LocationDetailClient />;
  }

  return (
    <main className="fixed inset-0 top-0 bg-[#0a0a0a] overflow-hidden z-10">
      <LocationMap />
    </main>
  );
}
