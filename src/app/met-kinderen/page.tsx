import type { Metadata } from 'next';
import SalaryCalculator from '@/components/SalaryCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bruto Netto Berekenen met Kinderen — Impact op Nettoloon',
  description: 'Hoe beïnvloeden kinderen ten laste je nettoloon? Belastingvermindering van €1.750 per kind. Bereken het voordeel met onze calculator.',
  openGraph: {
    title: 'Loonberekening met Kinderen ten Laste',
    description: 'Bereken de impact van kinderen op je nettoloon in België',
  },
};

export default function MetKinderenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Loonberekening met Kinderen',
    description: 'Bereken je nettoloon met kinderen ten laste in België',
    url: 'https://loonberekening.be/met-kinderen',
    applicationCategory: 'FinanceApplication',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Met Kinderen' }
      ]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Loonberekening met Kinderen ten Laste</h1>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border border-purple-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Kinderen ten laste verhogen je belastingvrije som, waardoor je minder bedrijfsvoorheffing betaalt en je nettoloon stijgt. Bereken hieronder het voordeel voor jouw situatie.
        </p>
      </div>

      <SalaryCalculator initialGross={3500} />

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Hoeveel verhogen kinderen je nettoloon?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Elk kind ten laste verhoogt je <strong>belastingvrije som</strong>, waardoor je minder belasting betaalt. Het voordeel stijgt naarmate je meer kinderen hebt.
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-purple-600">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Aantal kinderen</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Extra vrijstelling</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Belastingbesparing (indicatief)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">1 kind</td>
                  <td className="px-6 py-4 text-right text-gray-700">+ €1.850</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">~€463/jaar</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">2 kinderen</td>
                  <td className="px-6 py-4 text-right text-gray-700">+ €4.760</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">~€1.190/jaar</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">3 kinderen</td>
                  <td className="px-6 py-4 text-right text-gray-700">+ €8.000</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">~€2.000/jaar</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">4 kinderen</td>
                  <td className="px-6 py-4 text-right text-gray-700">+ €9.160</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">~€2.290/jaar</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Per extra kind (5+)</td>
                  <td className="px-6 py-4 text-right text-gray-700">+ €1.300</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">~€325/jaar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm text-purple-900 mb-0">
              💡 <strong>Let op:</strong> De exacte besparing hangt af van je inkomen en marginale belastingtarief. Hogere inkomens (45-50% schijf) besparen meer.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Wat betekent "kind ten laste"?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Een kind is fiscaal ten laste als het:
        </p>
        <ul className="space-y-2 mb-8">
          <li>✓ Jonger is dan 25 jaar (of ouder indien gehandicapt)</li>
          <li>✓ Deel uitmaakt van je gezin (bij je woont)</li>
          <li>✓ Geen of weinig eigen inkomsten heeft (max. €3.690 netto)</li>
          <li>✓ Niet gehuwd of wettelijk samenwonend is</li>
        </ul>

        <div className="bg-amber-50 rounded-xl border-l-4 border-amber-500 p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Co-ouderschap</h3>
              <p className="text-gray-700 mb-0">
                Bij gescheiden ouders met co-ouderschap (50/50) kan elk kind bij één ouder ten laste zijn. Wie het kind aangeeft, krijgt het fiscale voordeel.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Voorbeeld: Impact op nettoloon</h2>
        <p className="text-lg text-gray-600 mb-6">
          Stel: je hebt een brutoloon van €3.500 per maand en 2 kinderen ten laste. Wat is de impact?
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-red-50 rounded-xl shadow-md border border-red-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🚫 Zonder kinderen</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between"><span>Bruto:</span><strong>€3.500</strong></div>
              <div className="flex justify-between"><span>RSZ:</span><span className="text-red-600">- €457</span></div>
              <div className="flex justify-between"><span>Bedrijfsvoorheffing:</span><span className="text-red-600">- €680</span></div>
              <div className="flex justify-between"><span>Bijz. bijdrage:</span><span className="text-red-600">- €65</span></div>
              <div className="flex justify-between border-t pt-2 font-bold"><span>Netto:</span><span className="text-green-700">€2.298</span></div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl shadow-md border border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Met 2 kinderen</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between"><span>Bruto:</span><strong>€3.500</strong></div>
              <div className="flex justify-between"><span>RSZ:</span><span className="text-red-600">- €457</span></div>
              <div className="flex justify-between"><span>Bedrijfsvoorheffing:</span><span className="text-green-600">- €581</span></div>
              <div className="flex justify-between"><span>Bijz. bijdrage:</span><span className="text-red-600">- €65</span></div>
              <div className="flex justify-between border-t pt-2 font-bold"><span>Netto:</span><span className="text-green-700">€2.397</span></div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <p className="text-lg font-semibold text-green-900 mb-0">
            💰 Verschil: <strong>€99/maand extra netto</strong> dankzij 2 kinderen = <strong>€1.188/jaar</strong>
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Andere fiscale voordelen met kinderen</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { emoji: '👶', title: 'Kinderopvang', desc: 'Tot €15,70 per dag aftrekbaar van belastingen voor crèche, kinderdagverblijf of onthaalouder.' },
            { emoji: '🏫', title: 'Schoolkosten', desc: 'Sommige regio\'s geven schooltoelagen. Federaal zijn schoolkosten niet aftrekbaar.' },
            { emoji: '👪', title: 'Alleenstaande ouder', desc: 'Extra vrijstelling van €1.850 voor alleenstaande ouders met kinderen ten laste.' },
            { emoji: '♿', title: 'Kind met handicap', desc: 'Extra vrijstelling van €1.850 per gehandicapt kind bovenop de gewone kindvrijstelling.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="text-xl font-bold text-gray-900 m-0">{item.title}</h3>
              </div>
              <p className="text-gray-700 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Bereken je voordeel</h2>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-6">
              Gebruik de calculator hierboven en selecteer het aantal kinderen ten laste om je voordeel te zien.
            </p>
            <Link 
              href="/calculator" 
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors shadow-lg text-lg"
            >
              <span>Start Calculator</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
