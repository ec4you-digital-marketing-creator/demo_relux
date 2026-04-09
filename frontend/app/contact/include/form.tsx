"use client";

import React from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function ContactForm() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div>
              <span className="inline-block px-0 mb-4 text-[13px] font-bold tracking-[0.25em] uppercase text-[#00b14f]">
                Sub Heading
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Get in touch <br />
                with Us
              </h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-sm">
                Connect with Relux Electric – We're Here to Assist You
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone Card */}
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#012a14] border border-white/5 transition-all hover:border-[#00b14f]/30 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00b14f] flex items-center justify-center shadow-[0_0_20px_rgba(0,177,79,0.3)] transition-transform group-hover:scale-110">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Phone Number</h4>
                  <p className="text-white text-lg font-black">+91 98848 66993</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#012a14] border border-white/5 transition-all hover:border-[#00b14f]/30 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00b14f] flex items-center justify-center shadow-[0_0_20px_rgba(0,177,79,0.3)] transition-transform group-hover:scale-110">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-white text-lg font-black">enquiry@reluxelectric.com</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#012a14] border border-white/5 transition-all hover:border-[#00b14f]/30 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00b14f] flex items-center justify-center shadow-[0_0_20px_rgba(0,177,79,0.3)] transition-transform group-hover:scale-110">
                  <FiMapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Address</h4>
                  <p className="text-white text-lg font-black leading-tight">No:16/8, PRV Towers, Guindy, Chennai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#012a14] border border-white/5 relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b14f]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-3xl font-black text-white mb-10 relative z-10">Send a message</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Name"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="tel" 
                    placeholder="Phone Number (10 digits)"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-colors placeholder:text-white/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white/40 focus:outline-none focus:border-[#00b14f] transition-colors appearance-none cursor-pointer">
                      <option>Select State</option>
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="w-2 h-2 border-r-2 border-b-2 border-white/20 rotate-45" />
                    </div>
                  </div>
                  <div className="relative">
                    <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white/40 focus:outline-none focus:border-[#00b14f] transition-colors appearance-none cursor-pointer">
                      <option>Select City</option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                      <option>Kochi</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="w-2 h-2 border-r-2 border-b-2 border-white/20 rotate-45" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <textarea 
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-colors placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-[#00b14f] hover:bg-[#009641] text-white font-black py-5 rounded-2xl transition-all shadow-[0_10px_20px_rgba(0,177,79,0.3)] hover:shadow-[0_20px_40px_rgba(0,177,79,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span>Submit</span>
                  <FiSend className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
