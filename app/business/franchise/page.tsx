import type { Metadata } from "next";
import { SITE_URL } from "@/app/ui/baceurl";
import HeroSection from "./include/HeroSection";
import EvRevolutionSection from "./include/EvRevolutionSection";
import ValuePropsSection from "./include/ValuePropsSection";
import HowItWorksSection from "./include/HowItWorksSection";
import FranchiseModels from "./include/franchisemodel";
import WhatAreYouInvestingIn from "./include/WhatAreYouInvestingIn";
import ChargingTimesSection from "./include/ChargingTimesSection";
import PaybackAndRoiSection from "./include/PaybackAndRoiSection";
import RequirementsSection from "./include/RequirementsSection";
import FranchiseFaqSection from "./include/FranchiseFaqSection";
import WhyPartnerSection from "./include/WhyPartnerSection";
import TechnologySection from "./include/TechnologySection";
import SuitablePartnerSection from "./include/SuitablePartnerSection";
import { FAQS_DATA } from "./include/faqData";

export const metadata: Metadata = {
  title: "EV Charging Station Franchise Opportunities in India | Relux Electric",
  description:
    "Start your EV charging station franchise with Relux Electric. Low-investment, high-profit franchise models for EV charging hubs across India with turnkey support.",
  keywords: [
    "EV franchise cost India",
    "best EV charging franchise",
    "EV charging station franchise cost in India",
    "electric car charging business",
    "Relux Electric franchise partner",
    "DC fast charger franchise",
  ],
  alternates: {
    canonical: `${SITE_URL}/business/franchise`,
  },
  openGraph: {
    title: "EV Charging Station Franchise Opportunities in India | Relux Electric",
    description:
      "Start your EV charging station franchise with Relux Electric. Low-investment, high-profit franchise models for EV charging hubs across India with turnkey support.",
    url: `${SITE_URL}/business/franchise`,
  },
};

export default function FranchisePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <main suppressHydrationWarning className="bg-black min-h-screen font-sans selection:bg-[#00b14f] selection:text-black">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section */}
      <HeroSection />
      {/* 4. Franchise Models (5 Cards Grid with Popup EnquiryModal) */}
      <FranchiseModels />
      {/* What Are You Investing In Section */}
      <WhatAreYouInvestingIn />
      {/* How It Works Section */}
      <HowItWorksSection />
      {/* Why Partner With RELUX? */}
      <WhyPartnerSection />
      {/* 7. Franchise Requirements */}
      <RequirementsSection />
      {/* 7b. Suitable Partner Profiles */}
      <SuitablePartnerSection />



      {/* 2. India's EV Revolution Section */}
      {/* <EvRevolutionSection /> */}



      {/* Technology Section */}
      <TechnologySection />

      {/* 3. What Relux Brings For You (Value Proposition) */}
      {/* <ValuePropsSection /> */}

      {/* 5. Approximate Charging Times & Why EV Charging Business */}
      {/* <ChargingTimesSection /> */}

      {/* 6. Your Money Back in 3-4 Years & Calculate Your Returns */}
      <PaybackAndRoiSection />
    

      {/* 8. AEO / GEO FAQ & Direct Answers */}
      {/* <FranchiseFaqSection /> */}

    </main>
  );
}
