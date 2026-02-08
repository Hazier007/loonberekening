import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minimumloon België 2026 — GGMMI Bedragen & Uitleg',
  description: 'Het minimumloon (GGMMI) in België: actuele bedragen, indexatie, verschil per leeftijd en sector. Complete gids over het Belgische minimumloon.',
};

export default function MinimumloonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Minimumloon België' }]} />
      <article className="prose prose-lg max-w-none">
        <h1>Minimumloon in België 2026: GGMMI Uitgelegd</h1>

        <p className="lead">
          België kent een wettelijk minimumloon, officieel het <strong>Gewaarborgd Gemiddeld Minimum Maandinkomen (GGMMI)</strong> genoemd. Dit is het absolute minimumbedrag dat een voltijdse werknemer in de private sector moet verdienen. In dit artikel bespreken we het actuele bedrag, hoe het geïndexeerd wordt, en wat je er netto van overhoudt.
        </p>

        <h2>Wat is het GGMMI?</h2>
        <p>
          Het GGMMI staat voor <strong>Gewaarborgd Gemiddeld Minimum Maandinkomen</strong>. Het is het wettelijk minimumloon dat vastgelegd is door de Nationale Arbeidsraad (NAR) via collectieve arbeidsovereenkomst (CAO). Elke werkgever in België is verplicht minstens dit bedrag te betalen aan voltijdse werknemers.
        </p>
        <p>
          Het GGMMI is een <strong>bruto</strong> bedrag. Na aftrek van RSZ-bijdragen en bedrijfsvoorheffing hou je netto een lager bedrag over. Dankzij de <Link href="/werkbonus">werkbonus</Link> is het verschil tussen bruto en netto bij het minimumloon relatief klein.
        </p>

        <h2>Actueel minimumloon 2025-2026</h2>
        <p>Sinds 1 april 2024 bedraagt het GGMMI:</p>
        <div className="not-prose bg-teal-50 border-2 border-teal-200 rounded-xl p-6 mb-6 text-center">
          <div className="text-sm text-teal-600 mb-1">Bruto minimumloon (GGMMI)</div>
          <div className="text-4xl font-bold text-gray-900">€2.029,88</div>
          <div className="text-sm text-gray-500 mt-1">per maand, voltijds</div>
        </div>

        <h3>GGMMI per anciënniteit</h3>
        <p>Het minimumloon stijgt met anciënniteit:</p>
        <table>
          <thead><tr><th>Anciënniteit</th><th>Bruto GGMMI/maand</th></tr></thead>
          <tbody>
            <tr><td>0-6 maanden</td><td>€2.029,88</td></tr>
            <tr><td>6-12 maanden</td><td>€2.029,88</td></tr>
            <tr><td>12+ maanden</td><td>€2.088,38</td></tr>
          </tbody>
        </table>

        <h2>Netto minimumloon</h2>
        <p>
          Dankzij de werkbonus hou je als werknemer op het minimumloon relatief veel netto over. De werkbonus vermindert je RSZ-bijdrage aanzienlijk en je geniet ook van een fiscaal voordeel.
        </p>
        <table>
          <thead><tr><th>Omschrijving</th><th>Bedrag</th></tr></thead>
          <tbody>
            <tr><td>Bruto maandloon</td><td>€2.029,88</td></tr>
            <tr><td>RSZ-bijdrage (13,07%)</td><td>- €265,30</td></tr>
            <tr><td>Werkbonus</td><td>+ €229,98</td></tr>
            <tr><td>Effectieve RSZ</td><td>- €35,32</td></tr>
            <tr><td>Bedrijfsvoorheffing</td><td>- €161,25</td></tr>
            <tr><td><strong>Netto maandloon</strong></td><td><strong>~€1.833</strong></td></tr>
          </tbody>
        </table>
        <p>
          Dit resulteert in een netto/bruto verhouding van ongeveer 90%, wat aanzienlijk gunstiger is dan bij hogere lonen (waar je 60-65% overhoudt). <Link href="/loon/2000">Bekijk de volledige berekening voor €2.000 bruto</Link>.
        </p>

        <h2>Minimumloon en indexatie</h2>
        <p>
          Het GGMMI wordt regelmatig aangepast aan de <Link href="/indexatie-lonen">levensduurte via het indexmechanisme</Link>. Wanneer de spilindex overschreden wordt, stijgen de sociale uitkeringen en overheidslonen automatisch met 2%. Het GGMMI volgt een gelijkaardig mechanisme, hoewel de aanpassing via de NAR verloopt.
        </p>
        <p>De evolutie van het GGMMI de afgelopen jaren:</p>
        <table>
          <thead><tr><th>Datum</th><th>GGMMI bruto/maand</th></tr></thead>
          <tbody>
            <tr><td>April 2024</td><td>€2.029,88</td></tr>
            <tr><td>November 2023</td><td>€1.994,18</td></tr>
            <tr><td>November 2022</td><td>€1.954,99</td></tr>
            <tr><td>Maart 2022</td><td>€1.806,16</td></tr>
            <tr><td>April 2020</td><td>€1.625,72</td></tr>
            <tr><td>Januari 2019</td><td>€1.593,81</td></tr>
          </tbody>
        </table>

        <h2>Sectorale minimumlonen</h2>
        <p>
          Belangrijk: veel sectoren hebben via paritaire comités <strong>sectorale minimumlonen</strong> vastgelegd die hoger liggen dan het GGMMI. Het GGMMI is dus een absolute ondergrens, maar in de praktijk verdienen de meeste werknemers meer.
        </p>
        <p>
          Enkele voorbeelden van sectoren met hogere minimumbedragen:
        </p>
        <ul>
          <li><Link href="/sector/bouw">Bouw</Link> — minimumloon vanaf ~€2.300 bruto</li>
          <li><Link href="/sector/industrie">Industrie</Link> — minimumloon vanaf ~€2.400 bruto</li>
          <li><Link href="/sector/it-software">IT sector</Link> — minimumloon vanaf ~€2.800 bruto</li>
        </ul>

        <h2>België vergeleken met buurlanden</h2>
        <table>
          <thead><tr><th>Land</th><th>Bruto minimumloon/maand</th></tr></thead>
          <tbody>
            <tr><td><strong>België</strong></td><td>€2.030</td></tr>
            <tr><td>Nederland</td><td>€2.070</td></tr>
            <tr><td>Duitsland</td><td>€2.054</td></tr>
            <tr><td>Frankrijk</td><td>€1.802</td></tr>
            <tr><td>Luxemburg</td><td>€2.571</td></tr>
          </tbody>
        </table>
        <p>
          België heeft één van de hogere minimumlonen in Europa, maar het netto minimumloon wordt beïnvloed door de relatief hoge belastingdruk. Dankzij de werkbonus is het nettoverschil bij lage lonen echter beperkt.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Geldt het minimumloon voor studenten?</h3>
        <p>Studentenjobbers hebben recht op minstens het minimumloon, maar genieten van een gunstig RSZ-regime (solidariteitsbijdrage van 2,71% i.p.v. 13,07%) voor maximaal 600 uren per jaar.</p>

        <h3>Kan mijn werkgever minder betalen dan het minimumloon?</h3>
        <p>Nee, het GGMMI is wettelijk verplicht. Een werkgever die minder betaalt, maakt zich schuldig aan een sociaal misdrijf en riskeert zware boetes.</p>

        <p>
          Bereken je nettoloon op basis van het minimumloon met onze <Link href="/calculator">gratis calculator</Link>.
        </p>
      </article>
    </div>
  );
}
