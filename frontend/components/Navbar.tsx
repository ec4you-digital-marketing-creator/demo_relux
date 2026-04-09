'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Zap, Video, Image as ImageIcon, Calendar, FileText, Briefcase, Rocket, Settings, Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === '#') {
      e.preventDefault();
    }
    setActivePath(href);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Locations', href: '/locations' },
    {
      name: 'Business',
      href: '#',
      isDropdown: true,
      subMenu: [
        { name: 'Franchise', href: '/business/franchise', desc: 'Join our growing network', icon: Briefcase },
        { name: 'Zero Investment', href: '/business/zero-investment', desc: 'Start with zero capital', icon: Rocket },
        { name: 'Service', href: '/business/service', desc: 'Explore our services', icon: Settings },
      ]
    },
    {
      name: 'Our Works',
      href: '#',
      isDropdown: true,
      subMenu: [
        { name: 'Videos', href: '/our-works/videos', desc: 'Watch corporate videos', icon: Video },
        { name: 'Images', href: '/our-works/images', desc: 'Browse project gallery', icon: ImageIcon },
        { name: 'Events', href: '/our-works/events', desc: 'Recent company events', icon: Calendar },
        { name: 'Blogs', href: '/our-works/blogs', desc: 'Read news & articles', icon: FileText },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Full width black top nav */}
      <nav className="fixed top-0 left-0 w-full bg-black z-60 border-b border-white/5 transition-all duration-300">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-[100px] flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex flex-col cursor-pointer select-none">
            <Image
              src="/relux-electric-india-logo.svg"
              alt="Relux Electric Logo"
              width={220}
              height={55}
              className="object-contain h-12 xl:h-[52px] w-auto"
            />
          </Link>

          {/* Center Links (Desktop/Laptop Large) Pill */}
          <div className="hidden lg:flex items-center bg-[#151515] border border-white/10 rounded-full px-6 h-[56px] shadow-sm relative">
            {navLinks.map((link, index) => {
              const isActive = activePath === link.href || pathname === link.href || (link.href !== '#' && pathname.startsWith(link.href) && link.href !== '/');
              return (
                <div key={link.name} className="flex items-center h-full">
                  <div className="relative group flex items-center h-full px-4 xl:px-6">
                    {link.isDropdown ? (
                      <div
                        className={`cursor-pointer flex items-center text-[14px] xl:text-[15px] font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                          isActive ? 'text-[#4ade80]' : 'text-white hover:text-[#4ade80]'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`ml-1.5 w-4 h-4 group-hover:-rotate-180 transition-transform duration-300 ${isActive ? 'text-[#4ade80]' : 'text-zinc-400 group-hover:text-[#4ade80]'}`} />
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(link.href, e)}
                        className={`flex items-center text-[14px] xl:text-[15px] font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                          isActive ? 'text-[#4ade80]' : 'text-white hover:text-[#4ade80]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                    
                    {/* Active indicator with smooth scale animation aligned under text */}
                    <div className={`absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[calc(100%-24px)] xl:w-[calc(100%-40px)] h-[2.5px] bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.6)] rounded-full transition-all duration-300 ease-out origin-center ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`} />
                    
                    {/* Mega Dropdown Menu (Zeon-style structure adapted for current theme) */}
                    {link.subMenu && (
                      <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-70">
                        <div className="w-[450px] bg-[#151515] border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex relative overflow-hidden">
                          
                          {/* Left: Simple Menu Links */}
                          <div className="w-[55%] p-6 flex flex-col space-y-4 z-10">
                            {link.subMenu.map((subItem) => {
                              const isSubActive = activePath === subItem.href || pathname === subItem.href;
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={(e) => handleLinkClick(subItem.href, e)}
                                  className={`text-[14px] font-medium transition-all duration-300 hover:translate-x-1 ${
                                    isSubActive ? 'text-[#4ade80]' : 'text-zinc-400 hover:text-white'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>

                          {/* Right: Featured Panel with Curve */}
                          <div className="w-[45%] relative bg-[#202020] p-5 flex flex-col items-center justify-center">
                            {/* Curved Edge SVG overlay covering the seam */}
                            <svg
                              className="absolute left-0 top-0 h-full w-8 text-[#202020] -translate-x-[99%]"
                              fill="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path d="M100,0 Q0,50 100,100 Z" />
                            </svg>

                            <div className="text-center relative z-10 mb-4 mt-2">
                              <h4 className="text-zinc-100 text-[13px] font-bold leading-tight">
                                {link.name === 'Our Works' ? 'Projects & Events' : 'Join Relux'}
                              </h4>
                              <p className="text-zinc-400 text-[11px] mt-1.5">
                                {link.name === 'Our Works' ? 'Explore our media gallery' : 'Zero Investment Franchise'}
                              </p>
                            </div>

                            {/* Dummy Image Box matching Zeon red car setup */}
                            <div className="relative w-full h-24 bg-[#18181b] border border-white/5 rounded-xl flex flex-col items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                              <Zap className="w-8 h-8 text-[#4ade80]/80 mb-1" />
                              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#4ade80]/10 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Section: Socials (Desktop) Pill */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <div className="flex items-center space-x-5 xl:space-x-7 bg-[#151515] border border-white/10 rounded-full px-6 py-2 h-[56px]">
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition-colors">
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition-colors">
                <FaInstagram className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition-colors">
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-white transition-colors">
                <FaYoutube className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Button (Phone / Tablet) */}
          <button 
            className="lg:hidden p-2.5 text-white bg-[#151515] border border-white/10 hover:bg-white/10 rounded-full transition-colors z-65"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-55 lg:hidden transition-opacity duration-400 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Nav */}
      <div className={`fixed top-0 right-0 h-full w-[85%] sm:w-[380px] bg-[#121212] border-l border-white/10 z-58 lg:hidden transform transition-transform duration-400 ease-out flex flex-col pt-[110px] pb-6 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex-1 overflow-y-auto px-6 hide-scrollbar">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activePath === link.href || pathname === link.href;
              return (
                <div key={link.name} className="flex flex-col border-b border-zinc-800/50 pb-2 mb-2 last:border-0">
                  {link.isDropdown ? (
                    <>
                      <button 
                        onClick={() => setMobileExpandedMenu(mobileExpandedMenu === link.name ? null : link.name)}
                        className={`flex items-center justify-between py-3 text-lg font-semibold transition-colors w-full text-left ${mobileExpandedMenu === link.name ? 'text-[#4ade80]' : 'text-zinc-200'}`}
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpandedMenu === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpandedMenu === link.name ? 'max-h-[500px] opacity-100 mt-2 mb-3' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col space-y-2 pl-4 border-l-2 border-[#4ade80]/20 ml-2">
                          {link.subMenu?.map((subItem) => {
                            const isSubActive = activePath === subItem.href || pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={(e) => handleLinkClick(subItem.href, e)}
                                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                                  isSubActive ? 'bg-[#4ade80]/10 text-[#4ade80]' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className={`py-3 text-lg font-semibold transition-colors ${isActive ? 'text-[#4ade80]' : 'text-zinc-200 hover:text-[#4ade80]'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Social Area */}
        <div className="pt-6 px-6 mt-auto">
          <div className="flex items-center justify-center space-x-6 bg-[#151515] border border-white/10 rounded-full px-5 py-3.5 backdrop-blur-md">
            <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-[#4ade80] transition-colors"><FaFacebookF className="w-5 h-5" /></Link>
            <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-[#4ade80] transition-colors"><FaInstagram className="w-5 h-5" /></Link>
            <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-[#4ade80] transition-colors"><FaLinkedinIn className="w-4 h-4" /></Link>
            <Link href="#" onClick={(e) => e.preventDefault()} className="text-zinc-400 hover:text-[#4ade80] transition-colors"><FaYoutube className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
{/* 
      Adding styles directly to ensure the scrollbar is hidden if they don't have utility classes for it.
*/}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </>
  );
}
