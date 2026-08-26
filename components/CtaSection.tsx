"use client";

import React from "react";
import Link from "next/link";
import { Zap, ArrowRight, MapPin, Briefcase, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white font-sans overflow-hidden border-t border-b border-white/10">
      
      {/* Background Ambient Glow & Radial Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-[#00b14f]/12 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00b14f]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl md:rounded-4xl bg-linear-to-r from-[#0c1810] via-[#050e07] to-[#0c1810] border border-[#00b14f]/30 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Top Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#00b14f] to-transparent" />

          {/* Left Content Column */}
          <div className="space-y-6 text-center lg:text-left max-w-2xl">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b14f]/15 border border-[#00b14f]/30 text-[#00b14f] text-xs font-black uppercase tracking-widest">
              <Zap className="w-4 h-4 fill-[#00b14f]" />
              <span>POWER THE FUTURE WITH RELUX</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              BUILD A PROFITABLE <br className="hidden sm:inline" />
              <span className="text-[#00b14f]">EV CHARGING BUSINESS</span> TODAY
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Join India's leading EV charging network. Whether you own commercial land or want to invest in fast-charging infrastructure, Relux Electric provides turnkey solutions with 24/7 CMS monitoring.
            </p>

            {/* Mini Trust Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00b14f]" />
                <span>ARAI Certified Chargers</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00b14f]" />
                <span>30kW to 360kW Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#00b14f]" />
                <span>1.5 - 3.5 Yrs Payback</span>
              </div>
            </div>

          </div>

          {/* Right Action Buttons Column */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
            
            {/* Primary Action Button */}
            <Link
              href="/business/franchise"
              className="px-8 py-4 rounded-full bg-[#00b14f] hover:bg-[#009643] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#00b14f]/25 hover:scale-105"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Franchise</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Action Button */}
            <Link
              href="/locations"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
            >
              <MapPin className="w-4 h-4 text-[#00b14f]" />
              <span>Locate Stations</span>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
