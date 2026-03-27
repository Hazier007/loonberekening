export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'minimumloon-belgie-2026-bedragen-en-regels',
    title: 'Minimumloon België 2026: Actuele Bedragen en Regels',
    description: 'Wat is het minimumloon in België in 2026? Overzicht van de GGMMI bedragen, wie er recht op heeft, en hoe het verschilt per leeftijd en ervaring.',
    date: '2026-03-09',
    readTime: '6 min',
    category: 'Actueel',
  },
  {
    slug: 'hoe-bereken-je-nettoloon',
    title: 'Hoe Bereken Je Je Nettoloon in België?',
    description: 'Leer hoe je je nettoloon berekent in België. Van bruto naar netto in 4 stappen: RSZ, beroepskosten, belastingschijven en werkbonus uitgelegd.',
    date: '2026-03-26',
    readTime: '12 min',
    category: 'Gids',
  },
  {
    slug: 'werkbonus-belgie-2026',
    title: 'Werkbonus België 2026: Bedragen & Berekening',
    description: 'Alles over de werkbonus in België 2026. Bekijk de loonschijven, bedragen en bereken hoeveel extra nettoloon jij krijgt dankzij de werkbonus.',
    date: '2026-03-26',
    readTime: '10 min',
    category: 'Voordelen',
  },
  {
    slug: 'verschil-bruto-netto',
    title: 'Verschil Bruto en Netto Loon in België',
    description: 'Wat is het verschil tussen bruto en netto loon in België? Ontdek waar je geld naartoe gaat met duidelijke voorbeelden en infographic.',
    date: '2026-03-26',
    readTime: '9 min',
    category: 'Uitleg',
  },
  {
    slug: 'loonindexatie-2026',
    title: 'Loonindexatie 2026: Wat Het Betekent voor Je Loon',
    description: 'Wat is loonindexatie in 2026? Ontdek hoe de index je brutoloon verhoogt, wat de impact is op je nettoloon en wanneer de volgende indexering valt.',
    date: '2026-03-26',
    readTime: '8 min',
    category: 'Actueel',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}