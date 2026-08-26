"use client";

import React from "react";
import { ChargerPlan } from "@/data/chargerPlans";
import { StateTariff } from "@/data/tariffs";

interface ChargerSelectorProps {
  plans: ChargerPlan[];
  selectedPlan: ChargerPlan;
  onSelectPlan: (plan: ChargerPlan) => void;
  selectedState: StateTariff;
}

export default function ChargerSelector({
  plans,
  selectedPlan,
  onSelectPlan,
  selectedState,
}: ChargerSelectorProps) {
  return (
    <div className="space-y-4 pt-2">
      {/* Header Row */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full border border-[#00b14f] text-[#00b14f] text-[11px] font-black flex items-center justify-center shrink-0">
          2
        </div>
        <h3 className="text-white font-extrabold text-xs tracking-wider uppercase">
          SELECT YOUR PLAN
        </h3>
      </div>

      {/* 3 Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {plans.map((plan) => {
          const isSelected = plan.id === selectedPlan.id;
          return (
            <div
              key={plan.id}
              onClick={() => onSelectPlan(plan)}
              className={`rounded-2xl p-4 cursor-pointer transition-all duration-200 border ${
                isSelected
                  ? "bg-[#0c2415] border-[#00b14f] shadow-lg shadow-[#00b14f]/20 scale-[1.02]"
                  : "bg-[#141416] border-white/10 hover:border-white/20 hover:bg-[#18181b]"
              }`}
            >
              <div className={`font-black text-sm tracking-tight ${isSelected ? "text-[#00b14f]" : "text-white"}`}>
                {plan.name}
              </div>
              <div className="text-zinc-400 text-xs font-semibold mt-1">
                {plan.investmentRange}
              </div>
            </div>
          );
        })}
      </div>

      {/* Auto Values Box (INVESTMENT - AUTO & EB TARIFF - AUTO) */}
      <div className="bg-[#141416] border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-4">
        {/* Investment Auto */}
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider block">
            INVESTMENT · AUTO
          </span>
          <div className="text-white font-black text-lg sm:text-xl tracking-tight">
            {selectedPlan.investmentDisplay}
          </div>
          <span className="text-[11px] text-zinc-400 font-semibold block">
            {selectedPlan.investmentRange}
          </span>
        </div>

        {/* EB Tariff Auto */}
        <div className="space-y-1 border-l border-white/10 pl-4">
          <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider block">
            EB TARIFF · AUTO
          </span>
          <div className="text-[#00b14f] font-black text-lg sm:text-xl tracking-tight">
            ₹{selectedState.tariff}<span className="text-xs text-zinc-400">/unit</span>
          </div>
          <span className="text-[11px] text-zinc-400 font-semibold block">
            {selectedState.name}
          </span>
        </div>
      </div>
    </div>
  );
}
