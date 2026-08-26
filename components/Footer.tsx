"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/locations" || pathname.startsWith("/locations/")) {
    return null;
  }

  if (pathname === "/admin-panel" || pathname.startsWith("/admin-panel/")) {
    return null;
  }

  return (
    <footer className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8 relative">

      {/* Floating WhatsApp Widget */}
      <Link
        href="https://wa.me/919884866993"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.933 3.659 1.422 5.635 1.423h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>

      <div className="max-w-5xl mx-auto">
        {/* Main Floating Box */}
        <div className="relative bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,177,79,0.15)] overflow-hidden">

          {/* Top Branding Accent */}
          <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-transparent via-[#00b14f] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start relative z-10">

            {/* Logo & Vision */}
            <div className="flex flex-col gap-6">
              <Link href="/">
                <Image
                  src="/relux-electric-india-logo.svg"
                  alt="Relux Electric Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Sustainable charging solutions for a greener future. Leader in high-speed EV infrastructure across India.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { Icon: FaFacebookF, href: "https://www.facebook.com/reluxelectric" },
                  { Icon: FaInstagram, href: "https://www.instagram.com/reluxelectric/" },
                  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/reluxelectric/" },
                  { Icon: FaYoutube, href: "https://www.youtube.com/@reluxelectric7550" },
                  { Icon: FaXTwitter, href: "https://x.com/reluxelectric" }
                ].map(({ Icon, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-[#00ec62] hover:bg-[#00ec62]/10 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links Group */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Menu</h4>
                <ul className="space-y-4">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Locations", href: "/locations" },
                    { name: "Blogs", href: "/activity-hub/blogs" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-zinc-500 hover:text-[#00ec62] text-sm transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Support</h4>
                <ul className="space-y-4">
                  {[
                    { name: "FAQ", href: "/faq" },
                    { name: "Contact", href: "/contact" },
                    { name: "Franchise", href: "/business/franchise" },
                    { name: "Zero Investment", href: "/business/zero-investment" },
                    { name: "Videos", href: "/activity-hub/videos" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-zinc-500 hover:text-[#00ec62] text-sm transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Apps */}
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <a href="mailto:enquiry@reluxelectric.com" className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00b14f]/20 transition-colors">
                    <FiMail className="w-4 h-4 text-[#00b14f]" />
                  </div>
                  enquiry@reluxelectric.com
                </a>
                <a href="tel:+919884866993" className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00b14f]/20 transition-colors">
                    <FiPhone className="w-4 h-4 text-[#00b14f]" />
                  </div>
                  +91 9884866993
                </a>
              </div>
              <div className="flex gap-4">
                <Link href="https://apps.apple.com/in/app/relux-electric/id1552174323" className="hover:opacity-80 transition-opacity">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={120} height={35} className="h-8 w-auto" />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.namp.relux&pcampaignid=web_share" className="hover:opacity-80 transition-opacity">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" width={120} height={35} className="h-8 w-auto" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Relux Electric India. All rights reserved.</p>

          <p>
            Designed & Developed by{" "}
            <a
              href="https://ec4you.in/"
              target="_blank"
              className="text-[#00ec62] hover:text-[#00b14f] transition-colors font-semibold"
            >
              EC4You
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-800">|</span>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
