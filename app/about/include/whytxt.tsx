"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Wrench, Infinity, Languages } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Social Media Marketing Support",
        description: "We manage your social media and help your EV charging station reach the right customers every day.",
        icon: Megaphone,
    },
    {
        id: 2,
        title: "Free Installation",
        description: "We install your EV charging station completely free — no setup cost, no hidden charges, no stress.",
        icon: Wrench,
    },
    {
        id: 3,
        title: "End-to-End Support",
        description: "We support you at every step — from setup to your first earning, we are always by your side.",
        icon: Infinity,
    },
    {
        id: 4,
        title: "24/7 Elite Support",
        description: "Call us anytime, day or night — we are always ready to help you in your own regional language.",
        icon: Languages,
    },
];

export default function WhyTxt() {
    return (
        <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden px-6">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00b14f]/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

                    {/* Left: Heading Area */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#00b14f]" />
                                <span className="text-[#00b14f] text-[10px] font-black uppercase tracking-[0.4em]">Advantage</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                                What <span className="text-[#00b14f]">EV Solutions</span> <br />
                                will you find <br />
                                from us?
                            </h2>
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-white/60 text-sm md:text-base leading-relaxed max-w-xs"
                        >
                            Relux Electric provides comprehensive infrastructure solutions to create a solid foundation for sustainable mobility.
                        </motion.p>
                    </div>

                    {/* Right: Feature Grid - Compact */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        {features.map((feature, idx) => (
                            <motion.div 
                                key={feature.id} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col gap-4"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#00b14f] group-hover:border-transparent group-hover:scale-110">
                                    <feature.icon className="w-4 h-4 text-[#00b14f] group-hover:text-white transition-colors" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-sm md:text-base font-black text-white tracking-tight uppercase group-hover:text-[#00b14f] transition-colors leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/40 text-[11px] md:text-xs leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
