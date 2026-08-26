import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "Terms & Conditions | Relux Electric India",
  description:
    "Read the Terms and Conditions of Relux Electric. Understand the terms, policies, usage guidelines, and agreement details for our EV charging network and services.",
  keywords: [
    "Relux terms and conditions",
    "EV charging terms of service",
    "Relux Electric legal agreement",
    "terms of use Relux",
  ],
  alternates: {
    canonical: `${SITE_URL}/terms-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | Relux Electric India",
    description:
      "Read the Terms and Conditions of Relux Electric. Understand the terms, policies, usage guidelines, and agreement details for our EV charging network and services.",
    url: `${SITE_URL}/terms-conditions`,
  },
};

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background radial glowing effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00b14f]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#00b14f]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.4em]">Legal & Terms</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Terms & <span className="text-[#00b14f]">Conditions</span>
          </h1>
          <p className="text-white/40 text-sm">Last updated: June 2026</p>
        </div>

        {/* Content Container */}
        <div className="bg-zinc-950/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md space-y-10">

          {/* Section 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              By accessing, browsing, downloading, or using the Relux Electric website, mobile application, and charging stations, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              2. User Account Registration
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              To utilize certain features, including start-to-finish charging operations and wallet services, you must register for an account on the Relux App:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/70 text-sm md:text-base">
              <li>You agree to provide true, accurate, current, and complete information during registration.</li>
              <li>You are entirely responsible for maintaining the confidentiality of your account credentials and password.</li>
              <li>You agree to notify us immediately of any unauthorized use or access to your account.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              3. EV Charging Station Rules & Etiquette
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              To ensure safety and reliability for all users, you must abide by the following charging protocols:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/70 text-sm md:text-base">
              <li>Follow all posted safety instructions and guidelines at our EV charging physical locations.</li>
              <li>Disconnect connectors with care and plug them back into their respective holsters after completing a session.</li>
              <li>Ensure your vehicle is parked in designated charging spaces only when charging is actively taking place.</li>
              <li>You are liable for any physical damage to our chargers, guns, or stations resulting from negligence, misuse, or failure to follow guidelines.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              4. Wallet Operations & Payments
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              Relux Electric utilizes an in-app wallet system to handle charging payments.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/70 text-sm md:text-base">
              <li>Charges are calculated based on electricity consumption (kWh), duration, and any applicable parking/idle fees which will be clearly shown before starting.</li>
              <li>Wallet balances, recharges, and payments are processed via secured third-party systems.</li>
              <li>Refund requests for failed transactions or duplicate debits will be investigated and settled within 5-7 working days.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              5. Intellectual Property
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              All proprietary content, brand design elements, icons, application source code, databases, trademarks, logos, and features are owned exclusively by Relux Electric India. Unauthorized distribution, copying, modification, or reverse engineering of any digital or physical components is strictly prohibited.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              6. Limitation of Liability
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Relux Electric works diligently to maximize station uptime and app precision. However, we do not warrant that services will be completely uninterrupted, error-free, or that every station will be functional at all times. Relux Electric shall not be held liable for any indirect, incidental, or consequential damages resulting from charger downtime, power disruptions, or vehicle incompatibility.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              7. Governing Law
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              These Terms and Conditions shall be governed by, interpreted, and enforced in accordance with the laws of India. Any legal actions or disputes arising from our services shall fall under the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              8. Contact Us
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              If you have any questions or require support regarding these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2 text-sm md:text-base text-zinc-300">
              <p><strong className="text-white">Email:</strong> <a href="mailto:enquiry@reluxelectric.com" className="text-[#00ec62] hover:underline">enquiry@reluxelectric.com</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:+919884866993" className="text-[#00ec62] hover:underline">+91 9884866993</a></p>
              <p><strong className="text-white">Address:</strong>No:16/8, PRV Towers, Ground floor, Grand Southern Trunk Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032</p>
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#00ec62] text-sm transition-colors group">
            <span>←</span> Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
