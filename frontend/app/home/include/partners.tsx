"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "Maruti Suzuki", logo: "/images/partners/MarutiSuzuki.svg" },
  { name: "NREDCAP", logo: "/images/partners/NRedcap.svg" },
  { name: "Renault Nissan", logo: "/images/partners/RenaultNissan.svg" },
  { name: "Ather", logo: "/images/partners/Ather.svg" },
  { name: "Audi", logo: "/images/partners/Audi.svg" },
  { name: "BYD", logo: "/images/partners/BYD.svg" },
  { name: "Casagrand", logo: "/images/partners/Casagrand.svg" },
  { name: "Indinfravit", logo: "/images/partners/Indinfravit.svg" },
  { name: "Mahindra", logo: "/images/partners/Mahindra.svg" },

];

export default function HomePartners() {
  return (
    <section className="relative w-full py-8 bg-black overflow-hidden">
      {/* Title Row */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="hidden md:block h-px flex-1 max-w-[150px] bg-linear-to-r from-transparent to-white/20" />
        <h2 className="text-white/80 text-[13px] md:text-[14px] font-semibold tracking-[0.2em] uppercase text-center leading-relaxed">
          Recognised & Partnered <br className="md:hidden" />
          <span className="text-[#00b14f]">with Industry Leaders</span>
        </h2>
        <div className="hidden md:block h-px flex-1 max-w-[150px] bg-linear-to-l from-transparent to-white/20" />
      </div>

      {/* Logo Marquee Row */}
      <div className="relative">
        {/* Edge Fades */}
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-black via-black/80 to-transparent z-10" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-black via-black/80 to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="flex items-center animate-marquee whitespace-nowrap py-4 gap-12 md:gap-24" style={{ animationDuration: "35s" }}>
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 group/logo"
              >
                <div className="relative flex items-center justify-center rounded-2xl transition-all duration-500 group-hover/logo:-translate-y-1">
                  {/* Green Glow Background Effect */}
                  <div className="absolute inset-0 bg-[#00b14f]/5 blur-[40px] rounded-full opacity-0 group-hover/logo:opacity-100 transition-all duration-500" />
                  
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="relative z-10 object-contain brightness-0 invert opacity-60 group-hover/logo:opacity-100 transition-all duration-300 group-hover/logo:scale-110 w-auto h-7 md:h-11"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
