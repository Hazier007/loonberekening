import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bruto vs Netto Verschil in België — Complete Uitleg [2026]',
  description: 'Wat is het verschil tussen bruto en netto loon in België? Complete uitleg met voorbeelden, berekeningen en tips om je nettoloon te verhogen.',
};

export default function BrutoNettoVerschilPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Bruto vs Netto Verschil' }]} />

      <article className="prose prose-lg max-w-none">
        <h1>Het Verschil tussen Bruto en Netto Loon in België</h1>

        <p className="lead">
          Als werknemer in België is het cruciaal om het verschil te begrijpen tussen je bruto en netto loon. Je brutoloon is het bedrag dat op je arbeidsovereenkomst staat, maar het bedrag dat je effectief op je rekening ontvangt — je nettoloon — is aanzienlijk lager. In dit artikel leggen we uitgebreid uit welke inhoudingen er plaatsvinden en hoe je van bruto naar netto gaat.
        </p>

        <h2>Wat is brutoloon?</h2>
        <p>
          Je <strong>brutoloon</strong> is het totale loon dat je werkgever je betaalt vóór enige inhouding. Dit is het bedrag dat vermeld staat in je arbeidsovereenkomst en op je loonbrief. Het brutoloon omvat je basissalaris plus eventuele premies, overuren en andere vergoedingen.
        </p>
        <p>
          Het brutoloon is het startpunt voor alle berekeningen. Vanuit dit bedrag worden verschillende bijdragen en belastingen afgetrokken om tot je nettoloon te komen. Het is belangrijk om te weten dat je brutoloon niet het bedrag is dat je daadwerkelijk ontvangt.
        </p>

        <h2>Wat is nettoloon?</h2>
        <p>
          Je <strong>nettoloon</strong> is het bedrag dat je effectief op je bankrekening gestort krijgt na alle wettelijke inhoudingen. Dit is het geld waar je echt over beschikt om je dagelijkse uitgaven te dekken: huur, boodschappen, verzekeringen, en vrije tijd.
        </p>
        <p>
          In België is het verschil tussen bruto en netto bijzonder groot in vergelijking met andere Europese landen. Gemiddeld hou je als alleenstaande werknemer slechts 55-65% van je brutoloon over als nettoloon, afhankelijk van je inkomen en persoonlijke situatie.
        </p>

        <h2>Welke inhoudingen worden er gedaan?</h2>
        <p>
          Er zijn drie grote categorieën van inhoudingen die het verschil maken tussen bruto en netto:
        </p>

        <h3>1. RSZ-bijdrage (Rijkssociale Zekerheid) — 13,07%</h3>
        <p>
          De eerste en meest zichtbare inhouding is de <Link href="/rsz-bijdrage">RSZ-bijdrage</Link>. Als werknemer betaal je 13,07% van je brutoloon aan de sociale zekerheid. Dit bedrag wordt automatisch ingehouden door je werkgever en gaat naar het financieren van het Belgische socialezekerheidsstelsel: pensioenen, gezondheidszorg, werkloosheidsuitkeringen, kinderbijslag en meer.
        </p>
        <p>
          <strong>Voorbeeld:</strong> Bij een brutoloon van €3.000 per maand betaal je €3.000 × 13,07% = €392,10 aan RSZ-bijdragen. Let op: je werkgever betaalt daar bovenop nog eens ongeveer 25% werkgeversbijdragen, maar die zie je niet op je loonbrief.
        </p>

        <h3>2. Bedrijfsvoorheffing (belastingen)</h3>
        <p>
          Na aftrek van de RSZ-bijdrage wordt op het resterende bedrag (je belastbaar inkomen) <Link href="/bedrijfsvoorheffing">bedrijfsvoorheffing</Link> ingehouden. Dit is een voorschot op je jaarlijkse personenbelasting. De bedrijfsvoorheffing wordt berekend op basis van <Link href="/belastingschijven-belgie">progressieve belastingschijven</Link>:
        </p>
        <ul>
          <li>€0 — €15.200: <strong>25%</strong></li>
          <li>€15.200 — €26.830: <strong>40%</strong></li>
          <li>€26.830 — €46.440: <strong>45%</strong></li>
          <li>Boven €46.440: <strong>50%</strong></li>
        </ul>
        <p>
          Belangrijk: niet je hele inkomen wordt belast aan het hoogste tarief. Alleen het gedeelte boven elke drempel wordt aan het hogere tarief belast. Bovendien geniet iedereen van een <strong>belastingvrije som</strong> van ongeveer €10.160 per jaar waarop je geen belasting betaalt.
        </p>

        <h3>3. Bijzondere bijdrage sociale zekerheid</h3>
        <p>
          Als derde inhouding is er de bijzondere bijdrage voor de sociale zekerheid. Dit is een relatief klein bedrag dat kwartaal per kwartaal geïnd wordt en afhangt van je gezinsinkomen. Voor een alleenstaande met een modaal loon bedraagt dit ongeveer €50-65 per maand.
        </p>

        <h2>Voorbeeldberekening: €3.000 bruto naar netto</h2>
        <p>Laten we een concrete berekening maken voor een alleenstaande werknemer zonder kinderen met een brutoloon van €3.000 per maand:</p>
        <table>
          <thead>
            <tr><th>Omschrijving</th><th>Bedrag</th></tr>
          </thead>
          <tbody>
            <tr><td>Bruto maandloon</td><td>€ 3.000,00</td></tr>
            <tr><td>RSZ-bijdrage (13,07%)</td><td>- € 392,10</td></tr>
            <tr><td>Belastbaar inkomen</td><td>€ 2.607,90</td></tr>
            <tr><td>Bedrijfsvoorheffing</td><td>- € 504,82</td></tr>
            <tr><td>Bijzondere bijdrage SZ</td><td>- € 61,55</td></tr>
            <tr><td><strong>Netto maandloon</strong></td><td><strong>€ 2.041,53</strong></td></tr>
          </tbody>
        </table>
        <p>
          Van de €3.000 bruto hou je dus ongeveer €2.042 netto over. Dat is 68% van je brutoloon. <Link href="/loon/3000">Bekijk de volledige berekening voor €3.000 bruto</Link>.
        </p>

        <h2>Factoren die je netto loon beïnvloeden</h2>

        <h3>Burgerlijke staat</h3>
        <p>
          Je burgerlijke staat heeft invloed op je bedrijfsvoorheffing. Gehuwden of wettelijk samenwonenden met één inkomen genieten van een hogere belastingvrije som door het huwelijksquotiënt. Dit kan je nettoloon merkbaar verhogen.
        </p>

        <h3>Kinderen ten laste</h3>
        <p>
          Elk kind ten laste verhoogt je belastingvrije som, waardoor je minder bedrijfsvoorheffing betaalt. Het voordeel stijgt naarmate je meer kinderen hebt: het eerste kind geeft een extra vrijstelling van €1.850, twee kinderen €4.760, drie kinderen €8.000, en vier kinderen €9.160.
        </p>

        <h3>Werkbonus</h3>
        <p>
          Werknemers met een laag brutoloon (tot circa €3.144 per maand) komen in aanmerking voor de <Link href="/werkbonus">werkbonus</Link>. Dit is een vermindering van de persoonlijke RSZ-bijdrage die je nettoloon verhoogt. Het maximum voordeel bedraagt ongeveer €230 per maand.
        </p>

        <h3>Extralegale voordelen</h3>
        <p>
          Veel werkgevers bieden extralegale voordelen aan die fiscaal voordeliger zijn dan een gewone loonsverhoging:
        </p>
        <ul>
          <li><strong>Maaltijdcheques</strong> — tot €8 per werkdag, grotendeels vrijgesteld van belasting</li>
          <li><strong>Bedrijfswagen</strong> — voordelig belast als voordeel alle aard</li>
          <li><strong>Groepsverzekering</strong> — aanvullend pensioen met fiscaal voordeel</li>
          <li><strong>Ecocheques</strong> — tot €250 per jaar, volledig vrijgesteld</li>
          <li><strong>Thuiswerk vergoeding</strong> — tot €148,73 per maand belastingvrij</li>
        </ul>

        <h2>België vergeleken met buurlanden</h2>
        <p>
          België staat bekend als één van de landen met de hoogste belastingdruk op arbeid in de wereld. Volgens de OESO betaal je in België gemiddeld meer belastingen en sociale bijdragen dan in de meeste andere ontwikkelde landen:
        </p>
        <ul>
          <li><strong>België:</strong> ~52% totale belastingdruk op arbeid (werkgever + werknemer)</li>
          <li><strong>Nederland:</strong> ~37% totale belastingdruk</li>
          <li><strong>Duitsland:</strong> ~49% totale belastingdruk</li>
          <li><strong>Frankrijk:</strong> ~47% totale belastingdruk</li>
          <li><strong>Luxemburg:</strong> ~38% totale belastingdruk</li>
        </ul>
        <p>
          Daar staat tegenover dat België een uitgebreid sociaal vangnet biedt: uitstekende gezondheidszorg, werkloosheidsuitkeringen zonder tijdslimiet, en automatische loonindexatie.
        </p>

        <h2>Hoe kun je je nettoloon verhogen?</h2>
        <p>Hoewel je de belastingtarieven niet zelf kunt veranderen, zijn er wel manieren om je nettoloon te optimaliseren:</p>
        <ol>
          <li><strong>Onderhandel over extralegale voordelen</strong> — Maaltijdcheques, bedrijfswagen en een groepsverzekering zijn fiscaal voordeliger dan een gewone loonsverhoging.</li>
          <li><strong>Controleer je loonbrief</strong> — Zorg dat je burgerlijke staat en het aantal kinderen ten laste correct geregistreerd staan bij je werkgever.</li>
          <li><strong>Benut fiscale aftrekposten</strong> — Kinderopvang, dienstencheques, pensioensparen en hypotheekleningen geven recht op belastingverminderingen.</li>
          <li><strong>Overweeg een cafetariaplan</strong> — Steeds meer werkgevers bieden flexibele verloningssystemen aan waarbij je zelf kiest hoe je loon samengesteld wordt.</li>
        </ol>

        <h2>Gebruik onze calculator</h2>
        <p>
          Wil je precies weten hoeveel je netto overhoudt? Gebruik onze gratis <Link href="/calculator">bruto-netto calculator</Link> voor een gedetailleerde berekening op maat van jouw situatie. Of bekijk direct de berekening voor veelgevraagde bedragen:
        </p>
        <ul>
          <li><Link href="/loon/2000">€2.000 bruto naar netto</Link></li>
          <li><Link href="/loon/2500">€2.500 bruto naar netto</Link></li>
          <li><Link href="/loon/3000">€3.000 bruto naar netto</Link></li>
          <li><Link href="/loon/4000">€4.000 bruto naar netto</Link></li>
          <li><Link href="/loon/5000">€5.000 bruto naar netto</Link></li>
        </ul>
      </article>
    </div>
  );
}
