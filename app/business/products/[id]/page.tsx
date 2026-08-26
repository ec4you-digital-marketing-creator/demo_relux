import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import { SITE_URL } from "@/app/ui/baceurl";

export async function generateStaticParams() {
  return [
    { id: "lax30" },
    { id: "lax60" },
    { id: "simha120" },
    { id: "simha180" },
    { id: "simha240" },
    { id: "relux-ac-3" },
    { id: "relux-ac-7" },
    { id: "relux-ac-22" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const productName = id.toUpperCase().replace(/-/g, " ");
  const canonical = `${SITE_URL}/business/products/${id}`;

  return {
    title: `${productName} EV Fast Charger | Relux Electric`,
    description: `Specifications and features of ${productName} EV charger by Relux Electric. Made in India, OCPP 1.6 compliant, IP54 certified.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${productName} EV Fast Charger | Relux Electric`,
      url: canonical,
    },
  };
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
