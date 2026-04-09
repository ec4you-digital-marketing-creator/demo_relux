"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight, FiSmartphone } from "react-icons/fi";

export default function HomeAppFeature() {
  return (
    <section className="relative w-full pt-16 pb-2 lg:py-4 bg-[#222222] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b14f]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00b14f]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Side: 60% Width (7 Columns) - Enlarged Visual */}
          <div className="relative order-2 lg:order-1 lg:col-span-6 h-full flex items-center justify-center group">
            {/* Signature Green Glow Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00b14f]/25 blur-[160px] rounded-full opacity-70 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

            <div className="relative w-full max-w-[800px] h-[500px] lg:h-[700px] transition-all duration-700 group-hover:drop-shadow-[0_0_60px_rgba(0,177,79,0.3)]">
              <Image
                src="/images/relux-electric-charge-smarter-app.png"
                alt="Relux Electric App"
                fill
                className="object-contain scale-[1.1] group-hover:scale-110 transition-transform duration-1000"
                priority
              />
            </div>
          </div>

          {/* Right Side: 40% Width (5 Columns) - Content Part */}
          <div className="relative z-30 order-1 lg:order-2 lg:col-span-6 font-sans flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-block px-0 mb-6 text-[13px] font-bold tracking-[0.2em] uppercase text-[#00b14f]">
              New Generation
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Charge Smarter with the <span className="text-[#00b14f]">
                Relux Electric App
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Track nearby charging stations, check charger availability, monitor usage, and pay securely — all in one smooth experience.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 pt-4">
              {/* App Store Badge */}
              <a
                href="https://apps.apple.com/in/app/relux-electric/id1552174323"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[140px] sm:w-[180px] h-[45px] sm:h-[55px] transition-all hover:scale-105 active:scale-95 duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(0,177,79,0.15)] block"
              >
                <Image
                  src="/images/relux-electric-app-download-app-store.webp"
                  alt="Download on App Store"
                  fill
                  className="object-contain"
                />
              </a>

              {/* Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.namp.relux&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[140px] sm:w-[180px] h-[45px] sm:h-[55px] transition-all hover:scale-105 active:scale-95 duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)] block"
              >
                <Image
                  src="/images/relux-electric-app-download-google-play.webp"
                  alt="Get it on Google Play"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
