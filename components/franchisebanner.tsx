import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function FranchiseBanner() {
  return (
    <section className="w-full py-20 px-6 bg-black overflow-visible">
      <div className="max-w-7xl mx-auto relative mt-20 md:mt-32">
        
        {/* The Banner Container */}
        <div className="relative w-full min-h-[220px] md:min-h-[280px] bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 md:py-0 shadow-2xl">
          
          {/* Subtle Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00b14f]/5 blur-[100px] pointer-events-none" />

          {/* Text Content */}
          <div className="flex flex-col gap-2 relative z-10 text-center md:text-left ml-0 md:ml-32 lg:ml-48">
            <span className="text-white/60 text-lg md:text-xl font-medium tracking-tight italic">Become a</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Franchise Partner
            </h2>
          </div>

          {/* Action Button */}
          <div className="mt-8 md:mt-0 relative z-10">
            <button className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 hover:border-[#00b14f] hover:bg-[#00b14f] transition-all duration-300 text-white font-bold group">
              <span className="text-base md:text-lg">Apply Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* The Overlapping Charger Image */}
        <div className="absolute -top-32 md:-top-52 left-4 md:left-12 lg:left-20 w-40 md:w-64 lg:w-80 h-[300px] md:h-[450px] lg:h-[550px] z-20 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           <Image
            src="https://images.unsplash.com/photo-1695653422718-97d74496ec75?q=80&w=2070&auto=format&fit=crop" 
            alt="EV Charger"
            fill
            className="object-contain"
            priority
           />
        </div>

      </div>
    </section>
  );
}
