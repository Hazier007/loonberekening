import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { sectors } from '@/lib/sectors';
import { calculateSalary, getDefaultInput, formatCurrency } from '@/lib/salary';

export const metadata: Metadata = {
  title: 'Gemiddeld Loon België 2026 — Per Sector, Leeftijd & Regio',
  description: 'Wat is het gemiddeld loon in België? Overzicht per sector, regio, leeftijd en geslacht. Vergelijk je salaris met het Belgische gemiddelde.',
};

export default function GemiddeldLoonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Gemiddeld Loon België' }]} />
      <article className="prose prose-lg max-w-none">
        <h1>Gemiddeld Loon in België 2026</h1>

        <p className="lead">
          Hoeveel verdient de gemiddelde Belg? Het gemiddelde bruto maandloon in België bedraagt ongeveer <strong>€3.886</strong> (bron: Statbel, FOD Economie). Na aftrek van RSZ-bijdragen, bedrijfsvoorheffing en bijzondere bijdrage sociale zekerheid hou je daar netto gemiddeld <strong>€2.364</strong> van over. Maar deze cijfers vertellen niet het hele verhaal — er zijn grote verschillen per sector, regio, leeftijd en geslacht.
        </p>

        <h2>Gemiddeld loon per sector</h2>
        <p>
          De sector waarin je werkt, heeft een enorme impact op je salaris. Hieronder een overzicht van de gemiddelde bruto maandlonen per sector in België:
        </p>

        <div className="not-prose overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-teal-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Sector</th>
                <th className="px-4 py-3 text-right">Gem. bruto</th>
                <th className="px-4 py-3 text-right">Gem. netto</th>
                <th className="px-4 py-3 text-right">Loonvork</th>
              </tr>
            </thead>
            <tbody>
              {sectors.map((s, i) => {
                const r = calculateSalary({ ...getDefaultInput(), grossMonthly: s.avgGross });
                return (
                  <tr key={s.slug} className={i % 2 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2"><Link href={`/sector/${s.slug}`} className="text-teal-700 hover:underline">{s.name}</Link></td>
                    <td className="px-4 py-2 text-right font-medium">{formatCurrency(s.avgGross)}</td>
                    <td className="px-4 py-2 text-right text-teal-700">{formatCurrency(r.netMonthly)}</td>
                    <td className="px-4 py-2 text-right text-sm text-gray-500">{formatCurrency(s.minGross)} — {formatCurrency(s.maxGross)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h2>Gemiddeld loon per regio</h2>
        <p>
          Er bestaan aanzienlijke regionale loonverschillen in België. Werknemers in Brussel en Vlaanderen verdienen gemiddeld meer dan hun collega&apos;s in Wallonië.
        </p>
        <table>
          <thead><tr><th>Regio</th><th>Gemiddeld bruto maandloon</th><th>t.o.v. nationaal gemiddelde</th></tr></thead>
          <tbody>
            <tr><td><strong>Brussels Hoofdstedelijk Gewest</strong></td><td>€4.250</td><td>+9,4%</td></tr>
            <tr><td><strong>Vlaams Gewest</strong></td><td>€3.920</td><td>+0,9%</td></tr>
            <tr><td><strong>Waals Gewest</strong></td><td>€3.580</td><td>-7,9%</td></tr>
            <tr><td><strong>België gemiddeld</strong></td><td>€3.886</td><td>—</td></tr>
          </tbody>
        </table>
        <p>
          De hogere lonen in Brussel worden deels verklaard door de concentratie van hoofdkwartieren, internationale instellingen en de financiële sector. In Vlaanderen drijven de haven van Antwerpen, de chemische industrie en de tech-sector de lonen op.
        </p>

        <h2>Gemiddeld loon per leeftijd</h2>
        <p>
          Anciënniteit speelt een belangrijke rol in het Belgische loonsysteem. Lonen stijgen doorgaans met de leeftijd tot ze een plateau bereiken rond 50-55 jaar.
        </p>
        <table>
          <thead><tr><th>Leeftijdsgroep</th><th>Gemiddeld bruto maandloon</th></tr></thead>
          <tbody>
            <tr><td>18-24 jaar</td><td>€2.350</td></tr>
            <tr><td>25-34 jaar</td><td>€3.250</td></tr>
            <tr><td>35-44 jaar</td><td>€3.950</td></tr>
            <tr><td>45-54 jaar</td><td>€4.250</td></tr>
            <tr><td>55-64 jaar</td><td>€4.350</td></tr>
          </tbody>
        </table>
        <p>
          Het verschil tussen een starter (18-24) en een ervaren werknemer (45-54) bedraagt bijna €2.000 bruto per maand. Dit komt door de Belgische barema&apos;s die anciënniteit belonen met automatische loonsverhogingen.
        </p>

        <h2>Gemiddeld loon per geslacht (loonkloof)</h2>
        <p>
          Ondanks wetgeving rond gelijk loon voor gelijk werk, bestaat er in België nog steeds een <strong>loonkloof</strong> tussen mannen en vrouwen:
        </p>
        <table>
          <thead><tr><th>Geslacht</th><th>Gemiddeld bruto maandloon</th><th>Verschil</th></tr></thead>
          <tbody>
            <tr><td>Mannen</td><td>€4.120</td><td>—</td></tr>
            <tr><td>Vrouwen</td><td>€3.640</td><td>-11,6%</td></tr>
          </tbody>
        </table>
        <p>
          De loonkloof wordt deels verklaard door het feit dat vrouwen vaker deeltijds werken, vaker in lager betaalde sectoren werken, en minder vaak in leidinggevende functies zitten. De kloof op uurbasis (voor dezelfde functie) is kleiner maar bestaat nog steeds.
        </p>

        <h2>Gemiddeld loon per opleidingsniveau</h2>
        <table>
          <thead><tr><th>Opleidingsniveau</th><th>Gemiddeld bruto maandloon</th></tr></thead>
          <tbody>
            <tr><td>Geen diploma hoger secundair</td><td>€2.650</td></tr>
            <tr><td>Hoger secundair</td><td>€3.150</td></tr>
            <tr><td>Professionele bachelor</td><td>€3.550</td></tr>
            <tr><td>Academische bachelor/master</td><td>€4.450</td></tr>
            <tr><td>Doctoraat</td><td>€5.200</td></tr>
          </tbody>
        </table>
        <p>
          Een hoger diploma betaalt zich duidelijk uit in het Belgische loonsysteem. Het verschil tussen iemand zonder diploma en een master-houder bedraagt gemiddeld bijna €1.800 bruto per maand.
        </p>

        <h2>Mediaan vs gemiddeld loon</h2>
        <p>
          Het is belangrijk om het verschil te kennen tussen het <strong>gemiddeld</strong> en het <strong>mediaan</strong> loon:
        </p>
        <ul>
          <li><strong>Gemiddeld:</strong> €3.886 bruto — het rekenkundig gemiddelde van alle lonen</li>
          <li><strong>Mediaan:</strong> ~€3.550 bruto — het loon waarbij 50% van de werknemers meer en 50% minder verdient</li>
        </ul>
        <p>
          Het mediaan loon geeft een beter beeld van wat een &quot;typische&quot; werknemer verdient, omdat extreem hoge lonen het gemiddelde omhoog trekken.
        </p>

        <h2>Hoe verhoud jij je tot het gemiddelde?</h2>
        <p>
          Wil je weten hoe jouw loon zich verhoudt tot het Belgische gemiddelde? Gebruik onze <Link href="/calculator">bruto-netto calculator</Link> om je exacte nettoloon te berekenen, of bekijk de sectorpagina&apos;s voor een vergelijking met collega&apos;s in jouw sector:
        </p>
        <ul>
          {sectors.slice(0, 6).map((s) => (
            <li key={s.slug}><Link href={`/sector/${s.slug}`}>{s.name}</Link> — gemiddeld {formatCurrency(s.avgGross)} bruto</li>
          ))}
        </ul>

        <p>
          Of bekijk direct hoeveel netto je overhoudt bij een specifiek brutoloon: <Link href="/loon/3000">€3.000 bruto</Link>, <Link href="/loon/4000">€4.000 bruto</Link>, <Link href="/loon/5000">€5.000 bruto</Link>.
        </p>
      </article>
    </div>
  );
}
