import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Belastingschijven België 2025-2026 — Alle Tarieven Uitgelegd',
  description: 'Overzicht van alle Belgische belastingschijven 2025-2026. Progressieve tarieven van 25% tot 50%, belastingvrije som en voorbeeldberekeningen.',
};

export default function BelastingschijvenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Belastingschijven België' }]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Belastingschijven in België 2025-2026</h1>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            België hanteert een systeem van progressieve belasting op het inkomen van haar inwoners. Dit betekent dat naarmate je meer verdient, je een hoger percentage belasting betaalt — maar alleen op het gedeelte van je inkomen dat boven elke drempel uitkomt.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">De vier belastingschijven in België</h2>
        <p className="text-lg text-gray-600 mb-6">
          De Belgische personenbelasting kent vier belastingschijven. Elk schijf heeft een eigen tarief dat alleen van toepassing is op het inkomen binnen die schijf. Dit noemt men het <strong>progressieve tarief</strong>.
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-10">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-600 to-red-700">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Belastbaar inkomen (jaarlijks)</th>
                  <th className="text-center text-white font-semibold px-6 py-4">Tarief</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Max. belasting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">€0 — €15.200</td>
                  <td className="px-6 py-4 text-center text-2xl font-bold text-green-700">25%</td>
                  <td className="px-6 py-4 text-right text-gray-700">max. €3.800</td>
                </tr>
                <tr className="bg-yellow-50 hover:bg-yellow-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">€15.200 — €26.830</td>
                  <td className="px-6 py-4 text-center text-2xl font-bold text-orange-600">40%</td>
                  <td className="px-6 py-4 text-right text-gray-700">max. €4.652</td>
                </tr>
                <tr className="bg-orange-50 hover:bg-orange-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">€26.830 — €46.440</td>
                  <td className="px-6 py-4 text-center text-2xl font-bold text-red-600">45%</td>
                  <td className="px-6 py-4 text-right text-gray-700">max. €8.824,50</td>
                </tr>
                <tr className="bg-red-50 hover:bg-red-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Boven €46.440</td>
                  <td className="px-6 py-4 text-center text-2xl font-bold text-red-700">50%</td>
                  <td className="px-6 py-4 text-right text-gray-700">onbeperkt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl border-l-4 border-amber-500 p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hoe werkt het progressieve systeem?</h3>
              <p className="text-gray-700 mb-3">
                Een veelgemaakte fout is denken dat als je in de schijf van 45% valt, je op je volledige inkomen 45% betaalt. <strong>Dat klopt niet!</strong>
              </p>
              <p className="text-gray-700 mb-0">
                Het progressieve systeem werkt als volgt: je betaalt 25% op de eerste €15.200, dan 40% op het deel tussen €15.200 en €26.830, enzovoort. Iedereen betaalt hetzelfde op de eerste €15.200, namelijk €3.800.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Voorbeeldberekening: €36.000 belastbaar inkomen</h2>
        <p className="text-lg text-gray-600 mb-6">Stel je hebt een jaarlijks belastbaar inkomen van €36.000 (na aftrek van RSZ). Hoe wordt je belasting berekend?</p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-6">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-700">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Schijf</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Bedrag</th>
                  <th className="text-center text-white font-semibold px-6 py-4">Tarief</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Belasting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">€0 — €15.200</td>
                  <td className="px-6 py-3 text-right text-gray-700">€15.200</td>
                  <td className="px-6 py-3 text-center font-bold text-green-700">25%</td>
                  <td className="px-6 py-3 text-right font-medium text-gray-900">€3.800</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-gray-900">€15.200 — €26.830</td>
                  <td className="px-6 py-3 text-right text-gray-700">€11.630</td>
                  <td className="px-6 py-3 text-center font-bold text-orange-600">40%</td>
                  <td className="px-6 py-3 text-right font-medium text-gray-900">€4.652</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">€26.830 — €36.000</td>
                  <td className="px-6 py-3 text-right text-gray-700">€9.170</td>
                  <td className="px-6 py-3 text-center font-bold text-red-600">45%</td>
                  <td className="px-6 py-3 text-right font-medium text-gray-900">€4.126,50</td>
                </tr>
                <tr className="bg-teal-100 border-t-4 border-teal-700">
                  <td className="px-6 py-4 text-lg font-bold text-gray-900" colSpan={3}>Totale belasting</td>
                  <td className="px-6 py-4 text-right text-xl font-bold text-teal-800">€12.578,50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-teal-50 rounded-lg p-4 border border-teal-200">
            <p className="text-sm text-teal-900 mb-0">
              💡 De gemiddelde belastingvoet op dit inkomen is €12.578,50 / €36.000 = <strong>34,9%</strong>. Het marginale tarief (op de laatst verdiende euro) is 45%, maar de gemiddelde druk is dus een stuk lager.
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl border-l-4 border-green-500 p-6 my-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎁</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">De belastingvrije som</h2>
              <p className="text-gray-700 mb-3">
                Elke belastingplichtige in België heeft recht op een <strong>belastingvrije som</strong>. Dit is een deel van je inkomen waarop je geen belasting betaalt. Voor aanslagjaar 2026 (inkomsten 2025) bedraagt de basisvrijstelling ongeveer <strong>€10.160</strong>.
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-700 mb-0">
                  💰 Je bespaart effectief 25% × €10.160 = <strong>€2.540</strong> aan belastingen per jaar. Dit bedrag wordt in mindering gebracht op je berekende belasting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Verhogingen van de belastingvrije som</h3>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-10">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-purple-700">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-3">Situatie</th>
                  <th className="text-right text-white font-semibold px-6 py-3">Extra vrijstelling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">1 kind ten laste</td>
                  <td className="px-6 py-3 text-right font-bold text-green-700">+ €1.850</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-gray-900">2 kinderen ten laste</td>
                  <td className="px-6 py-3 text-right font-bold text-green-700">+ €4.760</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">3 kinderen ten laste</td>
                  <td className="px-6 py-3 text-right font-bold text-green-700">+ €8.000</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-gray-900">4 kinderen ten laste</td>
                  <td className="px-6 py-3 text-right font-bold text-green-700">+ €9.160</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Per bijkomend kind</td>
                  <td className="px-6 py-3 text-right font-bold text-green-700">+ €1.300</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-gray-900">Handicap</td>
                  <td className="px-6 py-3 text-right font-bold text-blue-700">+ €1.850</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Alleenstaande ouder</td>
                  <td className="px-6 py-3 text-right font-bold text-blue-700">+ €1.850</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏛️</span>
              <h2 className="text-xl font-bold text-gray-900 m-0">Gemeentelijke opcentiemen</h2>
            </div>
            <p className="text-gray-700 mb-0">
              Bovenop de federale personenbelasting heffen de Belgische gemeenten ook nog <strong>gemeentelijke opcentiemen</strong>. Dit is een percentage (6-9%) bovenop je federale belasting dat varieert per gemeente.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📄</span>
              <h2 className="text-xl font-bold text-gray-900 m-0">Bedrijfsvoorheffing</h2>
            </div>
            <p className="text-gray-700 mb-0">
              De <Link href="/bedrijfsvoorheffing" className="text-teal-700 font-medium hover:underline">bedrijfsvoorheffing</Link> die maandelijks op je loon ingehouden wordt, is een <strong>voorschot</strong> op je definitieve personenbelasting.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tips om minder belasting te betalen</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { emoji: '💵', title: 'Pensioensparen', desc: 'Tot €1.310 per jaar aftrekbaar met 25-30% vermindering' },
            { emoji: '🏦', title: 'Langetermijnsparen', desc: 'Via levensverzekering met belastingvermindering' },
            { emoji: '🧹', title: 'Dienstencheques', desc: 'Aftrekbaar als belastingvermindering (gewestelijk)' },
            { emoji: '👶', title: 'Kinderopvang', desc: 'Tot €15,70 per opvangdag aftrekbaar' },
            { emoji: '❤️', title: 'Giften', desc: 'Giften aan erkende instellingen zijn voor 45% aftrekbaar' },
            { emoji: '🏠', title: 'Hypotheeklening', desc: 'Woonbonus of geïntegreerde woonbonus (gewestelijk)' },
          ].map((tip) => (
            <div key={tip.title} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{tip.emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-700 mb-0">{tip.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Bereken je belasting</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Wil je precies weten hoeveel belasting je betaalt? Gebruik onze gratis calculator voor een gedetailleerde berekening.
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
