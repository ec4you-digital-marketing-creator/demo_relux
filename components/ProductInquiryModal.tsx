"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, CheckCircle2, Zap, Send } from "lucide-react";
import { BASE_URL } from "@/app/ui/baceurl";
import { STATES as states, CITIES as citiesByState } from "@/app/ui/states-cities";

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  powerTagline?: string;
  productImage?: string;
}

export default function ProductInquiryModal({
  isOpen,
  onClose,
  productName,
  powerTagline,
  productImage,
}: ProductInquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const currentCities = selectedState ? citiesByState[selectedState] || [] : [];

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !selectedState || !selectedCity) {
      setError("Please fill out all required contact fields.");
      return;
    }

    setLoading(true);
    setError("");

    const payload = {
      name,
      email: email.toLowerCase(),
      phone,
      state: selectedState,
      city: selectedCity,
      subject: `Product Order Inquiry: ${productName} (Qty: ${quantity})`,
      message: `Product Order Request Details:
- Product: ${productName} ${powerTagline ? `(${powerTagline})` : ""}
- Quantity: ${quantity} unit(s)
- Customer Name: ${name}
- Phone: ${phone}
- Email: ${email}
- Location: ${selectedCity}, ${selectedState}
- Additional Notes: ${notes || "None"}`,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json().catch(() => ({}));
        setError(
          typeof errData === "object"
            ? JSON.stringify(errData)
            : "Failed to submit inquiry. Please try again."
        );
      }
    } catch {
      setError("Unable to connect to server. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError("");
    setName("");
    setPhone("");
    setEmail("");
    setSelectedState("");
    setSelectedCity("");
    setQuantity(1);
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111111] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* SUCCESS STATE CONFIRMATION */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#4ade80]/15 border border-[#4ade80]/40 text-[#4ade80] flex items-center justify-center mx-auto shadow-lg shadow-[#4ade80]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white tracking-tight">
              Order Inquiry Placed!
            </h3>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 text-xs text-zinc-300 space-y-2 text-left">
              <p>
                <strong className="text-white">Product:</strong> {productName}
              </p>
              <p>
                <strong className="text-white">Quantity:</strong> {quantity} Unit(s)
              </p>
              <p>
                <strong className="text-white">Customer:</strong> {name} ({phone})
              </p>
              <p>
                <strong className="text-white">Location:</strong> {selectedCity}, {selectedState}
              </p>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{name}</strong>! Your inquiry for{" "}
              <strong className="text-[#4ade80]">{productName}</strong> has been saved to our system and sent to our team. Our experts will contact you shortly to guide &amp; setup your EV charger.
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-[#4ade80] hover:bg-[#22c55e] text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#4ade80]/25"
            >
              Done
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              {productImage && (
                <div className="relative w-14 h-14 rounded-xl bg-[#1a1a1a] border border-white/10 shrink-0 p-1">
                  <Image src={productImage} alt={productName} fill className="object-contain" />
                </div>
              )}
              <div>
                <span className="text-[10px] font-black text-[#4ade80] uppercase tracking-widest bg-[#4ade80]/10 border border-[#4ade80]/30 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Order &amp; Setup Inquiry
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  {productName}
                </h3>
                {powerTagline && (
                  <p className="text-xs text-zinc-400 font-medium">{powerTagline}</p>
                )}
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-zinc-300 font-bold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4ade80]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-zinc-300 font-bold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4ade80]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-zinc-300 font-bold mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4ade80]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* State */}
                <div>
                  <label className="block text-zinc-300 font-bold mb-1">State *</label>
                  <select
                    required
                    value={selectedState}
                    onChange={handleStateChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/15 text-white focus:outline-none focus:border-[#4ade80]"
                  >
                    <option value="">Select State</option>
                    {states.map((st) => (
                      <option key={st} value={st} className="bg-[#181818] text-white">
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-zinc-300 font-bold mb-1">City *</label>
                  <select
                    required
                    disabled={!selectedState}
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/15 text-white focus:outline-none focus:border-[#4ade80] disabled:opacity-50"
                  >
                    <option value="">Select City</option>
                    {currentCities.map((ct: string) => (
                      <option key={ct} value={ct} className="bg-[#181818] text-white">
                        {ct}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5">
                <span className="font-bold text-zinc-300">Quantity Required</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-black text-sm flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-extrabold text-white text-sm">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-black text-sm flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-zinc-300 font-bold mb-1">
                  Additional Notes / Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention site type, power connection, installation support needed..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4ade80] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#4ade80] hover:bg-[#22c55e] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#4ade80]/20 disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <span>Submitting Order Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Product Order Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
