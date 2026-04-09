import HomeHero from "./include/hero";
import HomeAbout from "./include/about";
import HomeCTABanner from "./include/cta-banner";
import HomePartners from "./include/partners";
import HomeBusiness from "./include/business";
import HomeUpdates from "./include/updates";
import HomeTestimonials from "./include/testimonials";
import HomeAppFeature from "./include/app-feature";
import HomeContactCTA from "./include/contact-cta";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HomeHero />
      <HomeAbout />
      <HomeCTABanner />
      <HomePartners />
      <HomeBusiness />
      <HomeUpdates />
      <HomeTestimonials />
      <HomeAppFeature />
      <HomeContactCTA />
    </main>
  );
}
