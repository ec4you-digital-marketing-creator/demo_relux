import type { Metadata } from "next";
import ServicePage from "../business/service/page";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/business/service`,
  },
};

export default ServicePage;
