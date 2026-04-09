"use client";

import React from "react";
import Image from "next/image";
import { FiZap, FiCpu, FiMapPin, FiServer, FiShield } from "react-icons/fi";

const features = [
    {
        id: 1,
        title: "Fast EV Charging Solutions",
        description: "Experience fast EV charging with reliable EV infrastructure and accessible electric charging points near me.",
        icon: FiZap,
    },
    {
        id: 2,
        title: "Smart Charging Technology",
        description: "Advanced electric vehicle charging with DC fast charging and efficient EV charging stations for users.",
        icon: FiCpu,
    },
    {
        id: 3,
        title: "Convenient Charging Access",
        description: "Find EV charging near me easily with smart charging stations and reliable electric car charger support.",
        icon: FiMapPin,
    },
    {
        id: 4,
        title: "Future-Ready EV Infrastructure",
        description: "Modern EV infrastructure with scalable charging stations and seamless electric vehicle charging solutions everywhere.",
        icon: FiServer,
    },
    {
        id: 5,
        title: "Reliable Charging Network",
        description: "Access electric charging points near me with fast EV charging and trusted charging station availability daily.",
        icon: FiShield,
    },
];

export default function WhyTxt() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden font-sans">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about/relux_website_img.webp"
                    alt="Relux Background"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 " />
            </div>

            <div className="relative w-full max-w-8xl mx-auto px-6 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                    {/* First Row: 3 Features */}
                    {features.slice(0, 3).map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}

                    {/* Second Row: 2 Features Centered */}
                    <div className="lg:col-span-3 flex flex-col md:flex-row lg:justify-center gap-6 lg:gap-8">
                        {features.slice(3).map((feature) => (
                            <div key={feature.id} className="w-full lg:max-w-[calc(33.333%-1.5rem)]">
                                <FeatureCard feature={feature} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature }: { feature: any }) {
    const Icon = feature.icon;
    return (
        <div className="group relative bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-green-500/30 hover:-translate-y-2 h-full overflow-hidden flex flex-col items-start text-left shadow-2xl">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-10 border border-green-500/30 backdrop-blur-md">
                <Icon className="w-6 h-6 text-green-500" />
            </div>

            <h3 className="text-2xl md:text-[1.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                {feature.title}
            </h3>

            <p className="text-white/60 text-base md:text-lg leading-relaxed">
                {feature.description}
            </p>

        </div>
    );
}
