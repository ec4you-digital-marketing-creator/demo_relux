"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiVideo, FiImage, FiCalendar, FiFileText } from "react-icons/fi";

const categories = [
  {
    name: "Videos",
    href: "/activity-hub/videos",
    description: "Explore our collection of corporate videos, site tours, and hyper-charging demonstrations.",
    icon: FiVideo,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    count: "12 Videos"
  },
  {
    name: "Blogs",
    href: "/activity-hub/blogs",
    description: "In-depth articles about EV technology, green mobility, and the future of charging in India.",
    icon: FiFileText,
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop",
    count: "15 Articles"
  }
];

export default function OurWorksHub() {
  return (
    <main className="min-h-screen bg-black">
      <PageHeader 
        title="Our Works" 
        subtitle="Explore our journey in powering the nation with sustainable EV infrastructure through visuals, stories, and events."
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              href={cat.href}
              className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/50 border border-white/5 aspect-16/10 transition-all duration-700 hover:-translate-y-2"
            >
              {/* Image Background */}
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-40"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
              
              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#00b14f]/20 rounded-xl backdrop-blur-md border border-[#00b14f]/20">
                    <cat.icon className="w-6 h-6 text-[#00b14f]" />
                  </div>
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">{cat.count}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#00b14f] transition-colors leading-tight">
                  {cat.name}
                </h2>
                
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {cat.description}
                </p>
                
                <div className="inline-flex items-center gap-3 text-white font-bold text-sm tracking-wide group-hover:text-[#00b14f] transition-colors">
                  <span>Explore Category</span>
                  <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Decorative side glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b14f]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
