import type { Metadata } from 'next';
import SalaryCalculator from '@/components/SalaryCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loonberekening Arbeider België 2026 — Bruto Netto Berekenen',
  description: 'Bereken je nettoloon als arbeider in België. Inclusief RSZ-bijdrage 13,07%, dubbel vakantiegeld, werkbonus. Gratis bruto-netto calculator voor arbeiders.',
  openGraph: {
    title: 'Loonberekening Arbeider België 2026',
    description: 'Bruto-netto calculator speciaal voor arbeiders in België',
  },
};

export default function ArbeiderCalc() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Loonberekening Arbeider België',
    description: 'Bruto-netto calculator voor arbeiders in België',
    url: 'https://loonberekening.be/arbeider',
    applicationCategory: 'FinanceApplication',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Arbeider Calculator' }
      ]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Loonberekening voor Arbeiders in België</h1>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 mb-8 border border-orange-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Als arbeider in België betaal je dezelfde 13,07% RSZ-bijdrage als bedienden, maar je hebt recht op <strong>dubbel vakantiegeld</strong> en vaak een kortere opzegtermijn. Bereken je nettoloon met onze calculator.
        </p>
      </div>

      <SalaryCalculator initialGross={2800} />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Wat is een arbeider?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Een <strong>arbeider</strong> is een werknemer die voornamelijk manueel of technisch werk verricht. Denk aan bouwvakkers, fabrieksarbeiders, chauffeurs, magazijnmedewerkers, productiemedewerkers, onderhoudstechnici, en andere fysieke of ambachtelijke functies.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Verschil arbeider vs bediende</h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-orange-600">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Aspect</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Arbeider</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Bediende</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">RSZ-bijdrage</td>
                  <td className="px-6 py-4 text-gray-700">13,07%</td>
                  <td className="px-6 py-4 text-gray-700">13,07%</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Vakantiegeld</td>
                  <td className="px-6 py-4 text-orange-700 font-medium">✓ Dubbel vakantiegeld</td>
                  <td className="px-6 py-4 text-gray-700">Enkel vakantiegeld</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Opzegtermijn</td>
                  <td className="px-6 py-4 text-orange-700 font-medium">Korter (1-12 weken)</td>
                  <td className="px-6 py-4 text-gray-700">Langer (3-12 maanden)</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Maaltijdcheques</td>
                  <td className="px-6 py-4 text-gray-500">Minder frequent</td>
                  <td className="px-6 py-4 text-gray-700">Vaak standaard</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Ziekte eerste maand</td>
                  <td className="px-6 py-4 text-gray-700">85,88% (mutualiteit)</td>
                  <td className="px-6 py-4 text-gray-700">100% gewaarborgd loon</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Type werk</td>
                  <td className="px-6 py-4 text-gray-700">Manueel/technisch</td>
                  <td className="px-6 py-4 text-gray-700">Intellectueel/admin</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Werkbonus</td>
                  <td className="px-6 py-4 text-orange-700 font-medium">✓ Vaak van toepassing</td>
                  <td className="px-6 py-4 text-gray-700">Minder frequent (hoger loon)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl border-l-4 border-amber-500 p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎁</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dubbel vakantiegeld</h3>
              <p className="text-gray-700 mb-3">
                Het <strong>grootste voordeel</strong> van arbeiders is het dubbel vakantiegeld: naast je gewone loon tijdens vakantie ontvang je ook een extra premie (dubbel vakantiegeld) dat uitbetaald wordt in mei/juni.
              </p>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="text-sm text-gray-700 mb-0">
                  💡 <strong>Voorbeeld:</strong> Een arbeider met €2.800 bruto/maand ontvangt ongeveer €2.600 extra dubbel vakantiegeld per jaar (bijna een volledig extra maandloon).
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Werkbonus voor arbeiders</h2>
        <p className="text-lg text-gray-600 mb-6">
          Veel arbeiders verdienen minder dan €3.144 per maand en komen daardoor in aanmerking voor de <Link href="/werkbonus" className="text-teal-700 font-medium hover:underline">werkbonus</Link>. Dit is een vermindering van je RSZ-bijdrage die je nettoloon verhoogt:
        </p>

        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <ul className="space-y-2 mb-0">
            <li className="flex justify-between"><span>Bruto €2.000/maand:</span><strong className="text-green-700">+€230 werkbonus</strong></li>
            <li className="flex justify-between"><span>Bruto €2.500/maand:</span><strong className="text-green-700">+€139 werkbonus</strong></li>
            <li className="flex justify-between"><span>Bruto €3.000/maand:</span><strong className="text-green-700">+€31 werkbonus</strong></li>
            <li className="flex justify-between"><span>Bruto €3.144/maand:</span><strong className="text-gray-500">€0 (grens bereikt)</strong></li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gemiddeld loon arbeiders België</h2>
        <p className="text-lg text-gray-600 mb-6">
          Het gemiddelde brutoloon voor arbeiders in België bedraagt ongeveer <strong>€2.700 - €3.200 per maand</strong>, afhankelijk van de sector:
        </p>

        <div className="bg-orange-50 rounded-xl p-6 mb-8">
          <ul className="space-y-2 mb-0">
            <li className="flex justify-between"><span>Bouw:</span><strong>€2.800 - €4.500</strong></li>
            <li className="flex justify-between"><span>Industrie & Productie:</span><strong>€3.000 - €5.000</strong></li>
            <li className="flex justify-between"><span>Transport & Logistiek:</span><strong>€2.700 - €4.000</strong></li>
            <li className="flex justify-between"><span>Horeca:</span><strong>€2.300 - €3.500</strong></li>
            <li className="flex justify-between"><span>Retail magazijn:</span><strong>€2.400 - €3.500</strong></li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sector-specifieke regelingen</h2>
        <p className="text-lg text-gray-600 mb-6">
          Arbeiders vallen vaak onder sector-specifieke <strong>collectieve arbeidsovereenkomsten (CAO&apos;s)</strong> die extra voordelen kunnen bevatten:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏗️</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Bouw</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Kortere opzegtermijn, fidus-bonus, slecht-weer-vergoeding, transport-vergoeding.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚙️</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Metaal</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Anciënniteitspremies, ploegenpremies (nacht/weekend), gevaarlijke omstandigheden-toeslagen.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🚚</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Transport</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Reiskostenvergoeding, overnachtingsvergoeding, maaltijdvergoeding tijdens lange ritten.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🍽️</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Horeca</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Maaltijden tijdens dienst, fooien, seizoensgebonden premies, nacht/weekend-toeslagen.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Bereken je nettoloon als arbeider</h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">
              Gebruik onze calculator hierboven of vergelijk met andere statuten.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/bediende" 
              className="inline-flex items-center gap-2 bg-white text-orange-700 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              Vergelijk met Bediende
            </Link>
            <Link 
              href="/zelfstandige" 
              className="inline-flex items-center gap-2 bg-orange-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors border-2 border-white"
            >
              Vergelijk met Zelfstandige
            </Link>
            <Link 
              href="/werkbonus" 
              className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-500 transition-colors"
            >
              Bereken Werkbonus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
