import type { Metadata } from 'next';
import SalaryCalculator from '@/components/SalaryCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loonberekening Bediende België 2026 — Bruto Netto Calculator',
  description: 'Bereken je nettoloon als bediende in België. Inclusief RSZ-bijdrage, bedrijfsvoorheffing, werkbonus en maaltijdcheques. Gratis bruto-netto calculator voor bedienden.',
  openGraph: {
    title: 'Loonberekening Bediende België 2026',
    description: 'Bruto-netto calculator speciaal voor bedienden in België',
  },
};

export default function BediendeCalc() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Loonberekening Bediende België',
    description: 'Bruto-netto calculator voor bedienden in België',
    url: 'https://loonberekening.be/bediende',
    applicationCategory: 'FinanceApplication',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Bediende Calculator' }
      ]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Loonberekening voor Bedienden in België</h1>

      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 mb-8 border border-blue-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Als bediende in België betaal je 13,07% RSZ-bijdrage en bedrijfsvoorheffing op je loon. Met onze calculator bereken je precies hoeveel netto je overhoudt, inclusief eventuele voordelen zoals maaltijdcheques en werkbonus.
        </p>
      </div>

      <SalaryCalculator initialGross={3000} />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Wat is een bediende?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Een <strong>bediende</strong> is een werknemer die voornamelijk intellectueel of administratief werk verricht. Denk aan kantoormedewerkers, boekhouders, IT-professionals, verkopers, HR-medewerkers, en andere niet-manuele functies.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Verschil bediende vs arbeider</h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-teal-700">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Aspect</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Bediende</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Arbeider</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">RSZ-bijdrage</td>
                  <td className="px-6 py-4 text-gray-700">13,07%</td>
                  <td className="px-6 py-4 text-gray-700">13,07%</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Opzegtermijn</td>
                  <td className="px-6 py-4 text-gray-700">Langer (3-12 maanden)</td>
                  <td className="px-6 py-4 text-gray-700">Korter (1-12 weken)</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Maaltijdcheques</td>
                  <td className="px-6 py-4 text-teal-700 font-medium">✓ Vaak standaard</td>
                  <td className="px-6 py-4 text-gray-500">Minder frequent</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Vakantiegeld</td>
                  <td className="px-6 py-4 text-gray-700">Enkel vakantiegeld</td>
                  <td className="px-6 py-4 text-gray-700">Dubbel vakantiegeld</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Ziekte eerste maand</td>
                  <td className="px-6 py-4 text-teal-700 font-medium">100% gewaarborgd loon</td>
                  <td className="px-6 py-4 text-gray-700">85,88% (mutualiteit)</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Type werk</td>
                  <td className="px-6 py-4 text-gray-700">Intellectueel/admin</td>
                  <td className="px-6 py-4 text-gray-700">Manueel/technisch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Typische voordelen voor bedienden</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🍽️</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Maaltijdcheques</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Bedienden krijgen vaak maaltijdcheques ter waarde van €8 per werkdag. Dit is een netto voordeel van ~€160/maand (vrijgesteld tot €8).
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">💻</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Thuiswerk</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Veel bedienden kunnen thuiswerken en krijgen een belastingvrije thuiswerkvergoeding van tot €148,73/maand.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🚗</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Bedrijfswagen</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Bedienden met hogere functies krijgen vaak een bedrijfswagen, belast als voordeel alle aard maar voordeliger dan zelf een auto kopen.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">💰</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Groepsverzekering</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Aanvullend pensioensparen via de werkgever met fiscaal voordeel (geen RSZ op werkgeversbijdrage).
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gemiddeld loon bedienden België</h2>
        <p className="text-lg text-gray-600 mb-6">
          Het gemiddelde brutoloon voor bedienden in België bedraagt ongeveer <strong>€3.886 per maand</strong>. Dit varieert sterk per sector:
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <ul className="space-y-2 mb-0">
            <li className="flex justify-between"><span>IT & Software:</span><strong>€4.200 - €7.500</strong></li>
            <li className="flex justify-between"><span>Financiën & Banking:</span><strong>€4.500 - €8.000</strong></li>
            <li className="flex justify-between"><span>Marketing:</span><strong>€3.200 - €5.500</strong></li>
            <li className="flex justify-between"><span>HR & Admin:</span><strong>€3.000 - €5.000</strong></li>
            <li className="flex justify-between"><span>Retail management:</span><strong>€2.800 - €4.500</strong></li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Bereken je nettoloon als bediende</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Gebruik onze calculator hierboven of vergelijk met andere statuten.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/arbeider" 
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            >
              Vergelijk met Arbeider
            </Link>
            <Link 
              href="/zelfstandige" 
              className="inline-flex items-center gap-2 bg-teal-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors border-2 border-white"
            >
              Vergelijk met Zelfstandige
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
