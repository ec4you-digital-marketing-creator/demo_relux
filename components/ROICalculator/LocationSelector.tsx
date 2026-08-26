"use client";

import React from "react";
import { StateTariff } from "@/data/tariffs";

interface LocationSelectorProps {
  tariffs: StateTariff[];
  selectedState: StateTariff;
  onSelectState: (state: StateTariff) => void;
}

export default function LocationSelector({
  tariffs,
  selectedState,
  onSelectState,
}: LocationSelectorProps) {
  return (
    <div className="space-y-4">
      {/* Header Row */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full border border-[#00b14f] text-[#00b14f] text-[11px] font-black flex items-center justify-center shrink-0">
          1
        </div>
        <h3 className="text-white font-extrabold text-xs tracking-wider uppercase">
          SELECT YOUR STATE
        </h3>
      </div>

      {/* State Buttons Row */}
      <div className="flex flex-wrap gap-2">
        {tariffs.map((s) => {
          const isSelected = s.id === selectedState.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelectState(s)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-[#00b14f] text-black font-black shadow-md shadow-[#00b14f]/30 scale-105"
                  : "bg-[#141416] text-zinc-300 border border-white/10 hover:border-[#00b14f]/40 hover:text-white"
              }`}
            >
              {s.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
