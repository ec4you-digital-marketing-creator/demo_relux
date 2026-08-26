import type { Metadata } from "next";
import EventGalleryClient from "./EventGalleryClient";
import { BASE_URL, SITE_URL } from "@/app/ui/baceurl";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const canonical = `${SITE_URL}/activity-hub/events/${id}`;

  return {
    title: `EV Charging Event ${id} | Relux Electric`,
    description: `Explore Relux Electric EV charging station event updates and gallery.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `EV Charging Event ${id} | Relux Electric`,
      url: canonical,
    },
  };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/events/`);
    if (res.ok) {
      const events = (await res.json()) as Array<{ id?: string | number | null }>;
      const params = Array.isArray(events)
        ? events
            .map((event) => event?.id)
            .filter((id) => id !== undefined && id !== null)
            .map((id) => ({ id: String(id) }))
        : [];

      if (params.length > 0) {
        return params;
      }
    }
  } catch {
    // Fall back to seeded event ids when the backend is not running during export.
  }

  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function EventGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  return <EventGalleryClient params={params} />;
}
