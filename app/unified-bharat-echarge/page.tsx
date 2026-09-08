import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/app/ui/baceurl";
import { CheckCircle2, Zap, ShieldCheck, QrCode, Cpu, Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Unified Bharat e-Charge (UBC) & Relux Electric | Interoperable EV Network",
  description:
    "Discover how Relux Electric adopts the Unified Bharat e-Charge (UBC) protocol by MHI, BHEL & NPCI. Discover, book, and charge your EV seamlessly using BHIM and any UBC app across India.",
  keywords: [
    "Unified Bharat e-Charge",
    "UBC protocol EV",
    "UBC EV charging India",
    "BHIM EV charging",
    "Beckn protocol EV charging",
    "interoperable EV charging station",
    "Relux Electric UBC",
    "MHI BHEL NPCI EV initiative",
  ],
  alternates: {
    canonical: `${SITE_URL}/unified-bharat-echarge`,
  },
  openGraph: {
    title: "Unified Bharat e-Charge (UBC) & Relux Electric | Interoperable EV Network",
    description:
      "Relux Electric is aligned with India's Unified Bharat e-Charge (UBC) open protocol. Charge your EV at Relux stations via BHIM or any UBC-compatible application.",
    url: `${SITE_URL}/unified-bharat-echarge`,
    siteName: "Relux Electric",
    images: [
      {
        url: "https://reluxelectric.com/assets/hero_franchise.png",
        width: 1200,
        height: 630,
        alt: "Unified Bharat e-Charge Relux Electric",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function UbcPage() {
  const ubcSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Unified Bharat e-Charge (UBC) Protocol & Relux Electric Integration",
    "description": "Comprehensive guide on how Relux Electric supports the open Unified Bharat e-Charge (UBC) protocol developed by MHI, BHEL, and NPCI.",
    "publisher": {
      "@type": "Organization",
      "name": "Relux Electric",
      "url": SITE_URL,
    },
    "mainEntityOfPage": `${SITE_URL}/unified-bharat-echarge`,
    "about": [
      {
        "@type": "Thing",
        "name": "Unified Bharat e-Charge (UBC)",
        "description": "An open EV charging protocol by Ministry of Heavy Industries, BHEL, and NPCI powered by Beckn Protocol."
      },
      {
        "@type": "Thing",
        "name": "EV Charging Interoperability",
        "description": "Seamless discovery, booking, and payment across any EV app and charger network in India."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#00b14f] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ubcSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00b14f]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b14f]/10 border border-[#00b14f]/30 text-[#00ec62] text-xs sm:text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>MHI, BHEL &amp; NPCI Initiative</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
            Unified Bharat e-Charge <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00ec62] via-emerald-400 to-green-500">
              (UBC) Protocol
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
            Relux Electric embraces India&apos;s open, decentralized EV charging standard. Discover, book, and pay for fast EV charging at any Relux station directly through <strong className="text-white">BHIM</strong> or any <strong className="text-white">UBC-compatible application</strong> without proprietary app lock-in.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/business/franchise"
              className="px-6 py-3.5 rounded-xl bg-[#00b14f] hover:bg-[#00ec62] text-black font-bold text-sm transition-all shadow-[0_0_25px_rgba(0,177,79,0.4)] flex items-center gap-2"
            >
              <span>Explore Franchise Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/locations"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition-all"
            >
              Find Charging Stations
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights Grid */}
      <section className="py-16 bg-zinc-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#00b14f]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00b14f]/10 text-[#00ec62] flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Open National Network</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Powered by Beckn Protocol v2.0.0, UBC connects drivers across India to any charging station seamlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#00b14f]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00b14f]/10 text-[#00ec62] flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Universal QR Standard</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Scan the standard UBC QR code on any Relux charger with any supported app to start charging instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#00b14f]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00b14f]/10 text-[#00ec62] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">UPI-Native Payments</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Seamless, redirection-less payments with automatic pre-authorization and instant refund settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How UBC Works — 7-Stage Flow */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            How Relux Chargers Work on UBC Network
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            The end-to-end open charging cycle powered by Beckn Protocol primitives.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              step: "01",
              title: "Discovery (Scan or Search)",
              desc: "EV drivers scan the universal UBC QR on the Relux charger or search via map in BHIM / any UBC app.",
            },
            {
              step: "02",
              title: "Selection & Transparent Tariff",
              desc: "Driver selects connector type (CCS2, Type-2, CHAdeMO) and receives itemized tariff (Base kWh rate + service fees).",
            },
            {
              step: "03",
              title: "UPI Pre-Authorization",
              desc: "Native UPI payment pre-authorizes funds securely without leaving the application window.",
            },
            {
              step: "04",
              title: "Connector Lock & Confirmation",
              desc: "Relux charger locks the connector gun and confirms readiness for physical plug-in.",
            },
            {
              step: "05",
              title: "Active Charging & Telemetry",
              desc: "Real-time updates stream energy delivered (kWh), power draw (kW), state-of-charge (%), voltage, and current.",
            },
            {
              step: "06",
              title: "Session Completion & Auto-Settlement",
              desc: "Session finishes at target SoC or manual stop. Digital invoice generates, and any excess pre-auth is automatically refunded.",
            },
            {
              step: "07",
              title: "Universal Ratings & Support",
              desc: "Drivers rate session quality (1-5★), building transparent, network-wide trust metrics.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#00b14f]/40 transition-all"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-linear-to-br from-[#00b14f] to-emerald-700 text-black font-black text-lg flex items-center justify-center shadow-lg">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits for Franchise Partners */}
      <section className="py-20 bg-linear-to-b from-zinc-950 to-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00b14f]/10 text-[#00ec62] text-xs font-semibold mb-4">
                <Cpu className="w-4 h-4" />
                <span>Franchise Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Why UBC Readiness Makes Relux Franchise Future-Proof
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-6">
                When you invest in a Relux Electric EV Charging Hub, your stations aren&apos;t confined to a single app ecosystem. By aligning with the Unified Bharat e-Charge standard:
              </p>
              <ul className="space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00ec62] shrink-0 mt-0.5" />
                  <span><strong>Higher Station Utilization:</strong> Millions of EV drivers using BHIM or third-party apps can discover and charge at your location.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00ec62] shrink-0 mt-0.5" />
                  <span><strong>Zero Lock-in Risk:</strong> Protection against platform monopolies through decentralized Beckn open architecture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00ec62] shrink-0 mt-0.5" />
                  <span><strong>National Standard Compliance:</strong> Compliant with Ministry of Heavy Industries and NPCI guidelines for public EV infrastructure.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/business/franchise"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00b14f] hover:bg-[#00ec62] text-black font-bold text-sm transition-all"
                >
                  <span>Apply for Relux Franchise</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b14f]/10 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold text-white mb-4">UBC Architecture Overview</h3>
              <div className="space-y-4 text-xs sm:text-sm text-zinc-400">
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-[#00ec62] font-semibold block mb-1">Domain &amp; Standard</span>
                  <span>Beckn Protocol v2.0.0 (`beckn.one:deg:ev-charging`)</span>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-[#00ec62] font-semibold block mb-1">Role: BPP (Buyer Provider Platform)</span>
                  <span>Relux CSMS acts as an accredited BPP endpoint maintaining live charger catalogs &amp; session execution.</span>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-[#00ec62] font-semibold block mb-1">Registry Operator</span>
                  <span>NPCI BHIM Services Limited (NBSL) distributed registry &amp; Catalog Discovery Service (CDS).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
