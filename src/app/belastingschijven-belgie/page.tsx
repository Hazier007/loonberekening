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
        <h1>Belastingschijven in België 2025-2026</h1>

        <p className="lead">
          België hanteert een systeem van progressieve belasting op het inkomen van haar inwoners. Dit betekent dat naarmate je meer verdient, je een hoger percentage belasting betaalt — maar alleen op het gedeelte van je inkomen dat boven elke drempel uitkomt. In dit artikel bespreken we uitgebreid alle belastingschijven, hoe ze werken, en geven we concrete voorbeelden.
        </p>

        <h2>De vier belastingschijven in België</h2>
        <p>
          De Belgische personenbelasting kent vier belastingschijven. Elk schijf heeft een eigen tarief dat alleen van toepassing is op het inkomen binnen die schijf. Dit noemt men het <strong>progressieve tarief</strong>.
        </p>

        <div className="not-prose overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-teal-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Belastbaar inkomen (jaarlijks)</th>
                <th className="px-6 py-3 text-left">Tarief</th>
                <th className="px-6 py-3 text-left">Belasting in deze schijf</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-6 py-3">€0 — €15.200</td><td className="px-6 py-3 font-bold">25%</td><td className="px-6 py-3">max. €3.800</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-6 py-3">€15.200 — €26.830</td><td className="px-6 py-3 font-bold">40%</td><td className="px-6 py-3">max. €4.652</td></tr>
              <tr className="border-b"><td className="px-6 py-3">€26.830 — €46.440</td><td className="px-6 py-3 font-bold">45%</td><td className="px-6 py-3">max. €8.824,50</td></tr>
              <tr><td className="px-6 py-3">Boven €46.440</td><td className="px-6 py-3 font-bold">50%</td><td className="px-6 py-3">onbeperkt</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Hoe werkt het progressieve systeem?</h2>
        <p>
          Een veelgemaakte fout is denken dat als je in de schijf van 45% valt, je op je volledige inkomen 45% betaalt. Dat klopt niet. Het progressieve systeem werkt als volgt: je betaalt 25% op de eerste €15.200, dan 40% op het deel tussen €15.200 en €26.830, enzovoort.
        </p>
        <p>
          Dit betekent dat iedereen in België — ongeacht zijn inkomen — hetzelfde belastingbedrag betaalt op de eerste €15.200 van zijn belastbaar inkomen, namelijk €3.800. Het verschil zit hem in wat je betaalt op het inkomen bóven die drempels.
        </p>

        <h2>Voorbeeldberekening: belasting op €36.000 jaarlijks belastbaar inkomen</h2>
        <p>Stel je hebt een jaarlijks belastbaar inkomen van €36.000 (na aftrek van RSZ). Hoe wordt je belasting berekend?</p>
        <table>
          <thead><tr><th>Schijf</th><th>Bedrag</th><th>Tarief</th><th>Belasting</th></tr></thead>
          <tbody>
            <tr><td>€0 — €15.200</td><td>€15.200</td><td>25%</td><td>€3.800</td></tr>
            <tr><td>€15.200 — €26.830</td><td>€11.630</td><td>40%</td><td>€4.652</td></tr>
            <tr><td>€26.830 — €36.000</td><td>€9.170</td><td>45%</td><td>€4.126,50</td></tr>
            <tr className="font-bold"><td colSpan={3}>Totale belasting</td><td>€12.578,50</td></tr>
          </tbody>
        </table>
        <p>
          De gemiddelde belastingvoet op dit inkomen is €12.578,50 / €36.000 = <strong>34,9%</strong>. Het marginale tarief (op de laatst verdiende euro) is 45%, maar de gemiddelde druk is dus een stuk lager.
        </p>

        <h2>De belastingvrije som</h2>
        <p>
          Elke belastingplichtige in België heeft recht op een <strong>belastingvrije som</strong>. Dit is een deel van je inkomen waarop je geen belasting betaalt. Voor aanslagjaar 2026 (inkomsten 2025) bedraagt de basisvrijstelling ongeveer <strong>€10.160</strong>.
        </p>
        <p>
          De belastingvrije som wordt als belastingvermindering verrekend: je bespaart effectief 25% × €10.160 = <strong>€2.540</strong> aan belastingen per jaar. Dit bedrag wordt in mindering gebracht op je berekende belasting.
        </p>

        <h3>Verhogingen van de belastingvrije som</h3>
        <table>
          <thead><tr><th>Situatie</th><th>Extra vrijstelling</th></tr></thead>
          <tbody>
            <tr><td>1 kind ten laste</td><td>+ €1.850</td></tr>
            <tr><td>2 kinderen ten laste</td><td>+ €4.760</td></tr>
            <tr><td>3 kinderen ten laste</td><td>+ €8.000</td></tr>
            <tr><td>4 kinderen ten laste</td><td>+ €9.160</td></tr>
            <tr><td>Per bijkomend kind</td><td>+ €1.300</td></tr>
            <tr><td>Handicap</td><td>+ €1.850</td></tr>
            <tr><td>Alleenstaande ouder</td><td>+ €1.850</td></tr>
          </tbody>
        </table>

        <h2>Gemeentelijke opcentiemen</h2>
        <p>
          Bovenop de federale personenbelasting heffen de Belgische gemeenten ook nog <strong>gemeentelijke opcentiemen</strong>. Dit is een percentage bovenop je federale belasting dat varieert per gemeente. De meeste gemeenten heffen tussen 6% en 9% opcentiemen. Dit betekent dat je effectieve belastingdruk nog iets hoger ligt dan de federale tarieven.
        </p>
        <p>
          Voorbeeld: als je federale belasting €10.000 bedraagt en je woont in een gemeente met 7% opcentiemen, betaal je nog eens €700 extra, dus €10.700 in totaal.
        </p>

        <h2>Verschil met de bedrijfsvoorheffing</h2>
        <p>
          De <Link href="/bedrijfsvoorheffing">bedrijfsvoorheffing</Link> die maandelijks op je loon ingehouden wordt, is een <strong>voorschot</strong> op je definitieve personenbelasting. De bedrijfsvoorheffing volgt dezelfde progressieve tarieven, maar houdt ook rekening met je persoonlijke situatie (gezinstoestand, kinderen, enz.).
        </p>
        <p>
          Bij je jaarlijkse belastingaangifte wordt de definitieve belasting berekend en vergeleken met de reeds ingehouden bedrijfsvoorheffing. Het verschil resulteert dan in een terug te betalen bedrag of een bijbetaling.
        </p>

        <h2>Tips om minder belasting te betalen</h2>
        <ul>
          <li><strong>Pensioensparen:</strong> Tot €1.310 per jaar aftrekbaar met een belastingvermindering van 25-30%.</li>
          <li><strong>Langetermijnsparen:</strong> Via levensverzekering of pensioensparen, met belastingvermindering.</li>
          <li><strong>Dienstencheques:</strong> Aftrekbaar als belastingvermindering (gewestelijk).</li>
          <li><strong>Kinderopvang:</strong> Tot €15,70 per opvangdag aftrekbaar.</li>
          <li><strong>Giften:</strong> Giften aan erkende instellingen zijn voor 45% aftrekbaar.</li>
          <li><strong>Hypotheeklening:</strong> Woonbonus of geïntegreerde woonbonus (afhankelijk van gewest en datum).</li>
        </ul>

        <h2>Belgische belastingschijven vergeleken met buurlanden</h2>
        <p>
          België heeft één van de hoogste marginale tarieven in Europa. Het toptarief van 50% wordt al bereikt bij een relatief laag inkomen van €46.440 per jaar. Ter vergelijking:
        </p>
        <ul>
          <li><strong>Nederland:</strong> 2 schijven — 36,97% tot €75.518, daarna 49,50%</li>
          <li><strong>Duitsland:</strong> Progressief van 14% tot 45% (vanaf €277.826)</li>
          <li><strong>Frankrijk:</strong> 5 schijven — van 11% tot 45% (vanaf €177.106)</li>
        </ul>
        <p>
          Het lage drempelbedrag waarop het toptarief in België ingaat, is de voornaamste reden waarom de belastingdruk voor middeninkomens zo hoog is.
        </p>

        <h2>Veelgestelde vragen over belastingschijven</h2>
        <h3>Worden de belastingschijven geïndexeerd?</h3>
        <p>
          Ja, de grensbedragen van de belastingschijven worden jaarlijks aangepast aan de <Link href="/indexatie-lonen">index</Link>. Hierdoor verschuiven de drempels licht naar boven, zodat inflatie niet automatisch leidt tot hogere belastingen (de zogenaamde bracket creep).
        </p>

        <h3>Betaal ik belasting op mijn volledige inkomen?</h3>
        <p>
          Nee. Dankzij de belastingvrije som betaal je op de eerste ~€10.160 van je inkomen effectief geen belasting. Daarboven gelden de progressieve tarieven.
        </p>

        <h3>Hoe bereken ik mijn belasting?</h3>
        <p>
          Gebruik onze gratis <Link href="/calculator">bruto-netto calculator</Link> voor een directe berekening op maat van jouw situatie, of bekijk de <Link href="/veelgestelde-vragen">veelgestelde vragen</Link> voor meer informatie.
        </p>
      </article>
    </div>
  );
}
