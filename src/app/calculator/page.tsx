import type { Metadata } from 'next';
import SalaryCalculator from '@/components/SalaryCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Bruto Netto Calculator België [2026] — Bereken je Loon',
  description: 'Gedetailleerde bruto-netto calculator voor België. Bereken je nettoloon met alle opties: burgerlijke staat, kinderen ten laste, maaltijdcheques en meer.',
  openGraph: {
    title: 'Bruto Netto Calculator België [2026]',
    description: 'Bereken je nettoloon in België met onze gedetailleerde calculator.',
  },
};

export default function CalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Calculator' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Bruto Netto Calculator België</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Bereken je nettoloon met alle opties. Vul je bruto maandloon in en pas de instellingen aan naar jouw situatie voor een nauwkeurige berekening.
      </p>
      <SalaryCalculator />
    </div>
  );
}
