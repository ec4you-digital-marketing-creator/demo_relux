"use client";

import React from "react";
import Link from "next/link";
import { FiZap, FiArrowRight } from "react-icons/fi";

export default function HomeCaaS() {
  return (
    <section className="relative w-full py-6 md:py-10 bg-white overflow-hidden font-sans">
      <div className="w-full max-w-[95%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 relative z-10">
        {/* Black Card container with decreased height & increased width */}
        <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden p-6 md:p-8 lg:px-10 bg-black border border-black/10 shadow-xl transition-all duration-500">
          
          {/* Top highlight green gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#00b14f] to-transparent opacity-80" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-8">
            
            <div className="flex-1">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug mb-2.5">
                Charging as a Service <span className="text-[#00b14f]">(CaaS)</span>
              </h2>

              {/* Exact User Text Content */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-normal max-w-5xl">
                At Relux, we provide Charging as a Service (CaaS), letting you lease your EV chargers from us instead of buying them. We provide the charging infrastructure, technology, operations, and ongoing support—so you can offer EV charging while we take care of the complexity behind it.
              </p>
            </div>

            {/* Interactive Action Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/business/franchise"
                className="group/btn relative inline-flex items-center justify-center gap-2.5 bg-[#00b14f] hover:bg-[#009b45] text-white font-bold text-[13px] md:text-[14px] px-6 py-3 md:px-7 md:py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,177,79,0.4)] hover:shadow-[0_8px_28px_rgba(0,177,79,0.6)] hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Partner With Us</span>
                <FiArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
