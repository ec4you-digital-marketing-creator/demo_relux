"use client";

import React from "react";
import { FiGlobe, FiShare2, FiMonitor } from "react-icons/fi";

const features = [
  {
    title: "Additional Income",
    description: "Turn your unused land or parking space into a steady revenue source. Earn from every EV charge at your location - with zero investment or maintenance costs.",
    icon: FiGlobe,
    highlighted: true,
  },
  {
    title: "Integration With no Effort",
    description: "RELUX handles everything - from setup and installation to operation and maintenance so you can start earning effortlessly.",
    icon: FiShare2,
    highlighted: false,
  },
  {
    title: "Unlock Your Business Potential",
    description: "Boost your business visibility, attract EV users, and enhance your brand's green image while contributing to a cleaner, sustainable future.",
    icon: FiMonitor,
    highlighted: false,
  },
];

export default function ZeroFeatures() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-4 py-1 mb-6 text-[11px] font-bold uppercase tracking-widest text-white bg-[#00b14f] rounded-full">
            Location partner
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-tight">
              RELUX Location partner EV <br />
              Charging Station Franchise <br />
              Plan
            </h2>
            <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-lg mb-2">
              Unlock the potential of your unused space with the RELUX Zero Investment EV Charging Station Franchise Plan. If you have free land along a highway or a parking area in front of your hotel, resort, restaurant, or more that can accommodate up to two cars, you can place our charging station at your location—without any investment required.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom-8 duration-1000`}
              style={{ 
                backgroundColor: feature.highlighted ? "#00b14f" : "#1a1a1a",
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${feature.highlighted ? "bg-black" : "bg-black/40"}`}>
                <feature.icon className={`w-7 h-7 ${feature.highlighted ? "text-[#00b14f]" : "text-white"}`} />
              </div>
              <h3 className={`text-2xl font-black mb-6 ${feature.highlighted ? "text-black" : "text-white"}`}>
                {feature.title}
              </h3>
              <p className={`text-base leading-relaxed ${feature.highlighted ? "text-black/70 font-medium" : "text-white/40"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
