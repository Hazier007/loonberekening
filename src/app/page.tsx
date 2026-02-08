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

  const kennisbankItems = [
    { href: '/bruto-netto-verschil', title: 'Bruto vs Netto Verschil', desc: 'Wat is het verschil tussen bruto en netto? Complete uitleg met voorbeelden.', icon: '⚖️' },
    { href: '/belastingschijven-belgie', title: 'Belastingschijven België', desc: 'Alle belastingschijven 2025/2026 met tarieven en berekeningen.', icon: '📊' },
    { href: '/werkbonus', title: 'Werkbonus', desc: 'Wie komt in aanmerking voor de werkbonus en hoeveel is die waard?', icon: '🎯' },
    { href: '/gemiddeld-loon-belgie', title: 'Gemiddeld Loon België', desc: 'Gemiddelde lonen per sector, leeftijd, regio en geslacht.', icon: '📈' },
    { href: '/vakantiegeld-berekenen', title: 'Vakantiegeld Berekenen', desc: 'Enkel en dubbel vakantiegeld: hoeveel en wanneer?', icon: '🏖️' },
    { href: '/veelgestelde-vragen', title: 'Veelgestelde Vragen', desc: '25+ antwoorden op veelgestelde vragen over loon in België.', icon: '❓' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — asymmetric, warm */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-transparent to-amber-50/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: text */}
            <div className="lg:col-span-5 pt-2 lg:pt-8">
              <div className="inline-flex items-center gap-2 bg-teal-100/60 text-teal-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                Geüpdatet voor 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 leading-[1.1] mb-5">
                Wat hou je netto
                <span className="block text-teal-700">over van je loon?</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-lg">
                Bereken in seconden je nettoloon. Met alle Belgische inhoudingen: RSZ, bedrijfsvoorheffing, werkbonus en meer.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  100% gratis
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Actuele tarieven
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Geen registratie
                </span>
              </div>
              {/* Social proof */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-1">Vertrouwd door duizenden Belgen</p>
                <p className="text-2xl font-bold text-gray-900">10.000+ <span className="text-base font-normal text-gray-500">berekeningen per maand</span></p>
              </div>
            </div>

            {/* Right: calculator */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-1">
                <SalaryCalculator compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — varied layout */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1 bg-teal-50 rounded-2xl p-6">
              <div className="text-sm font-medium text-teal-700 mb-1">Gemiddeld bruto</div>
              <div className="text-3xl font-bold text-gray-900">€3.886</div>
              <div className="text-xs text-gray-500 mt-1">per maand in België</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-sm font-medium text-gray-600 mb-1">Gemiddeld netto</div>
              <div className="text-3xl font-bold text-gray-900">€2.364</div>
              <div className="text-xs text-gray-500 mt-1">na alle inhoudingen</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-sm font-medium text-gray-600 mb-1">RSZ-bijdrage</div>
              <div className="text-3xl font-bold text-gray-900">13,07%</div>
              <div className="text-xs text-gray-500 mt-1">werknemersbijdrage</div>
            </div>
            <div className="col-span-2 md:col-span-1 bg-amber-50 rounded-2xl p-6">
              <div className="text-sm font-medium text-amber-700 mb-1">Belastingdruk</div>
              <div className="text-3xl font-bold text-gray-900">~45%</div>
              <div className="text-xs text-gray-500 mt-1">gemiddeld in België</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het? */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Hoe werkt het?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">In drie simpele stappen weet je exact wat je netto overhoudt.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Vul je brutoloon in', desc: 'Voer je bruto maand- of jaarloon in. Kies je burgerlijke staat en het aantal kinderen ten laste.' },
              { step: '2', title: 'Bekijk de berekening', desc: 'We berekenen automatisch RSZ-bijdrage, bedrijfsvoorheffing, werkbonus en andere inhoudingen.' },
              { step: '3', title: 'Ken je nettoloon', desc: 'Je ziet direct wat je netto overhoudt. Vergelijk verschillende scenario\'s om het beste te onderhandelen.' },
            ].map((item, i) => (
              <div key={item.step} className={`relative text-center ${i < 2 ? 'step-connector' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-700 text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular amounts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Populaire berekeningen</h2>
              <p className="text-gray-500 mt-1">Klik op een bedrag voor een volledige bruto-netto uitleg.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {salaryAmounts.map((amount) => (
              <AmountCard key={amount} amount={amount} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Lonen per sector</h2>
              <p className="text-gray-500 mt-1">Bekijk gemiddelde lonen in jouw sector.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector) => (
              <SectorCard key={sector.slug} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Kennisbank */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Kennisbank</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Alles wat je moet weten over loon, belastingen en inhoudingen in België.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kennisbankItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex gap-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-teal-200 p-5 card-hover"
              >
                <div className="flex-shrink-0 text-2xl mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Onze andere tools */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Onze andere tools</h2>
            <p className="text-gray-500">Handige gratis calculators en tools voor België.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: 'https://btw-calculator.be', title: 'BTW Calculator', desc: 'BTW berekenen in België', icon: '🧾' },
              { href: 'https://interesten.be', title: 'Interesten Berekenen', desc: 'Rente en interesten berekenen', icon: '💰' },
              { href: 'https://datumberekenen.be', title: 'Datum Berekenen', desc: 'Datumverschillen berekenen', icon: '📅' },
              { href: 'https://huurrendementcalculator.be', title: 'Huurrendement Calculator', desc: 'Rendement vastgoed berekenen', icon: '🏠' },
              { href: 'https://factuurfinanciering.be', title: 'Factuurfinanciering', desc: 'Factuurfinanciering vergelijken', icon: '📄' },
              { href: 'https://buitendrogen.be', title: 'Buitendrogen', desc: 'Droogtijden berekenen', icon: '☀️' },
            ].map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                target="_blank"
                rel="noopener"
                className="group flex items-start gap-3 bg-white rounded-xl border border-gray-100 hover:border-teal-200 p-4 card-hover"
              >
                <span className="text-xl mt-0.5">{tool.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-teal-700 transition-colors">{tool.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{tool.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-teal-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Klaar om je nettoloon te berekenen?</h2>
          <p className="text-teal-200 mb-8 max-w-lg mx-auto">Het duurt minder dan 30 seconden. Geen account nodig, geen verborgen kosten.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-8 py-3.5 rounded-xl hover:bg-teal-50 transition-colors shadow-lg shadow-teal-900/20"
          >
            Bereken je nettoloon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>
    </>
  );
}
