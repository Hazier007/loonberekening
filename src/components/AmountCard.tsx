import Link from 'next/link';
import { calculateSalary, getDefaultInput, formatCurrency } from '@/lib/salary';

export default function AmountCard({ amount }: { amount: number }) {
  const result = calculateSalary({ ...getDefaultInput(), grossMonthly: amount });

  return (
    <Link href={`/loon/${amount}`} className="block bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:border-teal-300 transition-all">
      <div className="text-sm text-gray-500">Bruto maandloon</div>
      <div className="text-xl font-bold text-gray-900">{formatCurrency(amount)}</div>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm text-gray-500">→ Netto:</span>
        <span className="text-lg font-semibold text-teal-700">{formatCurrency(result.netMonthly)}</span>
      </div>
      <div className="mt-1 text-xs text-gray-400">Belastingdruk: {result.effectiveTaxRate.toFixed(1)}%</div>
    </Link>
  );
}
