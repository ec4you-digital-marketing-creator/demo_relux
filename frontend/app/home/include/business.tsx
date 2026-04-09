"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const opportunities = [
  {
    tag: "FEATURED BUSINESS",
    title: "Host a Charging Station",
    description: "Expand with Relux Electric without the financial burden. A fully supported, zero-investment EV franchise model designed to help entrepreneurs step into the green mobility ecosystem effortlessly.",
    image: "/images/2.png",
    link: "/host-station",
  },
  {
    tag: "INVESTOR OPPORTUNITY",
    title: "Own a Charging Station",
    description: "Partner with India's fastest-growing EV network. Become a franchise owner and drive high-return sustainable growth with Relux's end-to-end support system and cutting-edge technology.",
    image: "/images/2.png",
    link: "/own-station",
  },
];

export default function HomeBusiness() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-white overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00b14f]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-10 md:mb-12">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-tight text-center">
            Business <span className="text-[#00b14f]">Opportunities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {opportunities.map((opp, i) => (
            <Link
              key={i}
              href={opp.link}
              className="group relative block aspect-16/10 lg:aspect-square xl:aspect-16/10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-white/5"
            >
              {/* Background Image */}
              <Image
                src={opp.image}
                alt={opp.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black via-black/60 to-transparent z-10" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                <div className="hidden md:block mb-4">
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#00b14f] uppercase">
                    {opp.tag}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 group-hover:text-[#00b14f] transition-colors leading-[1.1]">
                  {opp.title}
                </h3>

                <p className="hidden md:block text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {opp.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-10 md:h-12 px-6 md:px-8 rounded-full bg-[#00b14f] text-white flex items-center gap-3 font-bold text-[12px] md:text-sm transition-all duration-500 group-hover:shadow-[0_10px_30px_rgba(0,177,79,0.4)]">
                    <span>Learn More</span>
                    <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <span className="hidden md:inline text-white/30 text-[10px] font-bold tracking-widest uppercase group-hover:opacity-0 transition-opacity duration-300">
                    Hover to explore
                  </span>
                </div>
              </div>

              {/* Decorative side glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b14f]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
