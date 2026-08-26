import React from "react";
import Link from "next/link";
import { FiShield, FiMapPin, FiTrendingUp, FiHeadphones } from "react-icons/fi";

const pillars = [
  {
    icon: FiShield,
    title: "Reliability You Can Count On",
    body: "Every Relux station is built to MoP compliance standards with redundant systems engineered for maximum uptime — so your charge is always there when you need it.",
  },
  {
    icon: FiMapPin,
    title: "Nationwide Accessibility",
    body: "From metropolitan highways to Tier-2 towns, our network spans 13+ states with 1000+ installations — and we're adding new sites every month.",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Regional Support",
    body: "Our dedicated support team offers round-the-clock assistance in English, Tamil, Hindi and more — so help is always just a call away.",
  },
  {
    icon: FiTrendingUp,
    title: "Built for Growth",
    body: "For business partners, Relux provides a structured, low-hassle franchise model with clear revenue potential and an ever-expanding customer base.",
  },
];

const stats = [
  { value: "1000+", label: "EV Charging Installations" },
  { value: "13+", label: "States Across India" },
  { value: "24/7", label: "Customer Support" },
  { value: "1st", label: "Localised Super Fast Hub in India" },
];

export default function WhyChooseRelux() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 bg-[#00b14f]/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-75 bg-[#00b14f]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-100 h-75 bg-[#00b14f]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-350 mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.25em] uppercase text-[#00b14f]">
            Why Choose Relux?
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Reliability, Accessibility, and{" "}
            <span className="text-[#00b14f]">Growth</span>
            <span className="text-white/60"> Built In</span>
          </h2>
          <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Choosing the right EV Charging Station partner comes down to trust. Relux backs every
            installation with 24/7 customer support, regional language assistance, and a growing
            network of service centers across India.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center py-8 px-4 rounded-2xl bg-white/3 border border-white/[0.07] hover:border-[#00b14f]/40 transition-colors duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#00b14f]/0 group-hover:bg-[#00b14f]/5 transition-colors duration-500" />
              <span className="relative text-3xl md:text-4xl font-extrabold text-[#00b14f] tracking-tight">
                {stat.value}
              </span>
              <span className="relative mt-2 text-[12px] md:text-[13px] text-white/50 text-center font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="relative flex flex-col gap-4 p-6 rounded-3xl bg-white/3 border border-white/[0.07] hover:border-[#00b14f]/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-[#00b14f]/0 group-hover:bg-[#00b14f]/5 transition-colors duration-500" />

                {/* Icon bubble */}
                <div className="relative w-11 h-11 rounded-2xl bg-[#00b14f]/10 border border-[#00b14f]/20 flex items-center justify-center group-hover:bg-[#00b14f]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#00b14f]" />
                </div>

                <h3 className="relative text-[15px] font-bold text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="relative text-[13px] text-white/55 leading-relaxed flex-1">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-8 md:py-10 rounded-3xl border border-[#00b14f]/20 bg-white/2 overflow-hidden">
          {/* Glow accent */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-56 h-56 bg-[#00b14f]/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative text-center md:text-left">
            <p className="text-white font-semibold text-lg md:text-xl leading-snug">
              India&apos;s first localised super fast charging hub is here —
            </p>
            <p className="text-white/55 text-sm md:text-base mt-1">
              with 1000+ installations nationwide and more advanced ultra-fast EV Charging Solutions
              on the way.
            </p>
          </div>

          <div className="relative flex items-center gap-3 shrink-0">
            <Link
              href="/business/franchise"
              className="inline-flex items-center gap-2 bg-[#00b14f] hover:bg-[#009b45] text-white font-bold text-[13px] px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,177,79,0.35)] hover:shadow-[0_8px_28px_rgba(0,177,79,0.5)] hover:-translate-y-0.5"
            >
              Become a Partner
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold text-[13px] px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Find a Station
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
