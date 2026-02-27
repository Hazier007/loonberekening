import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loonberekening met Maaltijdcheques — Impact op Nettoloon',
  description: 'Hoe beïnvloeden maaltijdcheques je nettoloon? Tot €8/werkdag vrijgesteld van belasting. Bereken het voordeel met onze calculator.',
  openGraph: {
    title: 'Maaltijdcheques en je Nettoloon',
    description: 'Bereken de impact van maaltijdcheques op je nettoloon',
  },
};

export default function MaaltijdchequesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Maaltijdcheques' }
      ]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Maaltijdcheques en je Nettoloon</h1>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 mb-8 border border-green-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            Maaltijdcheques zijn één van de populairste extralegale voordelen in België. Ze worden vrijgesteld van belasting tot €8 per werkdag en verhogen je nettoloon zonder extra belastingen te betalen.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Wat zijn maaltijdcheques?</h2>
        <p className="text-lg text-gray-600 mb-6">
          <strong>Maaltijdcheques</strong> (ook wel ecocheques of lunchvouchers genoemd) zijn vouchers die werkgevers geven aan werknemers voor maaltijden. Ze kunnen gebruikt worden in restaurants, supermarkten en sommige online platforms.
        </p>

        <div className="bg-blue-50 rounded-xl border-l-4 border-blue-500 p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💶</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fiscaal voordeel</h3>
              <p className="text-gray-700 mb-3">
                Tot <strong>€8 per werkdag</strong> is vrijgesteld van sociale bijdragen en belastingen. Dit maakt het voordeliger dan een gewone loonsverhoging.
              </p>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>Voorbeeld:</strong> €8/dag × 20 werkdagen = <strong>€160/maand netto voordeel</strong> zonder belastingen!
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hoeveel kost het de werkgever?</h2>
        <p className="text-lg text-gray-600 mb-6">
          De werkgever betaalt een deel (meestal €5-6), de werknemer betaalt een klein eigen deel (€1,09). De verdeling moet binnen de wettelijke grenzen blijven om fiscaal voordelig te zijn.
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Waarde cheque</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Werkgever betaalt</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Werknemer betaalt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">€8</td>
                  <td className="px-6 py-4 text-right text-gray-700">€5,91</td>
                  <td className="px-6 py-4 text-right text-gray-700">€2,09</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">€7</td>
                  <td className="px-6 py-4 text-right text-gray-700">€5,17</td>
                  <td className="px-6 py-4 text-right text-gray-700">€1,83</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">€6</td>
                  <td className="px-6 py-4 text-right text-gray-700">€4,43</td>
                  <td className="px-6 py-4 text-right text-gray-700">€1,57</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">€5</td>
                  <td className="px-6 py-4 text-right text-gray-700">€3,69</td>
                  <td className="px-6 py-4 text-right text-gray-700">€1,31</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-green-900 mb-0">
              💡 <strong>Regel:</strong> De werkgever moet minstens 50% betalen, de werknemer maximaal 50%. Sociale bijdragen en belastingen zijn vrijgesteld als de waarde niet hoger is dan €8.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Impact op je nettoloon</h2>
        <p className="text-lg text-gray-600 mb-6">
          Laten we vergelijken: <strong>€160 bruto loonsverhoging</strong> vs <strong>€160 in maaltijdcheques</strong> per maand.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-red-50 rounded-xl shadow-md border border-red-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💵 Loonsverhoging €160 bruto</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between"><span>Bruto:</span><strong>€160</strong></div>
              <div className="flex justify-between border-t pt-2"><span>RSZ (13,07%):</span><span className="text-red-600">- €20,91</span></div>
              <div className="flex justify-between"><span>Bedrijfsvoorheffing (~25%):</span><span className="text-red-600">- €34,77</span></div>
              <div className="flex justify-between border-t pt-2 font-bold"><span>Netto:</span><span className="text-green-700">€104,32</span></div>
            </div>
            <p className="text-sm text-gray-500 mt-3 mb-0">Je houdt slechts 65% over van de bruto verhoging.</p>
          </div>

          <div className="bg-green-50 rounded-xl shadow-md border border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎟️ Maaltijdcheques €160/maand</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between"><span>Waarde:</span><strong>€160</strong></div>
              <div className="flex justify-between border-t pt-2"><span>RSZ:</span><span className="text-gray-400">€0</span></div>
              <div className="flex justify-between"><span>Bedrijfsvoorheffing:</span><span className="text-gray-400">€0</span></div>
              <div className="flex justify-between border-t pt-2 font-bold"><span>Netto voordeel:</span><span className="text-green-700">€160</span></div>
            </div>
            <p className="text-sm text-green-700 font-medium mt-3 mb-0">✓ Je houdt 100% over! Werkgever betaalt wel werkgeversbijdrage.</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 mb-8">
          <p className="text-lg font-semibold text-amber-900 mb-2">
            📊 Verschil: €55,68 netto voordeel per maand (€160 vs €104,32)
          </p>
          <p className="text-gray-700 mb-0">
            Over een heel jaar is dat <strong>€668 extra netto</strong> door de fiscale vrijstelling!
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Waar kun je maaltijdcheques gebruiken?</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🍽️</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Restaurants & Horeca</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Alle restaurants, cafés, snackbars, traiteurs die maaltijden verkopen.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🛒</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Supermarkten</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Carrefour, Delhaize, Colruyt, Lidl, Aldi — enkel voor voedingswaren (geen alcohol).
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🌐</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Online platforms</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Deliveroo, Uber Eats, Takeaway.com (afhankelijk van provider: Edenred, Monizze, Sodexo).
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🥖</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Bakkers & Slagers</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Lokale bakkers, slagers, beenhouwers die aangesloten zijn bij je provider.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Belangrijke voorwaarden</h2>
        
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <ul className="space-y-3 mb-0 pl-0 list-none">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700"><strong>Maximum €8/werkdag:</strong> Boven dit bedrag wordt het belast.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700"><strong>Enkel op werkdagen:</strong> Je krijgt geen cheques op verlof/ziekte (tenzij afwijkende CAO).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700"><strong>Niet cumuleerbaar met gratis maaltijden:</strong> Als werkgever gratis lunch geeft, geen cheques.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700"><strong>Digitaal of papier:</strong> Beide zijn geldig, digitaal is handiger (Monizze, Edenred, Sodexo apps).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700"><strong>Geldigheidsduur:</strong> Meestal 1 jaar geldig (check per provider).</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Populaire providers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { name: 'Edenred', note: 'Marktleider, breed netwerk' },
            { name: 'Sodexo', note: 'Internationale speler, veel horeca' },
            { name: 'Monizze', note: 'Digitaal platform, moderne app' },
            { name: 'Pluxee', note: 'Flexibel, ook ecocheques' },
            { name: 'Swile', note: 'Nieuwkomer, startup-vriendelijk' },
            { name: 'Payconiq', note: 'Integratie met banking apps' },
          ].map((provider) => (
            <div key={provider.name} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
              <h3 className="font-bold text-gray-900 mb-1">{provider.name}</h3>
              <p className="text-sm text-gray-700 mb-0">{provider.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Bereken je loon met maaltijdcheques</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Gebruik onze calculator en activeer de maaltijdcheques optie om het voordeel te zien.
            </p>
          </div>

          <div className="flex justify-center">
            <Link 
              href="/calculator" 
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-lg text-lg"
            >
              <span>Start Calculator</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
