"use client";

import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function ZeroHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div>
              <span className="inline-block mb-4 text-[13px] font-bold tracking-[0.2em] uppercase text-[#00b14f]">
                Earn Without Investing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
                ZERO INVESTMENT EV <br />
                CHARGING STATION <br />
                PARTNERSHIP
              </h1>
              <p className="text-[#00b14f] text-lg md:text-xl font-bold uppercase tracking-widest mb-6">
                EARN WITHOUT INVESTING
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                Partner with RELUX Electric for a zero-investment EV charging station at your location. Earn revenue from charging fees without any upfront costs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "No Initial Investment",
                "Revenue Sharing Model",
                "Full Support Provided"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00b14f]/20 flex items-center justify-center">
                    <FiCheck className="w-4 h-4 text-[#00b14f]" />
                  </div>
                  <span className="text-white/80 font-bold text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-[#84cc16] hover:bg-[#65a30d] text-white font-black rounded-xl transition-all shadow-[0_10px_20px_rgba(132,204,22,0.3)] hover:shadow-[0_20px_40px_rgba(132,204,22,0.5)] hover:-translate-y-1 uppercase tracking-widest text-sm">
              Partner Now
            </button>
          </div>

          {/* Right Column: 3-Panel Grid */}
          <div className="relative h-[500px] md:h-[650px] flex gap-4 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="flex-1 relative rounded-3xl overflow-hidden mt-12">
              <Image
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
                alt="Station 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 relative rounded-3xl overflow-hidden mb-12 border-2 border-[#00b14f]/30">
              <Image
                src="/about/relux_website_img.webp"
                alt="Station 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 relative rounded-3xl overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1542344807-157f76301e8a?q=80&w=2127&auto=format&fit=crop"
                alt="Station 3"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00b14f]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
