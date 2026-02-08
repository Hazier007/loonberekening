'use client';

import Link from 'next/link';
import { useState } from 'react';

const kennisbankLinks = [
  { href: '/bruto-netto-verschil', label: 'Bruto vs Netto' },
  { href: '/belastingschijven-belgie', label: 'Belastingschijven' },
  { href: '/rsz-bijdrage', label: 'RSZ Bijdrage' },
  { href: '/werkbonus', label: 'Werkbonus' },
  { href: '/bedrijfsvoorheffing', label: 'Bedrijfsvoorheffing' },
  { href: '/gemiddeld-loon-belgie', label: 'Gemiddeld Loon' },
  { href: '/minimumloon-belgie', label: 'Minimumloon' },
  { href: '/loonkost-werkgever', label: 'Loonkost Werkgever' },
  { href: '/vakantiegeld-berekenen', label: 'Vakantiegeld' },
  { href: '/eindejaarspremie', label: 'Eindejaarspremie' },
  { href: '/indexatie-lonen', label: 'Indexatie Lonen' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">€</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Loonberekening<span className="text-teal-700">.be</span></span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/calculator" className="text-gray-600 hover:text-teal-700 font-medium">Calculator</Link>
            <div className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-gray-600 hover:text-teal-700 font-medium flex items-center gap-1">
                Kennisbank
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg border border-gray-200 py-2 w-56">
                  {kennisbankLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/veelgestelde-vragen" className="text-gray-600 hover:text-teal-700 font-medium">FAQ</Link>
            <Link href="/calculator" className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 font-medium">
              Bereken je loon
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4">
            <Link href="/calculator" className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Calculator</Link>
            <div className="py-2">
              <span className="text-sm font-semibold text-gray-500 uppercase">Kennisbank</span>
              {kennisbankLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-1.5 pl-4 text-gray-600 text-sm" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href="/veelgestelde-vragen" className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>FAQ</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
