import Link from 'next/link';
import { salaryAmounts } from '@/lib/sectors';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">€</span>
              </div>
              <span className="font-bold text-lg text-white">Loonberekening.be</span>
            </div>
            <p className="text-sm text-gray-400">
              Dé gratis online tool om je Belgische nettoloon te berekenen. Snel, accuraat en altijd up-to-date.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Populaire Berekeningen</h3>
            <ul className="space-y-2 text-sm">
              {salaryAmounts.slice(0, 6).map((amount) => (
                <li key={amount}>
                  <Link href={`/loon/${amount}`} className="hover:text-teal-400">€{amount.toLocaleString('nl-BE')} bruto naar netto</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Kennisbank</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bruto-netto-verschil" className="hover:text-teal-400">Bruto vs Netto</Link></li>
              <li><Link href="/belastingschijven-belgie" className="hover:text-teal-400">Belastingschijven</Link></li>
              <li><Link href="/werkbonus" className="hover:text-teal-400">Werkbonus</Link></li>
              <li><Link href="/gemiddeld-loon-belgie" className="hover:text-teal-400">Gemiddeld Loon</Link></li>
              <li><Link href="/vakantiegeld-berekenen" className="hover:text-teal-400">Vakantiegeld</Link></li>
              <li><Link href="/veelgestelde-vragen" className="hover:text-teal-400">Veelgestelde Vragen</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Over Ons</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/over-ons" className="hover:text-teal-400">Over Loonberekening.be</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-400">Privacybeleid</Link></li>
              <li><Link href="/calculator" className="hover:text-teal-400">Loonberekening Calculator</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Loonberekening.be — Alle rechten voorbehouden.</p>
          <p className="mt-1">De berekeningen zijn indicatief. Raadpleeg een boekhouder voor exacte bedragen.</p>
        </div>
      </div>
    </footer>
  );
}
