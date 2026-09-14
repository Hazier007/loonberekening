import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Over Loonberekening.be — Wie Zijn Wij?',
  description: 'Loonberekening.be is een gratis online tool om je Belgische nettoloon te berekenen. Snel, accuraat en altijd up-to-date.',
  alternates: { canonical: 'https://loonberekening.be/over-ons' },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bart Deblock',
  url: 'https://loonberekening.be/over-ons#auteur',
  jobTitle: 'Webbouwer',
  worksFor: { '@type': 'Organization', name: 'Hazier', url: 'https://hazier.be' },
};

export default function OverOnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Over Ons' }]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Over Loonberekening.be</h1>

      <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-6 mb-8 border border-teal-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Loonberekening.be is dé gratis online tool voor iedereen die snel en eenvoudig wil weten wat er netto overblijft van een Belgisch brutoloon.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">Onze Missie</h2>
        <p>
          Loonberekeningen in België zijn complex: RSZ-bijdragen, bedrijfsvoorheffing, werkbonus, belastingschijven… 
          Wij maken het <strong>eenvoudig en toegankelijk</strong>. Geen registratie, geen kosten — gewoon je brutoloon invullen 
          en direct je nettoloon zien.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Wat bieden wij?</h2>
        <ul>
          <li><strong>Gratis loonberekening</strong> — van bruto naar netto in seconden</li>
          <li><strong>Actuele tarieven</strong> — bijgewerkt voor 2026</li>
          <li><strong>Kennisbank</strong> — uitgebreide artikelen over alle aspecten van je loon</li>
          <li><strong>Sectorinformatie</strong> — gemiddelde lonen per sector en paritair comité</li>
          <li><strong>Geen tracking</strong> — je gegevens worden niet opgeslagen of gedeeld</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">Betrouwbaarheid</h2>
        <p>
          Onze berekeningen zijn gebaseerd op de officiële Belgische tarieven voor RSZ, bedrijfsvoorheffing en
          belastingschijven. De resultaten zijn <strong>indicatief</strong> — voor een exacte berekening op maat
          raden we aan je loonfiche te raadplegen of contact op te nemen met een boekhouder of sociaal secretariaat.
          Op onze <Link href="/bronnen" className="text-teal-700 underline">bronnenpagina</Link> lees je precies welke
          officiële bronnen we gebruiken en waarvoor.
        </p>

        <h2 id="auteur" className="text-2xl font-bold text-gray-900 scroll-mt-24">Wie maakt deze site?</h2>
        <p>
          Loonberekening.be wordt gebouwd en onderhouden door <strong>Bart Deblock</strong>, webbouwer bij{' '}
          <a href="https://hazier.be" className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">Hazier</a>,
          een Belgisch digitaal bureau gespecialiseerd in webontwikkeling en SEO. Bart bouwt en onderhoudt een reeks
          Belgische calculator-tools, waaronder deze loonberekening. Hij is geen fiscalist of jurist: de calculator
          is gebaseerd op publiek beschikbare, officiële tarieven (zie <Link href="/bronnen" className="text-teal-700 underline">bronnen</Link>),
          niet op persoonlijk fiscaal advies.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Hoe houden we de cijfers actueel?</h2>
        <p>
          De tarieven voor RSZ-bijdragen, bedrijfsvoorheffing en de werkbonus veranderen jaarlijks en bij elke
          loonindexatie. We controleren de calculator en de kennisbankartikelen tegen de officiële bronnen (RSZ,
          FOD Financiën, FOD WASO en de NAR) telkens er nieuwe tarieven bekend worden gemaakt. Zie je een verouderd
          of fout bedrag? Laat het ons weten via onderstaand contact — we passen het zo snel mogelijk aan.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
        <p>
          Loonberekening.be is een initiatief van <a href="https://hazier.be" className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">Hazier</a>
          {' '}(KBO 0672.948.386, Blijde-Inkomststraat 16, 9000 Gent). Vragen, feedback of een fout gevonden?
          Mail naar <a href="mailto:info@hazier.be" className="text-teal-700 underline">info@hazier.be</a>.
        </p>
      </article>

      <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Klaar om te berekenen?</h2>
        <p className="text-gray-600 mb-4">Ontdek direct wat je netto overhoudt.</p>
        <Link
          href="/calculator"
          className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 font-medium"
        >
          Bereken je loon →
        </Link>
      </div>
    </div>
  );
}
