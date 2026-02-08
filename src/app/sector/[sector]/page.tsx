import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sectors, getSectorBySlug } from '@/lib/sectors';
import { calculateSalary, getDefaultInput, formatCurrency } from '@/lib/salary';
import SalaryCalculator from '@/components/SalaryCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

interface Props {
  params: { sector: string };
}

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sector = getSectorBySlug(params.sector);
  if (!sector) return {};
  return {
    title: `Loon ${sector.name} in België [2026] — Gemiddeld Salaris & Berekening`,
    description: `Gemiddeld loon in de sector ${sector.name}: €${sector.avgGross.toLocaleString('nl-BE')} bruto per maand. Bekijk de loonvork, functies en bereken je netto salaris.`,
  };
}

export default function SectorPage({ params }: Props) {
  const sector = getSectorBySlug(params.sector);
  if (!sector) notFound();

  const avgResult = calculateSalary({ ...getDefaultInput(), grossMonthly: sector.avgGross });
  const minResult = calculateSalary({ ...getDefaultInput(), grossMonthly: sector.minGross });
  const maxResult = calculateSalary({ ...getDefaultInput(), grossMonthly: sector.maxGross });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Sectoren', href: '/' }, { label: sector.name }]} />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Loon in de {sector.name} Sector</h1>
      <p className="text-lg text-gray-600 mb-8">{sector.description}</p>

      {/* Salary overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
          <div className="text-sm text-gray-500">Minimum</div>
          <div className="text-xl font-bold text-gray-900">{formatCurrency(sector.minGross)} bruto</div>
          <div className="text-teal-700 font-semibold">{formatCurrency(minResult.netMonthly)} netto</div>
        </div>
        <div className="bg-teal-50 rounded-xl border-2 border-teal-200 p-5 text-center">
          <div className="text-sm text-teal-600">Gemiddeld</div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(sector.avgGross)} bruto</div>
          <div className="text-teal-700 font-semibold text-lg">{formatCurrency(avgResult.netMonthly)} netto</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
          <div className="text-sm text-gray-500">Maximum</div>
          <div className="text-xl font-bold text-gray-900">{formatCurrency(sector.maxGross)} bruto</div>
          <div className="text-teal-700 font-semibold">{formatCurrency(maxResult.netMonthly)} netto</div>
        </div>
      </div>

      {/* Jobs */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Populaire functies in {sector.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sector.jobs.map((job) => (
            <div key={job} className="bg-gray-50 rounded-lg px-4 py-2 text-gray-700">{job}</div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereken je loon in {sector.name}</h2>
      <SalaryCalculator initialGross={sector.avgGross} />

      {/* Content */}
      <div className="mt-12 prose prose-lg max-w-none">
        <h2>Lonen in de {sector.name} sector in België</h2>
        <p>
          De sector {sector.name} biedt in België bruto maandlonen van {formatCurrency(sector.minGross)} tot {formatCurrency(sector.maxGross)}, met een gemiddelde van {formatCurrency(sector.avgGross)} bruto per maand. Na aftrek van RSZ-bijdragen en bedrijfsvoorheffing ontvang je gemiddeld {formatCurrency(avgResult.netMonthly)} netto.
        </p>
        <p>
          De loonvork hangt sterk af van je functie, ervaring en regio. In Brussel en Vlaanderen liggen de lonen doorgaans hoger dan in Wallonië. Anciënniteit speelt ook een belangrijke rol: na 5 jaar ervaring kun je tot 15-20% meer verdienen.
        </p>

        <h2>Extralegale voordelen in {sector.name}</h2>
        <p>
          Naast het brutoloon bieden veel werkgevers in de {sector.name} sector extralegale voordelen aan:
        </p>
        <ul>
          <li><strong>Maaltijdcheques</strong> — tot €8 per werkdag</li>
          <li><strong>Groepsverzekering</strong> — aanvullend pensioen</li>
          <li><strong>Hospitalisatieverzekering</strong></li>
          <li><strong>Bedrijfswagen</strong> — vooral bij hogere functies</li>
          <li><strong>Thuiswerk vergoeding</strong></li>
        </ul>
        <p>
          Deze voordelen kunnen je totale verloningspakket aanzienlijk verhogen. Lees meer over de <Link href="/loonkost-werkgever">totale loonkost voor werkgevers</Link>.
        </p>
      </div>

      {/* Other sectors */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Andere sectoren</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sectors.filter((s) => s.slug !== sector.slug).map((s) => (
            <Link key={s.slug} href={`/sector/${s.slug}`} className="bg-white border border-gray-200 rounded-lg p-3 hover:border-teal-300 transition-all">
              <div className="font-semibold text-gray-900 text-sm">{s.name}</div>
              <div className="text-xs text-teal-700">Gem: {formatCurrency(s.avgGross)}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
