"use client";

import React from "react";

interface UsageControlsProps {
  dailySessions: number;
  setDailySessions: (val: number) => void;
  avgEnergyPerSession: number;
  setAvgEnergyPerSession: (val: number) => void;
  avgRevenuePerSession?: number;
}

export default function UsageControls({
  dailySessions,
  setDailySessions,
  avgEnergyPerSession,
  setAvgEnergyPerSession,
  avgRevenuePerSession = 546,
}: UsageControlsProps) {
  return (
    <div className="space-y-5 pt-2">
      {/* Header Row */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full border border-[#00b14f] text-[#00b14f] text-[11px] font-black flex items-center justify-center shrink-0">
          3
        </div>
        <h3 className="text-white font-extrabold text-xs tracking-wider uppercase">
          TUNE YOUR USAGE
        </h3>
      </div>

      {/* Slider 1: Daily Charging Sessions */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-zinc-300 text-xs font-bold">
            Daily Charging Sessions
          </label>
          <span className="bg-[#0b2615] border border-[#00b14f]/40 text-[#00b14f] text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
            {dailySessions} / day
          </span>
        </div>

        <input
          type="range"
          min={2}
          max={30}
          value={dailySessions}
          onChange={(e) => setDailySessions(Number(e.target.value))}
          className="w-full h-1.5 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-[#00b14f]"
        />

        <div className="flex justify-between text-[10px] text-zinc-500 font-bold">
          <span>2</span>
          <span>30</span>
        </div>
      </div>

      {/* Slider 2: Avg Energy per Session */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-zinc-300 text-xs font-bold">
            Avg Energy per Session
          </label>
          <span className="bg-[#0b2615] border border-[#00b14f]/40 text-[#00b14f] text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
            {avgEnergyPerSession} kWh
          </span>
        </div>

        <input
          type="range"
          min={10}
          max={60}
          value={avgEnergyPerSession}
          onChange={(e) => setAvgEnergyPerSession(Number(e.target.value))}
          className="w-full h-1.5 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-[#00b14f]"
        />

        <div className="flex justify-between text-[10px] text-zinc-500 font-bold">
          <span>10 kWh</span>
          <span>60 kWh</span>
        </div>
      </div>

      {/* Avg Revenue per Session Bar */}
      <div className="bg-[#141416] border border-white/10 rounded-2xl p-3.5 flex items-center justify-between gap-3">
        <div>
          <div className="text-white text-xs font-extrabold">
            Avg Revenue per Session
          </div>
          <div className="text-zinc-500 text-[10px] font-medium mt-0.5">
            auto · {avgEnergyPerSession} kWh × ₹21/kWh (network avg)
          </div>
        </div>

        <div className="bg-[#0b2615] border border-[#00b14f]/40 text-[#00b14f] font-black text-xs px-3.5 py-1.5 rounded-lg shrink-0">
          ₹{avgRevenuePerSession}
        </div>
      </div>
    </div>
  );
}
