import type { SalaryResult } from '@/lib/salary';

interface Props {
  result: SalaryResult;
}

export default function SalaryBreakdown({ result }: Props) {
  const items = [
    { label: 'Netto', percent: result.netPercent, color: 'bg-green-500' },
    { label: 'Bedrijfsvoorheffing', percent: result.bvPercent, color: 'bg-red-500' },
    { label: 'RSZ', percent: result.rszPercent, color: 'bg-blue-500' },
    { label: 'Bijz. bijdrage', percent: result.bijzonderePercent, color: 'bg-orange-400' },
  ];

  return (
    <div className="mt-4">
      {/* Stacked bar */}
      <div className="w-full h-8 rounded-full overflow-hidden flex">
        {items.map((item) => (
          item.percent > 0 && (
            <div
              key={item.label}
              className={`${item.color} h-full transition-all duration-300`}
              style={{ width: `${item.percent}%` }}
            />
          )
        ))}
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-xs text-gray-600">
            <div className={`w-3 h-3 rounded-sm ${item.color}`} />
            <span>{item.label} ({item.percent.toFixed(1)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
