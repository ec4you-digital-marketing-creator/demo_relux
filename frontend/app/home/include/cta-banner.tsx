"use client";

import React from "react";
import Link from "next/link";

export default function HomeCTABanner() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/images/city.jpg')" }}
      />
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 md:mb-8">
          PLUG IN. POWER UP. LEAVE THE REST <br />
          BEHIND. THE <span className="text-[#00b14f]">NATION&apos;S FASTEST</span> <br />
          <span className="text-[#00b14f]">CHARGING</span> FOR EVERY EV.
        </h2>

        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 font-normal">
          Relux Electric has built a strong national charging network that keeps EV owners powered no matter where they roam.
          <span className="text-white"> Move for modern highways</span>, our stations are accessible and trusted 24/7.
        </p>

        <Link
          href="/locations"
          className="inline-flex items-center justify-center bg-[#00b14f] hover:bg-[#009b45] text-white font-bold text-[14px] px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_24px_rgba(0,177,79,0.4)] hover:shadow-[0_12px_32px_rgba(0,177,79,0.5)] hover:-translate-y-1"
        >
          View Locations
        </Link>
      </div>
    </section>
  );
}
