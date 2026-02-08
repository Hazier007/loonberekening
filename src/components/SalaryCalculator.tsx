'use client';

import { useState, useMemo } from 'react';
import { calculateSalary, formatCurrency, type SalaryInput } from '@/lib/salary';
import SalaryBreakdown from './SalaryBreakdown';

interface Props {
  initialGross?: number;
  compact?: boolean;
}

export default function SalaryCalculator({ initialGross = 3000, compact = false }: Props) {
  const [input, setInput] = useState<SalaryInput>({
    grossMonthly: initialGross,
    status: 'alleenstaand',
    kinderen: 0,
    handicap: false,
    companyCar: false,
    companyCarValue: 0,
    maaltijdcheques: false,
    maaltijdchequesValue: 8,
  });
  const [view, setView] = useState<'maandelijks' | 'jaarlijks'>('maandelijks');

  const result = useMemo(() => calculateSalary(input), [input]);

  const multiplier = view === 'jaarlijks' ? 12 : 1;

  return (
    <div className="w-full">
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-6`}>
        {/* Input Panel */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gegevens invoeren</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bruto maandloon (€)</label>
              <input
                type="number"
                value={input.grossMonthly}
                onChange={(e) => setInput({ ...input, grossMonthly: Math.max(0, Number(e.target.value)) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-semibold focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                min="0"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Burgerlijke staat</label>
              <select
                value={input.status}
                onChange={(e) => setInput({ ...input, status: e.target.value as SalaryInput['status'] })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value="alleenstaand">Alleenstaand</option>
                <option value="gehuwd">Gehuwd / Wettelijk samenwonend</option>
                <option value="samenwonend">Feitelijk samenwonend</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kinderen ten laste</label>
              <select
                value={input.kinderen}
                onChange={(e) => setInput({ ...input, kinderen: Number(e.target.value) })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'kind' : 'kinderen'}</option>
                ))}
              </select>
            </div>

            {!compact && (
              <>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="handicap"
                    checked={input.handicap}
                    onChange={(e) => setInput({ ...input, handicap: e.target.checked })}
                    className="w-4 h-4 text-teal-600 rounded"
                  />
                  <label htmlFor="handicap" className="text-sm text-gray-700">Handicap</label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="maaltijdcheques"
                    checked={input.maaltijdcheques}
                    onChange={(e) => setInput({ ...input, maaltijdcheques: e.target.checked })}
                    className="w-4 h-4 text-teal-600 rounded"
                  />
                  <label htmlFor="maaltijdcheques" className="text-sm text-gray-700">Maaltijdcheques</label>
                </div>

                {input.maaltijdcheques && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Waarde maaltijdcheque (€/dag)</label>
                    <input
                      type="number"
                      value={input.maaltijdchequesValue}
                      onChange={(e) => setInput({ ...input, maaltijdchequesValue: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      min="0"
                      max="8"
                      step="0.5"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Resultaat</h3>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('maandelijks')}
                className={`px-3 py-1 text-sm rounded-md font-medium ${view === 'maandelijks' ? 'bg-white shadow text-teal-700' : 'text-gray-600'}`}
              >
                Maand
              </button>
              <button
                onClick={() => setView('jaarlijks')}
                className={`px-3 py-1 text-sm rounded-md font-medium ${view === 'jaarlijks' ? 'bg-white shadow text-teal-700' : 'text-gray-600'}`}
              >
                Jaar
              </button>
            </div>
          </div>

          {/* Big net amount */}
          <div className="bg-teal-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-teal-700 font-medium">Netto {view === 'jaarlijks' ? 'per jaar' : 'per maand'}</p>
            <p className="text-3xl font-bold text-teal-800">{formatCurrency(result.netMonthly * multiplier)}</p>
          </div>

          {/* Breakdown table */}
          <div className="space-y-2">
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-600">Bruto loon</span>
              <span className="font-medium">{formatCurrency(result.grossMonthly * multiplier)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-600">RSZ-bijdrage (13,07%)</span>
              <span className="font-medium text-blue-600">- {formatCurrency(result.rszContribution * multiplier)}</span>
            </div>
            {result.werkbonus > 0 && (
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Werkbonus</span>
                <span className="font-medium text-green-600">+ {formatCurrency(result.werkbonus * multiplier)}</span>
              </div>
            )}
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-600">Belastbaar inkomen</span>
              <span className="font-medium">{formatCurrency(result.taxableIncome * multiplier)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-600">Bedrijfsvoorheffing</span>
              <span className="font-medium text-red-600">- {formatCurrency(result.bedrijfsvoorheffing * multiplier)}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-600">Bijzondere bijdrage SZ</span>
              <span className="font-medium text-red-600">- {formatCurrency(result.bijzondereBijdrage * multiplier)}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-lg">
              <span className="text-gray-900">Netto loon</span>
              <span className="text-teal-700">{formatCurrency(result.netMonthly * multiplier)}</span>
            </div>
          </div>

          <div className="mt-3 text-center text-sm text-gray-500">
            Effectieve belastingdruk: <span className="font-semibold text-gray-700">{result.effectiveTaxRate.toFixed(1)}%</span>
          </div>

          <SalaryBreakdown result={result} />

          {input.maaltijdcheques && (
            <div className="mt-4 p-3 bg-amber-50 rounded-lg text-sm text-amber-800">
              <strong>Maaltijdcheques:</strong> ~{formatCurrency(input.maaltijdchequesValue * 20 * (view === 'jaarlijks' ? 12 : 1))} extra {view === 'jaarlijks' ? 'per jaar' : 'per maand'} (netto voordeel)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
