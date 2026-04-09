import AboutUs from "./include/aboutus";
import WhyChooseUs from "./include/whychoose";
import WhyTxt from "./include/whytxt";
export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <AboutUs />
      <WhyChooseUs />
      <WhyTxt />
    </main>
  );
}
