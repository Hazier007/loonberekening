import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <head>
        <meta name="e13e11c1f6eb6bd" content="68f7b200c2f8c9733e4204ac184c41cb" /> <meta name="tradetracker-site-verification" content="c74ee59a48dbd8b037c6505bdbec9bcc0cb77831" />
        <script async src="https://fundingchoicesmessages.google.com/i/pub-1772283634325864?ers=1" crossOrigin="anonymous"></script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1772283634325864"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-89D9TBSVF8" strategy="afterInteractive" />
        <Script id="ga-loonberekening" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-89D9TBSVF8');`}
        </Script>
      </head>
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
