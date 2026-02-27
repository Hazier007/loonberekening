import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bruto Netto Zelfstandige België — Loonberekening',
  description: 'Bereken je nettoloon als zelfstandige in België. RSZ 20,5%, sociale bijdragen en belastingen. Verschil met werknemers uitgelegd.',
  openGraph: {
    title: 'Bruto Netto Zelfstandige België',
    description: 'Bereken je netto inkomen als zelfstandige',
  },
};

export default function ZelfstandigePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Zelfstandige' }
      ]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bruto Netto voor Zelfstandigen in België</h1>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            Als zelfstandige in België betaal je hogere sociale bijdragen (20,5%) dan werknemers maar je hebt meer flexibiliteit in je belastingaangifte. Hier leggen we uit hoe je netto inkomen berekend wordt.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Verschil zelfstandige vs werknemer</h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-indigo-600">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Aspect</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Zelfstandige</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Werknemer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Sociale bijdrage</td>
                  <td className="px-6 py-4 text-indigo-700 font-bold">20,5%</td>
                  <td className="px-6 py-4 text-gray-700">13,07%</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Kosten aftrekbaar</td>
                  <td className="px-6 py-4 text-green-700 font-medium">✓ Ja (reële kosten)</td>
                  <td className="px-6 py-4 text-gray-500">Beperkt (forfait)</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Vakantiegeld</td>
                  <td className="px-6 py-4 text-gray-500">Geen</td>
                  <td className="px-6 py-4 text-gray-700">Ja (enkel/dubbel)</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Werkloosheid</td>
                  <td className="px-6 py-4 text-gray-500">Geen recht</td>
                  <td className="px-6 py-4 text-gray-700">Uitkering mogelijk</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Pensioen</td>
                  <td className="px-6 py-4 text-gray-700">Lager (zelfstandig)</td>
                  <td className="px-6 py-4 text-gray-700">Hoger (werknemer)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sociale bijdragen zelfstandige</h2>
        <p className="text-lg text-gray-600 mb-6">
          Zelfstandigen betalen voorlopige sociale bijdragen van <strong>20,5%</strong> op hun netto belastbaar inkomen (na aftrek van beroepskosten).
        </p>

        <div className="bg-amber-50 rounded-xl border-l-4 border-amber-500 p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Voorlopige bijdragen</h3>
              <p className="text-gray-700 mb-0">
                Je betaalt elk kwartaal voorlopige bijdragen op basis van je geschatte inkomen. Na je belastingaangifte wordt definitief afgerekend — te veel betaald = terugbetaling, te weinig = bijbetaling.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Aftrekbare kosten</h2>
        <p className="text-lg text-gray-600 mb-6">
          Als zelfstandige kun je veel kosten aftrekken van je winst vóór belastingen:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { title: 'Kantoorkosten', desc: 'Huur, elektriciteit, internet, telefoon (pro rata)' },
            { title: 'Vervoer', desc: 'Auto (75% aftrekbaar), benzine, verzekering' },
            { title: 'Maaltijden', desc: '69% aftrekbaar bij zakenlunches' },
            { title: 'Apparatuur', desc: 'Computer, meubilair, software, tools' },
            { title: 'Opleiding', desc: 'Vakgerelateerde opleidingen en seminaries' },
            { title: 'Marketing', desc: 'Website, advertenties, visitekaartjes' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Werknemers vs Zelfstandigen</h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-6">
              Vergelijk de netto inkomens tussen statuten met onze calculators.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/bediende" className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                Bediende
              </Link>
              <Link href="/arbeider" className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                Arbeider
              </Link>
              <Link href="/calculator" className="bg-indigo-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors border-2 border-white">
                Algemene Calculator
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
