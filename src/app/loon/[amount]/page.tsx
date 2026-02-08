import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { calculateSalary, getDefaultInput, formatCurrency } from '@/lib/salary';
import { salaryAmounts } from '@/lib/sectors';
import SalaryCalculator from '@/components/SalaryCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

interface Props {
  params: { amount: string };
}

export function generateStaticParams() {
  return salaryAmounts.map((amount) => ({ amount: amount.toString() }));
}

export function generateMetadata({ params }: Props): Metadata {
  const amount = parseInt(params.amount);
  if (isNaN(amount)) return {};
  const result = calculateSalary({ ...getDefaultInput(), grossMonthly: amount });
  return {
    title: `€${amount.toLocaleString('nl-BE')} Bruto naar Netto in België [2026]`,
    description: `€${amount.toLocaleString('nl-BE')} bruto is €${result.netMonthly.toFixed(0)} netto per maand in België. Bekijk de volledige berekening met RSZ, bedrijfsvoorheffing en alle inhoudingen.`,
    openGraph: {
      title: `€${amount.toLocaleString('nl-BE')} Bruto = €${result.netMonthly.toFixed(0)} Netto in België`,
    },
  };
}

export default function LoonPage({ params }: Props) {
  const amount = parseInt(params.amount);
  if (isNaN(amount) || amount <= 0) notFound();

  const result = calculateSalary({ ...getDefaultInput(), grossMonthly: amount });
  const relatedAmounts = salaryAmounts.filter((a) => a !== amount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Loonberekening', href: '/calculator' }, { label: `€${amount.toLocaleString('nl-BE')} bruto` }]} />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        €{amount.toLocaleString('nl-BE')} Bruto naar Netto in België
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Met een bruto maandloon van <strong>{formatCurrency(amount)}</strong> ontvang je netto <strong className="text-teal-700">{formatCurrency(result.netMonthly)}</strong> per maand in België (2026). Dat is {formatCurrency(result.netYearly)} netto per jaar.
      </p>

      {/* Quick summary card */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-sm text-teal-600">Bruto maandloon</div>
            <div className="text-2xl font-bold text-gray-900">{formatCurrency(amount)}</div>
          </div>
          <div>
            <div className="text-sm text-teal-600">RSZ-bijdrage</div>
            <div className="text-2xl font-bold text-blue-600">- {formatCurrency(result.rszContribution)}</div>
          </div>
          <div>
            <div className="text-sm text-teal-600">Bedrijfsvoorheffing</div>
            <div className="text-2xl font-bold text-red-600">- {formatCurrency(result.bedrijfsvoorheffing)}</div>
          </div>
          <div>
            <div className="text-sm text-teal-600">Netto maandloon</div>
            <div className="text-2xl font-bold text-teal-700">{formatCurrency(result.netMonthly)}</div>
          </div>
        </div>
      </div>

      <SalaryCalculator initialGross={amount} />

      {/* SEO content */}
      <div className="mt-12 prose prose-lg max-w-none">
        <h2>Hoeveel hou je netto over van {formatCurrency(amount)} bruto?</h2>
        <p>
          Als werknemer in België met een bruto maandloon van {formatCurrency(amount)} betaal je maandelijks {formatCurrency(result.rszContribution)} aan RSZ-bijdragen (13,07% van je brutoloon). Na aftrek van de RSZ-bijdrage bedraagt je belastbaar inkomen {formatCurrency(result.taxableIncome)} per maand.
        </p>
        <p>
          Op dit belastbaar inkomen wordt bedrijfsvoorheffing ingehouden van {formatCurrency(result.bedrijfsvoorheffing)} per maand. De bijzondere bijdrage voor de sociale zekerheid bedraagt {formatCurrency(result.bijzondereBijdrage)}.
        </p>
        <p>
          Na alle inhoudingen hou je netto <strong>{formatCurrency(result.netMonthly)}</strong> per maand over, oftewel <strong>{formatCurrency(result.netYearly)}</strong> per jaar. De effectieve belastingdruk op je loon is {result.effectiveTaxRate.toFixed(1)}%.
        </p>

        <h2>Volledige berekening {formatCurrency(amount)} bruto naar netto</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <tbody>
              <tr><td className="font-medium">Bruto maandloon</td><td className="text-right">{formatCurrency(amount)}</td></tr>
              <tr><td>RSZ-bijdrage (13,07%)</td><td className="text-right text-blue-600">- {formatCurrency(result.rszContribution)}</td></tr>
              <tr><td>Belastbaar inkomen</td><td className="text-right">{formatCurrency(result.taxableIncome)}</td></tr>
              <tr><td>Bedrijfsvoorheffing</td><td className="text-right text-red-600">- {formatCurrency(result.bedrijfsvoorheffing)}</td></tr>
              <tr><td>Bijzondere bijdrage SZ</td><td className="text-right text-red-600">- {formatCurrency(result.bijzondereBijdrage)}</td></tr>
              <tr className="font-bold border-t-2"><td>Netto maandloon</td><td className="text-right text-teal-700">{formatCurrency(result.netMonthly)}</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Jaaroverzicht bij {formatCurrency(amount)} bruto per maand</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <tbody>
              <tr><td className="font-medium">Bruto jaarloon</td><td className="text-right">{formatCurrency(result.grossYearly)}</td></tr>
              <tr><td>Totaal RSZ per jaar</td><td className="text-right">- {formatCurrency(result.rszContribution * 12)}</td></tr>
              <tr><td>Totaal bedrijfsvoorheffing per jaar</td><td className="text-right">- {formatCurrency(result.bedrijfsvoorheffing * 12)}</td></tr>
              <tr className="font-bold border-t-2"><td>Netto jaarloon</td><td className="text-right text-teal-700">{formatCurrency(result.netYearly)}</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Tips bij een brutoloon van {formatCurrency(amount)}</h2>
        <ul>
          <li>Vraag aan je werkgever om extralegale voordelen zoals <Link href="/vakantiegeld-berekenen">vakantiegeld</Link>, maaltijdcheques of een bedrijfswagen. Deze zijn vaak fiscaal voordeliger.</li>
          <li>Met kinderen ten laste daalt je bedrijfsvoorheffing aanzienlijk. Gebruik onze <Link href="/calculator">calculator</Link> om het verschil te zien.</li>
          <li>Bekijk de <Link href="/belastingschijven-belgie">belastingschijven</Link> om te begrijpen hoe je belasting berekend wordt.</li>
          <li>Lees meer over de <Link href="/werkbonus">werkbonus</Link> als je brutoloon onder €3.144 per maand ligt.</li>
        </ul>
      </div>

      {/* Related amounts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Andere bruto-netto berekeningen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {relatedAmounts.map((a) => {
            const r = calculateSalary({ ...getDefaultInput(), grossMonthly: a });
            return (
              <Link key={a} href={`/loon/${a}`} className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-teal-300 transition-all text-center">
                <div className="font-semibold text-gray-900">{formatCurrency(a)}</div>
                <div className="text-sm text-teal-700">→ {formatCurrency(r.netMonthly)} netto</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
