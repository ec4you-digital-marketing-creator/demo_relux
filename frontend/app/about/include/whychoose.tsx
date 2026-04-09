"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function WhyChooseUs() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-black overflow-hidden font-sans">
            {/* Background Glow (Right Side) */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00b14f]/15 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="w-full max-w-8xl mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                    {/* Left Column (Col-span 4) */}
                    <div className="md:col-span-4 flex flex-col justify-between py-2">
                        <div className="flex flex-col">
                            <span className="inline-block w-fit px-3 py-1 mb-6 text-[15px] font-bold tracking-widest uppercase text-[#84cc16] rounded-sm">
                                Why Choose Us
                            </span>
                            <h2 className="text-4xl md:text-[2.8rem] font-bold text-white leading-tight mb-4 tracking-tight">
                                Solutions For All EV <br />
                                Charging Programs!
                            </h2>
                        </div>

                        {/* Small Landscape Card (Height Optimized to fill space) */}
                        <div className="relative w-full aspect-16/13 md:aspect-16/12 lg:aspect-16/13 rounded-24px overflow-hidden group shadow-2xl border border-white/5">
                            <Image
                                src="/about/relux-electric-fast-installation.webp"
                                alt="Relux Station Small"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Arrow Button */}
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <FiArrowRight className="w-6 h-6 text-[#00b14f]" />
                            </div>
                        </div>
                    </div>

                    {/* Center Column (Col-span 4) - Tall Card */}
                    <div className="md:col-span-4">
                        <div className="relative h-full min-h-[500px] rounded-24px overflow-hidden group shadow-2xl border border-white/5">
                            <Image
                                src="/about/relux-electric-expert-team.webp"
                                alt="Relux Service Tall"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Arrow Button */}
                            <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <FiArrowRight className="w-7 h-7 text-[#00b14f]" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Col-span 4) */}
                    <div className="md:col-span-4 flex flex-col justify-between py-2">
                        {/* Top Card (Height Increased to fill space) */}
                        <div className="relative w-full aspect-16/18 md:aspect-16/16 lg:aspect-16/18 rounded-24px overflow-hidden group shadow-2xl border border-white/5">
                            <Image
                                src="/about/relux-electric-reliable-service.webp"
                                alt="Relux Charging App"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-col gap-6 pt-6">
                            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                                India's leading electric vehicle charging infrastructure provider, the only company with End to End charging services for private & public sectors as per the Indian government MOP guidelines across India.
                            </p>

                            <button className="w-fit px-8 py-3.5 bg-[#84cc16] hover:bg-[#a3e635] text-black font-bold text-sm rounded-lg transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(132,204,22,0.3)] hover:-translate-y-1">
                                Get Started
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
        .rounded-24px {
          border-radius: 24px;
        }
      `}</style>
        </section>
    );
}
