"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState("Vision");

    const tabs = [
        { id: "Vision", label: "Vision", content: '"To accelerate India\'s transition towards sustainable mobility by providing accessible and reliable EV charging infrastructure."' },
        { id: "Mission", label: "Mission", content: '"To build a seamless pan-India charging network that empowers every EV driver with confidence and convenience."' },
        { id: "Values", label: "Values", content: '"Innovation, Sustainability, and Reliability are the core pillars of everything we build at Relux."' },
    ];

    return (
        <section className="relative w-full pt-12 pb-6 md:pt-16 md:pb-10 bg-black overflow-hidden font-sans px-4">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00b14f]/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

            <div className="w-full max-w-8xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Visual Composition (Refined) */}
                    <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
                        {/* Main Image */}
                        <div className="relative w-full aspect-4/3 rounded-4xl overflow-hidden shadow-2xl border border-white/5">
                            <Image
                                src="/about/relux_website_img.webp"
                                alt="Relux Team"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Overlapping Secondary Image (Bottom-Right) */}
                        <div className="absolute -bottom-25 -right-10 md:-right-4 w-[240px] md:w-[280px] aspect-square rounded-4xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 hidden md:block">
                            <Image
                                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
                                alt="Relux Station"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* High Impact Badge (Top-Left Squircle) */}
                        <div className="absolute -top-10 -left-6 z-30 bg-[#00b14f] text-white p-6 md:p-8 rounded-4xl md:rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px]">
                            <span className="text-4xl md:text-5xl font-black mb-1">12+</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 text-center leading-tight">
                                years expe<br />rience
                            </span>
                        </div>
                    </div>

                    {/* Right: Content Part (Refined) */}
                    <div className="relative z-10 order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#84cc16]">
                                About Us
                            </span>
                            <div className="w-12 h-px bg-[#84cc16]/50" />
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
                            Solutions For All 
                            EV Charging 
                            Programs!
                        </h2>

                        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                            Relux entered the business in 2009 & entered the EV platform in 2012, started the field right from scratch, eventually became Pioneers in the industry.
                        </p>

                        {/* Tab Switcher */}
                        <div className="flex items-center gap-8 mb-8 border-b border-white/10 pb-4">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-sm md:text-base font-bold uppercase tracking-widest transition-all relative pb-4 ${activeTab === tab.id ? "text-[#84cc16]" : "text-white/40 hover:text-white/60"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#84cc16]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content Area */}
                        <div className="min-h-[100px]">
                            <p className="text-white/90 text-lg md:text-xl font-medium italic leading-relaxed">
                                {tabs.find((t) => t.id === activeTab)?.content}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
