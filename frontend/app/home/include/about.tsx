"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  {
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    alt: "Relux Electric Vision",
  },
  {
    src: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=2072&auto=format&fit=crop",
    alt: "EV Charging Infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2070&auto=format&fit=crop",
    alt: "Future of Mobility",
  },
];

export default function HomeAbout() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#050505] overflow-hidden font-sans">
      {/* Background Glows for depth */}
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-[#00b14f]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#00b14f]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-24 items-stretch">

          {/* Left Side: Content Area (Full Height + Centered) */}
          <div className="relative z-10 order-2 lg:order-1 flex flex-col justify-center py-4">
            <div className="relative">
              <span className="inline-block px-0 mb-4 text-[13px] font-bold tracking-[0.25em] uppercase text-[#00b14f]">
                About
              </span>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Relux <span className="text-[#e2e8f0]">Electric</span>
              </h2>

              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed font-normal max-w-xl">
                <p>
                  We are committed to revolutionizing the electric vehicle charging experience, enabling a sustainable and zero-carbon transition to clean mobility while providing innovative solutions for businesses and individuals. Our mission is to build a reliable and accessible EV charging network across the nation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Glowing Image Slider */}
          <div className="relative order-1 lg:order-2 flex items-center">
            <div className="relative w-full aspect-video rounded-4xl overflow-hidden group border-2 border-[#00b14f] shadow-[0_0_50px_rgba(0,177,79,0.15)]">

              {/* Image Map */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-40" />
                </div>
              ))}

              {/* Refined Slider Indicators (Elliptical) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide
                      ? "w-8 bg-[#00b14f]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Background dynamic glows */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#00b14f]/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#00b14f]/10 blur-3xl rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
