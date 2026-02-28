'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { calculateSalary, formatCurrency } from '@/lib/salary';

export default function VergelijkPage() {
  const [bruto, setBruto] = useState(3000);

  // Bereken voor alle 3 statuten
  const bediende = calculateSalary({
    grossMonthly: bruto,
    status: 'alleenstaand',
    kinderen: 0,
    handicap: false,
    companyCar: false,
    companyCarValue: 0,
    maaltijdcheques: true,
    maaltijdchequesValue: 8,
  });

  const arbeider = calculateSalary({
    grossMonthly: bruto,
    status: 'alleenstaand',
    kinderen: 0,
    handicap: false,
    companyCar: false,
    companyCarValue: 0,
    maaltijdcheques: false,
    maaltijdchequesValue: 8,
  });

  // Voor zelfstandige: hogere RSZ (20.5% ipv 13.07%)
  const zelfstandigeRSZ = bruto * 0.205;
  const zelfstandigeTaxable = bruto - zelfstandigeRSZ;
  // Simpele benadering (echte berekening is complexer met kosten)
  const zelfstandigeBV = zelfstandigeTaxable * 0.25; // Geschat marginaal tarief
  const zelfstandigeNetto = bruto - zelfstandigeRSZ - zelfstandigeBV;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Vergelijk Tool' }
      ]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Bediende vs Arbeider vs Zelfstandige</h1>

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 mb-8 border border-teal-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Vergelijk het nettoloon tussen verschillende statuten. Hetzelfde brutoloon kan leiden tot verschillend netto afhankelijk van je sociaal statuut.
        </p>
      </div>

      {/* Input */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
        <label className="block text-lg font-semibold text-gray-900 mb-3">
          Bruto maandloon (€)
        </label>
        <input
          type="number"
          value={bruto}
          onChange={(e) => setBruto(Math.max(0, Number(e.target.value)))}
          className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-2xl font-bold text-center focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          min="0"
          step="100"
        />
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Bediende */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Bediende</h2>
            <span className="text-4xl">💼</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-600 mb-1">Netto per maand</p>
            <p className="text-3xl font-bold text-blue-700">{formatCurrency(bediende.netMonthly)}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Bruto:</span><strong>{formatCurrency(bruto)}</strong></div>
            <div className="flex justify-between text-red-600"><span>RSZ:</span><span>- {formatCurrency(bediende.rszContribution)}</span></div>
            {bediende.werkbonus > 0 && (
              <div className="flex justify-between text-green-600"><span>Werkbonus:</span><span>+ {formatCurrency(bediende.werkbonus)}</span></div>
            )}
            <div className="flex justify-between text-red-600"><span>BV:</span><span>- {formatCurrency(bediende.bedrijfsvoorheffing)}</span></div>
            <div className="flex justify-between border-t pt-2 font-bold"><span>Netto:</span><span className="text-blue-700">{formatCurrency(bediende.netMonthly)}</span></div>
          </div>

          <div className="mt-4 bg-blue-100 rounded-lg p-3 text-xs text-blue-900">
            <p className="mb-0">✓ Vaak maaltijdcheques (~€160/mnd extra)</p>
          </div>

          <Link href="/bediende" className="block mt-4 text-center bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Meer info Bediende
          </Link>
        </div>

        {/* Arbeider */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-300 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Arbeider</h2>
            <span className="text-4xl">🔧</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-600 mb-1">Netto per maand</p>
            <p className="text-3xl font-bold text-orange-700">{formatCurrency(arbeider.netMonthly)}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Bruto:</span><strong>{formatCurrency(bruto)}</strong></div>
            <div className="flex justify-between text-red-600"><span>RSZ:</span><span>- {formatCurrency(arbeider.rszContribution)}</span></div>
            {arbeider.werkbonus > 0 && (
              <div className="flex justify-between text-green-600"><span>Werkbonus:</span><span>+ {formatCurrency(arbeider.werkbonus)}</span></div>
            )}
            <div className="flex justify-between text-red-600"><span>BV:</span><span>- {formatCurrency(arbeider.bedrijfsvoorheffing)}</span></div>
            <div className="flex justify-between border-t pt-2 font-bold"><span>Netto:</span><span className="text-orange-700">{formatCurrency(arbeider.netMonthly)}</span></div>
          </div>

          <div className="mt-4 bg-orange-100 rounded-lg p-3 text-xs text-orange-900">
            <p className="mb-0">✓ Dubbel vakantiegeld (~1 maandloon/jaar extra)</p>
          </div>

          <Link href="/arbeider" className="block mt-4 text-center bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition-colors">
            Meer info Arbeider
          </Link>
        </div>

        {/* Zelfstandige */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Zelfstandige</h2>
            <span className="text-4xl">🚀</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-600 mb-1">Netto (indicatief)</p>
            <p className="text-3xl font-bold text-purple-700">{formatCurrency(zelfstandigeNetto)}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Bruto:</span><strong>{formatCurrency(bruto)}</strong></div>
            <div className="flex justify-between text-red-600"><span>RSZ (20,5%):</span><span>- {formatCurrency(zelfstandigeRSZ)}</span></div>
            <div className="flex justify-between text-red-600"><span>Belasting:</span><span>- {formatCurrency(zelfstandigeBV)}</span></div>
            <div className="flex justify-between border-t pt-2 font-bold"><span>Netto:</span><span className="text-purple-700">{formatCurrency(zelfstandigeNetto)}</span></div>
          </div>

          <div className="mt-4 bg-purple-100 rounded-lg p-3 text-xs text-purple-900">
            <p className="mb-0">✓ Beroepskosten aftrekbaar (auto, kantoor, etc.)</p>
          </div>

          <Link href="/zelfstandige" className="block mt-4 text-center bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Meer info Zelfstandige
          </Link>
        </div>
      </div>

      {/* Bar Chart Visual */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Visuele vergelijking</h3>
        <div className="space-y-4">
          {[
            { label: 'Bediende', netto: bediende.netMonthly, color: 'bg-blue-500', pct: (bediende.netMonthly / bruto) * 100 },
            { label: 'Arbeider', netto: arbeider.netMonthly, color: 'bg-orange-500', pct: (arbeider.netMonthly / bruto) * 100 },
            { label: 'Zelfstandige', netto: zelfstandigeNetto, color: 'bg-purple-500', pct: (zelfstandigeNetto / bruto) * 100 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-900">{item.label}</span>
                <span className="text-gray-700">{formatCurrency(item.netto)} ({item.pct.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                <div 
                  className={`${item.color} h-full flex items-center justify-end pr-3 text-white font-bold text-sm rounded-full transition-all duration-500`}
                  style={{ width: `${item.pct}%` }}
                >
                  {item.pct.toFixed(0)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Uitleg */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Belangrijke verschillen</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2">Bediende voordelen</h3>
            <ul className="text-sm space-y-1 mb-0 pl-0 list-none">
              <li>✓ Maaltijdcheques vaak standaard</li>
              <li>✓ Langere opzegtermijn = zekerheid</li>
              <li>✓ Gewaarborgd loon bij ziekte</li>
              <li>✓ Groepsverzekering mogelijk</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-gray-900 mb-2">Arbeider voordelen</h3>
            <ul className="text-sm space-y-1 mb-0 pl-0 list-none">
              <li>✓ Dubbel vakantiegeld (extra maandloon)</li>
              <li>✓ Werkbonus vaak van toepassing</li>
              <li>✓ Kortere opzegtermijn = flexibiliteit</li>
              <li>✓ Sector-specifieke premies</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-2">Zelfstandige voordelen</h3>
            <ul className="text-sm space-y-1 mb-0 pl-0 list-none">
              <li>✓ Kosten aftrekbaar (auto, kantoor)</li>
              <li>✓ Flexibiliteit in werktijden</li>
              <li>✓ Hogere inkomstpotentieel</li>
              <li>✓ Eigen baas</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 mb-8">
          <p className="text-gray-700 mb-0">
            <strong>Let op:</strong> Deze vergelijking is indicatief. Voor zelfstandigen zijn veel factoren variabel (kosten, BTW, etc.). Raadpleeg een boekhouder voor een exacte berekening.
          </p>
        </div>
      </div>
    </div>
  );
}
