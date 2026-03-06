import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://loonberekening.be'),
  title: {
    default: 'Loonberekening.be — Bereken je Nettoloon in België [2026]',
    template: '%s | Loonberekening.be',
  },
  description: 'Bereken gratis en snel je nettoloon in België. Van bruto naar netto met RSZ, bedrijfsvoorheffing en alle inhoudingen. Actuele berekening 2025-2026.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    siteName: 'Loonberekening.be',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
