import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Loonberekening.be`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Loonberekening.be',
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: post.title }
      ]} />

      <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded">
            {post.category}
          </span>
          <span className="text-gray-500">
            {new Date(post.date).toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span className="text-gray-500">· {post.readTime}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 mb-8 border border-blue-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            {post.description}
          </p>
        </div>

        {/* Article content wordt hier inline gerenderd op basis van slug */}
        <BlogContent slug={params.slug} />

        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-5 sm:p-8 text-white shadow-2xl mt-12">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">Bereken je nettoloon</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-6">
              Gebruik onze gratis calculator voor een gedetailleerde berekening.
            </p>
            <Link 
              href="/calculator" 
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-lg text-lg"
            >
              <span>Start Calculator</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t pt-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar blog overzicht
        </Link>
      </div>
    </div>
  );
}

function BlogContent({ slug }: { slug: string }) {
  // Inline content per artikel (compact versie)
  const content: Record<string, JSX.Element> = {
    'hoe-bereken-je-nettoloon-belgie': (
      <>
        <h2>De basis: van bruto naar netto</h2>
        <p>Je nettoloon berekenen is eigenlijk een kwestie van je brutoloon nemen en daar verschillende inhoudingen vanaf trekken. In België zijn dat er drie grote:</p>
        <ol>
          <li><strong>RSZ-bijdrage (13,07%)</strong> — Dit gaat naar de sociale zekerheid</li>
          <li><strong>Bedrijfsvoorheffing</strong> — Je belastingvoorschot</li>
          <li><strong>Bijzondere bijdrage sociale zekerheid</strong> — Een kleine extra bijdrage</li>
        </ol>

        <h2>Stap 1: RSZ-bijdrage aftrekken</h2>
        <p>De eerste inhouding is de RSZ-bijdrage van 13,07%. Deze wordt automatisch door je werkgever ingehouden en gaat naar het financieren van pensioenen, gezondheidszorg, werkloosheid, etc.</p>
        <p><strong>Voorbeeld:</strong> €3.000 bruto → €3.000 × 13,07% = €392,10 RSZ → blijft over: €2.607,90</p>

        <h2>Stap 2: Werkbonus (als van toepassing)</h2>
        <p>Verdien je minder dan circa €3.144 per maand? Dan kom je mogelijk in aanmerking voor de werkbonus. Dit is een vermindering van je RSZ-bijdrage die je nettoloon verhoogt. Bij €3.000 bruto krijg je ongeveer €31 werkbonus.</p>

        <h2>Stap 3: Bedrijfsvoorheffing berekenen</h2>
        <p>Op het belastbaar inkomen (bruto min RSZ) wordt bedrijfsvoorheffing ingehouden. Dit wordt berekend via progressieve belastingschijven:</p>
        <ul>
          <li>€0 — €15.200: 25%</li>
          <li>€15.200 — €26.830: 40%</li>
          <li>€26.830 — €46.440: 45%</li>
          <li>Boven €46.440: 50%</li>
        </ul>

        <p>Let op: er is ook een belastingvrije som van ~€10.160 per jaar, waardoor je eerste stuk inkomen effectief niet belast wordt.</p>

        <h2>Stap 4: Bijzondere bijdrage</h2>
        <p>Als laatste is er nog een kleine bijzondere bijdrage voor de sociale zekerheid. Dit bedrag varieert maar ligt meestal rond de €50-65 per maand voor een modaal loon.</p>

        <h2>Totaal voorbeeld: €3.000 bruto</h2>
        <p>Voor een alleenstaande zonder kinderen:</p>
        <ul>
          <li>Bruto: €3.000</li>
          <li>RSZ (13,07%): - €392</li>
          <li>Werkbonus: + €31</li>
          <li>Bedrijfsvoorheffing: - €505</li>
          <li>Bijzondere bijdrage: - €62</li>
          <li><strong>Netto: €2.072</strong></li>
        </ul>

        <p>Dat betekent een effectieve belastingdruk van ongeveer 31% op dit loon.</p>

        <h2>Factoren die je nettoloon beïnvloeden</h2>
        <p>Je nettoloon hangt niet alleen af van je brutoloon, maar ook van:</p>
        <ul>
          <li><strong>Burgerlijke staat</strong> — Gehuwd is voordeliger dan alleenstaand</li>
          <li><strong>Kinderen ten laste</strong> — Elk kind verhoogt je belastingvrije som</li>
          <li><strong>Extralegale voordelen</strong> — Maaltijdcheques, bedrijfswagen, etc. verhogen je netto zonder extra belasting</li>
        </ul>
      </>
    ),

    'verschil-bruto-netto-salaris': (
      <>
        <h2>Bruto vs netto: wat is het verschil?</h2>
        <p>Je <strong>brutoloon</strong> is het bedrag dat in je arbeidsovereenkomst staat — het totale loon dat je werkgever je betaalt vóór enige inhouding. Je <strong>nettoloon</strong> is wat je effectief op je bankrekening krijgt na aftrek van RSZ en belastingen.</p>

        <h2>Waarom is het verschil zo groot?</h2>
        <p>België heeft één van de hoogste belastingdrukken op arbeid in de wereld. Gemiddeld hou je als alleenstaande werknemer slechts 55-65% van je brutoloon over als nettoloon. De rest gaat naar:</p>
        <ul>
          <li>RSZ-bijdrage (13,07%) — financiert sociale zekerheid</li>
          <li>Bedrijfsvoorheffing (20-45%) — belastingvoorschot</li>
          <li>Bijzondere bijdrage — extra sociale bijdrage</li>
        </ul>

        <h2>Concrete voorbeelden</h2>
        <p>Laten we kijken naar verschillende loonschalen:</p>
        <ul>
          <li>€2.000 bruto → €1.613 netto (80,7%)</li>
          <li>€3.000 bruto → €2.042 netto (68,1%)</li>
          <li>€5.000 bruto → €2.819 netto (56,4%)</li>
          <li>€8.000 bruto → €4.030 netto (50,4%)</li>
        </ul>

        <p>Hoe hoger je loon, hoe hoger het percentage dat naar belastingen gaat door de progressieve belastingschijven.</p>

        <h2>Wat doet je werkgever nog meer?</h2>
        <p>Wat veel werknemers niet weten: je werkgever betaalt bovenop je brutoloon nog eens ongeveer 25% werkgeversbijdragen aan de RSZ. Een werknemer met €3.000 bruto kost de werkgever in werkelijkheid ongeveer €3.750!</p>

        <h2>Tips om je netto te verhogen</h2>
        <p>Je kunt het verschil tussen bruto en netto verkleinen door:</p>
        <ul>
          <li><strong>Extralegale voordelen</strong> te vragen — maaltijdcheques, bedrijfswagen, groepsverzekering</li>
          <li><strong>Je burgerlijke staat correct registreren</strong> — gehuwden betalen minder</li>
          <li><strong>Kinderen ten laste</strong> vermelden — verhoogt je belastingvrije som</li>
        </ul>
      </>
    ),

    'werkbonus-belgie-2026': (
      <>
        <h2>Wat is de werkbonus?</h2>
        <p>De werkbonus is een financiële stimulans van de Belgische overheid om werken lonender te maken voor mensen met een laag tot gemiddeld loon. Het bestaat uit twee delen:</p>
        <ul>
          <li><strong>Sociale werkbonus</strong> — vermindering van je RSZ-bijdrage</li>
          <li><strong>Fiscale werkbonus</strong> — vermindering van je bedrijfsvoorheffing</li>
        </ul>

        <h2>Wie komt in aanmerking?</h2>
        <p>Je komt in aanmerking als je bruto maandloon niet hoger is dan circa <strong>€3.144,45</strong>. Dit geldt voor:</p>
        <ul>
          <li>Werknemers in de private sector</li>
          <li>Contractuelen bij de overheid</li>
          <li>Voltijdse en deeltijdse werknemers (pro rata)</li>
        </ul>
        <p>De werkbonus wordt automatisch toegepast — je hoeft niets aan te vragen!</p>

        <h2>Hoeveel bedraagt de werkbonus?</h2>
        <p>Het bedrag hangt af van je brutoloon:</p>
        <ul>
          <li>Tot €2.078: <strong>€230/maand maximum</strong></li>
          <li>€2.078 — €3.144: Degressief aflopend</li>
          <li>Boven €3.144: €0 (geen recht)</li>
        </ul>

        <h2>Voorbeelden</h2>
        <p>Concrete berekeningen:</p>
        <ul>
          <li>€2.000 bruto → <strong>+€230 werkbonus</strong> (RSZ daalt van €261 naar €31)</li>
          <li>€2.500 bruto → <strong>+€139 werkbonus</strong> (RSZ daalt van €327 naar €188)</li>
          <li>€3.000 bruto → <strong>+€31 werkbonus</strong> (RSZ daalt van €392 naar €361)</li>
        </ul>

        <h2>Impact op je nettoloon</h2>
        <p>Bij een loon van €2.000 bruto verhoogt de werkbonus je nettoloon met ongeveer €230 per maand. Over een heel jaar is dat <strong>€2.760 extra netto</strong>!</p>

        <h2>Fiscale werkbonus</h2>
        <p>Naast de sociale werkbonus krijg je ook een fiscale werkbonus: ongeveer 33% van de sociale werkbonus als extra vermindering van je bedrijfsvoorheffing. Bij het maximum (€230) is dat nog eens €76 extra per maand.</p>

        <h2>Check je recht op werkbonus</h2>
        <p>Gebruik onze calculator om te zien hoeveel werkbonus je ontvangt. Activeer de werkbonus optie en vul je brutoloon in!</p>
      </>
    ),

    'loonindexatie-2026-wat-verandert': (
      <>
        <h2>Wat is loonindexatie?</h2>
        <p>Loonindexatie is het automatisch aanpassen van lonen aan de stijging van de kosten van levensonderhoud (inflatie). België is één van de weinige landen waar dit automatisch gebeurt — je loon stijgt mee met de prijzen in de winkels.</p>

        <h2>Hoe werkt het?</h2>
        <p>De indexatie is gebaseerd op de <strong>gezondheidsindex</strong> — een aangepaste versie van de consumptieprijsindex die tabak, alcohol en benzine niet meetelt. Wanneer deze index een bepaalde drempel overschrijdt (de spilindex), worden lonen geïndexeerd.</p>

        <h2>Wanneer gebeurt indexatie?</h2>
        <p>Het moment van indexatie hangt af van je sector. Sommige sectoren indexeren maandelijks, andere jaarlijks, en weer andere bij het overschrijden van de spilindex. Check je collectieve arbeidsovereenkomst (CAO) voor je specifieke sector.</p>

        <h2>Indexatie in 2026</h2>
        <p>In 2026 wordt verwacht dat de meeste sectoren opnieuw indexeren. De precieze percentages hangen af van de inflatie in 2025, maar schommelingen van 2-5% zijn gebruikelijk.</p>

        <h2>Impact op je nettoloon</h2>
        <p>Een indexatie van 3% op een brutoloon van €3.000 betekent:</p>
        <ul>
          <li>Bruto: €3.000 → €3.090 (+€90)</li>
          <li>Netto: €2.042 → €2.100 (+€58)</li>
        </ul>
        <p>Let op: door progressieve belastingen hou je netto minder over dan 3%.</p>

        <h2>Uitzondering: loonmatiging</h2>
        <p>In sommige periodes kan de overheid beslissen tot loonmatiging — dan wordt de automatische indexatie tijdelijk uitgesteld of beperkt. Dit gebeurt vaak bij economische crises.</p>

        <h2>Bereken je geïndexeerd loon</h2>
        <p>Wil je weten hoeveel je na indexatie netto overhoudt? Verhoog je brutoloon in onze calculator met het verwachte indexatiepercentage en zie direct het resultaat.</p>
      </>
    ),
  };

  return content[slug] || <p>Inhoud wordt binnenkort toegevoegd.</p>;
}
