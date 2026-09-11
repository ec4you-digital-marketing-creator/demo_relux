import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HomeHero from "./include/hero";
import LazySection from "../../components/LazySection";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const HomeNewsMarquee = dynamic(() => import("./include/news-marquee"));
const HomeAbout = dynamic(() => import("./include/about"));
const SimpleABC = dynamic(() => import("./include/simple-abc"));
const HomeCTABanner = dynamic(() => import("./include/cta-banner"));
const HomePartners = dynamic(() => import("./include/partners"));
const HomeBusiness = dynamic(() => import("./include/business"));
const HomeCaaS = dynamic(() => import("./include/caas"));
const HomeUpdates = dynamic(() => import("./include/updates"));
const HomeAppFeature = dynamic(() => import("./include/app-feature"));
const HomeContactCTA = dynamic(() => import("./include/contact-cta"));
const CtaSection = dynamic(() => import("../../components/CtaSection"));
const WhyChooseRelux = dynamic(() => import("./include/why-choose"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HomeHero />
      <LazySection placeholderHeight="100px">
        <HomeNewsMarquee />
      </LazySection>
      <LazySection placeholderHeight="400px">
        <HomeCaaS />
      </LazySection>
      <LazySection placeholderHeight="500px">
        <HomeAbout />
      </LazySection>
      <LazySection placeholderHeight="200px">
        <HomeCTABanner />
      </LazySection>
      <LazySection placeholderHeight="150px">
        <HomePartners />
      </LazySection>
      <LazySection placeholderHeight="400px">
        <HomeBusiness />
      </LazySection>

      <LazySection placeholderHeight="400px">
        <HomeUpdates />
      </LazySection>
      <LazySection placeholderHeight="150px">
        <SimpleABC />
      </LazySection>
      <LazySection placeholderHeight="400px">
        <HomeAppFeature />
      </LazySection>
      {/* <LazySection placeholderHeight="400px">
        <WhyChooseRelux />
      </LazySection> */}
      <LazySection placeholderHeight="300px">
        <HomeContactCTA />
      </LazySection>
    </main>
  );
}
