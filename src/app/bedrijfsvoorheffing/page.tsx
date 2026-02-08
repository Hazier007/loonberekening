import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bedrijfsvoorheffing België — Complete Gids [2026]',
  description: 'Alles over bedrijfsvoorheffing in België: berekening, tarieven, verminderingen, verschil met personenbelasting. Complete gids met voorbeelden.',
};

export default function BedrijfsvoorheffingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Bedrijfsvoorheffing' }]} />
      <article className="prose prose-lg max-w-none">
        <h1>Bedrijfsvoorheffing in België: Complete Gids</h1>

        <p className="lead">
          De bedrijfsvoorheffing is het voorschot op je personenbelasting dat maandelijks op je loon wordt ingehouden. Het is doorgaans de grootste inhouding na de RSZ-bijdrage en bepaalt in grote mate hoeveel netto je overhoudt. In dit artikel leggen we uit hoe de bedrijfsvoorheffing berekend wordt, welke verminderingen er bestaan, en hoe je ervoor kunt zorgen dat je niet te veel of te weinig betaalt.
        </p>

        <h2>Wat is bedrijfsvoorheffing?</h2>
        <p>
          De bedrijfsvoorheffing (BV) is een <strong>maandelijks ingehouden voorschot</strong> op de personenbelasting die je jaarlijks verschuldigd bent. Je werkgever is wettelijk verplicht dit bedrag in te houden op je loon en door te storten aan de fiscus.
        </p>
        <p>
          Het woord &quot;voorheffing&quot; geeft aan dat het om een voorafbetaling gaat. Bij je jaarlijkse belastingaangifte wordt de definitieve belasting berekend. De reeds betaalde bedrijfsvoorheffing wordt daarvan afgetrokken. Heb je te veel betaald, dan krijg je geld terug. Heb je te weinig betaald, dan moet je bijbetalen.
        </p>

        <h2>Hoe wordt de bedrijfsvoorheffing berekend?</h2>
        <p>
          De berekening van de bedrijfsvoorheffing is complex en houdt rekening met meerdere factoren:
        </p>
        <ol>
          <li><strong>Je belastbaar inkomen</strong> — je bruto min de <Link href="/rsz-bijdrage">RSZ-bijdrage</Link> (13,07%)</li>
          <li><strong>De progressieve belastingtarieven</strong> — de <Link href="/belastingschijven-belgie">belastingschijven</Link> van 25% tot 50%</li>
          <li><strong>De belastingvrije som</strong> — basis ~€10.160, verhoogd bij kinderen</li>
          <li><strong>Je gezinstoestand</strong> — alleenstaand, gehuwd, met/zonder partner met inkomen</li>
          <li><strong>Kinderen ten laste</strong> — elk kind verhoogt de vrijstelling</li>
          <li><strong>Andere verminderingen</strong> — handicap, groepsverzekering, enz.</li>
        </ol>

        <h2>Bedrijfsvoorheffing per loonniveau</h2>
        <p>Hieronder een overzicht van de indicatieve maandelijkse bedrijfsvoorheffing voor een alleenstaande zonder kinderen:</p>
        <table>
          <thead><tr><th>Bruto maandloon</th><th>RSZ</th><th>Belastbaar</th><th>BV (indicatief)</th></tr></thead>
          <tbody>
            <tr><td>€2.000</td><td>€261</td><td>€1.739</td><td>~€225</td></tr>
            <tr><td>€2.500</td><td>€327</td><td>€2.173</td><td>~€355</td></tr>
            <tr><td>€3.000</td><td>€392</td><td>€2.608</td><td>~€505</td></tr>
            <tr><td>€3.500</td><td>€457</td><td>€3.043</td><td>~€680</td></tr>
            <tr><td>€4.000</td><td>€523</td><td>€3.477</td><td>~€868</td></tr>
            <tr><td>€5.000</td><td>€654</td><td>€4.347</td><td>~€1.248</td></tr>
          </tbody>
        </table>

        <h2>Verminderingen op de bedrijfsvoorheffing</h2>
        <p>Er bestaan verschillende verminderingen die je bedrijfsvoorheffing kunnen verlagen:</p>

        <h3>Kinderen ten laste</h3>
        <p>
          Elke kind ten laste verlaagt je bedrijfsvoorheffing aanzienlijk. De vermindering stijgt bovendien naarmate je meer kinderen hebt. Een gezin met twee kinderen betaalt al snel €150-200 per maand minder bedrijfsvoorheffing dan een alleenstaande zonder kinderen.
        </p>

        <h3>Gehuwden met één inkomen</h3>
        <p>
          Als je gehuwd bent of wettelijk samenwonend en je partner heeft geen of een zeer laag inkomen, dan geniet je van het <strong>huwelijksquotiënt</strong>. Een deel van je inkomen wordt fictief aan je partner toegewezen, waardoor je minder bedrijfsvoorheffing betaalt.
        </p>

        <h3>Handicap</h3>
        <p>
          Werknemers met een erkende handicap genieten van een verhoogde belastingvrije som, wat resulteert in een lagere bedrijfsvoorheffing.
        </p>

        <h2>Bedrijfsvoorheffing vs personenbelasting</h2>
        <p>
          Een veel voorkomend misverstand is dat de bedrijfsvoorheffing gelijkstaat aan je definitieve belasting. Dat is niet het geval. De bedrijfsvoorheffing is slechts een <strong>benadering</strong>. Bij je jaarlijkse belastingaangifte wordt het verschil verrekend.
        </p>
        <p>Situaties waarin je te veel bedrijfsvoorheffing hebt betaald (en dus geld terugkrijgt):</p>
        <ul>
          <li>Je hebt fiscale aftrekposten (pensioensparen, kinderopvang, dienstencheques)</li>
          <li>Je gezinstoestand is veranderd (huwelijk, geboorte)</li>
          <li>Je hebt onregelmatige inkomsten gehad</li>
        </ul>
        <p>Situaties waarin je moet bijbetalen:</p>
        <ul>
          <li>Je hebt meerdere inkomsten uit verschillende bronnen</li>
          <li>Je gezinstoestand was niet correct doorgegeven</li>
          <li>Je ontving belastbare voordelen (bedrijfswagen, enz.) waarop te weinig BV werd berekend</li>
        </ul>

        <h2>Bedrijfsvoorheffing op vakantiegeld en premies</h2>
        <p>
          Op je <Link href="/vakantiegeld-berekenen">vakantiegeld</Link> en <Link href="/eindejaarspremie">eindejaarspremie</Link> wordt ook bedrijfsvoorheffing ingehouden, maar aan een <strong>vast tarief</strong> in plaats van het progressieve systeem:
        </p>
        <ul>
          <li><strong>Dubbel vakantiegeld:</strong> 23,22% (op het gedeelte boven 85%)</li>
          <li><strong>Eindejaarspremie:</strong> volgens de gewone progressieve schalen</li>
        </ul>

        <h2>Tips om je bedrijfsvoorheffing te optimaliseren</h2>
        <ul>
          <li>Zorg dat je werkgever je correcte gezinstoestand kent (gehuwd, kinderen ten laste)</li>
          <li>Meld veranderingen (geboorte, scheiding, samenwonen) direct aan je werkgever</li>
          <li>Als je te veel bedrijfsvoorheffing betaalt, overweeg om de vermindering te vragen via formulier 276FORM</li>
          <li>Maximaliseer fiscale aftrekposten bij je belastingaangifte</li>
        </ul>

        <p>
          Bereken je bedrijfsvoorheffing precies met onze <Link href="/calculator">bruto-netto calculator</Link>.
        </p>
      </article>
    </div>
  );
}
