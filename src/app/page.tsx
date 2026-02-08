import type { Metadata } from 'next';
import SalaryCalculator from '@/components/SalaryCalculator';
import AmountCard from '@/components/AmountCard';
import SectorCard from '@/components/SectorCard';
import { salaryAmounts, sectors } from '@/lib/sectors';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loonberekening.be — Bereken je Nettoloon in België [2026]',
  description: 'Bereken gratis en snel je nettoloon in België. Van bruto naar netto met RSZ, bedrijfsvoorheffing en alle inhoudingen. Dé #1 Belgische loonberekening tool.',
  openGraph: {
    title: 'Loonberekening.be — Bereken je Nettoloon in België',
    description: 'Gratis bruto-netto calculator voor België. Bereken je nettoloon in seconden.',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Loonberekening.be',
    description: 'Gratis bruto-netto calculator voor België',
    url: 'https://loonberekening.be',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Bereken je <span className="text-amber-400">nettoloon</span> in België
            </h1>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Van bruto naar netto in seconden. Inclusief RSZ, bedrijfsvoorheffing en alle inhoudingen. Gratis en altijd actueel.
            </p>
          </div>
          <SalaryCalculator compact />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-700">€3.886</div>
              <div className="text-sm text-gray-500 mt-1">Gemiddeld bruto loon België</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-700">€2.364</div>
              <div className="text-sm text-gray-500 mt-1">Gemiddeld netto loon</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-700">13,07%</div>
              <div className="text-sm text-gray-500 mt-1">RSZ-bijdrage werknemer</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-700">~45%</div>
              <div className="text-sm text-gray-500 mt-1">Gemiddelde belastingdruk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular amounts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Populaire bruto-netto berekeningen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {salaryAmounts.map((amount) => (
              <AmountCard key={amount} amount={amount} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lonen per sector in België</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector) => (
              <SectorCard key={sector.slug} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Kennisbank links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alles over loon in België</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/bruto-netto-verschil', title: 'Bruto vs Netto Verschil', desc: 'Wat is het verschil tussen bruto en netto? Complete uitleg met voorbeelden.' },
              { href: '/belastingschijven-belgie', title: 'Belastingschijven België', desc: 'Alle belastingschijven 2025/2026 met tarieven en berekeningen.' },
              { href: '/werkbonus', title: 'Werkbonus', desc: 'Wie komt in aanmerking voor de werkbonus en hoeveel is die waard?' },
              { href: '/gemiddeld-loon-belgie', title: 'Gemiddeld Loon België', desc: 'Gemiddelde lonen per sector, leeftijd, regio en geslacht.' },
              { href: '/vakantiegeld-berekenen', title: 'Vakantiegeld Berekenen', desc: 'Enkel en dubbel vakantiegeld: hoeveel en wanneer?' },
              { href: '/veelgestelde-vragen', title: 'Veelgestelde Vragen', desc: '25+ antwoorden op veelgestelde vragen over loon in België.' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-teal-300 transition-all">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
