import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Werkbonus België — Wie Komt in Aanmerking? Berekening [2026]',
  description: 'De werkbonus in België uitgelegd: wie komt in aanmerking, hoeveel bedraagt de werkbonus, hoe wordt hij berekend? Complete gids met tabellen.',
};

export default function WerkbonusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Werkbonus' }]} />
      
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">De Werkbonus in België: Complete Gids</h1>

        <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-6 mb-8 border border-teal-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            De werkbonus is een financiële stimulans van de Belgische overheid om werken lonender te maken voor werknemers met een laag tot gemiddeld brutoloon. Door een vermindering van de persoonlijke RSZ-bijdrage en een fiscaal voordeel ontvang je als werknemer met een bescheiden loon een hoger nettoloon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">💼</span>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Sociale werkbonus</h2>
            </div>
            <p className="text-gray-700 mb-0">
              Een vermindering van je persoonlijke <Link href="/rsz-bijdrage" className="text-teal-700 font-medium hover:underline">RSZ-bijdrage</Link> (13,07%), waardoor je directe RSZ-inhouding daalt.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🧾</span>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Fiscale werkbonus</h2>
            </div>
            <p className="text-gray-700 mb-0">
              Een bijkomende vermindering van de <Link href="/bedrijfsvoorheffing" className="text-teal-700 font-medium hover:underline">bedrijfsvoorheffing</Link>, waardoor je nog meer netto overhoudt.
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-8">
          <p className="text-lg text-green-900 font-medium mb-0">
            💰 <strong>Totaal voordeel:</strong> Samen kunnen deze twee componenten je nettoloon met tot <strong>meer dan €300 per maand</strong> verhogen!
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Wie komt in aanmerking?</h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 shadow-sm mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">✅</span>
            <div>
              <p className="text-lg text-gray-900 font-semibold mb-2">
                Je komt in aanmerking als je bruto maandloon niet hoger is dan circa <span className="text-teal-700">€3.144,45</span>
              </p>
              <p className="text-sm text-gray-600 mb-0">
                Dit bedrag wordt jaarlijks geïndexeerd en kan dus lichtjes stijgen.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-blue-200">
            <p className="font-semibold text-gray-900 mb-3">De werkbonus geldt voor:</p>
            <ul className="space-y-2 mb-0 pl-0 list-none">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 text-lg">✓</span>
                <span className="text-gray-700">Werknemers in de private sector</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 text-lg">✓</span>
                <span className="text-gray-700">Contractuelen bij de overheid</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 text-lg">✓</span>
                <span className="text-gray-700">Voltijdse en deeltijdse werknemers (pro rata berekend)</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
            <p className="text-sm text-amber-900 font-medium mb-0">
              🎯 <strong>Goed nieuws:</strong> De werkbonus wordt automatisch toegepast door je werkgever bij de loonberekening. Je hoeft zelf niets aan te vragen!
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hoeveel bedraagt de werkbonus?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Het bedrag van de sociale werkbonus (RSZ-vermindering) hangt af van je brutoloon:
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-teal-700">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Bruto maandloon</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Sociale werkbonus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Tot €2.078,49</td>
                  <td className="px-6 py-4 font-bold text-green-700">€229,98 (maximum)</td>
                </tr>
                <tr className="bg-yellow-50 hover:bg-yellow-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">€2.078,49 — €3.144,45</td>
                  <td className="px-6 py-4 text-orange-700 font-medium">Degressief aflopend</td>
                </tr>
                <tr className="bg-red-50 hover:bg-red-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Boven €3.144,45</td>
                  <td className="px-6 py-4 text-gray-500 font-medium">€0 (geen recht)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Voorbeelden sociale werkbonus</h3>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-10">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-blue-700">
                <tr>
                  <th className="text-left text-white font-semibold px-4 py-3">Bruto loon</th>
                  <th className="text-right text-white font-semibold px-4 py-3">RSZ zonder</th>
                  <th className="text-right text-white font-semibold px-4 py-3">Werkbonus</th>
                  <th className="text-right text-white font-semibold px-4 py-3">Effectieve RSZ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">€2.000</td>
                  <td className="px-4 py-3 text-right text-gray-700">€261,40</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">€229,98</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€31,42</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">€2.500</td>
                  <td className="px-4 py-3 text-right text-gray-700">€326,75</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">€138,91</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€187,84</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">€3.000</td>
                  <td className="px-4 py-3 text-right text-gray-700">€392,10</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">€31,12</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€360,98</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">€3.144</td>
                  <td className="px-4 py-3 text-right text-gray-700">€410,92</td>
                  <td className="px-4 py-3 text-right font-bold text-orange-600">€0,10</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€410,82</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">€3.500</td>
                  <td className="px-4 py-3 text-right text-gray-700">€457,45</td>
                  <td className="px-4 py-3 text-right text-gray-400">€0</td>
                  <td className="px-4 py-3 text-right font-bold text-gray-700">€457,45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl border-l-4 border-purple-500 p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎁</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">De fiscale werkbonus</h3>
              <p className="text-gray-700 mb-3">
                Naast de sociale werkbonus geniet je ook van een <strong>fiscale werkbonus</strong>. Dit is een vermindering van de bedrijfsvoorheffing die bovenop de RSZ-vermindering komt. Het fiscale voordeel bedraagt ongeveer 33,14% van de sociale werkbonus.
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-700 mb-0">
                  💡 Bij het maximum van de sociale werkbonus (€229,98) bedraagt de fiscale werkbonus dus circa <strong>€76,22 per maand</strong>. Samen met de sociale component is het totale voordeel dan <strong>meer dan €300 per maand</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Berekening voor deeltijdse werknemers</h2>
        
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-10">
          <p className="text-gray-700 mb-4">
            Als je deeltijds werkt, wordt de werkbonus berekend op basis van je voltijds equivalent brutoloon. Het resulterende voordeel wordt vervolgens pro rata toegepast op basis van je werkfractie.
          </p>
          <div className="bg-white rounded-lg p-5 border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">📌 Voorbeeld:</p>
            <p className="text-sm text-gray-700 mb-0">
              Werk je 80% (4/5) en is je deeltijds bruto €2.000, dan wordt eerst berekend wat je voltijds zou verdienen (€2.500). Op basis van dat bedrag wordt de werkbonus berekend en vervolgens met 80% vermenigvuldigd.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Bereken je werkbonus</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Wil je precies weten hoeveel werkbonus je ontvangt? Gebruik onze calculator en vul je brutoloon in.
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <Link 
              href="/calculator" 
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-lg text-lg"
            >
              <span>Bereken nu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-teal-600 pt-6">
            <p className="text-center text-teal-100 text-sm font-medium mb-4">Of bekijk direct voorbeelden:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {[2000, 2500, 3000, 3144].map((amount) => (
                <Link
                  key={amount}
                  href={`/loon/${amount}`}
                  className="bg-teal-800/50 hover:bg-teal-800 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors border border-teal-600"
                >
                  €{amount.toLocaleString('nl-BE')}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
