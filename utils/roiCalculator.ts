import { ChargerPlan } from "@/data/chargerPlans";
import { StateTariff } from "@/data/tariffs";

export interface CalculationInput {
  stateTariff?: StateTariff;
  customTariff?: number;
  chargerPlan: ChargerPlan;
  dailySessions: number;
  avgEnergyPerSession: number;
  customerChargingPrice?: number; // default ₹21/kWh network average
  stationCount?: number;
  operationalDays?: number;
}

export interface ChartPoint {
  yearLabel: string;
  yearNum: number;
  value: number;
  displayValue: string;
  isBreakeven?: boolean;
}

export interface CalculationResult {
  investmentAmount: number;
  investmentDisplay: string;
  ebTariffDisplay: string;
  monthlyGrossRevenue: number;
  monthlyGrossRevenueDisplay: string;
  monthlyFranchiseeIncome: number;
  monthlyFranchiseeIncomeDisplay: string;
  monthlyEBCost: number;
  monthlyEBCostDisplay: string;
  monthlyNetIncome: number;
  monthlyNetIncomeDisplay: string;
  annualNetIncome: number;
  annualNetIncomeDisplay: string;
  avgRevenuePerSession: number;
  paybackYears: number;
  paybackYearsDisplay: string;
  paybackMonths: number;
  paybackSubtext: string;
  chartPoints: ChartPoint[];
  maxChartValue: number;
  chartYears: number;
  annualRoiPercent: number;
  fiveYearNetGain: number;
  fiveYearNetGainDisplay: string;
  fiveYearTotalRoiPercent: number;
}

export function formatCroresOrLakhs(amount: number): string {
  if (amount >= 10000000) {
    const cr = amount / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(1) : cr.toFixed(1)} Cr`;
  } else if (amount >= 100000) {
    const l = amount / 100000;
    return `₹${l % 1 === 0 ? l.toFixed(1) : l.toFixed(1)} L`;
  }
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

export function calculateROI(input: CalculationInput): CalculationResult {
  const {
    stateTariff,
    customTariff,
    chargerPlan,
    dailySessions,
    avgEnergyPerSession,
    customerChargingPrice = 21,
    stationCount = 1,
    operationalDays = 365,
  } = input;

  const activeTariff = customTariff !== undefined ? customTariff : stateTariff ? stateTariff.tariff : 12;

  const investmentAmount = chargerPlan.investmentAmount * stationCount;
  const investmentDisplay = formatCroresOrLakhs(investmentAmount);
  const ebTariffDisplay = `₹${activeTariff}/unit`;
  const multiplier = (chargerPlan.gunMultiplier || 1.0) * stationCount;

  // Single session average revenue (per charging transaction)
  const avgRevenuePerSession = Math.round(avgEnergyPerSession * customerChargingPrice);
  
  // Daily & Monthly energy calculation
  const dailyEnergyKwh = dailySessions * avgEnergyPerSession * multiplier;
  const daysInMonth = operationalDays / 12;
  const monthlyEnergyKwh = dailyEnergyKwh * daysInMonth;

  const monthlyGrossRevenue = monthlyEnergyKwh * customerChargingPrice;
  const monthlyFranchiseeIncome = monthlyGrossRevenue * (chargerPlan.franchiseeSharePercent || 0.85);
  const monthlyEBCost = monthlyEnergyKwh * activeTariff;
  
  // Monthly Net Income (after electricity cost)
  const monthlyNetIncome = Math.max(0, monthlyFranchiseeIncome - monthlyEBCost);
  const annualNetIncome = monthlyNetIncome * 12;

  // Realistic payback period calculation
  const paybackYears = annualNetIncome > 0 ? investmentAmount / annualNetIncome : 0;
  const paybackMonths = Math.round(paybackYears * 12);
  const paybackYearsDisplay = annualNetIncome > 0 ? `${paybackYears.toFixed(1)} Years` : "N/A";
  const paybackSubtext =
    annualNetIncome > 0
      ? `≈ ${paybackMonths} months to recover ${investmentDisplay}`
      : "Adjust sliders to see payback estimate";

  const chartYears = 5;

  const chartPoints: ChartPoint[] = Array.from({ length: chartYears + 1 }, (_, i) => ({
    yearLabel: i === 0 ? "Year 0 Investment" : `Year ${i}`,
    yearNum: i,
    value: i === 0 ? investmentAmount : annualNetIncome * i,
    displayValue: i === 0 ? formatCroresOrLakhs(investmentAmount) : formatCroresOrLakhs(annualNetIncome * i),
  }));

  const fiveYearCumulativeNet = annualNetIncome * 5;
  const fiveYearNetGain = Math.max(0, fiveYearCumulativeNet - investmentAmount);
  const annualRoiPercent = investmentAmount > 0 ? Math.round((annualNetIncome / investmentAmount) * 100) : 0;
  const fiveYearTotalRoiPercent = investmentAmount > 0 ? Math.round((fiveYearCumulativeNet / investmentAmount) * 100) : 0;

  const maxCumulative = annualNetIncome * chartYears;
  const maxChartValue = Math.max(investmentAmount * 1.3, maxCumulative * 1.1, 10000000);

  return {
    investmentAmount,
    investmentDisplay,
    ebTariffDisplay,
    monthlyGrossRevenue,
    monthlyGrossRevenueDisplay: formatCroresOrLakhs(monthlyGrossRevenue),
    monthlyFranchiseeIncome,
    monthlyFranchiseeIncomeDisplay: formatCroresOrLakhs(monthlyFranchiseeIncome),
    monthlyEBCost,
    monthlyEBCostDisplay: formatCroresOrLakhs(monthlyEBCost),
    monthlyNetIncome,
    monthlyNetIncomeDisplay: formatCroresOrLakhs(monthlyNetIncome),
    annualNetIncome,
    annualNetIncomeDisplay: formatCroresOrLakhs(annualNetIncome),
    avgRevenuePerSession,
    paybackYears,
    paybackYearsDisplay,
    paybackMonths,
    paybackSubtext,
    chartPoints,
    maxChartValue,
    chartYears,
    annualRoiPercent,
    fiveYearNetGain,
    fiveYearNetGainDisplay: formatCroresOrLakhs(fiveYearNetGain),
    fiveYearTotalRoiPercent,
  };
}
