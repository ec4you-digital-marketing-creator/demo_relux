"use client";

import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative w-full py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00b14f]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === title.split(' ').length - 1 ? "text-[#00b14f]" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        {subtitle && (
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        
      </div>
    </div>
  );
}
