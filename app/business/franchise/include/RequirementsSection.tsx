"use client";

import React, { useState } from "react";
import {
  Wallet,
  Building2,
  MapPin,
  Maximize2,
  Zap,
  Clock,
  Coffee,
  FileCheck,
  Compass,
  Cpu,
  ShieldCheck,
  Award,
  CreditCard,
  TrendingUp,
  PlugZap,
  Receipt,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function RequirementsSection() {
  const [activeTab, setActiveTab] = useState<"requirements" | "terms">("requirements");

  const requirements = [
    {
      icon: Wallet,
      num: "01",
      title: "Suitable Investment Capacity",
      desc: "Investment capability based on the selected charging station model.",
    },
    {
      icon: Building2,
      num: "02",
      title: "Available Land or Commercial Space",
      desc: "Owned or legally leased space suitable for the proposed charging setup.",
    },
    {
      icon: MapPin,
      num: "03",
      title: "Accessible Location",
      desc: "A location with convenient vehicle access and good potential for EV charging demand.",
    },
    {
      icon: Maximize2,
      num: "04",
      title: "Adequate Space for Operations",
      desc: "Sufficient area for charging equipment, vehicle movement, and parking requirements.",
    },
    {
      icon: Zap,
      num: "05",
      title: "Power Connection Feasibility",
      desc: "Suitable electricity connection availability or feasibility at the proposed site.",
    },
    {
      icon: Clock,
      num: "06",
      title: "24×7 Site Accessibility",
      desc: "The location should allow customers to access the charging facility throughout the day and night.",
    },
    {
      icon: Coffee,
      num: "07",
      title: "Basic Customer Facilities",
      desc: "Adequate arrangements for customer convenience during the charging session.",
    },
    {
      icon: FileCheck,
      num: "08",
      title: "Valid Property Documents",
      desc: "Required ownership or lease documents for site verification and franchise onboarding.",
    },
  ];

  const terms = [
    {
      icon: Compass,
      num: "01",
      title: "Site Feasibility",
      desc: "RELUX will assess the proposed site and provide feasibility guidance. Revenue outcomes will depend on actual site performance.",
    },
    {
      icon: Cpu,
      num: "02",
      title: "Equipment & Design Standards",
      desc: "Chargers are to be sourced exclusively through RELUX. Canopy, visual identity, and overall setup must follow RELUX CI standards.",
    },
    {
      icon: ShieldCheck,
      num: "03",
      title: "Two-Year Warranty & Maintenance",
      desc: "Maintenance and warranty coverage will be provided by RELUX for an initial 2 years from the date of purchase.",
    },
    {
      icon: Award,
      num: "04",
      title: "Branding Guidelines",
      desc: "Only approved RELUX branding may be displayed at the charging facility. Third-party or franchisee logos are not permitted.",
    },
    {
      icon: CreditCard,
      num: "05",
      title: "Order Payment",
      desc: "100% advance payment is required before charger procurement and order dispatch.",
    },
    {
      icon: TrendingUp,
      num: "06",
      title: "ROI Timeline",
      desc: "The expected return period is 3–5 years, depending on traffic, location, electricity tariff, and charger utilization.",
    },
    {
      icon: PlugZap,
      num: "07",
      title: "Power Availability",
      desc: "The franchisee must maintain 24×7 full-time three-phase power, with adequate EB sanctioned load and backup arrangements where feasible.",
    },
    {
      icon: Receipt,
      num: "08",
      title: "GST & Payment Methods",
      desc: "All RELUX transactions are GST billed. Payments are accepted through RTGS or bank transfer only; cash payments are not accepted.",
    },
  ];

  return (
    <section className="relative w-full py-8 md:py-8 text-white font-sans border-b border-black/20 overflow-hidden">

      {/* Background Image: Left-aligned full section cover */}
      <img
        src="/franchise/req.jpg"
        alt="EV Charging Franchise Background"
        className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none"
      />

      {/* Light overlay — image stays clearly visible */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Subtle green bottom-tint glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#00b14f]/20 to-transparent pointer-events-none" />

      <div className="w-full px-[5%] relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 max-w-4xl mx-auto space-y-4">
          
          {/* Top Pill Badge */}
          <span className="inline-flex items-center gap-1.5 text-[#00b14f] text-xs font-black uppercase tracking-[0.25em]">
            
            FRANCHISE REQUIREMENTS & TERMS
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-lg">
            WHAT YOU NEED TO <span className="text-[#00b14f]">START YOUR EV FRANCHISE</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-semibold max-w-2xl drop-shadow">
            A suitable site, required infrastructure, and the ability to operate the charging facility are the basic requirements to get started.
          </p>

          {/* Interactive Tab Toggle Buttons */}
          <div className="flex justify-center pt-4">
            <div className="bg-black/50 backdrop-blur-md border border-white/20 p-1.5 rounded-full shadow-lg flex items-center gap-1">
              <button
                onClick={() => setActiveTab("requirements")}
                type="button"
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === "requirements"
                    ? "bg-[#00b14f] text-white shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="flex items-center gap-2">
          
                  <span>Site Requirements</span>
                </span>
              </button>

              <button
                onClick={() => setActiveTab("terms")}
                type="button"
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === "terms"
                    ? "bg-[#00b14f] text-white shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="flex items-center gap-2">
                 
                  <span>Franchise Terms & Guidelines</span>
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {(activeTab === "requirements" ? requirements : terms).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-[#00b14f]/70 hover:bg-black/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00b14f]/25 text-[#00b14f] flex items-center justify-center shrink-0 group-hover:bg-[#00b14f] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-white/40 group-hover:text-[#00b14f] font-black text-sm tracking-widest transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-black text-white tracking-tight leading-snug mb-2 group-hover:text-[#00b14f] transition-colors drop-shadow">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
