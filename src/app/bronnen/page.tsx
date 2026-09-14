import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Bronnen — Loonberekening.be',
  description: 'De officiële Belgische bronnen die Loonberekening.be gebruikt voor RSZ-bijdragen, bedrijfsvoorheffing, minimumloon en werkbonus — en waarvoor we elke bron precies gebruiken.',
  alternates: { canonical: 'https://loonberekening.be/bronnen' },
};

interface Source {
  name: string;
  url: string;
  usage: string;
}

const sources: Source[] = [
  {
    name: 'FOD Financiën — Bedrijfsvoorheffing',
    url: 'https://financien.belgium.be/nl/ondernemingen/personeel_en_loon/bedrijfsvoorheffing',
    usage: 'Basis voor de belastingschijven en het belastingvrije minimum die onze calculator gebruikt om de bedrijfsvoorheffing (de voorheffing die van je brutoloon wordt ingehouden) te schatten. Onze calculator benadert dit met vereenvoudigde schijven — voor je exacte, officiële bedrijfsvoorheffingsbarema kan je deze pagina raadplegen.',
  },
  {
    name: 'RSZ (Rijksdienst voor Sociale Zekerheid)',
    url: 'https://www.rsz.fgov.be/nl',
    usage: 'De RSZ-werknemersbijdrage van 13,07% die op elk brutoloon wordt ingehouden, plus de drempels en bedragen van de werkbonus en de bijzondere bijdrage sociale zekerheid in onze calculator, zijn gebaseerd op de tarieven die RSZ publiceert.',
  },
  {
    name: 'Sociale Zekerheid (portaalsite)',
    url: 'https://www.socialsecurity.be/',
    usage: 'We gebruiken dit portaal als algemene achtergrondbron om de werking van de Belgische sociale zekerheid te duiden in onze uitleg-artikelen, bijvoorbeeld over RSZ-bijdragen en de werkbonus.',
  },
  {
    name: 'Statbel — Lonen en arbeidskosten',
    url: 'https://statbel.fgov.be/nl/themas/werk-opleiding/lonen-en-arbeidskosten',
    usage: 'We toetsen de gemiddelde-loonbedragen op onze sectorpagina’s aan Statbel-cijfers. Dit zijn redactioneel samengestelde, indicatieve bedragen per sector — geen automatische data-feed vanuit Statbel.',
  },
  {
    name: 'FOD Werkgelegenheid, Arbeid en Sociaal Overleg (WASO) — Verloning',
    url: 'https://werk.belgie.be/nl/themas/verloning',
    usage: 'Bron voor onze uitleg over hoe verloning en het minimumloon wettelijk geregeld zijn in België, gebruikt in onze kennisbankartikelen over het minimumloon (GGMMI).',
  },
  {
    name: 'CNT/NAR — Nationale Arbeidsraad',
    url: 'https://cnt-nar.be/nl',
    usage: 'De Nationale Arbeidsraad legt de GGMMI-bedragen (het gewaarborgd gemiddeld minimum maandinkomen, ofwel het minimumloon) vast via collectieve arbeidsovereenkomsten. De bedragen in ons artikel over het minimumloon zijn hierop gebaseerd.',
  },
  {
    name: 'Vlaanderen — Jobbonus',
    url: 'https://www.vlaanderen.be/jobbonus',
    usage: 'Onze calculator berekent de federale werkbonus (een RSZ-korting op laagverdienende lonen), niet de Vlaamse jobbonus — dat is een aparte, regionale premie voor wie in het Vlaams Gewest werkt. In ons artikel over de werkbonus verwijzen we naar deze pagina zodat lezers het onderscheid kunnen maken.',
  },
];

export default function BronnenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Bronnen' }]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Bronnen</h1>

      <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-6 mb-8 border border-teal-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Loonberekening.be baseert zich op publiek beschikbare, officiële Belgische bronnen. Hieronder lees je
          per bron precies waarvoor we die gebruiken. Links zijn laatst gecontroleerd op 15 september 2026.
        </p>
      </div>

      <div className="space-y-6">
        {sources.map((source) => (
          <div key={source.url} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                {source.name}
              </a>
            </h2>
            <p className="text-sm text-gray-500 mb-3 break-all">{source.url}</p>
            <p className="text-gray-700 mb-0">{source.usage}</p>
          </div>
        ))}
      </div>

      <article className="prose prose-lg max-w-none mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Methodologie</h2>
        <p>
          Onze calculator herrekent bovenstaande officiële tarieven naar een vereenvoudigd model (RSZ-bijdrage,
          werkbonus, bijzondere bijdrage sociale zekerheid en een progressieve schatting van de bedrijfsvoorheffing).
          Dat maakt het resultaat <strong>indicatief</strong>: voor je exacte nettoloon blijft je loonfiche, je
          sociaal secretariaat of boekhouder de referentie. Meer over wie deze site maakt en hoe we cijfers actueel
          houden vind je op <Link href="/over-ons" className="text-teal-700 underline">onze over-ons pagina</Link>.
        </p>
      </article>
    </div>
  );
}
