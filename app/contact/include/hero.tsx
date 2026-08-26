"use client";

import React from "react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
          alt="Contact Relux Electric"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight mb-4">
          Contact Relux Electric
        </h1>
        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
          Share your information with us, and one of our dedicated representatives will reach out promptly to guide you with the right solutions.
        </p>
      </div>
    </section>
  );
}
