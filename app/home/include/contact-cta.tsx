"use client";

import React from "react";
import Link from "next/link";
import { FiZap } from "react-icons/fi";

export default function HomeContactCTA() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-black overflow-hidden border-t border-white/5">
      {/* Background visual texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#00b14f 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-10">
          Charge <span className="text-[#00b14f]">Your Query</span>
        </h2>

        <p className="text-white/60 text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Ready to join the electric revolution? Get in touch with us today!
        </p>

        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center border-2 border-[#ea3323] hover:border-[#00b14f] text-white font-bold text-[15px] px-10 py-4 rounded-full transition-all duration-500 overflow-hidden shadow-[0_10px_20px_rgba(234,51,35,0.2)] hover:shadow-[0_20px_40px_rgba(0,177,79,0.5)] hover:-translate-y-1 uppercase tracking-widest"
        >
          {/* Charging Fill Layer (Green) */}
          <div className="absolute inset-0 bg-[#00b14f] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
          
          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-3">
            <FiZap className="w-5 h-5 text-[#ea3323] group-hover:text-white transition-colors duration-300 group-hover:animate-pulse" />
            Contact Us
          </span>
        </Link>
      </div>
    </section>
  );
}
