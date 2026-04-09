"use client";

import React from "react";
import { FiPhone, FiMail, FiMapPin, FiUpload, FiSend } from "react-icons/fi";

export default function ZeroForm() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Form */}
          <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#020d06] border border-[#00b14f]/15 relative">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <input 
                    type="tel" 
                    placeholder="Phone"
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20"
                  />
                  <input 
                    type="text" 
                    placeholder="Address"
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white/40 focus:outline-none focus:border-[#00b14f] transition-all appearance-none cursor-pointer">
                    <option>Select State</option>
                    <option>Tamil Nadu</option>
                  </select>
                  <select className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white/40 focus:outline-none focus:border-[#00b14f] transition-all appearance-none cursor-pointer">
                    <option>Select City</option>
                    <option>Chennai</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <input 
                    type="number" 
                    placeholder="Land Size"
                    className="bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20"
                  />
                  <select className="bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white/40 focus:outline-none focus:border-[#00b14f] transition-all appearance-none cursor-pointer">
                    <option>sq.ft</option>
                    <option>Acres</option>
                  </select>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest pl-2">Electricity Connection</p>
                  <div className="flex items-center gap-8 pl-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="elec" className="accent-[#00b14f] w-5 h-5" />
                      <span className="text-white group-hover:text-[#00b14f] transition-colors">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="elec" className="accent-[#00b14f] w-5 h-5" />
                      <span className="text-white group-hover:text-[#00b14f] transition-colors">No</span>
                    </label>
                  </div>
                </div>

                <textarea 
                  placeholder="Any additional comments/message"
                  rows={4}
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20 resize-none"
                ></textarea>

                <div className="relative group">
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="w-full bg-black/60 border border-dashed border-white/10 rounded-2xl px-6 py-5 flex items-center justify-center gap-3 group-hover:border-[#00b14f]/50 transition-all">
                    <FiUpload className="text-[#00b14f]" />
                    <span className="text-white/40 font-bold text-sm uppercase tracking-widest">Upload Land Photo (Optional)</span>
                  </div>
                </div>

                <button className="w-full bg-[#00b14f] hover:bg-[#009641] text-white font-black py-5 rounded-2xl transition-all shadow-[0_10px_20px_rgba(0,177,79,0.3)] hover:shadow-[0_20px_40px_rgba(0,177,79,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span>Submit</span>
                  <FiSend className="w-5 h-5 text-black" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="order-1 lg:order-2 space-y-10 py-10 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
                Location partner <br />
                Enquiry Form
              </h2>
              <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-lg">
                The electric vehicle (EV) industry is booming, with adoption rates growing by over 20% annually and the demand for EV charging stations projected to rise by 30% each year.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: FiPhone, label: "Phone Number", val: "+91 98848 66993" },
                { icon: FiMail, label: "Email", val: "enquiry@reluxelectric.com" },
                { icon: FiMapPin, label: "Address", val: "Chennai, India" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 p-6 rounded-3xl bg-[#1a1a1a] border border-white/5 transition-all hover:border-[#00b14f]/20 group">
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#00b14f] group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{item.label}</h4>
                    <p className="text-white text-base md:text-lg font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
