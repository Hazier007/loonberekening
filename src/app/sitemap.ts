import { MetadataRoute } from 'next';
import { salaryAmounts, sectors } from '@/lib/sectors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loonberekening.be';
  const now = new Date();

  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/calculator`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/bruto-netto-verschil`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/belastingschijven-belgie`, changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: `${baseUrl}/rsz-bijdrage`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/werkbonus`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/bedrijfsvoorheffing`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/gemiddeld-loon-belgie`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/minimumloon-belgie`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/loonkost-werkgever`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/vakantiegeld-berekenen`, changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: `${baseUrl}/eindejaarspremie`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/indexatie-lonen`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/veelgestelde-vragen`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/maaltijdcheques`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/loonstrook`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/arbeider`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/bediende`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/met-kinderen`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/zelfstandige`, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/vergelijk`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/over-ons`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/hoe-bereken-je-nettoloon-belgie`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/verschil-bruto-netto-salaris`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/werkbonus-belgie-2026`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/loonindexatie-2026-wat-verandert`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/minimumloon-belgie-2026-bedragen-en-regels`, changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const amountPages = salaryAmounts.map((amount) => ({
    url: `${baseUrl}/loon/${amount}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const sectorPages = sectors.map((sector) => ({
    url: `${baseUrl}/sector/${sector.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...amountPages,
    ...sectorPages,
  ];
}
