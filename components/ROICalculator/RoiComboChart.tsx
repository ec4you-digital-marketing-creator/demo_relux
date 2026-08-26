"use client";

import React, { useState } from "react";
import { ChartPoint, formatCroresOrLakhs } from "@/utils/roiCalculator";
import {
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  BarChart3,
  Layers,
  CircleDot,
} from "lucide-react";

interface RoiComboChartProps {
  investmentAmount: number;
  investmentDisplay: string;
  monthlyGrossRevenue: number;
  monthlyFranchiseeIncome: number;
  monthlyEBCost: number;
  monthlyNetIncome: number;
  annualNetIncome: number;
  paybackYears: number;
  chartPoints: ChartPoint[];
  numYears: number;
}

export default function RoiComboChart({
  investmentAmount,
  investmentDisplay,
  monthlyGrossRevenue,
  monthlyFranchiseeIncome,
  monthlyEBCost,
  monthlyNetIncome,
  annualNetIncome,
  paybackYears,
  chartPoints,
  numYears,
}: RoiComboChartProps) {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"bars" | "matrix">("bars");

  // Calculations
  const annualRoiPercent =
    investmentAmount > 0 ? Math.round((annualNetIncome / investmentAmount) * 100) : 0;
  const fiveYearTotal = annualNetIncome * 5;
  const netWealthGain5Yr = Math.max(0, fiveYearTotal - investmentAmount);

  // SVG Chart Dimensions with generous padding to prevent text overlap & clipping
  const chartHeight = 310;
  const chartWidth = 530;
  const paddingLeft = 72; // Increased for Y-axis labels (₹1.5Cr, ₹98.5L, etc.)
  const paddingRight = 24;
  const paddingTop = 65; // Headroom for node value badges
  const paddingBottom = 42;

  const usableWidth = chartWidth - paddingLeft - paddingRight;
  const usableHeight = chartHeight - paddingTop - paddingBottom;

  // Headroom expansion: 1.35x maxCumulative ensures node badges never hit top frame
  const maxCumulative = annualNetIncome * numYears;
  const maxAxisVal = Math.max(
    investmentAmount * 1.5,
    maxCumulative * 1.3,
    10000000
  );

  // Coordinate Mapping
  const mapX = (yearNum: number) => paddingLeft + (yearNum / numYears) * usableWidth;
  const mapY = (val: number) => {
    const norm = Math.min(1, Math.max(0, val / maxAxisVal));
    return paddingTop + usableHeight * (1 - norm);
  };

  const investmentY = mapY(investmentAmount);
  const baselineY = mapY(0);

  // Y-axis Ticks
  const yTicks = [
    { val: maxAxisVal * 0.95, label: formatCrL(maxAxisVal * 0.95) },
    { val: maxAxisVal * 0.65, label: formatCrL(maxAxisVal * 0.65) },
    { val: maxAxisVal * 0.35, label: formatCrL(maxAxisVal * 0.35) },
    { val: 0, label: "₹0" },
  ];

  function formatCrL(amt: number): string {
    if (amt >= 10000000) return `₹${(amt / 10000000).toFixed(1)}Cr`;
    if (amt >= 100000) return `₹${(amt / 100000).toFixed(1)}L`;
    return `₹${Math.round(amt / 1000)}k`;
  }

  // Bar Width
  const barWidth = Math.max(22, usableWidth / (numYears * 2.4));

  // Break-even Coordinates
  const breakevenYear = Math.min(numYears, Math.max(0, paybackYears));
  const breakevenX = mapX(breakevenYear);
  const breakevenY = investmentY;

  // Active Selected / Hovered Year
  const activeYearNum =
    hoveredYear !== null ? hoveredYear : selectedYear !== null ? selectedYear : null;
  const activePt =
    activeYearNum !== null && activeYearNum >= 0 && activeYearNum <= numYears
      ? chartPoints[activeYearNum]
      : null;

  // Connecting Trendline path
  const linePoints = chartPoints.map((p) => ({
    x: mapX(p.yearNum),
    y: mapY(p.value),
  }));

  const trendlinePath = linePoints.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, "");

  return (
    <div className="bg-[#0b0c0e] border border-[#00b14f]/40 rounded-3xl p-5 sm:p-6 space-y-5 shadow-[0_0_50px_rgba(0,177,79,0.15)] relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00b14f]/10 rounded-full blur-[110px] pointer-events-none" />

      {/* 1. TOP STATS ANALYTICS BAR */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-black/70 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
        <div className="space-y-0.5">
          <span className="text-[10px] font-black uppercase text-zinc-400 block tracking-wider">
            Annualized ROI
          </span>
          <div className="text-lg sm:text-2xl font-black text-[#00b14f] flex items-center justify-center gap-0.5">
            <span>+{annualRoiPercent}%</span>
            <ArrowUpRight className="w-4 h-4 text-[#00b14f]" />
          </div>
          <span className="text-[9px] text-zinc-400 block font-semibold">
            per year return
          </span>
        </div>

        <div className="space-y-0.5 border-x border-white/10 px-1">
          <span className="text-[10px] font-black uppercase text-zinc-400 block tracking-wider">
            Payback Speed
          </span>
          <div className="text-lg sm:text-2xl font-black text-white">
            {paybackYears > 0 ? `${paybackYears.toFixed(1)} Yrs` : "N/A"}
          </div>
          <span className="text-[9px] text-zinc-400 block font-semibold">
            capital recovery
          </span>
        </div>

        <div className="space-y-0.5">
          <span className="text-[10px] font-black uppercase text-zinc-400 block tracking-wider">
            5-Yr Net Gain
          </span>
          <div className="text-lg sm:text-2xl font-black text-[#6ee7b7]">
            {formatCroresOrLakhs(netWealthGain5Yr)}
          </div>
          <span className="text-[9px] text-zinc-400 block font-semibold">
            pure cash profit
          </span>
        </div>
      </div>

      {/* 2. HEADER & VIEW SELECTOR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="p-2 bg-[#00b14f]/20 border border-[#00b14f]/40 rounded-xl text-[#00b14f]">
            <BarChart3 className="w-5 h-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-white">
                Cumulative Stepped Growth Bar Chart
              </h3>
              <span className="px-2 py-0.5 bg-[#00b14f]/20 text-[#00b14f] border border-[#00b14f]/40 text-[9px] font-black rounded-full flex items-center gap-1">
                <CircleDot className="w-3 h-3 text-[#00b14f]" /> Top Node Pins
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Stepped growth bars (Y1 to Y5) with top node pins (●) & target investment line
            </p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-black/80 border border-white/10 p-1 rounded-xl gap-1">
          <button
            onClick={() => setActiveTab("bars")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-extrabold transition-all ${
              activeTab === "bars"
                ? "bg-[#00b14f] text-black shadow-md shadow-[#00b14f]/40 font-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Stepped Bar Chart</span>
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-extrabold transition-all ${
              activeTab === "matrix"
                ? "bg-[#00b14f] text-black shadow-md shadow-[#00b14f]/40 font-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Growth Matrix</span>
          </button>
        </div>
      </div>

      {activeTab === "bars" ? (
        <div className="space-y-4">
          {/* Quick Year Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10px] font-black uppercase text-zinc-400 mr-1 shrink-0">
              Filter Year:
            </span>
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold transition-all shrink-0 ${
                selectedYear === null
                  ? "bg-white text-black font-black"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              Overview
            </button>
            {chartPoints.map((pt) => {
              const isSelected = selectedYear === pt.yearNum;
              return (
                <button
                  key={pt.yearNum}
                  onClick={() => setSelectedYear(pt.yearNum)}
                  className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all shrink-0 ${
                    isSelected
                      ? "bg-[#00b14f] text-black font-black shadow-lg shadow-[#00b14f]/30"
                      : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  {pt.yearLabel}
                </button>
              );
            })}
          </div>

          {/* Legend Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold text-zinc-300 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-linear-to-t from-[#005927] to-[#00b14f]" />
              <span>Cumulative Profit Stepped Bar</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00b14f] border border-white" />
              <span>Top Node Pin (●)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 border-b-2 border-dashed border-amber-400" />
              <span className="text-amber-400">Target Investment ({investmentDisplay})</span>
            </div>
          </div>

          {/* SVG STEPPED BAR CHART - PERFECT ZERO OVERLAP LAYOUT */}
          <div className="relative w-full overflow-x-auto select-none pt-1">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-72 sm:h-84 min-w-90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Bar Gradient (Normal) */}
                <linearGradient id="steppedBarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00b14f" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#004d21" stopOpacity="0.4" />
                </linearGradient>

                {/* Bar Gradient (Active Selected) */}
                <linearGradient id="activeBarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00b14f" stopOpacity="0.7" />
                </linearGradient>

                {/* Top Node Radial Glow */}
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6ee7b7" />
                  <stop offset="100%" stopColor="#00b14f" />
                </radialGradient>
              </defs>

              {/* Gridlines & Y-Axis Labels */}
              {yTicks.map((tick, idx) => {
                const yPos = mapY(tick.val);
                return (
                  <g key={idx}>
                    <line
                      x1={paddingLeft}
                      y1={yPos}
                      x2={chartWidth - paddingRight}
                      y2={yPos}
                      stroke="#27272a"
                      strokeWidth="1"
                      strokeDasharray={idx === yTicks.length - 1 ? undefined : "3 3"}
                    />
                    <text
                      x={paddingLeft - 10}
                      y={yPos + 3}
                      fill="#9e9ea7"
                      fontSize="9.5"
                      fontWeight="800"
                      textAnchor="end"
                    >
                      {tick.label}
                    </text>
                  </g>
                );
              })}

              {/* TARGET INVESTMENT BASELINE (Positioned at Far Right End to Never Overlap Bars/Badges) */}
              {investmentY >= paddingTop - 20 && investmentY <= chartHeight - paddingBottom && (
                <g>
                  {/* Dashed Line Across Chart */}
                  <line
                    x1={paddingLeft}
                    y1={investmentY}
                    x2={chartWidth - paddingRight}
                    y2={investmentY}
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.85"
                  />
                  {/* Target Label Positioned Pinned to Far Right End so it NEVER collides with left bars */}
                  <rect
                    x={chartWidth - paddingRight - 110}
                    y={investmentY - 15}
                    width="110"
                    height="14"
                    rx="3"
                    fill="#1b150c"
                    stroke="#fbbf24"
                    strokeWidth="0.8"
                    opacity="0.95"
                  />
                  <text
                    x={chartWidth - paddingRight - 55}
                    y={investmentY - 5}
                    fill="#fbbf24"
                    fontSize="8.5"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    Target {investmentDisplay}
                  </text>
                </g>
              )}

              {/* CONNECTING TRENDLINE THROUGH TOP NODES */}
              <path
                d={trendlinePath}
                stroke="#6ee7b7"
                strokeWidth="2"
                strokeDasharray="4 3"
                opacity="0.5"
              />

              {/* STEPPED BARS + TOP NODES (●) FOR EACH YEAR */}
              {chartPoints.map((pt) => {
                const barTopY = mapY(pt.value);
                const height = Math.max(6, baselineY - barTopY);
                const barX = mapX(pt.yearNum) - barWidth / 2;
                const isSelected = activeYearNum === pt.yearNum;
                const isBreakeven = pt.value >= investmentAmount;

                // Node and Badge positions
                const nodeCenterY = barTopY - 12;
                const badgeBoxY = barTopY - 32;

                return (
                  <g
                    key={pt.yearNum}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredYear(pt.yearNum)}
                    onMouseLeave={() => setHoveredYear(null)}
                    onClick={() => setSelectedYear(selectedYear === pt.yearNum ? null : pt.yearNum)}
                  >
                    {/* Active Bar Outer Glow */}
                    {isSelected && (
                      <rect
                        x={barX - 3}
                        y={barTopY - 3}
                        width={barWidth + 6}
                        height={height + 6}
                        rx="6"
                        fill="#00b14f"
                        fillOpacity="0.25"
                      />
                    )}

                    {/* Stepped Vertical Bar */}
                    <rect
                      x={barX}
                      y={barTopY}
                      width={barWidth}
                      height={height}
                      rx="5"
                      fill={isSelected ? "url(#activeBarGrad)" : "url(#steppedBarGrad)"}
                      stroke={isSelected ? "#ffffff" : "#00b14f"}
                      strokeWidth={isSelected ? 1.5 : 0.8}
                    />

                    {/* Bar Top Cap */}
                    <rect
                      x={barX}
                      y={barTopY}
                      width={barWidth}
                      height={3}
                      rx="1.5"
                      fill="#ffffff"
                      fillOpacity={isSelected ? 1 : 0.6}
                    />

                    {/* VERTICAL PIN LINE AT TOP OF BAR (┌──┴──┐) */}
                    <line
                      x1={mapX(pt.yearNum)}
                      y1={barTopY}
                      x2={mapX(pt.yearNum)}
                      y2={nodeCenterY}
                      stroke={isSelected ? "#ffffff" : "#00b14f"}
                      strokeWidth="2"
                    />

                    {/* TOP NODE CIRCLE (●) */}
                    {isSelected && (
                      <circle
                        cx={mapX(pt.yearNum)}
                        cy={nodeCenterY}
                        r="10"
                        fill="#00b14f"
                        fillOpacity="0.35"
                        className="animate-ping"
                      />
                    )}

                    <circle
                      cx={mapX(pt.yearNum)}
                      cy={nodeCenterY}
                      r={isSelected ? "6" : "4.5"}
                      fill={pt.yearNum === 0 ? "#0b0c0e" : isBreakeven ? "#34d399" : "url(#nodeGlow)"}
                      stroke={isSelected ? "#ffffff" : "#004d21"}
                      strokeWidth="2"
                    />

                    {/* VALUE BADGE ABOVE NODE (●) - Only for Year > 0 to eliminate Yr 0 bottom left overlap! */}
                    {pt.yearNum > 0 && (
                      <g>
                        <rect
                          x={mapX(pt.yearNum) - 27}
                          y={badgeBoxY}
                          width="54"
                          height="15"
                          rx="4"
                          fill="#090a0d"
                          stroke={isSelected ? "#00b14f" : "#27272a"}
                          strokeWidth="1"
                          className="shadow-md"
                        />
                        <text
                          x={mapX(pt.yearNum)}
                          y={badgeBoxY + 11}
                          fill={isSelected ? "#34d399" : "#ffffff"}
                          fontSize="9"
                          fontWeight="900"
                          textAnchor="middle"
                        >
                          {pt.displayValue}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* BREAK-EVEN MILESTONE BADGE - Positioned cleanly at Top Header Space so it NEVER collides with bars or lines */}
              {paybackYears > 0 && paybackYears <= numYears && (
                <g>
                  {/* Vertical Guideline at Breakeven Point */}
                  <line
                    x1={breakevenX}
                    y1={paddingTop - 15}
                    x2={breakevenX}
                    y2={baselineY}
                    stroke="#00b14f"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    opacity="0.4"
                  />

                  {/* Outer Glow Ring */}
                  <circle
                    cx={breakevenX}
                    cy={breakevenY}
                    r="9"
                    fill="#00b14f"
                    fillOpacity="0.3"
                    className="animate-pulse"
                  />
                  <circle
                    cx={breakevenX}
                    cy={breakevenY}
                    r="4"
                    fill="#00b14f"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />

                  {/* Clean Floating Badge Box at Top Header Space (paddingTop - 24) */}
                  <g transform={`translate(${Math.min(chartWidth - paddingRight - 120, Math.max(paddingLeft + 5, breakevenX - 60))}, ${paddingTop - 28})`}>
                    <rect
                      x="0"
                      y="0"
                      width="120"
                      height="18"
                      rx="4"
                      fill="#050505"
                      stroke="#00b14f"
                      strokeWidth="1.2"
                      className="shadow-xl"
                    />
                    <text
                      x="60"
                      y="12"
                      fill="#00b14f"
                      fontSize="8.5"
                      fontWeight="900"
                      textAnchor="middle"
                    >
                      ⚡ Break-even · {paybackYears.toFixed(1)} Yrs
                    </text>
                  </g>
                </g>
              )}

              {/* HORIZONTAL BASELINE (────┴───┴──┴───┴──┴─────┴────) */}
              <line
                x1={paddingLeft - 10}
                y1={baselineY}
                x2={chartWidth - paddingRight + 10}
                y2={baselineY}
                stroke="#3f3f46"
                strokeWidth="2"
              />

              {/* X-AXIS LABELS (Yr 0, Yr 1, Yr 2, Yr 3, Yr 4, Yr 5) */}
              {chartPoints.map((pt) => {
                const isSelected = activeYearNum === pt.yearNum;
                return (
                  <g key={pt.yearNum}>
                    {/* Tick Mark on Baseline */}
                    <line
                      x1={mapX(pt.yearNum)}
                      y1={baselineY}
                      x2={mapX(pt.yearNum)}
                      y2={baselineY + 5}
                      stroke={isSelected ? "#00b14f" : "#71717a"}
                      strokeWidth="2"
                    />
                    <text
                      x={mapX(pt.yearNum)}
                      y={baselineY + 18}
                      fill={isSelected ? "#00b14f" : "#a1a1aa"}
                      fontSize={isSelected ? "11" : "10"}
                      fontWeight={isSelected ? "900" : "800"}
                      textAnchor="middle"
                      className="cursor-pointer transition-all"
                      onMouseEnter={() => setHoveredYear(pt.yearNum)}
                      onMouseLeave={() => setHoveredYear(null)}
                      onClick={() => setSelectedYear(selectedYear === pt.yearNum ? null : pt.yearNum)}
                    >
                      {pt.yearLabel}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ACTIVE YEAR DETAILED INSPECTOR CARD */}
          <div className="bg-[#0e0e11] border border-white/10 rounded-2xl p-4 space-y-3 shadow-inner">
            {activePt ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#00b14f] text-black font-black text-xs rounded">
                      {activePt.yearLabel}
                    </span>
                    <span className="text-white text-xs font-extrabold">
                      {activePt.yearNum === 0
                        ? "Initial Setup & Equipment Deployment"
                        : `Year ${activePt.yearNum} Cumulative Financial Return`}
                    </span>
                  </div>

                  {activePt.value >= investmentAmount ? (
                    <span className="text-[#00b14f] flex items-center gap-1 bg-[#00b14f]/15 px-2.5 py-0.5 rounded-full text-[11px] font-black border border-[#00b14f]/40">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Capital Recovered
                    </span>
                  ) : (
                    <span className="text-amber-400 flex items-center gap-1 bg-amber-400/15 px-2.5 py-0.5 rounded-full text-[11px] font-black border border-amber-400/40">
                      <ShieldCheck className="w-3.5 h-3.5" /> Payback Phase ({paybackYears.toFixed(1)} Yrs Target)
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase font-extrabold block">
                      Annual Cash Flow
                    </span>
                    <span className="text-white font-black text-sm">
                      {activePt.yearNum === 0 ? "₹0" : formatCroresOrLakhs(annualNetIncome)}
                    </span>
                  </div>

                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase font-extrabold block">
                      Cumulative Return
                    </span>
                    <span className="text-[#6ee7b7] font-black text-sm">
                      {activePt.displayValue}
                    </span>
                  </div>

                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase font-extrabold block">
                      Capital Recovery
                    </span>
                    <span
                      className={`font-black text-sm ${
                        activePt.value >= investmentAmount ? "text-[#00b14f]" : "text-amber-400"
                      }`}
                    >
                      {investmentAmount > 0
                        ? `${Math.round((activePt.value / investmentAmount) * 100)}%`
                        : "0%"}
                    </span>
                  </div>

                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase font-extrabold block">
                      Net Wealth Gain
                    </span>
                    <span
                      className={`font-black text-sm ${
                        activePt.value >= investmentAmount ? "text-[#00b14f]" : "text-zinc-300"
                      }`}
                    >
                      {activePt.value >= investmentAmount
                        ? `+${formatCroresOrLakhs(activePt.value - investmentAmount)}`
                        : `-${formatCroresOrLakhs(investmentAmount - activePt.value)}`}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00b14f] animate-ping" />
                  Hover or tap any top node (●) above to inspect year-by-year cashflow analytics.
                </span>
                <span className="text-[10px] font-bold text-zinc-400 hidden sm:inline">
                  Dynamic Calculation
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* GROWTH MATRIX TABLE VIEW */
        <div className="space-y-3">
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#07080a]">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-white/5 text-[10px] uppercase font-black text-zinc-400 border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Timeline</th>
                  <th className="py-3 px-4">Annual Net Profit</th>
                  <th className="py-3 px-4">Cumulative Returns</th>
                  <th className="py-3 px-4">Capital Recovery</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-semibold">
                {chartPoints.map((pt) => {
                  const percent = investmentAmount > 0 ? Math.round((pt.value / investmentAmount) * 100) : 0;
                  const isBreak = pt.value >= investmentAmount;
                  return (
                    <tr key={pt.yearNum} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-black text-white">
                        <span className="px-2.5 py-0.5 bg-[#00b14f]/20 text-[#00b14f] border border-[#00b14f]/30 rounded text-[10px]">
                          {pt.yearLabel}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white font-bold">
                        {pt.yearNum === 0 ? "₹0" : formatCroresOrLakhs(annualNetIncome)}
                      </td>
                      <td className="py-3 px-4 text-[#6ee7b7] font-black">
                        {pt.displayValue}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${isBreak ? "bg-[#00b14f]" : "bg-amber-400"}`}
                              style={{ width: `${Math.min(100, percent)}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-bold">{percent}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {pt.yearNum === 0 ? (
                          <span className="text-zinc-400 text-[10px] uppercase font-bold">Initial Setup</span>
                        ) : isBreak ? (
                          <span className="px-2.5 py-0.5 bg-[#00b14f]/20 text-[#00b14f] border border-[#00b14f]/40 rounded text-[10px] font-black">
                            ✓ Profit Phase
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 bg-amber-400/20 text-amber-400 border border-amber-400/40 rounded text-[10px] font-black">
                            Payback Phase
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
