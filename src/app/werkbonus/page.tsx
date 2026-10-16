import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Werkbonus België — Wie Komt in Aanmerking? Berekening [2026]',
  description: 'De werkbonus in België uitgelegd: wie komt in aanmerking, hoeveel bedraagt de werkbonus, hoe wordt hij berekend? Complete gids met tabellen.',
  // Canonical naar de blog-URL: die rankt voor werkbonus-zoekopdrachten (SEO-KANNI-002)
  alternates: { canonical: 'https://loonberekening.be/blog/werkbonus-belgie-2026' },
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
                Je komt in aanmerking als je voltijds bruto maandloon niet hoger is dan <span className="text-teal-700">€3.403,62</span>
              </p>
              <p className="text-sm text-gray-600 mb-0">
                Grens geldig vanaf 1 september 2026. De bedragen worden geïndexeerd en aangepast bij stijgingen van het minimumloon.
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
          De sociale werkbonus (RSZ-vermindering) bestaat uit twee luiken: <strong>luik A</strong> voor lage lonen en <strong>luik B</strong> voor zeer lage lonen. Je werkbonus is de som van beide. S is je voltijds bruto refertemaandloon.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Bedienden — geldig vanaf 1 september 2026</h3>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="bg-white rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-teal-700">
                <tr>
                  <th className="text-left text-white font-semibold px-4 py-3">Luik</th>
                  <th className="text-left text-white font-semibold px-4 py-3">Bruto maandloon (S)</th>
                  <th className="text-left text-white font-semibold px-4 py-3">Vermindering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">A</td><td className="px-4 py-3">≤ €2.937,93</td><td className="px-4 py-3 font-bold text-green-700">€127,54</td></tr>
                <tr><td className="px-4 py-3 font-medium">A</td><td className="px-4 py-3">€2.937,93 – €3.403,62</td><td className="px-4 py-3">€127,54 − 0,2739 × (S − €2.937,93)</td></tr>
                <tr><td className="px-4 py-3 font-medium">A</td><td className="px-4 py-3">&gt; €3.403,62</td><td className="px-4 py-3 text-gray-500">€0</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">B</td><td className="px-4 py-3">≤ €2.300,62</td><td className="px-4 py-3 font-bold text-green-700">€171,99</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">B</td><td className="px-4 py-3">€2.300,62 – €2.937,93</td><td className="px-4 py-3">€171,99 − 0,2699 × (S − €2.300,62)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">B</td><td className="px-4 py-3">&gt; €2.937,93</td><td className="px-4 py-3 text-gray-500">€0</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Arbeiders — geldig vanaf 1 september 2026</h3>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-4">
          <div className="bg-white rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-teal-700">
                <tr>
                  <th className="text-left text-white font-semibold px-4 py-3">Luik</th>
                  <th className="text-left text-white font-semibold px-4 py-3">Bruto maandloon (S)</th>
                  <th className="text-left text-white font-semibold px-4 py-3">Vermindering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">A</td><td className="px-4 py-3">≤ €2.937,93</td><td className="px-4 py-3 font-bold text-green-700">€137,74</td></tr>
                <tr><td className="px-4 py-3 font-medium">A</td><td className="px-4 py-3">€2.937,93 – €3.403,62</td><td className="px-4 py-3">€137,74 − 0,2958 × (S − €2.937,93)</td></tr>
                <tr><td className="px-4 py-3 font-medium">A</td><td className="px-4 py-3">&gt; €3.403,62</td><td className="px-4 py-3 text-gray-500">€0</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">B</td><td className="px-4 py-3">≤ €2.300,62</td><td className="px-4 py-3 font-bold text-green-700">€185,75</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">B</td><td className="px-4 py-3">€2.300,62 – €2.937,93</td><td className="px-4 py-3">€185,75 − 0,2915 × (S − €2.300,62)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">B</td><td className="px-4 py-3">&gt; €2.937,93</td><td className="px-4 py-3 text-gray-500">€0</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-8">
          Bron: <a href="https://www.socialsecurity.be/employer/instructions/dmfa/nl/latest/instructions/deductions/workers_reductions/workbonus.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">RSZ, administratieve instructies 2026/3 — Werkbonus</a>. De vermindering kan nooit hoger zijn dan je persoonlijke RSZ-bijdrage.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Voorbeelden sociale werkbonus (bediende, vanaf 1 september 2026)</h3>
        
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
                  <td className="px-4 py-3 text-right font-bold text-green-600">€261,40*</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€0,00</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">€2.500</td>
                  <td className="px-4 py-3 text-right text-gray-700">€326,75</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">€245,72</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€81,03</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">€3.000</td>
                  <td className="px-4 py-3 text-right text-gray-700">€392,10</td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">€110,54</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€281,56</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">€3.200</td>
                  <td className="px-4 py-3 text-right text-gray-700">€418,24</td>
                  <td className="px-4 py-3 text-right font-bold text-orange-600">€55,76</td>
                  <td className="px-4 py-3 text-right font-bold text-teal-700">€362,48</td>
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
          <p className="text-xs text-gray-500 mt-3 mb-0">
            * Berekend: €127,54 (luik A) + €171,99 (luik B) = €299,53, maar de werkbonus is beperkt tot je persoonlijke RSZ-bijdrage. Rekenvoorbeeld €3.000: €127,54 − 0,2739 × (€3.000 − €2.937,93) = €110,54 (luik B is €0).
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl border-l-4 border-purple-500 p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎁</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">De fiscale werkbonus</h3>
              <p className="text-gray-700 mb-3">
                Naast de sociale werkbonus geniet je ook van een <strong>fiscale werkbonus</strong>. Dit is een vermindering van de bedrijfsvoorheffing die bovenop de RSZ-vermindering komt. Ze bedraagt 33,14% van de werkbonus uit luik A en een hoger percentage van de werkbonus uit luik B.
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-700 mb-0">
                  💡 Volgens recente wetswijziging (wet van 15 juli 2026, BS 29 juli 2026) stijgt het percentage voor luik B van 52,54% naar <strong>63%</strong> (in de bedrijfsvoorheffing vanaf 1 augustus 2026) en het jaarlijkse maximum van €765 naar €970 (niet-geïndexeerd) vanaf inkomstenjaar 2026. Luik A blijft 33,14% tot en met 2027. Bron: <a href="https://www.clbgroup.be/nieuws/fiscale-werkbonus-wordt-verhoogd-in-2026-en-2028/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">CLB Group</a>.
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
              {[2000, 2500, 3000, 3500].map((amount) => (
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
