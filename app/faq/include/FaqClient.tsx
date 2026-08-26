"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Zap,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  PhoneCall,
  X,
  MapPin,
  Smartphone,
  CreditCard,
  Wallet,
  Building2,
  Truck,
  Landmark,
} from "lucide-react";
import { ALL_FAQS, FaqItem } from "./faqData";

export default function FaqClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("fs1");

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "find_station", label: "Find a Station", icon: MapPin },
    { id: "process_tariff", label: "Process & Tariff", icon: Zap },
    { id: "app_account", label: "App & Account", icon: Smartphone },
    { id: "rfid_autocharge", label: "RFID & AutoCharge", icon: CreditCard },
    { id: "payments_refunds", label: "Wallet & Payments", icon: Wallet },
    { id: "franchise_zero", label: "Franchise & Zero Inv.", icon: Building2 },
    { id: "vehicle_compatibility", label: "Vehicle Compatibility", icon: Truck },
    { id: "host_station", label: "Host a Station", icon: Landmark },
  ];                 

  // Filter FAQs based on search query and category
  const filteredFaqs = useMemo(() => {
    return ALL_FAQS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full px-[5%] py-2 md:py-8 relative z-10 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#00b14f]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b14f]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
        <span className="inline-flex items-center gap-1.5 text-[#00b14f] text-xs font-black uppercase tracking-[0.25em]">
          HELP & SUPPORT
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
          FREQUENTLY ASKED <span className="text-[#00b14f]">QUESTIONS</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          Have questions about Relux Electric charging stations, app usage, RFID, franchise models, or vehicle compatibility? Find instant answers below.
        </p>

        {/* Real-time Search Bar */}
        <div className="pt-2 max-w-2xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#00b14f] absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search your question (e.g. RFID, Fast charging, Franchise, Wallet)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#0c1610] border border-white/15 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-[#00b14f] focus:ring-1 focus:ring-[#00b14f] transition-all shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? "bg-[#00b14f] text-black shadow-lg shadow-[#00b14f]/20 scale-105"
                  : "bg-[#0b140e] text-slate-300 border border-white/10 hover:border-[#00b14f]/40 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* FAQs Accordion Grid */}
      <div className="max-w-4xl mx-auto space-y-3.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0c1e13] border-[#00b14f] shadow-lg shadow-[#00b14f]/10"
                    : "bg-[#0b140e] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-extrabold text-white text-base md:text-lg tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#00b14f] text-black rotate-180"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed font-medium border-t border-white/10">
                    <p className="pt-3 whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 bg-[#0b140e] border border-white/10 rounded-3xl space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-extrabold text-white">No Matching Questions Found</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              We couldn't find any questions matching "{searchQuery}". Try searching with different keywords or contact our team directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-2 px-5 py-2 rounded-full bg-[#00b14f] text-black text-xs font-black uppercase tracking-wider hover:bg-[#009643] transition-colors"
            >
              Clear Search & Filters
            </button>
          </div>
        )}
      </div>

      {/* Still Have Questions CTA Card */}
      <div className="mt-14 max-w-4xl mx-auto bg-linear-to-r from-[#0a1a10] via-[#0d2717] to-[#0a1a10] border border-[#00b14f]/30 rounded-3xl p-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
        <div className="relative z-10 space-y-1 max-w-xl">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#00b14f] text-xs font-black uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Still Have Questions?</span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            Need Custom Business or Technical Assistance?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
            Speak directly with our Relux Electric team for site feasibility reports, app help, or custom franchise quotes.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#00b14f] hover:bg-[#009643] text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00b14f]/20 hover:scale-105"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:+919884866993"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
          >
            <PhoneCall className="w-4 h-4 text-[#00b14f]" />
            <span>+91 98848 66993</span>
          </a>
        </div>
      </div>

    </div>
  );
}
