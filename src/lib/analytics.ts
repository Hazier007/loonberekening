/**
 * Lichtgewicht GA4-helper.
 *
 * gtag.js wordt in `src/app/layout.tsx` ingeladen met strategy="afterInteractive",
 * dus `window.gtag` kan op het moment van een vroege interactie nog ontbreken.
 * Daarom pushen we in dat geval rechtstreeks naar `window.dataLayer` — de
 * snippet in layout.tsx maakt die array aan vóór het script geladen is, en
 * gtag.js verwerkt achteraf alles wat er al in staat.
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: 'event', eventName: string, params?: GtagParams) => void;
  }
}

/** Stuurt een GA4-event. No-op tijdens SSR of wanneer analytics geblokkeerd is. */
export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
      return;
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(['event', eventName, params]);
    }
  } catch {
    // Analytics mag nooit de calculator breken.
  }
}

/**
 * Zet een brutoloon om in een bucket-label.
 *
 * We sturen bewust géén exact ingevoerd bedrag naar GA4: buckets houden de
 * cardinaliteit van de dimensie laag en zijn bruikbaarder in rapporten
 * (welke loonschijven trekken het meeste verkeer?).
 */
export function grossBucket(grossMonthly: number): string {
  if (!Number.isFinite(grossMonthly) || grossMonthly <= 0) return 'onbekend';
  if (grossMonthly < 1500) return '0-1499';
  if (grossMonthly < 2000) return '1500-1999';
  if (grossMonthly < 2500) return '2000-2499';
  if (grossMonthly < 3000) return '2500-2999';
  if (grossMonthly < 3500) return '3000-3499';
  if (grossMonthly < 4000) return '3500-3999';
  if (grossMonthly < 5000) return '4000-4999';
  if (grossMonthly < 7500) return '5000-7499';
  return '7500+';
}
