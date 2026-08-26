"use client";

import React from "react";
import { ChargerPlan } from "@/data/chargerPlans";
import { StateTariff } from "@/data/tariffs";
import { CalculationResult } from "@/utils/roiCalculator";

import RoiComboChart from "./RoiComboChart";

interface BusinessReturnsProps {
  result: CalculationResult;
  selectedPlan: ChargerPlan;
  selectedState: StateTariff;
  avgEnergyPerSession?: number;
}

export default function BusinessReturns({
  result,
  selectedPlan,
  selectedState,
  avgEnergyPerSession = 26,
}: BusinessReturnsProps) {
  const {
    investmentDisplay,
    monthlyGrossRevenueDisplay,
    monthlyFranchiseeIncomeDisplay,
    monthlyEBCostDisplay,
    monthlyNetIncomeDisplay,
    annualNetIncomeDisplay,
    paybackYearsDisplay,
    paybackSubtext,
    chartPoints,
    investmentAmount,
    annualNetIncome,
    paybackYears,
    chartYears = 5,
  } = result;

  return (
    <div className="space-y-4">
      {/* 1. Main Payback Display Card */}
      <div className="bg-[#141416] border border-white/10 rounded-3xl p-6 sm:p-7 text-center relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#00b14f]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Subtitle */}
        <div className="text-zinc-400 font-semibold text-xs tracking-tight mb-3">
          {selectedPlan.name} · {selectedState.name} · {selectedPlan.capacityRange}
        </div>

        {/* Tag */}
        <div className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">
          ESTIMATED PAYBACK
        </div>

        {/* Big Green Payback Score */}
        <div className="text-5xl sm:text-6xl font-black text-[#00b14f] tracking-tight leading-none my-2 drop-shadow-[0_0_25px_rgba(0,177,79,0.45)]">
          {paybackYearsDisplay}
        </div>

        {/* Subtext */}
        <div className="text-zinc-400 text-xs font-semibold mt-2">
          {paybackSubtext}
        </div>
      </div>

      {/* 2. 4-Box Metric Grid (2x2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Box 1: Monthly Gross Revenue */}
        <div className="bg-[#141416] border border-white/10 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider block">
            MONTHLY GROSS REVENUE
          </span>
          <div className="text-white font-black text-xl sm:text-2xl tracking-tight">
            {monthlyGrossRevenueDisplay}
          </div>
          <span className="text-[10px] text-zinc-400 font-semibold block">
            100% collected via app
          </span>
        </div>

        {/* Box 2: Your Monthly Income */}
        <div className="bg-[#141416] border border-white/10 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider block">
            YOUR MONTHLY INCOME
          </span>
          <div className="text-[#00b14f] font-black text-xl sm:text-2xl tracking-tight">
            {monthlyFranchiseeIncomeDisplay}
          </div>
          <span className="text-[10px] text-zinc-400 font-semibold block">
            franchisee share (as per model)
          </span>
        </div>

        {/* Box 3: Monthly EB Cost */}
        <div className="bg-[#141416] border border-white/10 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider block">
            MONTHLY EB COST
          </span>
          <div className="text-white font-black text-xl sm:text-2xl tracking-tight">
            {monthlyEBCostDisplay}
          </div>
          <span className="text-[10px] text-zinc-400 font-semibold block">
            ₹{selectedState.tariff}/unit × {avgEnergyPerSession} kWh
          </span>
        </div>

        {/* Box 4: Monthly Net Income */}
        <div className="bg-[#141416] border border-white/10 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider block">
            MONTHLY NET INCOME
          </span>
          <div className="text-[#00b14f] font-black text-xl sm:text-2xl tracking-tight">
            {monthlyNetIncomeDisplay}
          </div>
          <span className="text-[10px] text-zinc-400 font-semibold block">
            after electricity bill
          </span>
        </div>
      </div>

      {/* 3. Interactive Dual-Axis Bar & Line ROI Combo Chart */}
      <RoiComboChart
        investmentAmount={investmentAmount}
        investmentDisplay={investmentDisplay}
        monthlyGrossRevenue={result.monthlyGrossRevenue}
        monthlyFranchiseeIncome={result.monthlyFranchiseeIncome}
        monthlyEBCost={result.monthlyEBCost}
        monthlyNetIncome={result.monthlyNetIncome}
        annualNetIncome={annualNetIncome}
        paybackYears={paybackYears}
        chartPoints={chartPoints}
        numYears={chartYears}
      />

      {/* 4. Annual Net Income Row */}
      <div className="bg-[#141416] border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">
        <span className="text-white font-extrabold text-sm tracking-tight">
          Annual Net Income
        </span>
        <span className="text-white font-black text-2xl tracking-tight">
          {annualNetIncomeDisplay}
        </span>
      </div>

      {/* 5. Disclaimer */}
      <div className="text-[11px] text-zinc-400 leading-relaxed pt-1 text-center sm:text-left">
        <span className="text-amber-400 font-bold">▲</span> Projections are indicative. Actual results depend on location, utilisation, EB tariffs, and market conditions.
      </div>
    </div>
  );
}
