import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Werkbonus België — Wie Komt in Aanmerking? Berekening [2026]',
  description: 'De werkbonus in België uitgelegd: wie komt in aanmerking, hoeveel bedraagt de werkbonus, hoe wordt hij berekend? Complete gids met tabellen.',
};

export default function WerkbonusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Werkbonus' }]} />
      <article className="prose prose-lg max-w-none">
        <h1>De Werkbonus in België: Complete Gids</h1>

        <p className="lead">
          De werkbonus is een financiële stimulans van de Belgische overheid om werken lonender te maken voor werknemers met een laag tot gemiddeld brutoloon. Door een vermindering van de persoonlijke RSZ-bijdrage en een fiscaal voordeel ontvang je als werknemer met een bescheiden loon een hoger nettoloon. In dit artikel leggen we uitgebreid uit wie in aanmerking komt, hoeveel de werkbonus bedraagt, en hoe de berekening werkt.
        </p>

        <h2>Wat is de werkbonus?</h2>
        <p>
          De werkbonus is een tweeledig voordeel voor werknemers met lage lonen in België:
        </p>
        <ol>
          <li><strong>Sociale werkbonus:</strong> Een vermindering van je persoonlijke <Link href="/rsz-bijdrage">RSZ-bijdrage</Link> (13,07%), waardoor je directe RSZ-inhouding daalt.</li>
          <li><strong>Fiscale werkbonus:</strong> Een bijkomende vermindering van de <Link href="/bedrijfsvoorheffing">bedrijfsvoorheffing</Link>, waardoor je nog meer netto overhoudt.</li>
        </ol>
        <p>
          Samen kunnen deze twee componenten je nettoloon met tot meer dan €300 per maand verhogen ten opzichte van een situatie zonder werkbonus.
        </p>

        <h2>Wie komt in aanmerking?</h2>
        <p>
          Je komt in aanmerking voor de werkbonus als je bruto maandloon niet hoger is dan circa <strong>€3.144,45</strong> (referentiebedrag 2025). Dit bedrag wordt jaarlijks geïndexeerd en kan dus lichtjes stijgen.
        </p>
        <p>De werkbonus geldt voor:</p>
        <ul>
          <li>Werknemers in de private sector</li>
          <li>Contractuelen bij de overheid</li>
          <li>Voltijdse en deeltijdse werknemers (pro rata berekend)</li>
        </ul>
        <p>
          De werkbonus wordt <strong>automatisch</strong> toegepast door je werkgever bij de loonberekening. Je hoeft zelf niets aan te vragen.
        </p>

        <h2>Hoeveel bedraagt de werkbonus?</h2>
        <p>
          Het bedrag van de sociale werkbonus (RSZ-vermindering) hangt af van je brutoloon:
        </p>

        <div className="not-prose overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-teal-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Bruto maandloon</th>
                <th className="px-6 py-3 text-left">Sociale werkbonus (RSZ-vermindering)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-6 py-3">Tot €2.078,49</td><td className="px-6 py-3 font-bold text-green-600">€229,98 (maximum)</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-6 py-3">€2.078,49 — €3.144,45</td><td className="px-6 py-3">Degressief aflopend</td></tr>
              <tr><td className="px-6 py-3">Boven €3.144,45</td><td className="px-6 py-3 text-gray-400">€0 (geen recht)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Voorbeelden sociale werkbonus</h3>
        <table>
          <thead><tr><th>Bruto maandloon</th><th>RSZ zonder werkbonus</th><th>Werkbonus</th><th>Effectieve RSZ</th></tr></thead>
          <tbody>
            <tr><td>€2.000</td><td>€261,40</td><td>€229,98</td><td>€31,42</td></tr>
            <tr><td>€2.500</td><td>€326,75</td><td>€138,91</td><td>€187,84</td></tr>
            <tr><td>€3.000</td><td>€392,10</td><td>€31,12</td><td>€360,98</td></tr>
            <tr><td>€3.144</td><td>€410,92</td><td>€0,10</td><td>€410,82</td></tr>
            <tr><td>€3.500</td><td>€457,45</td><td>€0</td><td>€457,45</td></tr>
          </tbody>
        </table>

        <h2>De fiscale werkbonus</h2>
        <p>
          Naast de sociale werkbonus geniet je ook van een <strong>fiscale werkbonus</strong>. Dit is een vermindering van de bedrijfsvoorheffing die bovenop de RSZ-vermindering komt. Het fiscale voordeel bedraagt ongeveer 33,14% van de sociale werkbonus.
        </p>
        <p>
          Bij het maximum van de sociale werkbonus (€229,98) bedraagt de fiscale werkbonus dus circa €76,22 per maand. Samen met de sociale component is het totale voordeel dan meer dan €300 per maand.
        </p>

        <h2>Berekening voor deeltijdse werknemers</h2>
        <p>
          Als je deeltijds werkt, wordt de werkbonus berekend op basis van je voltijds equivalent brutoloon. Het resulterende voordeel wordt vervolgens pro rata toegepast op basis van je werkfractie.
        </p>
        <p>
          Voorbeeld: werk je 80% (4/5) en is je deeltijds bruto €2.000, dan wordt eerst berekend wat je voltijds zou verdienen (€2.500). Op basis van dat bedrag wordt de werkbonus berekend en vervolgens met 80% vermenigvuldigd.
        </p>

        <h2>Impact op je nettoloon</h2>
        <p>
          De werkbonus maakt een significant verschil voor werknemers met lage lonen. Hieronder een vergelijking van het nettoloon met en zonder werkbonus:
        </p>
        <table>
          <thead><tr><th>Bruto</th><th>Netto zonder werkbonus</th><th>Netto met werkbonus</th><th>Verschil</th></tr></thead>
          <tbody>
            <tr><td>€2.000</td><td>~€1.540</td><td>~€1.846</td><td>+€306</td></tr>
            <tr><td>€2.500</td><td>~€1.820</td><td>~€2.005</td><td>+€185</td></tr>
            <tr><td>€3.000</td><td>~€2.010</td><td>~€2.051</td><td>+€41</td></tr>
          </tbody>
        </table>

        <h2>Geschiedenis en doel van de werkbonus</h2>
        <p>
          De werkbonus werd ingevoerd om de zogenaamde <strong>werkloosheidsval</strong> te bestrijden. Voor sommige werknemers met lage lonen was het verschil tussen een werkloosheidsuitkering en een nettoloon zo klein dat werken financieel nauwelijks de moeite loonde. Door de RSZ-bijdrage en belastingen te verlagen voor lage lonen, wordt het verschil tussen werken en niet-werken groter.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Moet ik de werkbonus zelf aanvragen?</h3>
        <p>Nee, de werkbonus wordt automatisch berekend en toegepast door je werkgever. Je ziet het effect op je loonbrief als een lagere RSZ-bijdrage.</p>

        <h3>Geldt de werkbonus ook voor flexi-jobs?</h3>
        <p>Nee, flexi-jobbers betalen sowieso geen persoonlijke RSZ-bijdrage, dus de werkbonus is niet van toepassing.</p>

        <h3>Wordt de werkbonus geïndexeerd?</h3>
        <p>Ja, de referentiebedragen en het maximum werkbonusbedrag worden regelmatig geïndexeerd.</p>

        <p>
          Bereken je nettoloon inclusief werkbonus met onze <Link href="/calculator">gratis calculator</Link>. Of bekijk hoeveel je netto overhoudt bij populaire bedragen: <Link href="/loon/2000">€2.000 bruto</Link>, <Link href="/loon/2500">€2.500 bruto</Link>, <Link href="/loon/3000">€3.000 bruto</Link>.
        </p>
      </article>
    </div>
  );
}
