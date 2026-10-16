// Belgian salary calculation engine (2025/2026)

export interface SalaryInput {
  grossMonthly: number;
  status: 'alleenstaand' | 'gehuwd' | 'samenwonend';
  kinderen: number;
  handicap: boolean;
  companyCar: boolean;
  companyCarValue: number;
  maaltijdcheques: boolean;
  maaltijdchequesValue: number;
  statuut?: Statuut;
}

export type Statuut = 'bediende' | 'arbeider';

export interface SalaryResult {
  grossMonthly: number;
  grossYearly: number;
  rszContribution: number;
  taxableIncome: number;
  werkbonus: number;
  belastingVrijeSom: number;
  bedrijfsvoorheffing: number;
  bijzondereBijdrage: number;
  netMonthly: number;
  netYearly: number;
  totalTaxes: number;
  effectiveTaxRate: number;
  // Breakdown percentages
  rszPercent: number;
  bvPercent: number;
  bijzonderePercent: number;
  netPercent: number;
}

const RSZ_RATE = 0.1307;

// Tax brackets (yearly taxable income)
const TAX_BRACKETS = [
  { limit: 15200, rate: 0.25 },
  { limit: 26830, rate: 0.40 },
  { limit: 46440, rate: 0.45 },
  { limit: Infinity, rate: 0.50 },
];

// Base tax-free amount
const BASE_TAX_FREE = 10160;

// Extra tax-free per child
const CHILD_TAX_FREE = [0, 1850, 4760, 8000, 9160]; // 0, 1, 2, 3, 4+ children

function getTaxFreeAmount(kinderen: number, status: string, handicap: boolean): number {
  let amount = BASE_TAX_FREE;

  // Married/cohabiting with 1 income: higher threshold
  if (status === 'gehuwd') {
    amount += 1840;
  }

  // Children
  if (kinderen > 0) {
    if (kinderen <= 4) {
      amount += CHILD_TAX_FREE[kinderen];
    } else {
      amount += CHILD_TAX_FREE[4] + (kinderen - 4) * 1300;
    }
  }

  // Handicap
  if (handicap) {
    amount += 1850;
  }

  return amount;
}

function calculateProgressiveTax(yearlyTaxable: number): number {
  if (yearlyTaxable <= 0) return 0;

  let tax = 0;
  let previousLimit = 0;

  for (const bracket of TAX_BRACKETS) {
    const taxableInBracket = Math.min(yearlyTaxable, bracket.limit) - previousLimit;
    if (taxableInBracket <= 0) break;
    tax += taxableInBracket * bracket.rate;
    previousLimit = bracket.limit;
  }

  return tax;
}

// Sociale werkbonus, geldig vanaf 1 september 2026 (RSZ administratieve instructies 2026/3)
// https://www.socialsecurity.be/employer/instructions/dmfa/nl/latest/instructions/deductions/workers_reductions/workbonus.html
const WERKBONUS = {
  luikA: { lower: 2937.93, upper: 3403.62 },
  luikB: { lower: 2300.62, upper: 2937.93 },
  bediende: { maxA: 127.54, slopeA: 0.2739, maxB: 171.99, slopeB: 0.2699 },
  arbeider: { maxA: 137.74, slopeA: 0.2958, maxB: 185.75, slopeB: 0.2915 },
};

function werkbonusLuik(s: number, max: number, slope: number, lower: number, upper: number): number {
  if (s <= lower) return max;
  if (s <= upper) return Math.max(0, max - slope * (s - lower));
  return 0;
}

export function calculateWerkbonus(grossMonthly: number, statuut: Statuut = 'bediende'): number {
  // Werkbonus = luik A + luik B, op basis van het voltijdse refertemaandloon (S)
  const r = WERKBONUS[statuut];
  const { luikA, luikB } = WERKBONUS;
  const a = werkbonusLuik(grossMonthly, r.maxA, r.slopeA, luikA.lower, luikA.upper);
  const b = werkbonusLuik(grossMonthly, r.maxB, r.slopeB, luikB.lower, luikB.upper);
  return a + b;
}

function calculateBijzondereBijdrage(grossMonthly: number, status: string): number {
  const yearlyGross = grossMonthly * 12;
  let quarterly = 0;

  if (status === 'alleenstaand' || status === 'samenwonend') {
    if (yearlyGross <= 18592.02) {
      quarterly = 0;
    } else if (yearlyGross <= 21070.96) {
      quarterly = yearlyGross * 0.0744 - 1382.42;
    } else if (yearlyGross <= 60161.85) {
      quarterly = 184.66;
    } else if (yearlyGross <= 81578.20) {
      quarterly = 184.66 + (yearlyGross - 60161.85) * 0.013;
    } else {
      quarterly = 463.07;
    }
  } else {
    // Gehuwd (2 inkomens — we simplify with 1 income)
    if (yearlyGross <= 18592.02) {
      quarterly = 0;
    } else if (yearlyGross <= 21070.96) {
      quarterly = yearlyGross * 0.0744 - 1382.42;
    } else if (yearlyGross <= 60161.85) {
      quarterly = 184.66;
    } else if (yearlyGross <= 81578.20) {
      quarterly = 184.66 + (yearlyGross - 60161.85) * 0.013;
    } else {
      quarterly = 463.07;
    }
  }

  return Math.max(0, quarterly / 3); // Monthly
}

export function calculateSalary(input: SalaryInput): SalaryResult {
  const { grossMonthly, status, kinderen, handicap, statuut = 'bediende' } = input;
  const grossYearly = grossMonthly * 12;

  // 1. RSZ contribution
  const rszMonthly = grossMonthly * RSZ_RATE;
  const rszYearly = rszMonthly * 12;

  // 2. Werkbonus (RSZ reduction), never more than the contribution itself
  const werkbonus = Math.min(rszMonthly, calculateWerkbonus(grossMonthly, statuut));

  // 3. Effective RSZ
  const effectiveRszMonthly = Math.max(0, rszMonthly - werkbonus);

  // 4. Taxable income (yearly)
  const taxableYearly = grossYearly - rszYearly;
  const taxableMonthly = grossMonthly - rszMonthly;

  // 5. Tax-free amount
  const belastingVrijeSom = getTaxFreeAmount(kinderen, status, handicap);

  // 6. Progressive tax on yearly taxable minus tax-free
  const yearlyTax = calculateProgressiveTax(taxableYearly);
  const taxReduction = calculateProgressiveTax(belastingVrijeSom);
  const effectiveYearlyTax = Math.max(0, yearlyTax - taxReduction);

  // 7. Monthly withholding tax (bedrijfsvoorheffing)
  const bedrijfsvoorheffingMonthly = effectiveYearlyTax / 12;

  // 8. Bijzondere bijdrage sociale zekerheid
  const bijzondereBijdrage = calculateBijzondereBijdrage(grossMonthly, status);

  // 9. Net salary
  const netMonthly = grossMonthly - effectiveRszMonthly - bedrijfsvoorheffingMonthly - bijzondereBijdrage;
  const netYearly = netMonthly * 12;

  const totalTaxes = effectiveRszMonthly + bedrijfsvoorheffingMonthly + bijzondereBijdrage;
  const effectiveTaxRate = grossMonthly > 0 ? (totalTaxes / grossMonthly) * 100 : 0;

  return {
    grossMonthly,
    grossYearly,
    rszContribution: effectiveRszMonthly,
    taxableIncome: taxableMonthly,
    werkbonus,
    belastingVrijeSom,
    bedrijfsvoorheffing: bedrijfsvoorheffingMonthly,
    bijzondereBijdrage,
    netMonthly: Math.max(0, netMonthly),
    netYearly: Math.max(0, netYearly),
    totalTaxes,
    effectiveTaxRate,
    rszPercent: grossMonthly > 0 ? (effectiveRszMonthly / grossMonthly) * 100 : 0,
    bvPercent: grossMonthly > 0 ? (bedrijfsvoorheffingMonthly / grossMonthly) * 100 : 0,
    bijzonderePercent: grossMonthly > 0 ? (bijzondereBijdrage / grossMonthly) * 100 : 0,
    netPercent: grossMonthly > 0 ? (Math.max(0, netMonthly) / grossMonthly) * 100 : 0,
  };
}

export function getDefaultInput(): SalaryInput {
  return {
    grossMonthly: 3000,
    status: 'alleenstaand',
    kinderen: 0,
    handicap: false,
    companyCar: false,
    companyCarValue: 0,
    maaltijdcheques: false,
    maaltijdchequesValue: 8,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
