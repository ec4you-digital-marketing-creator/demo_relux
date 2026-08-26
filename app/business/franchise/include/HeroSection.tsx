"use client";

import React from "react";

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
}

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps = {}) {
  return (
    <section className="relative w-full min-h-55 md:min-h-70 overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1800&q=80"
        alt="EV Charging Station Franchise India"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 min-h-55 md:min-h-70">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl">
          Start Your EV Charging Station Franchise{" "}
          <span className="text-[#00b14f]">Across India</span>
        </h1>
        <p className="mt-5 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
          Explore EV charging franchise models designed for different investment levels, locations, and space requirements.
          Choose the right charging capacity based on your business and site potential.
        </p>
      </div>
    </section>
  );
}
