"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from "react-icons/fi";

const newsItems = [
  {
    title: "Relux Electric raises ₹250 Cr to expand highway hyper-charging",
    date: "OCT 24, 2023",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Relux joins TNEB ELCOT to deploy 300+ stations across Tamil Nadu",
    date: "SEP 12, 2023",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Introducing Super Hub 2.0: The world's first 480kW rapid charger",
    date: "AUG 30, 2023",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Strategic MOU signed for 1000+ Charging points in Karnataka",
    date: "JUL 15, 2023",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Relux Electric wins 'Best Green Tech Startup' at Global EV Expo",
    date: "JUN 05, 2023",
    category: "Award",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Fleet Electrification Made Simple: New B2B Solutions portal",
    date: "MAY 20, 2023",
    category: "Business",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Relux reaches milestone: 50,000+ users on the mobile app",
    date: "APR 12, 2023",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "New ultra-compact home chargers launching for urban parking",
    date: "MAR 05, 2023",
    category: "Product",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Enhancing the Grid: Smart-charging pilot project goes live",
    date: "FEB 22, 2023",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function HomeUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  // Auto-play logic
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section 
      className="relative w-full py-12 md:py-32 bg-black overflow-hidden"
    >
      <style jsx>{`
        .updates-marquee {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.2, 1, 0.3, 1);
          gap: 24px;
          transform: translateX(calc(-${currentIndex} * (85vw + 24px)));
        }
        @media (min-width: 768px) {
          .updates-marquee {
            gap: 24px;
            transform: translateX(calc(-${currentIndex * (100 / newsItems.length)}%));
          }
        }
        @media (min-width: 1024px) {
          .updates-marquee {
            gap: 32px;
          }
        }
        .update-card-container {
          flex-shrink: 0;
          transition: opacity 0.3s;
          width: 85vw;
          opacity: 0.4;
        }
        .update-card-container.active {
          opacity: 1;
        }
        @media (min-width: 768px) {
          .update-card-container {
            width: calc(50% - 12px);
            opacity: 1 !important;
          }
        }
        @media (min-width: 1024px) {
          .update-card-container {
            width: calc(33.333% - 21.33px);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header: Title & Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-center md:text-left">
              Latest <span className="text-[#00b14f]">Updates</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base font-medium text-center md:text-left">
              Stay informed about the EV revolution and Relux milestones.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all active:scale-95"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all active:scale-95"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Sliding Carousel Viewport */}
        <div className="relative overflow-hidden group">
          <div className="updates-marquee">
            {newsItems.map((item, i) => (
              <div
                key={i}
                className={`update-card-container ${i === currentIndex ? 'active' : ''}`}
              >
                <article
                  className="group flex flex-col bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-[#00b14f]/30 transition-all duration-500 h-full"
                >
                  {/* Image Container with Floating Tag */}
                  <div className="relative aspect-16/10 overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-4 py-1.5 bg-[#00b14f] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-1">
                    <time className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">
                      {item.date}
                    </time>

                    <h3 className="text-xl font-bold text-white mb-8 leading-tight line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="mt-auto">
                      <button className="flex items-center gap-2 text-[#00b14f] font-bold text-xs uppercase tracking-widest group/link">
                        <span>Read Full Story</span>
                        <FiChevronRight className="transition-transform group-hover/link:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-only Navigation Buttons (Bottom Centered) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all active:scale-95"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all active:scale-95"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
