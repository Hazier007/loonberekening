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
  const content: Record<string, JSX.Element> = {
    'minimumloon-belgie-2026-bedragen-en-regels': (
      <>
        <h2>Wat is het GGMMI?</h2>
        <p>Het <strong>Gewaarborgd Gemiddeld Minimum Maandinkomen (GGMMI)</strong> is het wettelijk minimumloon in België. Het wordt vastgelegd door de Nationale Arbeidsraad (NAR) via collectieve arbeidsovereenkomsten. Elke werknemer in de privésector heeft recht op minstens dit bedrag. Het GGMMI wordt regelmatig aangepast aan de levensduurte via de automatische loonindexatie.</p>
        <p>In tegenstelling tot veel andere landen heeft België geen simpel &quot;minimumloon per uur&quot;. Het GGMMI is een maandelijks brutobedrag dat varieert op basis van leeftijd en anciënniteit bij de werkgever.</p>

        <h2>Actuele GGMMI bedragen 2026</h2>
        <p>De huidige bedragen van het minimumloon in België (bruto per maand, voltijds):</p>
        <ul>
          <li><strong>18 jaar:</strong> €1.685,58/maand</li>
          <li><strong>19 jaar:</strong> €1.746,70/maand</li>
          <li><strong>20 jaar:</strong> €1.807,81/maand</li>
          <li><strong>21+ jaar, 0 maanden anciënniteit:</strong> €1.994,18/maand</li>
          <li><strong>21+ jaar, 6 maanden anciënniteit:</strong> €2.012,64/maand</li>
          <li><strong>21+ jaar, 12 maanden anciënniteit:</strong> €2.029,88/maand</li>
        </ul>
        <p>Het referentiebedrag voor het minimumloon in België is dus <strong>€2.029,88 bruto per maand</strong> voor een volwassen werknemer (21+) met minstens 12 maanden anciënniteit. Dit bedrag is van toepassing bij een voltijdse tewerkstelling (38 uur/week).</p>

        <h2>Sectoraal minimumloon vs. GGMMI</h2>
        <p>Het GGMMI is het <em>absolute minimum</em>, maar in de praktijk liggen de lonen in de meeste sectoren hoger. Elk paritair comité (PC) kan een eigen sectoraal minimumloon vastleggen dat hoger is dan het GGMMI.</p>
        <p>Enkele voorbeelden:</p>
        <ul>
          <li><strong>PC 200 (bedienden):</strong> minimumlonen variëren per categorie, vaak €2.100-€2.400</li>
          <li><strong>PC 124 (bouw):</strong> minimumlonen starten hoger vanwege de zwaardere arbeidsomstandigheden</li>
          <li><strong>PC 302 (horeca):</strong> eigen barema&apos;s per functiecategorie</li>
        </ul>
        <p>Je werkgever moet altijd het hoogste van de twee betalen: het GGMMI of het sectoraal minimum. Check je loonbrief en CAO om te weten welk minimumloon voor jou geldt.</p>

        <h2>Wie heeft recht op het minimumloon?</h2>
        <p>Het GGMMI geldt voor:</p>
        <ul>
          <li><strong>Voltijdse werknemers</strong> in de privésector</li>
          <li><strong>Werknemers van 21 jaar en ouder</strong> (jongere werknemers hebben aangepaste bedragen)</li>
          <li><strong>Deeltijdse werknemers</strong> ontvangen het minimumloon pro rata hun arbeidstijd</li>
        </ul>
        <p>Het GGMMI geldt <strong>niet</strong> voor:</p>
        <ul>
          <li>Zelfstandigen (zij hebben geen minimumloon)</li>
          <li>Statutaire ambtenaren (eigen loonschalen)</li>
          <li>Studenten met een studentenovereenkomst (in sommige gevallen)</li>
          <li>Leerlingen in het kader van een alternerende opleiding</li>
        </ul>

        <h2>Minimumloon netto: wat hou je over?</h2>
        <p>Het GGMMI van €2.029,88 bruto vertaalt zich naar ongeveer <strong>€1.613 netto per maand</strong> voor een alleenstaande zonder kinderen. Dit komt door:</p>
        <ul>
          <li>RSZ-bijdrage (13,07%): -€265</li>
          <li>Werkbonus: +€198 (aanzienlijke RSZ-vermindering bij dit loonbedrag)</li>
          <li>Bedrijfsvoorheffing: -€297</li>
          <li>Bijzondere bijdrage: -€53</li>
        </ul>
        <p>Dankzij de <strong>werkbonus</strong> is de effectieve belastingdruk op het minimumloon lager dan op hogere lonen. De werkbonus is specifiek ontworpen om werken aantrekkelijker te maken voor werknemers met een laag loon.</p>
        <p>Wil je precies weten hoeveel jij netto overhoudt? Gebruik onze <a href="/calculator">gratis bruto-netto calculator</a> en vul €2.029,88 in als brutoloon.</p>

        <h2>Vergelijking met buurlanden</h2>
        <p>Hoe verhoudt het Belgisch minimumloon zich tot dat van onze buurlanden?</p>
        <ul>
          <li><strong>Nederland:</strong> ~€2.070 bruto/maand — Iets hoger dan België, recent sterk gestegen</li>
          <li><strong>Duitsland:</strong> ~€2.054 bruto/maand (€12,82/uur × 160 uur) — Vergelijkbaar met België</li>
          <li><strong>Frankrijk:</strong> ~€1.767 bruto/maand (SMIC) — Lager dan België, maar met meer sociale voordelen</li>
          <li><strong>Luxemburg:</strong> ~€2.571 bruto/maand — Fors hoger, het hoogste in de EU</li>
        </ul>
        <p>België zit qua minimumloon in de Europese middenmoot, maar door het sterke sociale zekerheidsstelsel (werkbonus, ziekteverzekering, pensioen) is de totale bescherming van werknemers met een minimumloon relatief goed uitgebouwd.</p>
      </>
    ),

    'hoe-bereken-je-nettoloon': (
      <>
        <h2>Waarom is er zo'n groot verschil?</h2>
        <p>België staat bekend om zijn hoge belastingdruk. Tussen je brutoloon en je nettoloon zitten meerdere afhoudingen die samen een flink stuk van je loon opslokken.</p>
        <p>Gemiddeld hou je als alleenstaande werknemer <strong>55 tot 65%</strong> van je bruto over. Bij een brutoloon van €3.000 komt dat neer op zo'n €1.900 tot €2.050 netto. Niet niks, die hap.</p>
        <p>Maar waar gaat dat geld naartoe? Laten we het stap voor stap bekijken.</p>

        <h2>Stap 1: RSZ-bijdrage (13,07%)</h2>
        <p>De eerste afhouding is je bijdrage aan de Rijksdienst voor Sociale Zekerheid (RSZ). Die bedraagt altijd <strong>13,07% van je brutoloon</strong>.</p>
        <p>Met deze bijdrage financier je:</p>
        <ul>
          <li>Ziekteverzekering en gezondheidszorg</li>
          <li>Pensioen</li>
          <li>Werkloosheidsuitkeringen</li>
          <li>Kinderbijslag (nu via Groeipakket in Vlaanderen)</li>
          <li>Arbeidsongevallenverzekering</li>
        </ul>

        <h3>Rekenvoorbeeld</h3>
        <p>Bij een brutoloon van <strong>€3.000</strong>:</p>
        <ul>
          <li>RSZ = €3.000 × 13,07% = <strong>€392,10</strong></li>
          <li>Resterend bedrag: €3.000 - €392,10 = <strong>€2.607,90</strong></li>
        </ul>
        <p>Dit resterende bedrag noemen we je <strong>belastbaar brutoloon</strong>. Hier gaan we in de volgende stap mee verder.</p>

        <h2>Stap 2: Beroepskosten aftrekken</h2>
        <p>Van je belastbaar brutoloon worden <strong>beroepskosten</strong> afgetrokken. De meeste werknemers kiezen voor het <strong>forfaitaire kostenstelsel</strong> — dan hoef je zelf niets te bewijzen.</p>
        <p>Het forfait bedraagt in 2025-2026:</p>
        <ul>
          <li><strong>30%</strong> op de eerste schijf (tot ±€18.750)</li>
          <li>Met een <strong>maximum van ±€5.520</strong> per jaar</li>
        </ul>

        <h3>Rekenvoorbeeld (jaarlijks)</h3>
        <p>Belastbaar bruto per jaar: €2.607,90 × 12 = <strong>€31.294,80</strong></p>
        <p>Forfaitaire beroepskosten: 30% op €18.750 = €5.520 (plafond bereikt)</p>
        <p><strong>Belastbaar inkomen:</strong> €31.294,80 - €5.520 = <strong>€25.774,80</strong></p>
        <p>Heb je hoge werkelijke beroepskosten (woon-werkverkeer, thuiskantoor, vakliteratuur)? Dan kan het voordeliger zijn om die <strong>werkelijke kosten</strong> te bewijzen. Maar voor de meesten is het forfait de makkelijkste en beste keuze.</p>

        <h2>Stap 3: Bedrijfsvoorheffing (belastingen)</h2>
        <p>Nu komt het grote stuk: de <strong>bedrijfsvoorheffing</strong>. Dit is een voorschot op je jaarlijkse personenbelasting. Je werkgever houdt dit maandelijks in.</p>
        <p>België hanteert een <strong>progressief belastingstelsel</strong>. Dat betekent: hoe meer je verdient, hoe hoger het tarief — maar alleen op het stuk dat in de hogere schijf valt.</p>

        <h3>Belastingschijven 2025-2026</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Belastbaar inkomen (per jaar)</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tarief</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€0 – €15.820</td>
                <td className="border border-gray-300 px-4 py-2">25%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€15.820 – €27.920</td>
                <td className="border border-gray-300 px-4 py-2">40%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€27.920 – €48.320</td>
                <td className="border border-gray-300 px-4 py-2">45%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Boven €48.320</td>
                <td className="border border-gray-300 px-4 py-2">50%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Belangrijk: de belastingvrije som</h3>
        <p>Iedereen in België heeft recht op een <strong>belastingvrije som</strong> van <strong>±€10.570</strong> per jaar. Over dit bedrag betaal je géén belastingen. Heb je kinderen ten laste? Dan stijgt de belastingvrije som aanzienlijk.</p>

        <h3>Rekenvoorbeeld</h3>
        <p>Belastbaar inkomen: <strong>€25.774,80</strong></p>
        <p>Min belastingvrije som: -€10.570 = <strong>€15.204,80</strong> effectief belast</p>
        <p>Belasting berekenen:</p>
        <ul>
          <li>€15.204,80 × 25% = <strong>€3.801,20</strong> per jaar</li>
          <li>Per maand: <strong>€316,77</strong></li>
        </ul>
        <p><em>Let op: dit is een vereenvoudigd voorbeeld. In werkelijkheid spelen ook gemeentebelasting (gemiddeld 7%) en diverse verminderingen mee.</em></p>

        <h3>Met gemeentebelasting</h3>
        <p>De meeste gemeenten heffen <strong>6 tot 9%</strong> opcentiemen bovenop je personenbelasting. Bij 7%:</p>
        <p>€3.801,20 × 1,07 = <strong>€4.067,28</strong> per jaar → <strong>€338,94</strong> per maand</p>

        <h2>Stap 4: Werkbonus (voor lagere lonen)</h2>
        <p>Verdien je een laag tot gemiddeld loon? Dan heb je recht op de <strong>werkbonus</strong>. Dit is een vermindering van je RSZ-bijdrage, waardoor je nettoloon stijgt.</p>
        <p>De werkbonus geldt voor brutolonen <strong>tot ±€2.961,27</strong> per maand (voltijds). Het maximumbedrag is <strong>€277,83 per maand</strong> bij het minimumloon.</p>
        <p>Boven die grens? Dan krijg je geen werkbonus en is deze stap niet van toepassing.</p>

        <h2>De volledige berekening samengevat</h2>
        <p>Laten we het hele plaatje bekijken voor een <strong>alleenstaande bediende zonder kinderen</strong> met een brutoloon van <strong>€3.000 per maand</strong>:</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Stap</th>
                <th className="border border-gray-300 px-4 py-2 text-right font-semibold">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Brutoloon</td>
                <td className="border border-gray-300 px-4 py-2 text-right">€3.000,00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">- RSZ (13,07%)</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€392,10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Belastbaar bruto</td>
                <td className="border border-gray-300 px-4 py-2 text-right">€2.607,90</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">- Bedrijfsvoorheffing (geschat)</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€490,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">+ Werkbonus</td>
                <td className="border border-gray-300 px-4 py-2 text-right">€0 (bruto &gt; grens)</td>
              </tr>
              <tr className="bg-teal-50 font-bold">
                <td className="border border-gray-300 px-4 py-2">Nettoloon</td>
                <td className="border border-gray-300 px-4 py-2 text-right">±€2.118</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Je houdt dus zo'n <strong>70,6%</strong> van je bruto over. Dat is relatief goed — bij hogere lonen daalt dit percentage door de hogere belastingschijven.</p>

        <h2>Factoren die je nettoloon beïnvloeden</h2>
        <p>Iedereen heeft een ander nettoloon, zelfs bij hetzelfde brutoloon. Dit zijn de belangrijkste factoren:</p>

        <h3>Gezinssituatie</h3>
        <ul>
          <li><strong>Alleenstaand</strong>: standaard belastingvrije som</li>
          <li><strong>Gehuwd/samenwonend</strong>: mogelijkheid tot huwelijksquotiënt</li>
          <li><strong>Kinderen ten laste</strong>: verhoogde belastingvrije som per kind</li>
        </ul>

        <h3>Statuut</h3>
        <ul>
          <li><strong>Bediende</strong>: bruto = bruto</li>
          <li><strong>Arbeider</strong>: brutoloon × 1,08 (vakantiegeld inbegrepen)</li>
        </ul>

        <h3>Woonplaats</h3>
        <p>De <strong>gemeentebelasting</strong> verschilt per gemeente. In sommige gemeenten betaal je 0% opcentiemen, in andere tot 9%. Dat maakt een verschil van tientallen euro's per maand.</p>

        <h3>Extra voordelen</h3>
        <p>Krijg je <strong>maaltijdcheques</strong>, een <strong>bedrijfswagen</strong>, <strong>groepsverzekering</strong> of andere extralegale voordelen? Die beïnvloeden je totale verloning, maar niet altijd je nettoloon op dezelfde manier.</p>

        <h2>Veelgemaakte fouten bij loonberekening</h2>
        <p><strong>1. Vergeten dat het systeem progressief is.</strong><br />
        Je betaalt geen 45% op je volledige inkomen — alleen op het stuk in die schijf.</p>

        <p><strong>2. Werkbonus niet meenemen.</strong><br />
        Veel werknemers met een lager loon vergeten dat ze recht hebben op een werkbonus. Check het altijd.</p>

        <p><strong>3. Vergelijken zonder context.</strong><br />
        "Mijn collega verdient hetzelfde bruto maar meer netto." Klopt misschien — door kinderen ten laste, een andere gemeente of een ander statuut.</p>

        <p><em>Laatst bijgewerkt: februari 2026. Alle bedragen zijn gebaseerd op de officiële Belgische tarieven voor aanslagjaar 2026.</em></p>
      </>
    ),

    'verschil-bruto-netto': (
      <>
        <h2>Bruto loon: wat is dat precies?</h2>
        <p>Je <strong>brutoloon</strong> is het totaalbedrag dat je werkgever je betaalt vóór alle afhoudingen. Het is het bedrag dat in je arbeidscontract staat.</p>
        <p>Dit omvat:</p>
        <ul>
          <li>Je basissalaris</li>
          <li>Eventuele premies en toeslagen</li>
          <li>Overwerkvergoedingen</li>
        </ul>
        <p>Maar let op: je brutoloon is <strong>niet</strong> wat je werkgever in totaal kwijt is. Bovenop jouw bruto betaalt je werkgever nog eens ±25% aan <strong>patronale bijdragen</strong>. Bij een bruto van €3.000 kost jij je werkgever dus zo'n €3.750.</p>

        <h2>Netto loon: wat krijg je echt?</h2>
        <p>Je <strong>nettoloon</strong> is het bedrag dat effectief op je bankrekening terechtkomt. Dit is je brutoloon min alle verplichte afhoudingen.</p>
        <p>Die afhoudingen zijn:</p>
        <ol>
          <li><strong>RSZ-bijdrage</strong> — 13,07% van je bruto</li>
          <li><strong>Bedrijfsvoorheffing</strong> — voorschot op je belastingen</li>
          <li>Eventuele <strong>bijzondere bijdragen</strong> voor sociale zekerheid</li>
        </ol>
        <p>In sommige gevallen worden er ook <strong>voordelen</strong> bijgeteld, zoals de werkbonus.</p>

        <h2>Waar gaat het verschil naartoe?</h2>
        <p>Laten we een concreet voorbeeld bekijken. We nemen een <strong>alleenstaande bediende</strong> met een brutoloon van <strong>€2.500 per maand</strong>, zonder kinderen, in een gemeente met 7% opcentiemen.</p>

        <h3>De afhouding stap voor stap</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Stap</th>
                <th className="border border-gray-300 px-4 py-2 text-right font-semibold">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Brutoloon</strong></td>
                <td className="border border-gray-300 px-4 py-2 text-right">€2.500,00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">RSZ-bijdrage (13,07%)</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€326,75</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Belastbaar bruto</strong></td>
                <td className="border border-gray-300 px-4 py-2 text-right">€2.173,25</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Bedrijfsvoorheffing</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€340,00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Bijzondere bijdrage SZ</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€9,30</td>
              </tr>
              <tr className="bg-teal-50 font-bold">
                <td className="border border-gray-300 px-4 py-2"><strong>Nettoloon</strong></td>
                <td className="border border-gray-300 px-4 py-2 text-right"><strong>±€1.824</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Je houdt dus <strong>€1.824 van je €2.500 bruto</strong> over — dat is zo'n <strong>73%</strong>. Niet slecht, maar het kan beter of slechter uitvallen afhankelijk van je situatie.</p>

        <h2>Hoeveel hou je over? Drie voorbeelden</h2>

        <h3>Voorbeeld 1: Minimumloon (±€1.950 bruto)</h3>
        <ul>
          <li>RSZ: -€254,87</li>
          <li>Bedrijfsvoorheffing: -€120 (laag door werkbonus + lage schijf)</li>
          <li>Werkbonus: +€165</li>
          <li><strong>Netto: ±€1.740</strong></li>
          <li><strong>Percentage: 89%</strong> van bruto</li>
        </ul>

        <h3>Voorbeeld 2: Modaal loon (±€3.500 bruto)</h3>
        <ul>
          <li>RSZ: -€457,45</li>
          <li>Bedrijfsvoorheffing: -€640</li>
          <li>Werkbonus: €0</li>
          <li><strong>Netto: ±€2.400</strong></li>
          <li><strong>Percentage: 69%</strong> van bruto</li>
        </ul>

        <h3>Voorbeeld 3: Hoog loon (±€5.000 bruto)</h3>
        <ul>
          <li>RSZ: -€653,50</li>
          <li>Bedrijfsvoorheffing: -€1.250</li>
          <li>Werkbonus: €0</li>
          <li><strong>Netto: ±€3.100</strong></li>
          <li><strong>Percentage: 62%</strong> van bruto</li>
        </ul>

        <p>Je ziet het patroon: hoe hoger je brutoloon, hoe kleiner het percentage dat je netto overhoudt. Dat is het gevolg van de <strong>progressieve belastingschijven</strong>.</p>

        <h2>Infographic: Van bruto naar netto</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-6 font-mono text-sm">
          BRUTOLOON €3.000<br />
          &nbsp;&nbsp;&nbsp;&nbsp;│<br />
          &nbsp;&nbsp;&nbsp;&nbsp;├── RSZ (13,07%) ──────────── €392 → Sociale zekerheid<br />
          &nbsp;&nbsp;&nbsp;&nbsp;│<br />
          &nbsp;&nbsp;&nbsp;&nbsp;├── Beroepskosten (forfait) ── wordt afgetrokken voor belasting<br />
          &nbsp;&nbsp;&nbsp;&nbsp;│<br />
          &nbsp;&nbsp;&nbsp;&nbsp;├── Bedrijfsvoorheffing ───── €490 → Belastingen<br />
          &nbsp;&nbsp;&nbsp;&nbsp;│<br />
          &nbsp;&nbsp;&nbsp;&nbsp;└── NETTOLOON ─────────────── ±€2.118 op je rekening
        </div>

        <h2>Waarom is België zo duur?</h2>
        <p>België heeft een van de <strong>hoogste belastingdrukken</strong> ter wereld voor werknemers. Daar staat wél iets tegenover:</p>
        <ul>
          <li><strong>Gratis of goedkope gezondheidszorg</strong> via de ziekteverzekering</li>
          <li><strong>Wettelijk pensioen</strong> (al is dat bescheiden)</li>
          <li><strong>Werkloosheidsuitkeringen</strong> zonder beperking in de tijd</li>
          <li><strong>Kinderbijslag</strong> (Groeipakket)</li>
          <li><strong>Betaald verlof</strong>, ziekteverlof, en meer</li>
        </ul>
        <p>Je betaalt dus niet "voor niets". Maar of de verhouding eerlijk is? Dat is een politieke discussie die we hier niet gaan voeren.</p>

        <h2>Bruto naar netto: niet altijd hetzelfde</h2>
        <p>Twee collega's met exact hetzelfde brutoloon kunnen een <strong>verschillend nettoloon</strong> hebben. Hoe dat kan:</p>
        <ul>
          <li><strong>Kinderen ten laste</strong>: hogere belastingvrije som → minder belastingen</li>
          <li><strong>Woonplaats</strong>: gemeentebelasting verschilt van 0% tot 9%</li>
          <li><strong>Statuut</strong>: arbeiders krijgen 8% extra bruto voor vakantiegeld</li>
          <li><strong>Partner</strong>: het huwelijksquotiënt kan voordelig zijn</li>
          <li><strong>Werkbonus</strong>: alleen voor lonen onder ±€2.961</li>
        </ul>

        <h2>Tips om meer netto over te houden</h2>
        <p>Sommige zaken kan je beïnvloeden, andere niet. Maar er zijn opties:</p>

        <h3>1. Optimaliseer je loonpakket</h3>
        <p>Vraag je werkgever naar <strong>extralegale voordelen</strong> die fiscaal voordeliger zijn dan bruto loon:</p>
        <ul>
          <li>Maaltijdcheques (max €8/dag, jij betaalt max €1,09)</li>
          <li>Ecocheques (max €250/jaar, volledig vrijgesteld)</li>
          <li>Bedrijfswagen + tankkaart</li>
          <li>Groepsverzekering</li>
          <li>Thuiswerkvergoeding</li>
        </ul>

        <h3>2. Check je gemeente</h3>
        <p>Verhuis je binnenkort? De gemeentebelasting maakt een verschil van <strong>€20-50 per maand</strong>. Het loont om dit mee te nemen.</p>

        <h3>3. Vergeet je belastingaangifte niet</h3>
        <p>Heb je recht op aftrekposten die niet via je werkgever verlopen (hypotheeklening, kinderopvang, giften)? Dan krijg je bij je belastingaangifte geld terug.</p>

        <p><em>Cijfers gebaseerd op Belgische tarieven 2025-2026. Raadpleeg je sociaal secretariaat voor een exacte berekening.</em></p>
      </>
    ),

    'werkbonus-belgie-2026': (
      <>
        <h2>Wat is de werkbonus precies?</h2>
        <p>De werkbonus is een <strong>vermindering van de persoonlijke RSZ-bijdrage</strong> (13,07%) voor werknemers met een laag tot gemiddeld inkomen. Het systeem werd in 2000 ingevoerd om de <strong>werkloosheidsval</strong> te bestrijden.</p>
        <p>Het idee is simpel: als je gaat werken voor een bescheiden loon, moet het verschil met een uitkering groot genoeg zijn om werken de moeite waard te maken. De werkbonus vergroot dat verschil.</p>

        <h3>Belangrijk om te weten</h3>
        <ul>
          <li>De werkbonus wordt <strong>automatisch</strong> berekend en toegepast door je werkgever</li>
          <li>Je hoeft er zelf <strong>niets voor te doen</strong></li>
          <li>Het bedrag verschijnt op je loonbrief als "werkbonus" of "vermindering persoonlijke RSZ-bijdrage"</li>
          <li>Boven een bepaald brutoloon vervalt de werkbonus volledig</li>
        </ul>

        <h2>Wie heeft recht op de werkbonus?</h2>
        <p>Je hebt recht op de werkbonus als je voldoet aan deze voorwaarden:</p>
        <ul>
          <li>Je bent <strong>werknemer</strong> in de privésector (of contractueel bij de overheid)</li>
          <li>Je werkt <strong>voltijds of deeltijds</strong></li>
          <li>Je bruto referteloon ligt <strong>onder de bovengrens</strong> (±€2.961,27 in 2025-2026)</li>
        </ul>
        <p>Zelfstandigen, ambtenaren met een statutair statuut en studenten met een studentencontract komen <strong>niet</strong> in aanmerking.</p>

        <h2>Bedragen werkbonus 2025-2026</h2>
        <p>De werkbonus wordt berekend op basis van je <strong>bruto referentiemaandloon</strong>. Er zijn twee categorieën: arbeiders en bedienden.</p>

        <h3>Tabel: Werkbonus voor bedienden (voltijds)</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Bruto maandloon</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Werkbonus (maandelijks)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">≤ €1.945,38 (GGMMI)</td>
                <td className="border border-gray-300 px-4 py-2"><strong>€277,83</strong> (maximum)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€1.945,39 – €2.961,27</td>
                <td className="border border-gray-300 px-4 py-2">Degressief (lineaire afbouw)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">&gt; €2.961,27</td>
                <td className="border border-gray-300 px-4 py-2"><strong>€0</strong> (geen recht)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tabel: Werkbonus voor arbeiders (voltijds)</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Bruto maandloon</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Werkbonus (maandelijks)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">≤ €1.945,38 × 1,08 = €2.100,01</td>
                <td className="border border-gray-300 px-4 py-2"><strong>€300,06</strong> (maximum)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€2.100,02 – €3.198,17</td>
                <td className="border border-gray-300 px-4 py-2">Degressief (lineaire afbouw)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">&gt; €3.198,17</td>
                <td className="border border-gray-300 px-4 py-2"><strong>€0</strong> (geen recht)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>Arbeiders krijgen een hoger bedrag omdat hun brutoloon 8% vakantiegeld bevat.</em></p>

        <h2>Hoe wordt de werkbonus berekend?</h2>
        <p>De berekening is lineair degressief. Dat betekent: hoe hoger je loon, hoe lager de werkbonus — tot nul.</p>

        <h3>Formule voor bedienden</h3>
        <div className="bg-gray-100 p-4 rounded-lg my-4 font-mono text-sm">
          Werkbonus = €277,83 - (€0,2736 × (bruto - €1.945,38))
        </div>
        <p>Als het resultaat negatief is → werkbonus = €0.</p>

        <h3>Rekenvoorbeeld 1: Bruto €2.200</h3>
        <div className="bg-gray-100 p-4 rounded-lg my-4 font-mono text-sm">
          Werkbonus = €277,83 - (€0,2736 × (€2.200 - €1.945,38))<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = €277,83 - (€0,2736 × €254,62)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = €277,83 - €69,66<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = €208,17 per maand
        </div>
        <p>Bij een bruto van €2.200 krijg je dus <strong>€208,17 extra netto per maand</strong>.</p>

        <h3>Rekenvoorbeeld 2: Bruto €2.700</h3>
        <div className="bg-gray-100 p-4 rounded-lg my-4 font-mono text-sm">
          Werkbonus = €277,83 - (€0,2736 × (€2.700 - €1.945,38))<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = €277,83 - (€0,2736 × €754,62)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = €277,83 - €206,46<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = €71,37 per maand
        </div>

        <h2>Impact op je nettoloon</h2>
        <p>De werkbonus kan een <strong>significant verschil</strong> maken voor je nettoloon. Laten we het effect bekijken:</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Bruto</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Zonder werkbonus</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Met werkbonus</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Verschil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€1.950</td>
                <td className="border border-gray-300 px-4 py-2">€1.490</td>
                <td className="border border-gray-300 px-4 py-2">€1.768</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€278</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€2.200</td>
                <td className="border border-gray-300 px-4 py-2">€1.640</td>
                <td className="border border-gray-300 px-4 py-2">€1.848</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€208</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€2.500</td>
                <td className="border border-gray-300 px-4 py-2">€1.824</td>
                <td className="border border-gray-300 px-4 py-2">€1.945</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€121</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€2.800</td>
                <td className="border border-gray-300 px-4 py-2">€2.000</td>
                <td className="border border-gray-300 px-4 py-2">€2.044</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€44</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€3.000</td>
                <td className="border border-gray-300 px-4 py-2">€2.118</td>
                <td className="border border-gray-300 px-4 py-2">€2.118</td>
                <td className="border border-gray-300 px-4 py-2">+€0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>Geschatte nettobedragen voor een alleenstaande bediende zonder kinderen.</em></p>

        <p>Bij het minimumloon maakt de werkbonus het verschil van bijna <strong>€280 per maand</strong> — dat is meer dan €3.300 per jaar!</p>

        <h2>Deeltijds werken en de werkbonus</h2>
        <p>Werk je deeltijds? Dan wordt de werkbonus <strong>proportioneel</strong> berekend op basis van je tewerkstellingspercentage.</p>
        <p><strong>Voorbeeld:</strong> Je werkt 4/5 (80%) met een deeltijds bruto van €2.000.</p>
        <ol>
          <li>Referteloon voltijds equivalent: €2.000 / 0,80 = <strong>€2.500</strong></li>
          <li>Werkbonus op voltijdse basis: ±€121</li>
          <li>Jouw werkbonus (80%): €121 × 0,80 = <strong>€96,80 per maand</strong></li>
        </ol>

        <h2>Fiscale werkbonus: extra voordeel</h2>
        <p>Naast de sociale werkbonus (vermindering RSZ) bestaat er ook een <strong>fiscale werkbonus</strong>. Dit is een vermindering van je bedrijfsvoorheffing.</p>
        <p>De fiscale werkbonus bedraagt <strong>33,14%</strong> van de sociale werkbonus. Dit komt <strong>bovenop</strong> de sociale werkbonus.</p>

        <h3>Totaal voordeel bij maximale werkbonus</h3>
        <ul>
          <li>Sociale werkbonus: €277,83</li>
          <li>Fiscale werkbonus: €277,83 × 33,14% = <strong>€92,05</strong></li>
          <li><strong>Totaal: €369,88 per maand</strong></li>
        </ul>
        <p>Dat is bijna <strong>€4.440 per jaar</strong> meer netto!</p>

        <h2>Veelgestelde vragen</h2>

        <h3>Moet ik de werkbonus zelf aanvragen?</h3>
        <p>Nee. Je werkgever (of sociaal secretariaat) berekent en past de werkbonus automatisch toe. Check je loonbrief om te zien of het correct is.</p>

        <h3>Geldt de werkbonus voor interimwerk?</h3>
        <p>Ja, uitzendkrachten hebben recht op de werkbonus op dezelfde voorwaarden als vaste werknemers.</p>

        <h3>Verandert de werkbonus elk jaar?</h3>
        <p>De bedragen en grenzen worden <strong>geïndexeerd</strong> en kunnen dus jaarlijks licht wijzigen. De overheid past de tabellen aan wanneer de spilindex wordt overschreden.</p>

        <h3>Telt mijn eindejaarspremie mee?</h3>
        <p>Nee, de werkbonus wordt berekend op basis van je gewone maandloon. Premies en voordelen in natura tellen niet mee voor het referteloon.</p>

        <p><em>Bedragen gebaseerd op de officiële RSZ-tabellen 2025-2026. Raadpleeg de RSZ of je sociaal secretariaat voor de meest recente cijfers.</em></p>
      </>
    ),

    'loonindexatie-2026': (
      <>
        <h2>Wat is loonindexatie?</h2>
        <p>Loonindexatie is de <strong>automatische aanpassing van je loon aan de stijgende levensduurte</strong>. België is een van de weinige landen ter wereld met dit systeem.</p>
        <p>Het werkt zo:</p>
        <ol>
          <li>De overheid meet de prijzen van een <strong>korf producten en diensten</strong> (voeding, energie, huur, ...)</li>
          <li>Die prijzen worden samengevat in de <strong>gezondheidsindex</strong></li>
          <li>Wanneer de gezondheidsindex een bepaalde drempel overschrijdt (de <strong>spilindex</strong>), worden de lonen aangepast</li>
        </ol>

        <h3>Belangrijk detail</h3>
        <p>De indexatie geldt voor:</p>
        <ul>
          <li><strong>Ambtenarenlonen</strong>: automatisch de maand na overschrijding van de spilindex (+2%)</li>
          <li><strong>Privésector</strong>: afhankelijk van het <strong>paritair comité</strong> (sector). Sommige sectoren indexeren jaarlijks op 1 januari, andere per kwartaal.</li>
        </ul>

        <h2>Wanneer is de loonindexatie in 2026?</h2>
        <p>Voor de meeste werknemers in de privésector vond de indexatie plaats op <strong>1 januari 2026</strong>. Het indexeringspercentage voor 2026 bedraagt naar schatting <strong>2 tot 3%</strong>, afhankelijk van de sector.</p>

        <h3>Indexatie per sector (voorbeelden)</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Paritair Comité</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Sector</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Indexatie</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Moment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">PC 200</td>
                <td className="border border-gray-300 px-4 py-2">Bedienden (APCB)</td>
                <td className="border border-gray-300 px-4 py-2">±2%</td>
                <td className="border border-gray-300 px-4 py-2">1 januari</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">PC 111</td>
                <td className="border border-gray-300 px-4 py-2">Metaal</td>
                <td className="border border-gray-300 px-4 py-2">±2,2%</td>
                <td className="border border-gray-300 px-4 py-2">1 januari</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">PC 124</td>
                <td className="border border-gray-300 px-4 py-2">Bouw</td>
                <td className="border border-gray-300 px-4 py-2">Per kwartaal</td>
                <td className="border border-gray-300 px-4 py-2">1 jan, apr, jul, okt</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">PC 302</td>
                <td className="border border-gray-300 px-4 py-2">Horeca</td>
                <td className="border border-gray-300 px-4 py-2">±2%</td>
                <td className="border border-gray-300 px-4 py-2">1 januari</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">PC 330</td>
                <td className="border border-gray-300 px-4 py-2">Gezondheidszorg</td>
                <td className="border border-gray-300 px-4 py-2">Per kwartaal</td>
                <td className="border border-gray-300 px-4 py-2">Per kwartaal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>Exacte percentages worden eind december definitief bepaald op basis van de gemiddelde gezondheidsindex.</em></p>

        <h2>Hoeveel stijgt je loon?</h2>
        <p>Laten we een concreet voorbeeld bekijken met een indexatie van <strong>2%</strong>.</p>

        <h3>Voorbeeld: bediende met bruto €3.000</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Component</th>
                <th className="border border-gray-300 px-4 py-2 text-right font-semibold">Vóór indexatie</th>
                <th className="border border-gray-300 px-4 py-2 text-right font-semibold">Na indexatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Brutoloon</td>
                <td className="border border-gray-300 px-4 py-2 text-right">€3.000</td>
                <td className="border border-gray-300 px-4 py-2 text-right">€3.060</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">RSZ (13,07%)</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€392,10</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€399,94</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Bedrijfsvoorheffing</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€490,00</td>
                <td className="border border-gray-300 px-4 py-2 text-right">-€505,00</td>
              </tr>
              <tr className="bg-teal-50 font-bold">
                <td className="border border-gray-300 px-4 py-2"><strong>Nettoloon</strong></td>
                <td className="border border-gray-300 px-4 py-2 text-right"><strong>€2.118</strong></td>
                <td className="border border-gray-300 px-4 py-2 text-right"><strong>€2.155</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Je bruto stijgt met <strong>€60</strong>, maar netto hou je er slechts <strong>€37</strong> van over. Dat is het effect van de progressieve belastingen: elke extra euro bruto wordt deels "afgeroomd".</p>

        <h3>Waarom stijgt netto minder dan bruto?</h3>
        <p>Elke euro loonsverhoging wordt belast in je <strong>hoogste belastingschijf</strong>. Als je in de 45%-schijf zit, gaat van elke extra euro bruto:</p>
        <ul>
          <li>13,07% naar RSZ</li>
          <li>45% belasting op het resterende bedrag</li>
          <li>Plus gemeentebelasting</li>
        </ul>
        <p>Van €60 bruto extra hou je dan:</p>
        <ul>
          <li>€60 - €7,84 (RSZ) = €52,16</li>
          <li>€52,16 × 55% (na 45% belasting) = €28,69</li>
          <li>Min gemeentebelasting (7%): <strong>±€26,68 netto</strong></li>
        </ul>
        <p>De realiteit is genuanceerder (door forfaitaire beroepskosten etc.), maar het principe klopt: <strong>van elke geïndexeerde euro hou je als middenklasser ±50-60% netto over</strong>.</p>

        <h2>De indexatie-paradox</h2>
        <p>Hier zit een frustrerende realiteit voor veel werknemers:</p>
        <ul>
          <li>Je loon stijgt met de index (bijv. +2%)</li>
          <li>Maar de <strong>prijzen</strong> zijn ook met ±2% gestegen</li>
          <li>Je <strong>koopkracht</strong> blijft dus gelijk...</li>
          <li>...terwijl je netto minder dan 2% omhoog gaat door hogere belastingen</li>
        </ul>
        <p>Dit noemen economen het <strong>indexatie-effect op de belastingen</strong>. Je brutoloon stijgt mee met de inflatie, maar de belastingschijven worden niet altijd even snel aangepast. Het gevolg: je schuift langzaam op naar een hogere schijf zonder dat je er reëel op vooruitgaat.</p>
        <p>Dit fenomeen heet <strong>koude progressie</strong>.</p>

        <h2>Wat als er een indexsprong komt?</h2>
        <p>Een <strong>indexsprong</strong> betekent dat de overheid beslist om één indexatie over te slaan. Dit is in het verleden al gebeurd (onder de regering-Michel in 2015) om de concurrentiekracht van bedrijven te verbeteren.</p>
        <p>Bij een indexsprong:</p>
        <ul>
          <li>Stijgen je lonen <strong>niet</strong> bij de eerstvolgende overschrijding</li>
          <li>Verlies je die verhoging permanent (het wordt niet later ingehaald)</li>
          <li>Op jaarbasis kost dat al snel <strong>€400-800 netto</strong> afhankelijk van je loon</li>
        </ul>
        <p>Er zijn momenteel geen concrete plannen voor een indexsprong in 2026, maar het debat laait regelmatig op.</p>

        <h2>Impact per loonniveau</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Brutoloon</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Indexatie +2%</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Bruto extra</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Netto extra (schatting)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€2.000</td>
                <td className="border border-gray-300 px-4 py-2">€2.040</td>
                <td className="border border-gray-300 px-4 py-2">+€40</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€28</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€2.500</td>
                <td className="border border-gray-300 px-4 py-2">€2.550</td>
                <td className="border border-gray-300 px-4 py-2">+€50</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€33</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€3.000</td>
                <td className="border border-gray-300 px-4 py-2">€3.060</td>
                <td className="border border-gray-300 px-4 py-2">+€60</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€37</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€3.500</td>
                <td className="border border-gray-300 px-4 py-2">€3.570</td>
                <td className="border border-gray-300 px-4 py-2">+€70</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€40</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">€4.000</td>
                <td className="border border-gray-300 px-4 py-2">€4.080</td>
                <td className="border border-gray-300 px-4 py-2">+€80</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€43</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">€5.000</td>
                <td className="border border-gray-300 px-4 py-2">€5.100</td>
                <td className="border border-gray-300 px-4 py-2">+€100</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">+€50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>Schatting voor alleenstaande bediende zonder kinderen.</em></p>

        <h2>Loonindexatie en je werkbonus</h2>
        <p>Als je loon dicht bij de <strong>bovengrenzen van de werkbonus</strong> zit (±€2.961 voor bedienden), kan de indexatie je over die grens duwen. Het gevolg:</p>
        <ul>
          <li>Je verliest (een deel van) je werkbonus</li>
          <li>Je bruto stijgt, maar je netto kan <strong>dalen</strong></li>
        </ul>
        <p>Dit overgangseffect treft elk jaar een groep werknemers. Het is een van de vreemdste situaties in het Belgische loonsysteem.</p>
        <p><strong>Voorbeeld:</strong> Je verdient €2.900 bruto en krijgt ±€16 werkbonus. Na indexatie verdien je €2.958 — net onder de grens, maar je werkbonus zakt naar ±€1. Netto merk je amper verschil.</p>

        <p><em>Artikel bijgewerkt: februari 2026. Exacte indexatiepercentages per sector worden jaarlijks bepaald. Raadpleeg je sociaal secretariaat of vakbond voor je specifieke situatie.</em></p>
      </>
    ),
  };

  return content[slug] || <p>Inhoud wordt binnenkort toegevoegd.</p>;
}
