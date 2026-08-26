import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/ui/baceurl";

export const metadata: Metadata = {
  title: "Privacy Policy | Relux Electric India",
  description:
    "Read the Privacy Policy of Relux Electric. Understand how we collect, use, protect, and manage your personal data when using our EV charging network and applications.",
  keywords: [
    "Relux privacy policy",
    "EV charging privacy policy",
    "Relux Electric data protection",
    "privacy terms Relux",
  ],
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Relux Electric India",
    description:
      "Read the Privacy Policy of Relux Electric. Understand how we collect, use, protect, and manage your personal data when using our EV charging network and applications.",
    url: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background radial glowing effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00b14f]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00b14f]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.4em]">Legal & Privacy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Privacy <span className="text-[#00b14f]">Policy</span>
          </h1>
          <p className="text-white/40 text-sm">Last updated: June 2026</p>
        </div>

        {/* Content Container */}
        <div className="bg-zinc-950/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md space-y-10">

          {/* Section 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              1. Introduction
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Welcome to Relux Electric. We are dedicated to providing smart, fast, and accessible electric vehicle (EV) charging infrastructure across India. Your privacy is paramount to us, and we are committed to safeguarding the personal data you share when using our website, mobile application, EV charging stations, and other services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              2. Information We Collect
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              To operate our EV charging network and deliver tailored services, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/70 text-sm md:text-base">
              <li>
                <strong className="text-white">Account Details:</strong> Your name, phone number, email address, password, and registration details when you create an account on our Relux App.
              </li>
              <li>
                <strong className="text-white">Vehicle Information:</strong> Make, model, battery capacity, connector type, and registration details of your EV to optimize charging speeds and compatibility.
              </li>
              <li>
                <strong className="text-white">Location Data:</strong> Real-time geographical location to show you nearby charging stations, calculate distance, and navigate to stations.
              </li>
              <li>
                <strong className="text-white">Transaction Information:</strong> Details of your charging sessions, history, payments made, billing address, and wallet balance. Note: All online payments are handled securely via certified payment gateways.
              </li>
              <li>
                <strong className="text-white">Device & Usage:</strong> IP address, device type, operating system, browser data, app performance logs, and diagnostic information to monitor and optimize app usability.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              3. How We Use Your Data
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              We collect and utilize your information to serve you better, specifically for:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/70 text-sm md:text-base">
              <li>Facilitating your charging sessions, payment processing, and transaction receipts.</li>
              <li>Providing real-time updates regarding charger availability, charging status, and booking status.</li>
              <li>Enabling customer service and troubleshooting support.</li>
              <li>Improving our algorithms, app performance, network locations, and service reliability.</li>
              <li>Sending promotions, offers, and notifications regarding new stations and services (you may opt out at any time).</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              4. Data Sharing & Security
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We share your information only with trusted partners, such as payment gateway processors, cloud hosting services, and technical service providers who assist us in operating our services. We implement industry-standard encryption, SSL, and technical security protocols to protect your personal data from unauthorized access, loss, or misuse.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              5. Your Rights & Choice
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              You retain absolute control over your personal data. You have the right to access, edit, update, or delete your account information at any time directly through the Relux mobile app settings. For any data deletion requests or special inquiries, you can contact our data support team at our official email address.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              6. Contact Us
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              If you have any questions or suggestions about this Privacy Policy, please feel free to reach out to us:
            </p>
            <div className="mt-4 p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2 text-sm md:text-base text-zinc-300">
              <p><strong className="text-white">Email:</strong> <a href="mailto:enquiry@reluxelectric.com" className="text-[#00ec62] hover:underline">enquiry@reluxelectric.com</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:+919884866993" className="text-[#00ec62] hover:underline">+91 9884866993</a></p>
              <p><strong className="text-white">Address:</strong> No:16/8, PRV Towers, Ground floor, Grand Southern Trunk Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032</p>
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
