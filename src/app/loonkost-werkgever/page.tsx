import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loonkost Werkgever België — Wat Kost een Werknemer Echt? [2026]',
  description: 'Wat kost een werknemer in België? Werkgeversbijdragen RSZ (~25%), verzekeringen, extralegale voordelen. Complete gids over de totale loonkost.',
};

export default function LoonkostWerkgeverPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Loonkost Werkgever' }]} />
      <article className="prose prose-lg max-w-none">
        <h1>Loonkost Werkgever in België: Wat Kost een Werknemer Echt?</h1>

        <p className="lead">
          Het brutoloon dat een werknemer ontvangt, is slechts een deel van de totale kost voor de werkgever. In België betaalt de werkgever bovenop het bruto nog aanzienlijke sociale bijdragen, verzekeringen en andere kosten. De totale loonkost kan tot <strong>130-140%</strong> van het brutoloon bedragen. In dit artikel bespreken we alle componenten van de loonkost.
        </p>

        <h2>Overzicht loonkost</h2>
        <p>De totale loonkost voor een werkgever bestaat uit meerdere componenten:</p>

        <h3>1. Het brutoloon</h3>
        <p>
          Dit is het basissalaris dat overeengekomen is in de arbeidsovereenkomst. Het brutoloon is het vertrekpunt voor alle berekeningen.
        </p>

        <h3>2. Werkgeversbijdragen RSZ (~25%)</h3>
        <p>
          Bovenop het brutoloon betaalt de werkgever <strong>patronale RSZ-bijdragen</strong> van ongeveer 25% van het brutoloon. Het exacte percentage omvat:
        </p>
        <ul>
          <li>Basisbijdrage: 19,88%</li>
          <li>Loonmatigingsbijdrage: 5,67%</li>
          <li>Diverse andere bijdragen (afhankelijk van sector)</li>
        </ul>
        <p>
          Totaal komt dit neer op circa 25% van het brutoloon, hoewel er voor sommige werkgevers verminderingen bestaan (structurele vermindering, doelgroepverminderingen).
        </p>

        <h3>3. Verplichte verzekeringen</h3>
        <ul>
          <li><strong>Arbeidsongevallenverzekering:</strong> 0,3% tot 10% (afhankelijk van sector en risico)</li>
          <li><strong>Sectorale bijdragen:</strong> Afhankelijk van het paritaire comité</li>
        </ul>

        <h3>4. Extralegale voordelen</h3>
        <p>De meeste werkgevers bieden ook extralegale voordelen aan:</p>
        <ul>
          <li><strong>Maaltijdcheques:</strong> Tot €8/dag, werkgeversbijdrage max. €6,91</li>
          <li><strong>Groepsverzekering:</strong> Gemiddeld 3-5% van het brutoloon</li>
          <li><strong>Hospitalisatieverzekering:</strong> €500-1.500 per jaar</li>
          <li><strong>Bedrijfswagen + tankkaart:</strong> €500-1.200 per maand</li>
          <li><strong>Ecocheques:</strong> Tot €250 per jaar</li>
        </ul>

        <h2>Voorbeeldberekening: totale loonkost</h2>
        <p>Wat kost een werknemer met een brutoloon van €3.000 per maand werkelijk?</p>
        <table>
          <thead><tr><th>Kostenpost</th><th>Maandelijks</th><th>Jaarlijks</th></tr></thead>
          <tbody>
            <tr><td>Brutoloon</td><td>€3.000</td><td>€36.000</td></tr>
            <tr><td>Patronale RSZ (~25%)</td><td>€750</td><td>€9.000</td></tr>
            <tr><td>Arbeidsongevallenverzekering</td><td>€30</td><td>€360</td></tr>
            <tr><td>Maaltijdcheques (werkgeversdeel)</td><td>€138</td><td>€1.656</td></tr>
            <tr><td>Groepsverzekering</td><td>€90</td><td>€1.080</td></tr>
            <tr><td>Hospitalisatieverzekering</td><td>€83</td><td>€1.000</td></tr>
            <tr><td><strong>Totale loonkost</strong></td><td><strong>€4.091</strong></td><td><strong>€49.096</strong></td></tr>
          </tbody>
        </table>
        <p>
          De totale loonkost bedraagt in dit voorbeeld <strong>136%</strong> van het brutoloon. De werknemer ontvangt netto slechts ~€2.042 (68% van bruto), terwijl de werkgever €4.091 betaalt. Het verschil — meer dan €2.000 per maand — gaat naar sociale bijdragen, belastingen en verzekeringen.
        </p>

        <h2>Loonkost per brutoloon</h2>
        <table>
          <thead><tr><th>Bruto</th><th>Werkgevers RSZ</th><th>Totale loonkost</th><th>Netto werknemer</th></tr></thead>
          <tbody>
            <tr><td>€2.000</td><td>~€500</td><td>~€2.700</td><td>~€1.600</td></tr>
            <tr><td>€2.500</td><td>~€625</td><td>~€3.375</td><td>~€1.820</td></tr>
            <tr><td>€3.000</td><td>~€750</td><td>~€4.050</td><td>~€2.042</td></tr>
            <tr><td>€3.500</td><td>~€875</td><td>~€4.725</td><td>~€2.250</td></tr>
            <tr><td>€4.000</td><td>~€1.000</td><td>~€5.400</td><td>~€2.460</td></tr>
            <tr><td>€5.000</td><td>~€1.250</td><td>~€6.750</td><td>~€2.875</td></tr>
          </tbody>
        </table>

        <h2>Verminderingen voor werkgevers</h2>
        <p>De Belgische overheid biedt verschillende verminderingen aan om de loonkost te drukken:</p>

        <h3>Structurele vermindering</h3>
        <p>
          Elke werkgever in de private sector geniet automatisch van een structurele vermindering van de patronale RSZ-bijdragen. Het bedrag hangt af van het brutoloon en is vooral significant bij lage en hoge lonen.
        </p>

        <h3>Doelgroepverminderingen</h3>
        <ul>
          <li><strong>Eerste werknemer:</strong> Geen patronale basisbijdrage voor de eerste aangewerving</li>
          <li><strong>Jonge werknemers:</strong> Vermindering voor werknemers onder 26 met een laag loon</li>
          <li><strong>Oudere werknemers:</strong> Vermindering voor 55+ werknemers</li>
          <li><strong>Langdurig werklozen:</strong> Activeringsmaatregelen met RSZ-vermindering</li>
        </ul>

        <h2>België: duurste arbeidsmarkt?</h2>
        <p>
          België behoort tot de landen met de hoogste loonkosten in de Europese Unie. De combinatie van relatief hoge bruto lonen én hoge werkgeversbijdragen maakt arbeid duur. Dit is een belangrijke reden waarom het debat over loonkostcompetitiviteit in België voortdurend terugkomt.
        </p>
        <p>
          Gemiddelde loonkost per uur in de EU (2024):
        </p>
        <ul>
          <li><strong>België:</strong> €43,50</li>
          <li><strong>Duitsland:</strong> €41,30</li>
          <li><strong>Frankrijk:</strong> €40,80</li>
          <li><strong>Nederland:</strong> €39,40</li>
          <li><strong>EU-gemiddelde:</strong> €31,80</li>
        </ul>

        <p>
          Bereken je eigen nettoloon met onze <Link href="/calculator">gratis calculator</Link>, of lees meer over de <Link href="/rsz-bijdrage">RSZ-bijdrage</Link> en <Link href="/belastingschijven-belgie">belastingschijven</Link>.
        </p>
      </article>
    </div>
  );
}
