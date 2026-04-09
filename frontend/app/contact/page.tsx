import ContactHero from "./include/hero";
import ContactForm from "./include/form";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
