"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  // For static export: detect if URL is a blog slug and redirect
  useEffect(() => {
    const path = window.location.pathname;
    // If it's a blog-like path that was not pre-generated, stay on this page
    // The user will see the 404 page with a helpful link
    document.title = "Page Not Found | Relux Electric";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-[120px] font-black text-[#00b14f]/20 leading-none mb-4">404</div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
          Page Not Found
        </h1>
        <p className="text-white/40 text-sm max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-[#00b14f] text-white px-8 py-3 rounded-sm font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/activity-hub/blogs"
            className="border border-white/20 text-white/60 px-8 py-3 rounded-sm font-black text-xs uppercase tracking-[0.3em] hover:border-[#00b14f] hover:text-[#00b14f] transition-all"
          >
            Browse Blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
