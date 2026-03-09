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
    slug: 'hoe-bereken-je-nettoloon-belgie',
    title: 'Hoe Bereken je je Nettoloon in België?',
    description: 'Complete gids om je bruto naar netto loon te berekenen. RSZ, bedrijfsvoorheffing, belastingschijven en werkbonus uitgelegd.',
    date: '2026-02-20',
    readTime: '8 min',
    category: 'Gids',
  },
  {
    slug: 'verschil-bruto-netto-salaris',
    title: 'Het Verschil tussen Bruto en Netto Salaris Uitgelegd',
    description: 'Wat is het verschil tussen bruto en netto? Welke inhoudingen worden gedaan en hoeveel hou je over?',
    date: '2026-02-18',
    readTime: '6 min',
    category: 'Uitleg',
  },
  {
    slug: 'werkbonus-belgie-2026',
    title: 'Werkbonus België 2026: Hoeveel Krijg Je?',
    description: 'Alles over de werkbonus: wie komt in aanmerking, hoeveel bedraagt die, en hoe wordt hij berekend?',
    date: '2026-02-15',
    readTime: '7 min',
    category: 'Voordelen',
  },
  {
    slug: 'loonindexatie-2026-wat-verandert',
    title: 'Loonindexatie 2026: Wat Verandert Er?',
    description: 'Hoe werkt loonindexatie in België? Wat is de impact op je nettoloon en wanneer wordt je loon geïndexeerd?',
    date: '2026-01-10',
    readTime: '5 min',
    category: 'Actueel',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
