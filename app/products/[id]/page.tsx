import type { Metadata } from "next";
import ProductDetailClient from "@/app/business/products/[id]/ProductDetailClient";
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
  return {
    alternates: {
      canonical: `${SITE_URL}/business/products/${id}`,
    },
  };
}

export default function Page() {
  return <ProductDetailClient />;
}
