export interface Sector {
  slug: string;
  name: string;
  avgGross: number;
  minGross: number;
  maxGross: number;
  description: string;
  jobs: string[];
}

export const sectors: Sector[] = [
  {
    slug: 'it-software',
    name: 'IT & Software',
    avgGross: 4200,
    minGross: 2800,
    maxGross: 7500,
    description: 'De IT-sector in België is één van de best betaalde sectoren. Softwareontwikkelaars, systeembeheerders en data-analisten genieten van aantrekkelijke lonen en extralegale voordelen zoals bedrijfswagens, thuiswerk en flexibele uren.',
    jobs: ['Software Developer', 'Systeembeheerder', 'Data Analyst', 'Project Manager IT', 'DevOps Engineer', 'Cybersecurity Specialist'],
  },
  {
    slug: 'financien-banking',
    name: 'Financiën & Banking',
    avgGross: 4500,
    minGross: 2900,
    maxGross: 8000,
    description: 'De financiële sector biedt traditioneel hoge lonen in België. Bankiers, financieel analisten en verzekeraars profiteren van goede basissalarissen aangevuld met bonussen en uitgebreide extralegale voordelen.',
    jobs: ['Financieel Analist', 'Accountant', 'Bankier', 'Verzekeringsadviseur', 'Risk Manager', 'Compliance Officer'],
  },
  {
    slug: 'gezondheidszorg',
    name: 'Gezondheidszorg',
    avgGross: 3400,
    minGross: 2200,
    maxGross: 9000,
    description: 'De gezondheidszorg kent een brede loonvork, van verpleegkundigen tot specialisten. Artsen en tandartsen behoren tot de best verdienende beroepen in België, terwijl verzorgend personeel bescheidener verdient.',
    jobs: ['Verpleegkundige', 'Arts', 'Tandarts', 'Kinesitherapeut', 'Apotheker', 'Laborant'],
  },
  {
    slug: 'onderwijs',
    name: 'Onderwijs',
    avgGross: 3100,
    minGross: 2400,
    maxGross: 5000,
    description: 'Leerkrachten in België verdienen een degelijk loon dat stijgt met anciënniteit. Het onderwijs biedt werkzekerheid, een goed pensioen en uitgebreide vakantieperiodes als extra voordeel.',
    jobs: ['Leerkracht Lager Onderwijs', 'Leerkracht Secundair', 'Universitair Docent', 'Directeur School', 'CLB-medewerker', 'Onderwijsassistent'],
  },
  {
    slug: 'bouw',
    name: 'Bouw',
    avgGross: 2800,
    minGross: 2100,
    maxGross: 4500,
    description: 'De bouwsector in België biedt competitieve lonen, vooral voor geschoolde vakmannen. Metselaars, elektriciens en loodgieters zijn zeer gevraagd en kunnen goede lonen verdienen, vaak aangevuld met verplaatsingsvergoedingen.',
    jobs: ['Metselaar', 'Elektricien', 'Loodgieter', 'Projectleider Bouw', 'Architect', 'Werfleider'],
  },
  {
    slug: 'horeca',
    name: 'Horeca',
    avgGross: 2300,
    minGross: 1900,
    maxGross: 3500,
    description: 'De horecasector kent relatief lagere lonen maar biedt veel flexibiliteit en fooien als extra inkomen. Koks en hotelmanagers kunnen met ervaring een goed salaris opbouwen.',
    jobs: ['Kok', 'Ober/Serveerster', 'Hotelmanager', 'Barkeeper', 'Receptionist', 'Sommelier'],
  },
  {
    slug: 'overheid',
    name: 'Overheid',
    avgGross: 3300,
    minGross: 2400,
    maxGross: 5500,
    description: 'Werken bij de overheid in België biedt een stabiel inkomen, uitstekend pensioen en werkzekerheid. De lonen stijgen automatisch met anciënniteit en worden geïndexeerd.',
    jobs: ['Ambtenaar', 'Politieagent', 'Brandweerman', 'Gemeenteambtenaar', 'Diplomaat', 'Magistraat'],
  },
  {
    slug: 'marketing',
    name: 'Marketing & Communicatie',
    avgGross: 3200,
    minGross: 2400,
    maxGross: 5500,
    description: 'Marketing en communicatie professionals in België verdienen competitieve lonen, vooral in digitale marketing. Met groeiende vraag naar online expertise stijgen de salarissen in deze sector.',
    jobs: ['Marketing Manager', 'Content Strateeg', 'Social Media Manager', 'SEO Specialist', 'Communicatie-adviseur', 'Brand Manager'],
  },
  {
    slug: 'juridisch',
    name: 'Juridisch',
    avgGross: 4000,
    minGross: 2600,
    maxGross: 10000,
    description: 'De juridische sector in België is lucratief, vooral voor ervaren advocaten en notarissen. Bedrijfsjuristen genieten van aantrekkelijke pakketten bij grote ondernemingen.',
    jobs: ['Advocaat', 'Notaris', 'Bedrijfsjurist', 'Rechter', 'Gerechtsdeurwaarder', 'Juridisch Adviseur'],
  },
  {
    slug: 'transport-logistiek',
    name: 'Transport & Logistiek',
    avgGross: 2700,
    minGross: 2100,
    maxGross: 4000,
    description: 'Transport en logistiek is een belangrijke sector in België dankzij de haven van Antwerpen. Vrachtwagenchauffeurs en logistiek managers vinden er stabiel werk met degelijke verloning.',
    jobs: ['Vrachtwagenchauffeur', 'Logistiek Manager', 'Supply Chain Analist', 'Magazijnier', 'Douane-agent', 'Dispatcher'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    avgGross: 2400,
    minGross: 1900,
    maxGross: 4000,
    description: 'De retailsector biedt instapkansen met groeimogelijkheden. Winkelmanagers en inkopers kunnen aantrekkelijke lonen bereiken na enkele jaren ervaring.',
    jobs: ['Winkelmedewerker', 'Winkelmanager', 'Inkoper', 'Visual Merchandiser', 'Regiomanager', 'E-commerce Specialist'],
  },
  {
    slug: 'industrie',
    name: 'Industrie & Productie',
    avgGross: 3000,
    minGross: 2200,
    maxGross: 5000,
    description: 'De industriële sector in België, met name de chemie en farma, biedt zeer competitieve lonen. Ploegwerk wordt extra vergoed en er zijn vaak goede extralegale voordelen.',
    jobs: ['Procesoperator', 'Kwaliteitscontroleur', 'Productiemanager', 'Ingenieur', 'Onderhoudstechnieker', 'Laborant'],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}

export const salaryAmounts = [2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 7000, 8000, 10000];
