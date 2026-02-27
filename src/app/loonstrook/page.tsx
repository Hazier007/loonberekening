import type { Metadata } from 'next';
import SalaryCalculator from '@/components/SalaryCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Loonstrook Berekenen België — Gratis Tool',
  description: 'Genereer een indicatieve loonstrook met breakdown van bruto, RSZ, belastingen en netto. Download als PDF voor administratie.',
  openGraph: {
    title: 'Loonstrook Generator België',
    description: 'Bereken en download je loonstrook',
  },
};

export default function LoonstrookPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Loonstrook Generator België',
    description: 'Bereken en genereer een loonstrook voor België',
    url: 'https://loonberekening.be/loonstrook',
    applicationCategory: 'FinanceApplication',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Loonstrook Generator' }
      ]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Loonstrook Generator België</h1>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Genereer een indicatieve loonstrook met gedetailleerde breakdown van je bruto naar netto loon. Inclusief RSZ-bijdrage, bedrijfsvoorheffing, werkbonus en alle inhoudingen.
        </p>
      </div>

      <div className="mb-8">
        <SalaryCalculator initialGross={3000} />
      </div>

      <div className="bg-blue-50 rounded-xl border-l-4 border-blue-500 p-6 mb-10">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📄</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">PDF Download (binnenkort beschikbaar)</h3>
            <p className="text-gray-700 mb-3">
              De PDF export functie wordt binnenkort toegevoegd. Momenteel kun je de berekening hierboven gebruiken en printen via je browser (Ctrl/Cmd + P).
            </p>
            <p className="text-sm text-gray-600 mb-0">
              De loonstrook zal bevatten: bruto loon, RSZ-bijdrage, werkbonus (indien van toepassing), belastbaar inkomen, bedrijfsvoorheffing, bijzondere bijdrage, en netto loon.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Wat staat er op een loonstrook?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Een Belgische loonstrook bevat minimaal de volgende elementen:
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="space-y-4">
            {[
              { title: 'Persoonlijke gegevens', desc: 'Naam, adres, rijksregisternummer, werkgever' },
              { title: 'Loonperiode', desc: 'Maand/jaar waarvoor het loon berekend wordt' },
              { title: 'Brutoloon', desc: 'Je basissalaris plus eventuele premies en overuren' },
              { title: 'RSZ-bijdrage', desc: '13,07% inhouding voor sociale zekerheid' },
              { title: 'Werkbonus', desc: 'Vermindering RSZ-bijdrage indien van toepassing' },
              { title: 'Belastbaar inkomen', desc: 'Bruto min RSZ-bijdrage' },
              { title: 'Bedrijfsvoorheffing', desc: 'Voorschot op personenbelasting' },
              { title: 'Bijzondere bijdrage', desc: 'Extra sociale bijdrage' },
              { title: 'Nettoloon', desc: 'Bedrag dat op je rekening komt' },
              { title: 'Extralegale voordelen', desc: 'Maaltijdcheques, bedrijfswagen, etc.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700 mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Waarom een loonstrook?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Een loonstrook is belangrijk voor:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { emoji: '🏦', title: 'Lening aanvragen', desc: 'Banken vragen loonstroken als bewijs van inkomen' },
            { emoji: '🏠', title: 'Huurcontract', desc: 'Verhuurders willen je loonstroken zien' },
            { emoji: '📝', title: 'Belastingaangifte', desc: 'Je kunt je loonstroken gebruiken bij je aangifte' },
            { emoji: '✅', title: 'Verificatie', desc: 'Controleer of je werkgever correct afrekent' },
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

        <div className="bg-amber-50 rounded-xl p-6 mb-8">
          <p className="text-gray-700 mb-0">
            <strong>Let op:</strong> Deze tool genereert een <em>indicatieve</em> loonstrook voor persoonlijk gebruik. Voor officiële documenten heb je altijd de echte loonstrook van je werkgever nodig.
          </p>
        </div>
      </div>
    </div>
  );
}
