"use client";

import React from "react";
import { BarChart2, TrendingUp, Zap, Users, ChevronRight, BatteryCharging } from "lucide-react";

/* ── Mini sparkline SVG ── */
function Sparkline() {
  return (
    <svg viewBox="0 0 160 60" className="w-36 h-12 text-[#00b14f]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00b14f" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00b14f" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path
        d="M 0,55 C 30,50 50,45 70,35 C 90,25 120,20 160,8 L 160,60 L 0,60 Z"
        fill="url(#sparklineGrad)"
      />
      <path
        d="M 0,55 C 30,50 50,45 70,35 C 90,25 120,20 160,8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="70" cy="35" r="2.5" fill="currentColor" />
      <circle cx="115" cy="21" r="2.5" fill="currentColor" />
      <circle cx="160" cy="8" r="3" fill="currentColor" />
    </svg>
  );
}

const bullets = [
  {
    icon: BatteryCharging,
    bold: "7.66% EV penetration",
    sub: "recorded in India in 2024",
  },
  {
    icon: TrendingUp,
    bold: "30% EV penetration",
    sub: "targeted by 2030",
  },
  {
    icon: Zap,
    bold: "50% EV sales share",
    sub: "projected in India by 2035",
  },
  {
    icon: Users,
    bold: "Growing EV adoption",
    sub: "is increasing the need for charging infrastructure",
  },
];

const statCards = [
  {
    icon: BarChart2,
    value: "7.66%",
    label: "EV Penetration in India",
    tag: "Recorded in 2024",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "EV Penetration Target",
    tag: "By 2030",
  },
  {
    icon: Zap,
    value: "50%",
    label: "EV Sales Share",
    tag: "Projected by 2035",
  },
  {
    icon: Users,
    value: null,
    label: "Massive Opportunity",
    tag: null,
    desc: "Infrastructure. Innovation. Sustainable Future.",
  },
];

export default function EvRevolutionSection() {
  return (
    <section
      className="relative w-full py-10 md:py-14 text-slate-900 font-sans border-b border-slate-200 overflow-hidden"
      style={{
        backgroundImage: "url('/franchise/bg_franchise.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* White overlay to keep content readable */}
      <div className="absolute inset-0 bg-white/25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8">

            {/* Label */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-[#00b14f] text-xs font-extrabold uppercase tracking-[0.2em] ">
                {/* <Zap className="w-3 h-3 fill-[#00b14f]" /> */}
                THE OPPORTUNITY
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                India's EV Adoption<br />
                <span className="text-[#00b14f]">Is Accelerating</span>
              </h2>
              {/* Underline bar */}
              <div className="mt-3 w-14 h-1 rounded-full bg-slate-900" />
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium max-w-md">
              India's EV market is moving from early adoption toward mainstream mobility, increasing the need
              for accessible charging infrastructure across cities, highways, and commercial locations.
            </p>

            {/* Bullet list */}
            <div className="space-y-2.5">
              {bullets.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-[#f9fafb] border border-slate-200 hover:border-[#00b14f]/40 hover:bg-[#00b14f]/5 transition-all duration-200 group cursor-default"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#00b14f]/10 text-[#00b14f] flex items-center justify-center shrink-0 group-hover:bg-[#00b14f] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-extrabold text-slate-900 text-sm">{b.bold} </span>
                      <span className="text-slate-500 text-sm font-medium">{b.sub}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-[#00b14f] transition-colors duration-200" />
                  </div>
                );
              })}
            </div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-5">

            {/* 2x2 stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-48"
                  >
                    {/* Top: Circular Icon Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#00b14f]/10 text-[#00b14f] flex items-center justify-center mb-3 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-1">
                      {card.value ? (
                        <>
                          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                            {card.value}
                          </div>
                          <div className="text-slate-700 font-bold text-xs sm:text-sm pt-1">
                            {card.label}
                          </div>
                          {card.tag && (
                            <div className="pt-2">
                              <span className="inline-block text-[11px] font-bold text-[#00b14f] bg-[#00b14f]/10 border border-[#00b14f]/25 px-3 py-1 rounded-full">
                                {card.tag}
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="text-lg sm:text-xl font-extrabold text-[#00b14f] leading-snug">
                            {card.label}
                          </div>
                          <div className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed pt-1">
                            {card.desc}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Bottom-right Sparkline */}
                    <div className="absolute bottom-0 right-0 pointer-events-none opacity-80">
                      <Sparkline />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dark banner — Why Now */}
            <div className="relative bg-[#0c0c0c] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-stretch">
                {/* Text */}
                <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                  <div className="inline-flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#00b14f] fill-[#00b14f]" />
                    <span className="text-[#00b14f] text-[10px] font-black uppercase tracking-[0.3em]">
                      WHY NOW?
                    </span>
                  </div>
                  <p className="text-white font-extrabold text-base md:text-lg leading-snug">
                    Growing EV adoption is increasing the need for{" "}
                    <span className="text-[#00b14f]">charging infrastructure</span> across India.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-[#00b14f] font-black text-[10px] uppercase tracking-widest">
                      Relux Electric
                    </span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>
                </div>
                {/* Image thumb */}
                <div className="hidden sm:block w-36 shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80"
                    alt="EV Charger"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#0c0c0c] to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
