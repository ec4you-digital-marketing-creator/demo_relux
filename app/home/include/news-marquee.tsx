"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BASE_URL } from "@/app/ui/baceurl";

interface BlogItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  read_time: string;
  tag: string;
  created_at: string;
}

const defaultNewsItems: any[] = []; // Dummy data removed

const getFullImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const finalPath = cleanPath.startsWith("/media/") ? cleanPath : `/media${cleanPath}`;
  return `${BASE_URL}${finalPath}`;
};

const getRelativeTime = (dateString: string) => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 1) return "Today";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  } catch (e) {
    return "Recently";
  }
};

export default function HomeNewsMarquee() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/articles/`);
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        }
      } catch (err) {
        console.error("Failed to fetch marquee blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  // Fallback to high-quality default items if no blogs are loaded yet
  const displayItems = blogs.length > 0 ? blogs : []; // No dummy data

  // Duplicate items to ensure a seamless continuous loop marquee
  const marqueeItems = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  return (
    <section className="bg-black py-6 md:py-10 overflow-hidden relative">
      {/* Background depth effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,177,79,0.05),transparent_70%)] pointer-events-none" />

      <div className="w-full flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 relative z-20 px-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 md:w-12 bg-linear-to-r from-transparent to-[#00b14f]" />
            <span className="text-[#00b14f] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">Latest Updates</span>
            <div className="h-px w-8 md:w-12 bg-linear-to-l from-transparent to-[#00b14f]" />
          </div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Relux <span className="text-[#00b14f]">Feed</span>
          </h3>
        </div>

        {/* Marquee Wrapper with Side Overlays */}
        <div className="relative flex items-center overflow-hidden h-24 md:h-32 group/marquee">

          {/* Faded edges for seamless transition */}
          <div className="absolute left-0 inset-y-0 w-8 md:w-64 bg-linear-to-r from-black via-black/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 md:w-64 bg-linear-to-l from-black via-black/50 to-transparent z-20 pointer-events-none" />

          {/* Scrolling News Content */}
          <div
            className="flex gap-4 md:gap-8 animate-marquee group-hover/marquee:pause cursor-pointer px-4 md:px-10 will-change-transform w-max"
            style={{ animationDuration: "60s" }}
          >
            {marqueeItems.map((item, idx) => (
              <a
                key={idx}
                href={item.media_link || "/activity-hub/blogs"}
                target={item.media_link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center bg-[#00b14f] hover:bg-[#00b14f] pr-4 md:pr-10 rounded-2xl md:rounded-5xl transition-all duration-300 border border-white/20 hover:border-white/40 group/item overflow-hidden w-70 md:w-auto shrink-0"
              >
                {/* Image Container - Flush Left */}
                <div className="relative w-20 h-24 md:w-32 md:h-32 shrink-0 border-r border-white/10">
                  <img
                    src={getFullImageUrl(item.image)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Text Content - Spaced from image */}
                <div className="flex flex-col ml-3 md:ml-8 py-2 md:py-4 flex-1">
                  <div className="flex items-center gap-2 mb-1 md:mb-1">
                    <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-[7px] md:text-[10px] text-white uppercase tracking-widest font-black">
                      {item.author || "Relux News"}
                    </span>
                    <span className="text-[8px] md:text-xs text-white/70 font-medium">{getRelativeTime(item.created_at)}</span>
                  </div>
                  <span className="text-white text-[11px] md:text-lg font-bold tracking-tight whitespace-normal line-clamp-2 leading-tight">
                    {item.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
