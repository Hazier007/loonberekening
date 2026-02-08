import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eindejaarspremie België — 13e Maand per Sector [2026]',
  description: 'Alles over de eindejaarspremie (13e maand) in België: berekening, bedrag per sector, belasting, wanneer uitbetaald. Complete gids.',
};

export default function EindejaarspremiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Eindejaarspremie' }]} />
      <article className="prose prose-lg max-w-none">
        <h1>Eindejaarspremie in België: 13e Maand Uitgelegd</h1>

        <p className="lead">
          De eindejaarspremie, ook wel de &quot;13e maand&quot; genoemd, is een jaarlijkse extra uitbetaling die de meeste werknemers in België ontvangen in december. Hoewel het geen wettelijk recht is, is de eindejaarspremie in de praktijk vastgelegd in sectorale collectieve arbeidsovereenkomsten en is ze voor de overgrote meerderheid van de Belgische werknemers een zekerheid.
        </p>

        <h2>Wat is de eindejaarspremie?</h2>
        <p>
          De eindejaarspremie is een <strong>extra vergoeding</strong> die werknemers ontvangen bovenop hun gewone maandlonen en het vakantiegeld. Het bedrag en de voorwaarden worden bepaald door het <strong>paritair comité</strong> (de sectorale overlegorganen) van je sector.
        </p>
        <p>
          In veel gevallen bedraagt de eindejaarspremie een volledig bruto maandloon (vandaar de naam &quot;13e maand&quot;), maar het exacte bedrag varieert per sector. Sommige sectoren geven een vast bedrag, andere een percentage van het jaarloon.
        </p>

        <h2>Bedrag per sector</h2>
        <p>Hieronder een overzicht van typische eindejaarspremies per sector:</p>
        <table>
          <thead><tr><th>Sector (PC)</th><th>Eindejaarspremie</th></tr></thead>
          <tbody>
            <tr><td>Bedienden (PC 200)</td><td>Volledig bruto maandloon</td></tr>
            <tr><td>Metaal (PC 111)</td><td>Volledig bruto maandloon</td></tr>
            <tr><td>Bouw (PC 124)</td><td>Vast bedrag (via Constructiv)</td></tr>
            <tr><td>Voeding (PC 118)</td><td>Volledig bruto maandloon</td></tr>
            <tr><td>Horeca (PC 302)</td><td>Volledig bruto maandloon</td></tr>
            <tr><td>Transport (PC 140)</td><td>Volledig bruto maandloon</td></tr>
            <tr><td>Retail/Handel (PC 201)</td><td>Volledig bruto maandloon</td></tr>
            <tr><td>Scheikundig (PC 116)</td><td>Volledig bruto maandloon</td></tr>
            <tr><td>Bewaking (PC 317)</td><td>Vast bedrag per uur</td></tr>
            <tr><td>Schoonmaak (PC 121)</td><td>Vast bedrag</td></tr>
          </tbody>
        </table>

        <h2>Wanneer wordt de eindejaarspremie uitbetaald?</h2>
        <p>
          De meeste werkgevers betalen de eindejaarspremie uit in <strong>december</strong>, vaak samen met of kort voor het decemberloon. Sommige sectoren voorzien uitbetaling via een <strong>fonds voor bestaanszekerheid</strong> (zoals in de bouw), waarbij de timing kan verschillen.
        </p>

        <h2>Belasting op de eindejaarspremie</h2>
        <p>
          De eindejaarspremie wordt beschouwd als loon en is dus onderworpen aan dezelfde inhoudingen als je gewone loon:
        </p>
        <ul>
          <li><strong><Link href="/rsz-bijdrage">RSZ-bijdrage</Link>:</strong> 13,07% van het brutobedrag</li>
          <li><strong><Link href="/bedrijfsvoorheffing">Bedrijfsvoorheffing</Link>:</strong> Berekend volgens de progressieve schalen, maar op jaarbasis. Omdat de premie je jaarinkomen verhoogt, kan de bedrijfsvoorheffing op de premie relatief hoog zijn.</li>
        </ul>

        <h3>Voorbeeldberekening eindejaarspremie</h3>
        <p>Voor een werknemer met een bruto maandloon van €3.000:</p>
        <table>
          <thead><tr><th>Omschrijving</th><th>Bedrag</th></tr></thead>
          <tbody>
            <tr><td>Bruto eindejaarspremie</td><td>€3.000</td></tr>
            <tr><td>RSZ-bijdrage (13,07%)</td><td>- €392,10</td></tr>
            <tr><td>Bedrijfsvoorheffing (~35%)</td><td>- ~€912</td></tr>
            <tr><td><strong>Netto eindejaarspremie</strong></td><td><strong>~€1.696</strong></td></tr>
          </tbody>
        </table>
        <p>
          Door de hoge bedrijfsvoorheffing op de eindejaarspremie (deze valt bovenop je gewone jaarinkomen en wordt dus vaak aan een hoger marginaal tarief belast), hou je netto relatief minder over dan van een gewoon maandloon.
        </p>

        <h2>Voorwaarden voor de eindejaarspremie</h2>
        <p>De precieze voorwaarden hangen af van je sector, maar typisch geldt:</p>
        <ul>
          <li><strong>Anciënniteit:</strong> Vaak moet je een minimumperiode gewerkt hebben (bv. 6 maanden in het lopende jaar)</li>
          <li><strong>Actieve tewerkstelling:</strong> Periodes van schorsing (ziekte, ongewettigde afwezigheid) kunnen het bedrag verminderen</li>
          <li><strong>Pro rata:</strong> Bij onvolledig jaar wordt de premie proportioneel berekend</li>
          <li><strong>Ontslag:</strong> Bij ontslag door de werkgever heb je doorgaans recht op een pro rata eindejaarspremie. Bij ontslag door de werknemer hangt het af van de sectorale CAO.</li>
        </ul>

        <h2>Eindejaarspremie en vakantiegeld</h2>
        <p>
          De eindejaarspremie staat los van het <Link href="/vakantiegeld-berekenen">vakantiegeld</Link>. Als bediende ontvang je dus:
        </p>
        <ul>
          <li>12 maandlonen (gewoon loon)</li>
          <li>Dubbel vakantiegeld (~92% van een maandloon) in mei/juni</li>
          <li>Eindejaarspremie (~1 maandloon) in december</li>
        </ul>
        <p>
          Je totale jaarlijkse bruto vergoeding bedraagt dus ongeveer <strong>13,92 keer</strong> je bruto maandloon (12 + 0,92 + 1).
        </p>

        <h2>Heb ik recht op een eindejaarspremie?</h2>
        <p>
          Er is <strong>geen wettelijk recht</strong> op een eindejaarspremie in België. Het recht vloeit voort uit:
        </p>
        <ul>
          <li>Sectorale CAO&apos;s (collectieve arbeidsovereenkomsten)</li>
          <li>Ondernemings-CAO&apos;s</li>
          <li>Je individuele arbeidsovereenkomst</li>
          <li>Gebruik binnen de onderneming (constante praktijk)</li>
        </ul>
        <p>
          In de praktijk ontvangt meer dan 90% van de Belgische werknemers een eindejaarspremie.
        </p>

        <p>
          Bereken je nettoloon inclusief alle premies met onze <Link href="/calculator">gratis calculator</Link>.
        </p>
      </article>
    </div>
  );
}
