import type { Metadata } from "next";
import ProductListingPage from "@/app/business/products/page";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/business/products`,
  },
};

export default function Page() {
  return <ProductListingPage />;
}
