"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiZap, FiMapPin, FiHeadphones, FiTrendingUp,
  FiShield, FiCheckCircle, FiFlag, FiCpu,
} from "react-icons/fi";

/* ─── fade-up helper ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

/* ─── Why Businesses Choose Relux pillars ─── */
const bizPillars = [
  {
    icon: FiZap,
    title: "Fast, Careful Execution",
    body: "Our teams install quickly without cutting corners — engineered to Relux's own safety and performance standards. Partners start earning sooner, not months later.",
  },
  {
    icon: FiHeadphones,
    title: "Round-the-Clock Regional Support",
    body: "Support doesn't stop once a station goes live. 24/7 assistance in regional languages — so issues get resolved in hours, not days.",
  },
  {
    icon: FiMapPin,
    title: "A Network Built for Scale",
    body: "A strong bench of service centres and technicians backs every installation, across every state we operate in.",
  },
  {
    icon: FiCpu,
    title: "Advanced, Future-Ready Technology",
    body: "From fast chargers to app-based monitoring, our systems are built for reliability first — including super-fast charging hubs for high-traffic locations.",
  },
  {
    icon: FiTrendingUp,
    title: "Proven at Scale, Backed by Real Capital",
    body: "With 1,000+ installations delivered, ~₹250 crore in project funding raised, and 100% founder equity retained, Relux combines an established network with financial staying power.",
  },
  {
    icon: FiShield,
    title: "MoP-Compliant Standards",
    body: "Every installation strictly follows Ministry of Power guidelines for EV charging infrastructure in India — covering safety, reliability, and future readiness.",
  },
];

/* ─── Charger types ─── */
const chargerTypes = [
  { label: "Bharat AC-001", detail: "Lighter vehicles & two-wheelers" },
  { label: "Bharat DC-001", detail: "Lighter vehicles & two-wheelers" },
  { label: "Type 2 AC", detail: "Workplace & overnight charging" },
  { label: "CCS / CHAdeMO / GB/T DC", detail: "Cars, fleets & high-traffic hubs" },
  { label: "120 kW → 1 MW capacity", detail: "Passenger cars to commercial fleets" },
  { label: "Cloud CMS + Relux App", detail: "Live monitoring, payments & uptime" },
];

/* ─── Reach stats ─── */
const reachStats = [
  { value: "1000+", label: "Installations Nationwide" },
  { value: "13+", label: "States Covered" },
  { value: "₹250 Cr", label: "Project Funding Raised" },
  { value: "₹50 Cr", label: "Revenue Target FY 2026–27" },
  { value: "500", label: "Stations in TN Rollout (TNGECL)" },
  { value: "9", label: "GCC Chennai Public Sites" },
];

/* ─── Section divider ─── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px bg-[#00b14f]" />
      <span className="text-[#00b14f] text-[10px] font-black uppercase tracking-[0.4em]">
        {label}
      </span>
    </div>
  );
}

export default function AboutDeep() {
  return (
    <section className="relative w-full bg-black overflow-hidden">

      {/* ══════════════════════════════════════════════
          2. Our Story
      ══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24 border-t border-white/6">
        <div className="absolute top-0 right-0 w-125 h-100 bg-[#00b14f]/5 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <SectionLabel label="Our Story" />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
              From 2009 to Today —{" "}
              <span className="text-[#00b14f]">A Decade of</span>
              <br className="hidden md:block" /> Powering Change
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp(0.1)} className="space-y-5 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                Relux began operations in 2009 and entered the EV charging space in 2012 — at a time
                when electric mobility in India was still finding its feet. That early groundwork made
                us one of the pioneers of the industry, and today Relux runs one of the country&apos;s
                more established EV charging infrastructure companies, with stations spread across
                urban centres, highways, and residential zones.
              </p>
              <p>
                What started as a small initiative has grown into a structured, technology-led
                operation, shaped by years of field experience, hands-on engineering, and a close
                understanding of how India actually drives — and charges.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="space-y-5 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                The company is led by Managing Director <strong className="text-white">Karthikeyan S.</strong>,
                and has backed its expansion with real capital — including cumulative project funding
                of roughly <strong className="text-[#00b14f]">₹250 crore</strong> from private real
                estate and infrastructure investors, raised specifically to fund new station rollouts.
              </p>
              <p>
                Relux has set a revenue target of <strong className="text-[#00b14f]">₹50 crore for FY 2026–27</strong>,
                part of a multi-channel growth strategy spanning public charging, enterprise accounts,
                EPC projects, and technology licensing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          4. What We Offer
      ══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24 border-t border-white/6">
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#00b14f]/5 blur-[110px] rounded-full -translate-x-1/2 translate-y-1/4 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <SectionLabel label="What We Offer" />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
              End-to-End,{" "}
              <span className="text-[#00b14f]">Turnkey</span> Charging Solutions
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp(0.1)} className="text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                Relux delivers a complete, turnkey solution — site assessment, installation, energy
                management, and ongoing maintenance — all handled in-house. We manage the entire
                lifecycle of a station, so hosts get a hands-off experience and drivers get consistent
                performance every single time.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                This makes us equally suited to commercial EV charging hubs, residential complexes,
                and public locations. We also handle equipment sourcing and regulatory compliance
                internally — removing the technical complexity that usually slows a new charging site
                down before it even goes live.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          5. Charging Technology
      ══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24 border-t border-white/6">
        <div className="absolute top-1/2 right-0 w-125 h-100 bg-[#00b14f]/5 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <SectionLabel label="Charging Technology" />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
              Built on Recognised Standards,{" "}
              <span className="text-white/30">Not Proprietary Lock-In</span>
            </h2>
            <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
              Relux installs the full range of AC and DC EV charging equipment used in India today.
              Charging capacities across the network range from 120 kW up to 1 MW, covering
              everything from a single passenger car to commercial and fleet vehicles that need a
              fast turnaround.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chargerTypes.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-white/[0.07] bg-white/2 hover:border-[#00b14f]/40 hover:bg-[#00b14f]/5 transition-all duration-300"
              >
                <FiCheckCircle className="w-4 h-4 text-[#00b14f] mb-1" />
                <p className="text-white font-bold text-sm leading-snug">{c.label}</p>
                <p className="text-white/45 text-[12px]">{c.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp(0.4)} className="mt-8 text-white/55 text-sm md:text-base leading-relaxed max-w-3xl">
            Newer installations are also being designed to integrate{" "}
            <span className="text-white/80">renewable energy and battery storage</span>, reducing
            dependence on the grid without compromising charging speed or reliability.
          </motion.p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          6. Why Businesses Choose Relux
      ══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24 border-t border-white/6">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-[#00b14f]/6 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <SectionLabel label="Why Businesses Choose Relux" />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
              Built on Fast Execution,{" "}
              <span className="text-[#00b14f]">Real Support</span>,{" "}
              <span className="text-white/30">and Nationwide Reach</span>
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bizPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.09)}
                  className="group flex flex-col gap-4 p-6 rounded-3xl border border-white/[0.07] bg-white/2 hover:border-[#00b14f]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00b14f]/10 border border-[#00b14f]/20 flex items-center justify-center group-hover:bg-[#00b14f]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#00b14f]" />
                  </div>
                  <h3 className="text-white font-black text-sm uppercase tracking-tight leading-snug group-hover:text-[#00b14f] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/45 text-[12px] md:text-[13px] leading-relaxed flex-1">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          7. Partner With Relux
      ══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp()}>
              <SectionLabel label="Partner With Relux" />
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
                Franchise &amp;{" "}
                <span className="text-[#00b14f]">Investment</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Beyond hosting a station, Relux opens the door for entrepreneurs and local partners
                to build a business around EV charging. If you&apos;re exploring an EV charging
                franchise in India, or looking at EV charging investment as a long-term revenue
                stream, Relux offers the infrastructure, brand backing, and operational support to
                make it work — without the trial-and-error most new entrants go through alone.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.15)} className="flex flex-col gap-4">
              <div className="p-6 rounded-3xl border border-[#00b14f]/25 bg-[#00b14f]/5">
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  A Growing EV Charging Business Opportunity — structured, low-hassle, backed by one
                  of India&apos;s most experienced EV charging operators.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/business/franchise"
                    className="inline-flex items-center justify-center gap-2 bg-[#00b14f] hover:bg-[#009b45] text-white font-bold text-[13px] px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,177,79,0.35)] hover:-translate-y-0.5"
                  >
                    Explore Franchise
                  </Link>
                  <Link
                    href="/business/zero-investment"
                    className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold text-[13px] px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Zero Investment Model
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          8. Recent Milestone — Tamil Nadu
      ══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24 border-t border-white/6">
        <div className="absolute top-0 left-0 w-100 h-100 bg-[#00b14f]/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <SectionLabel label="Recent Milestone" />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
              Expanding Across{" "}
              <span className="text-[#00b14f]">Tamil Nadu</span>
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp(0.1)} className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                Relux Electric, in collaboration with the{" "}
                <strong className="text-white">Greater Chennai Corporation (GCC)</strong>, is setting
                up nine EV charging stations across key public locations in Chennai — including sites
                like Marina Beach and Besant Nagar Beach parking areas.
              </p>
              <p>
                This marks the first phase of Tamil Nadu&apos;s clean mobility drive, and follows
                Relux Electric&apos;s recent partnership with the{" "}
                <strong className="text-white">
                  Tamil Nadu Green Energy Corporation Limited (TNGECL)
                </strong>{" "}
                to roll out <strong className="text-[#00b14f]">500 charging stations</strong> statewide.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="flex flex-col justify-center gap-5">
              {[
                { icon: FiFlag, label: "9 GCC Chennai Public Sites", sub: "Marina & Besant Nagar Beach among key locations" },
                { icon: FiMapPin, label: "500 Stations — TNGECL Partnership", sub: "Statewide Tamil Nadu rollout underway" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/2">
                    <div className="w-10 h-10 rounded-xl bg-[#00b14f]/10 border border-[#00b14f]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#00b14f]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.label}</p>
                      <p className="text-white/45 text-[12px] mt-1">{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          9 & 10. Reach + Stats + Compliance
      ══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24 border-t border-white/6">
        <div className="absolute top-1/2 right-0 w-125 h-125 bg-[#00b14f]/5 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <SectionLabel label="Our Reach Across India" />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
              A Footprint Rooted in the South,{" "}
              <span className="text-[#00b14f]">Expanding Nationwide</span>
            </h2>
            <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
              Relux&apos;s strongest presence remains anchored in South India — with established
              stations across Tamil Nadu, Kerala, Telangana, and Gujarat — and this base is actively
              widening through named state partnerships and new market entries, including an ongoing
              rollout in Punjab and Rajasthan. Stations are positioned at city centres, highway
              corridors, and residential zones, giving Relux a genuinely distributed presence rather
              than a concentration in one or two metros.
            </p>
          </motion.div>

          {/* Reach Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {reachStats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="group flex flex-col items-center justify-center py-8 px-4 rounded-2xl border border-white/[0.07] bg-white/2 hover:border-[#00b14f]/40 hover:bg-[#00b14f]/5 transition-all duration-300 text-center"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-[#00b14f] tracking-tight">
                  {s.value}
                </span>
                <span className="mt-2 text-[11px] md:text-[12px] text-white/50 leading-snug font-medium">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Compliance Banner */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-8 rounded-3xl border border-[#00b14f]/20 bg-white/2 overflow-hidden"
          >
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#00b14f]/10 blur-[70px] rounded-full pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-px bg-[#00b14f]" />
                <span className="text-[#00b14f] text-[10px] font-black uppercase tracking-[0.4em]">Compliance & Standards</span>
              </div>
              <p className="text-white font-bold text-base md:text-lg leading-snug max-w-xl">
                Built to Government Standards, Not Just Best Practices
              </p>
              <p className="text-white/55 text-sm mt-2 max-w-xl">
                Every Relux installation strictly follows Ministry of Power (MoP) guidelines —
                covering safety, reliability, and future readiness. We&apos;ve delivered one of
                India&apos;s first localised super fast charging hubs; a milestone that reflects our
                focus on staying ahead of the country&apos;s charging curve, not just keeping pace with it.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative shrink-0 inline-flex items-center justify-center gap-2 bg-[#00b14f] hover:bg-[#009b45] text-white font-bold text-[13px] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,177,79,0.35)] hover:shadow-[0_8px_28px_rgba(0,177,79,0.5)] hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
