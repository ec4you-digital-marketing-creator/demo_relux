"use client";

import React from "react";
import Image from "next/image";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Meera Reddy",
    content: "The support and vision of Relux Electric have been instrumental in our green energy transition goals. Their network reliability is unmatched.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    guide: true
  },
  {
    name: "Dr. Karthikeyan Santhanam",

    content: "I want to thank my family, friends and team members for their support in making this occasion successful. It's a proud moment for our company and team.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    guide: true
  },
  {
    name: "Tuglak Energy",
    content: "The support and vision of Relux Electric have been instrumental in our green energy transition goals. Their network reliability is unmatched.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    guide: false
  },
  {
    name: "Gopal Krishnan",
    content: "Relux has completely changed how I plan my long-distance trips. I never have to worry about charging availability on the highways anymore.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    guide: true
  },
];

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    if (testimonials.length <= 2) return;
    // For 2-card view, we have length - 1 possible view states (1-2, 2-3, 3-4)
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 1));
  }, []);

  // Auto-play logic
  React.useEffect(() => {
    if (testimonials.length <= 2) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full pt-12 pb-24 xl:py-20 bg-white overflow-hidden">
      <style jsx>{`
        .testimonials-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
          transform: translateY(-${currentIndex * 50}%);
        }
        @media (max-width: 1279px) {
          .testimonials-container {
            transform: translateY(-${currentIndex * 100}%);
          }
        }
        .testimonial-slide {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          padding-bottom: 0;
        }
        @media (min-width: 1280px) {
          .testimonial-slide {
            height: 50%;
            padding-bottom: 1.5rem;
          }
        }
        @media (max-width: 1279px) {
          .testimonial-slide {
            opacity: 0.4;
            transition: opacity 0.3s;
          }
          .testimonial-slide.active {
            opacity: 1;
          }
        }
      `}</style>
      
      {/* Background Decorative Green Glow (Relux Signature) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b14f]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00b14f]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-24 items-start">

          {/* Left Side: Header & Google Widget */}
          <div className="xl:col-span-4 xl:sticky xl:top-32 flex flex-col items-center xl:items-start h-full text-center xl:text-left">
            <div className="flex flex-col h-full justify-between xl:min-h-[640px] py-2 w-full items-center xl:items-start">
              <div className="space-y-6 flex flex-col items-center xl:items-start">
                <span className="inline-block px-0 text-[13px] font-bold tracking-[0.25em] uppercase text-[#00b14f]">
                  Social Proof
                </span>
                <h2 className="text-4xl xl:text-6xl font-black text-black tracking-tight leading-[1.1]">
                  What Our <br className="hidden xl:block" />
                  <span className="text-[#00b14f]">Users</span> <br className="hidden xl:block" />
                  Say
                </h2>
                <p className="text-black/50 text-base xl:text-lg leading-relaxed max-w-sm">
                  Real world infrastructure stories about revolutionising clean mobility across the country.
                </p>
              </div>

              {/* Google Trust Authority Widget (Light Design) */}
              <div className="w-full max-w-[280px] p-6 rounded-4xl bg-white border border-black/5 shadow-xl shadow-black/5 mt-8 mb-8 xl:mb-0">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center xl:justify-start gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18c-.77 1.56-1.21 3.31-1.21 5.14s.44 3.58 1.21 5.14l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="text-black/40 text-[10px] font-bold uppercase tracking-widest leading-none">Verified Reviews</span>
                  </div>
                  <div className="flex flex-col items-center xl:items-start">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-2xl font-black text-black leading-none">4.9</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <FiStar key={i} className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-black/40 text-[11px] font-medium">Based on 1,200+ Google Reviews</p>
                  </div>
                </div>
              </div>

              {/* Pagination (Desktop Only) */}
              <div className="hidden xl:flex flex-col items-start gap-8 w-full mt-8">
                {testimonials.length > 2 && (
                  <div className="flex items-center gap-3">
                    {testimonials.slice(0, -1).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? "w-10 bg-[#00b14f]" : "w-3 bg-black/10 hover:bg-black/20"
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button (Always in Header area) */}
              <div className="flex w-full xl:w-fit mt-8">
                <button className="flex items-center justify-center gap-4 px-8 py-4 rounded-2xl bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#00b14f] transition-all group w-full xl:w-fit">
                  <span>Write a Review</span>
                  <FiArrowUpRight className="text-[#00b14f] group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Double Card Sliding Viewport */}
          <div className="xl:col-span-8 relative h-[450px] xl:h-[640px] mt-8 xl:mt-0">
            <div className="h-full overflow-hidden">
              <div className="testimonials-container">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`testimonial-slide ${i === currentIndex ? 'active' : ''}`}
                  >
                    <article className="h-full relative group p-6 md:p-8 bg-white rounded-3xl md:rounded-4xl border border-black/5 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_100px_-20px_rgba(0,177,79,0.12)] transition-all duration-700 flex flex-col">

                      {/* Quote Mark Decoration */}
                      <span className="absolute top-12 left-12 text-[120px] font-serif leading-none text-black/2 pointer-events-none select-none">
                        &ldquo;
                      </span>

                      {/* Header Area */}
                      <div className="relative flex items-start justify-between mb-4 z-10">
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((_, j) => (
                            <FiStar key={j} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                          ))}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18c-.77 1.56-1.21 3.31-1.21 5.14s.44 3.58 1.21 5.14l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                          {t.guide && (
                            <span className="text-[9px] font-black text-[#FBBC04] uppercase tracking-widest bg-[#FBBC04]/10 py-1 px-2.5 rounded-lg border border-[#FBBC04]/20">
                              Local Guide
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="relative z-10 flex-1 overflow-hidden">
                        <p className="text-black/70 text-lg md:text-[1.2rem] font-medium leading-[1.35] mb-4 line-clamp-4 xl:line-clamp-4">
                          {t.content}
                        </p>
                      </div>

                      {/* Footer Area */}
                      <div className="relative z-10 mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-2xl p-0.5 bg-linear-to-br from-[#00b14f] to-transparent shadow-lg shadow-[#00b14f]/10">
                            <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden flex items-center justify-center bg-white">
                              {t.avatar ? (
                                <Image
                                  src={t.avatar}
                                  alt={t.name}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              ) : (
                                <span className="text-xl font-black text-[#00b14f]">{t.name.charAt(0)}</span>
                              )}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md border border-black/5">
                              <svg className="w-3.5 h-3.5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <h4 className="text-black font-black text-base">{t.name}</h4>
                              <span className="px-1.5 py-0.5 bg-[#00b14f]/10 text-[#00b14f] text-[8px] font-black uppercase tracking-widest rounded-md">
                                Verified
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-only Pagination (Bottom Centered) */}
            <div className="flex xl:hidden flex-col items-center gap-6 w-full mt-10">
              {testimonials.length > 2 && (
                <div className="flex items-center gap-3">
                  {testimonials.slice(0, -1).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? "w-10 bg-[#00b14f]" : "w-3 bg-black/10 hover:bg-black/20"
                        }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
