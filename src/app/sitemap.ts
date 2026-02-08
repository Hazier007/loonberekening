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
