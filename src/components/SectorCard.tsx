import Link from 'next/link';
import { formatCurrency } from '@/lib/salary';
import type { Sector } from '@/lib/sectors';

export default function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link href={`/sector/${sector.slug}`} className="block bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:border-teal-300 transition-all">
      <h3 className="font-semibold text-gray-900">{sector.name}</h3>
      <div className="mt-2 text-sm text-gray-600">
        Gemiddeld bruto: <span className="font-semibold text-teal-700">{formatCurrency(sector.avgGross)}</span>
      </div>
      <div className="mt-1 text-xs text-gray-400">
        Loonvork: {formatCurrency(sector.minGross)} — {formatCurrency(sector.maxGross)}
      </div>
    </Link>
  );
}
