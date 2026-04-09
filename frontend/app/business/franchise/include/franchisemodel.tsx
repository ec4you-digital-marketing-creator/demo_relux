"use client";

import React from "react";
import Image from "next/image";

const models = [
  {
    title: "MINI 30KW",
    capacity: "30kW",
    space: "200sq.ft",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "STD 60 KW",
    capacity: "60kW",
    space: "400sq.ft",
    image: "/about/relux_website_img.webp",
  },
  {
    title: "STD 120 KW",
    capacity: "120kW",
    space: "600sq.ft",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "SUPER HUB",
    space: "3,000 sq.ft",
    image: "/images/relux-electric-tamilnadu-banner.png",
  },
  {
    title: "MEGA HUB",
    space: "5,000 - 10,000 sq.ft",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
];

export default function FranchiseModels() {
  return (
    <section className="relative w-full py-10 bg-black overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {models.map((model, index) => (
          <div 
            key={model.title}
            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 p-8 md:p-12 rounded-[2.5rem] bg-[#020d06] border border-[#00b14f]/15 transition-all hover:border-[#00b14f]/40 group`}
          >
            {/* Visual Part */}
            <div className="w-full lg:w-1/2 aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={model.image}
                alt={model.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content Part */}
            <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 === 1 ? "items-start lg:items-start" : "items-start lg:items-start"} space-y-8`}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
                {model.title}
              </h2>
              
              <div className="space-y-4">
                {model.capacity && (
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 text-sm md:text-base font-bold uppercase tracking-widest">Charging Capacity</span>
                    <span className="text-[#00b14f] text-xl md:text-2xl font-black">{model.capacity}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <span className="text-white/40 text-sm md:text-base font-bold uppercase tracking-widest">Space Requirement</span>
                  <span className="text-[#00b14f] text-xl md:text-2xl font-black">{model.space}</span>
                </div>
              </div>

              <button className="w-full lg:w-fit px-12 py-4 bg-[#00b14f] hover:bg-[#009641] text-white font-black text-lg rounded-2xl transition-all shadow-[0_10px_20px_rgba(0,177,79,0.3)] hover:shadow-[0_20px_40px_rgba(0,177,79,0.5)] hover:-translate-y-1">
                Enquiry
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
