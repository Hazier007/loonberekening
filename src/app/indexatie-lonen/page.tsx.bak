import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Indexatie Lonen België — Automatische Loonindexatie Uitgelegd [2026]',
  description: 'Hoe werkt de automatische loonindexatie in België? Gezondheidsindex, spilindex, wanneer stijgen lonen? Complete gids over de Belgische indexering.',
};

export default function IndexatiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Indexatie Lonen' }]} />
      <article className="prose prose-lg max-w-none">
        <h1>Automatische Loonindexatie in België</h1>

        <p className="lead">
          België is één van de weinige landen ter wereld met een systeem van <strong>automatische loonindexatie</strong>. Dit betekent dat lonen automatisch stijgen wanneer de levensduurte toeneemt. Het systeem beschermt de koopkracht van werknemers tegen inflatie, maar is ook onderwerp van politiek debat. In dit artikel leggen we uit hoe het systeem werkt, wanneer lonen stijgen, en wat de voor- en nadelen zijn.
        </p>

        <h2>Hoe werkt automatische indexatie?</h2>
        <p>
          Het Belgische indexatiesysteem koppelt lonen, sociale uitkeringen en pensioenen aan de <strong>gezondheidsindex</strong>. Wanneer de prijzen stijgen (inflatie), stijgen de lonen mee. Dit gebeurt automatisch, zonder dat vakbonden of werkgevers hierover moeten onderhandelen.
        </p>
        <p>Het systeem werkt in drie stappen:</p>
        <ol>
          <li><strong>De consumptieprijsindex (CPI)</strong> wordt maandelijks berekend door Statbel op basis van een korf van goederen en diensten.</li>
          <li>Uit de CPI wordt de <strong>gezondheidsindex</strong> afgeleid — dit is de CPI zonder tabak, alcohol, benzine en diesel.</li>
          <li>De <strong>afgevlakte gezondheidsindex</strong> (gemiddelde van de laatste 4 maanden) wordt vergeleken met de <strong>spilindex</strong>. Wanneer de afgevlakte index de spilindex overschrijdt, worden lonen en uitkeringen aangepast.</li>
        </ol>

        <h2>De spilindex</h2>
        <p>
          De <strong>spilindex</strong> is een drempelbedrag vastgelegd door de overheid. Telkens de afgevlakte gezondheidsindex de spilindex bereikt of overschrijdt, worden de lonen en uitkeringen met <strong>2%</strong> verhoogd.
        </p>
        <p>
          Na elke overschrijding wordt een nieuwe spilindex berekend (2% hoger dan de vorige). Dit creëert een trapgewijze stijging van de lonen.
        </p>

        <h2>Wanneer worden lonen geïndexeerd?</h2>
        <p>Het tijdstip van de effectieve loonsverhoging verschilt:</p>
        <ul>
          <li><strong>Overheidslonen:</strong> De maand na de overschrijding van de spilindex</li>
          <li><strong>Sociale uitkeringen:</strong> 2 maanden na de overschrijding</li>
          <li><strong>Private sector:</strong> Afhankelijk van de sector (zie hieronder)</li>
        </ul>

        <h3>Indexatie per sector in de private sector</h3>
        <p>
          In de private sector bepaalt elk <strong>paritair comité</strong> hoe en wanneer de indexatie wordt toegepast:
        </p>
        <table>
          <thead><tr><th>Sector</th><th>Indexatiemethode</th></tr></thead>
          <tbody>
            <tr><td>Bedienden (PC 200)</td><td>Jaarlijks in januari</td></tr>
            <tr><td>Arbeiders metaal (PC 111)</td><td>Jaarlijks of per kwartaal</td></tr>
            <tr><td>Bouw (PC 124)</td><td>Jaarlijks in januari</td></tr>
            <tr><td>Voeding (PC 118)</td><td>Jaarlijks in januari</td></tr>
            <tr><td>Horeca (PC 302)</td><td>Jaarlijks in januari</td></tr>
            <tr><td>Chemie (PC 116)</td><td>Jaarlijks in januari</td></tr>
            <tr><td>Transport (PC 140)</td><td>Per kwartaal of halfjaarlijks</td></tr>
          </tbody>
        </table>
        <p>
          De meest voorkomende methode is een jaarlijkse indexatie in januari, gebaseerd op de evolutie van de gezondheidsindex in het voorgaande jaar.
        </p>

        <h2>Impact op je loon</h2>
        <p>
          De indexatie beschermt je <strong>koopkracht</strong>. Als de prijzen met 2% stijgen, stijgt je loon ook met ~2%, zodat je in reële termen (koopkracht) niet achteruitgaat.
        </p>
        <p>Voorbeeld: bij een indexatie van 2% op een bruto maandloon van €3.000:</p>
        <table>
          <thead><tr><th>Omschrijving</th><th>Voor indexatie</th><th>Na indexatie</th></tr></thead>
          <tbody>
            <tr><td>Bruto maandloon</td><td>€3.000</td><td>€3.060</td></tr>
            <tr><td>RSZ (13,07%)</td><td>€392</td><td>€400</td></tr>
            <tr><td>Netto (indicatief)</td><td>~€2.042</td><td>~€2.080</td></tr>
          </tbody>
        </table>

        <h2>Historische indexaties</h2>
        <table>
          <thead><tr><th>Jaar</th><th>Indexatie PC 200 (bedienden)</th></tr></thead>
          <tbody>
            <tr><td>Januari 2025</td><td>+3,58%</td></tr>
            <tr><td>Januari 2024</td><td>+1,48%</td></tr>
            <tr><td>Januari 2023</td><td>+11,08%</td></tr>
            <tr><td>Januari 2022</td><td>+3,58%</td></tr>
            <tr><td>Januari 2021</td><td>+0,95%</td></tr>
            <tr><td>Januari 2020</td><td>+1,16%</td></tr>
          </tbody>
        </table>
        <p>
          De uitzonderlijk hoge indexatie van 2023 (+11,08%) was het gevolg van de energiecrisis en hoge inflatie in 2022.
        </p>

        <h2>Voor- en nadelen van automatische indexatie</h2>
        <h3>Voordelen</h3>
        <ul>
          <li><strong>Koopkrachtbescherming:</strong> Werknemers verliezen geen koopkracht door inflatie</li>
          <li><strong>Sociale vrede:</strong> Minder loonconflicten omdat de indexatie automatisch verloopt</li>
          <li><strong>Voorspelbaarheid:</strong> Werknemers weten dat hun loon zal volgen</li>
        </ul>

        <h3>Nadelen</h3>
        <ul>
          <li><strong>Loonkosten werkgevers:</strong> Automatische stijging van de <Link href="/loonkost-werkgever">loonkost</Link> kan de competitiviteit schaden</li>
          <li><strong>Loon-prijsspiraal:</strong> Hogere lonen kunnen leiden tot hogere prijzen, wat tot meer indexatie leidt</li>
          <li><strong>Internationale competitiviteit:</strong> Buurlanden zonder indexatie kunnen goedkoper produceren</li>
        </ul>

        <h2>De gezondheidsindex vs consumptieprijsindex</h2>
        <p>
          Waarom wordt de gezondheidsindex gebruikt en niet de gewone consumptieprijsindex? De gezondheidsindex sluit bepaalde producten uit die sterk in prijs schommelen en/of die de overheid wil ontmoedigen:
        </p>
        <ul>
          <li>Tabaksproducten</li>
          <li>Alcoholische dranken</li>
          <li>Benzine en diesel</li>
        </ul>
        <p>
          Door deze producten uit te sluiten, weerspiegelt de gezondheidsindex beter de &quot;gezonde&quot; levenskost en voorkomt men dat accijnsverhogingen automatisch tot hogere lonen leiden.
        </p>

        <p>
          Bereken je actuele nettoloon met onze <Link href="/calculator">gratis calculator</Link>, of bekijk het <Link href="/gemiddeld-loon-belgie">gemiddeld loon in België</Link>.
        </p>
      </article>
    </div>
  );
}
