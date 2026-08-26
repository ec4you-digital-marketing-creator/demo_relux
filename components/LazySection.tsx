"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  placeholderHeight?: string;
}

export default function LazySection({ children, placeholderHeight = "150px" }: LazySectionProps) {
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px", // Pre-load when component is 300px near viewport
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div ref={ref} style={{ minHeight: isInView ? "auto" : placeholderHeight }}>
      {isInView ? children : null}
    </div>
  );
}
