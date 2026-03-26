import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen over Loonberekening | Loonberekening.be',
  description: 'Antwoorden op de meestgestelde vragen over bruto-netto, RSZ, bedrijfsvoorheffing, werkbonus en loonberekening in België.',
};

const faqs = [
  {
    question: "Wat is het verschil tussen bruto- en nettoloon?",
    answer: (
      <>
        <p>Je <strong>brutoloon</strong> is het bedrag dat je werkgever met jou afspreekt in je contract. Maar dat bedrag komt nooit volledig op je rekening.</p>
        <p>Van je brutoloon gaan er twee grote hoeveelheden af:</p>
        <ul>
          <li><strong>RSZ-bijdrage</strong> (13,07% voor werknemers) — financiert de sociale zekerheid</li>
          <li><strong>Bedrijfsvoorheffing</strong> — een voorschot op je personenbelasting</li>
        </ul>
        <p>Wat overblijft is je <strong>nettoloon</strong>: het bedrag dat je effectief op je bankrekening ziet verschijnen. Bij een bruto maandloon van €3.000 hou je als bediende doorgaans tussen €1.900 en €2.100 netto over, afhankelijk van je gezinssituatie.</p>
        <p className="mt-4">
          <Link href="/" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Bereken je netto loon met onze calculator
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </>
    )
  },
  {
    question: "Hoe wordt de RSZ-bijdrage berekend?",
    answer: (
      <>
        <p>De <strong>RSZ-bijdrage</strong> (Rijksdienst voor Sociale Zekerheid) is een vast percentage van je brutoloon:</p>
        <ul>
          <li><strong>Werknemers (bedienden & arbeiders):</strong> 13,07%</li>
          <li><strong>Werkgevers:</strong> ±25% bovenop je bruto (zie je niet op je loonbrief)</li>
          <li><strong>Zelfstandigen:</strong> 20,5% op je netto beroepsinkomen</li>
        </ul>
        <p>De RSZ financiert je <strong>pensioen, ziekteverzekering, werkloosheidsuitkering, kinderbijslag</strong> en andere sociale beschermingen. Het is dus geen "verloren" geld — het bouwt je sociale rechten op.</p>
        <p><strong>Rekenvoorbeeld:</strong> Bij een brutoloon van €3.000 betaal je €392,10 RSZ-bijdrage (3.000 × 13,07%).</p>
        <p className="mt-4">
          <Link href="/bediende" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Bekijk de volledige berekening voor bedienden
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </>
    )
  },
  {
    question: "Wat is bedrijfsvoorheffing en hoeveel bedraagt die?",
    answer: (
      <>
        <p>De <strong>bedrijfsvoorheffing</strong> is een maandelijks voorschot op je personenbelasting. Je werkgever houdt dit in en stort het rechtstreeks aan de fiscus.</p>
        <p>Het bedrag hangt af van:</p>
        <ul>
          <li><strong>Je belastbaar inkomen</strong> (bruto min RSZ)</li>
          <li><strong>Je gezinssituatie</strong> (alleenstaand, gehuwd, kinderen ten laste)</li>
          <li><strong>Je statuut</strong> (bediende, arbeider, zelfstandige)</li>
        </ul>
        <p>België werkt met <strong>progressieve belastingschijven</strong> (2026):</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">Schijf</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Tarief</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">€0 – €15.820</td>
                <td className="border border-gray-200 px-4 py-2">25%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">€15.820 – €27.920</td>
                <td className="border border-gray-200 px-4 py-2">40%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">€27.920 – €48.320</td>
                <td className="border border-gray-200 px-4 py-2">45%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Boven €48.320</td>
                <td className="border border-gray-200 px-4 py-2">50%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-4">Iedereen krijgt een <strong>belastingvrije som</strong> van ±€10.570, waardoor je op dat eerste stuk géén belasting betaalt.</p>
        <p className="mt-4">
          <Link href="/" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Bereken je exacte bedrijfsvoorheffing
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </>
    )
  },
  {
    question: "Wat is de werkbonus en kom ik in aanmerking?",
    answer: (
      <>
        <p>De <strong>werkbonus</strong> is een belastingvoordeel voor werknemers met een laag tot gemiddeld brutoloon. Het verlaagt je RSZ-bijdrage en je bedrijfsvoorheffing, zodat je <strong>netto meer overhoudt</strong>.</p>
        <p><strong>Wie komt in aanmerking?</strong></p>
        <ul>
          <li>Werknemers (bedienden en arbeiders) met een bruto maandloon <strong>tot ±€3.207</strong></li>
          <li>Zelfstandigen komen <strong>niet</strong> in aanmerking</li>
        </ul>
        <p><strong>Hoeveel levert het op?</strong></p>
        <ul>
          <li>Maximaal <strong>±€340 per maand</strong> RSZ-vermindering bij de laagste lonen</li>
          <li>Extra fiscale korting bovenop de RSZ-vermindering</li>
          <li>Hoe hoger je loon, hoe lager de werkbonus — tot €0 boven de grens</li>
        </ul>
        <p><strong>Rekenvoorbeeld:</strong> Bij een brutoloon van €2.000 kan de werkbonus je nettoloon met <strong>€200-€250 per maand</strong> verhogen.</p>
        <p className="mt-4">
          <Link href="/werkbonus" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Bereken je werkbonus met onze tool
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </>
    )
  },
  {
    question: "Wat is het verschil tussen een bediende en een arbeider?",
    answer: (
      <>
        <p>Hoewel de wetgever het verschil steeds kleiner maakt, zijn er nog altijd <strong>praktische verschillen</strong>:</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2"></th>
                <th className="border border-gray-200 px-4 py-2">Bediende</th>
                <th className="border border-gray-200 px-4 py-2">Arbeider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Type werk</td>
                <td className="border border-gray-200 px-4 py-2">Hoofdarbeid (kantoor, admin)</td>
                <td className="border border-gray-200 px-4 py-2">Handarbeid (bouw, productie)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">RSZ-berekening</td>
                <td className="border border-gray-200 px-4 py-2">Op 100% bruto</td>
                <td className="border border-gray-200 px-4 py-2">Op 108% bruto (sociaal bruto)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Vakantiegeld</td>
                <td className="border border-gray-200 px-4 py-2">Betaald door werkgever</td>
                <td className="border border-gray-200 px-4 py-2">Betaald door vakantiekas</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Opzegvergoeding</td>
                <td className="border border-gray-200 px-4 py-2">Sinds 2014 gelijk</td>
                <td className="border border-gray-200 px-4 py-2">Sinds 2014 gelijk</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-4">Het grootste verschil voor je loonberekening is de <strong>108%-regel bij arbeiders</strong>: je RSZ wordt berekend op 108% van je brutoloon, wat een iets ander nettoresultaat geeft.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Link href="/bediende" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Calculator voor bedienden
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="/arbeider" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Calculator voor arbeiders
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </>
    )
  },
  {
    question: "Hoe beïnvloeden kinderen ten laste mijn nettoloon?",
    answer: (
      <>
        <p>Kinderen ten laste geven je een <strong>hogere belastingvrije som</strong>, waardoor je minder bedrijfsvoorheffing betaalt en je netto méér overhoudt.</p>
        <p><strong>Extra belastingvrij per kind (2026):</strong></p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">Kinderen ten laste</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Extra belastingvrij</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">1 kind</td>
                <td className="border border-gray-200 px-4 py-2">€1.850</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">2 kinderen</td>
                <td className="border border-gray-200 px-4 py-2">€4.760</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">3 kinderen</td>
                <td className="border border-gray-200 px-4 py-2">€10.660</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">4 kinderen</td>
                <td className="border border-gray-200 px-4 py-2">€17.250</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-4">Het voordeel stijgt dus <strong>bovenproportioneel</strong> bij meer kinderen. Een derde kind levert procentueel meer op dan het eerste.</p>
        <p><strong>Belangrijk:</strong> Een kind is fiscaal ten laste als het deel uitmaakt van je gezin op 1 januari van het aanslagjaar, en het kind niet meer dan €7.010 netto eigen inkomsten heeft (2026).</p>
        <p className="mt-4">
          <Link href="/" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Bereken je loon met kinderen ten laste
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </>
    )
  },
  {
    question: "Tellen maaltijdcheques mee als loon?",
    answer: (
      <>
        <p><strong>Jein.</strong> Maaltijdcheques zijn strikt genomen geen loon, maar een <strong>extralegaal voordeel</strong>. Ze worden niet belast en er wordt géén RSZ op berekend — mits de werkgever de spelregels volgt:</p>
        <ul>
          <li><strong>Maximale werkgeversbijdrage:</strong> €6,91 per cheque (2026)</li>
          <li><strong>Minimale werknemersbijdrage:</strong> €1,09 per cheque</li>
          <li><strong>Maximale waarde:</strong> €8,00 per cheque</li>
          <li><strong>Één cheque per gewerkte dag</strong></li>
        </ul>
        <p>Bij 20 werkdagen per maand zijn maaltijdcheques tot <strong>€160 extra</strong> waard, volledig belastingvrij. Dat is een netto voordeel dat je niet ziet in een bruto-nettoberekening, maar wél op je totale koopkracht weegt.</p>
        <p className="mt-4">
          <Link href="/blog/verschil-bruto-netto" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Meer over maaltijdcheques en loonoptimalisatie
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </>
    )
  },
  {
    question: "Hoe werkt loonindexatie in België?",
    answer: (
      <>
        <p>België heeft een <strong>uniek systeem van automatische loonindexatie</strong>: je loon stijgt mee met de levensduurte. Dat gebeurt op basis van de <strong>gezondheidsindex</strong> (een variant van de consumentenprijsindex zonder tabak, alcohol en benzine).</p>
        <p><strong>Hoe werkt het?</strong></p>
        <ul>
          <li>Wanneer de <strong>spilindex</strong> wordt overschreden, stijgen de lonen automatisch met <strong>2%</strong></li>
          <li>Het moment van indexatie hangt af van je sector (paritair comité)</li>
          <li>Sommige sectoren indexeren <strong>maandelijks</strong>, andere <strong>jaarlijks</strong> (bv. in januari)</li>
        </ul>
        <p><strong>Wat betekent dit concreet?</strong> Bij een bruto maandloon van €3.000 levert een indexatie van 2% je <strong>€60 bruto</strong> extra per maand op. Netto hou je daar — afhankelijk van je belastingschijf — zo'n <strong>€30-€35</strong> van over.</p>
        <p className="mt-4">
          <Link href="/blog/loonindexatie-2026" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium">
            👉 Lees meer over loonindexatie 2026
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </>
    )
  }
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.question.includes("verschil tussen bruto- en nettoloon") 
          ? "Je brutoloon is het contractueel afgesproken bedrag. Na aftrek van RSZ-bijdrage (13,07%) en bedrijfsvoorheffing (progressief belastingtarief) hou je je nettoloon over. Bij een bruto van €3.000 is dat doorgaans €1.900-€2.100 netto."
          : faq.question.includes("RSZ-bijdrage")
          ? "De RSZ-bijdrage voor werknemers bedraagt 13,07% van het brutoloon. Voor zelfstandigen is dat 20,5% op het netto beroepsinkomen. De bijdrage financiert pensioen, ziekteverzekering, werkloosheid en kinderbijslag."
          : faq.question.includes("bedrijfsvoorheffing")
          ? "De bedrijfsvoorheffing is een maandelijks voorschot op je personenbelasting. Het bedrag hangt af van je inkomen, gezinssituatie en statuut. België hanteert progressieve schijven: 25%, 40%, 45% en 50%."
          : faq.question.includes("werkbonus")
          ? "De werkbonus is een belastingvoordeel voor werknemers met een bruto maandloon tot ±€3.207. Het verlaagt je RSZ-bijdrage en bedrijfsvoorheffing, met een maximaal voordeel van ±€340 per maand bij de laagste lonen."
          : faq.question.includes("bediende en een arbeider")
          ? "Het grootste verschil voor loonberekening is de 108%-regel bij arbeiders: RSZ wordt berekend op 108% van het brutoloon. Bedienden betalen RSZ op 100% van het bruto. Opzegregels zijn sinds 2014 gelijkgetrokken."
          : faq.question.includes("kinderen ten laste")
          ? "Kinderen ten laste verhogen je belastingvrije som: €1.850 voor 1 kind, €4.760 voor 2, €10.660 voor 3. Je betaalt daardoor minder bedrijfsvoorheffing en houdt netto meer over."
          : faq.question.includes("maaltijdcheques")
          ? "Maaltijdcheques zijn een extralegaal voordeel, geen loon. Ze worden niet belast en er wordt geen RSZ op berekend. Maximale waarde: €8 per cheque per gewerkte dag, goed voor tot €160 extra per maand."
          : "België heeft automatische loonindexatie: wanneer de spilindex wordt overschreden, stijgen lonen met 2%. Het moment hangt af van je sector. Bij €3.000 bruto levert 2% indexatie ±€60 bruto (€30-35 netto) extra per maand op."
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Veelgestelde Vragen' }
      ]} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Veelgestelde Vragen over Loonberekening</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Je loonbrief kan soms aanvoelen als een raadsel. Wat is RSZ precies? Waarom hou je zoveel minder over dan je brutoloon? En hoe zit dat nu met die werkbonus? Hieronder beantwoorden we de <strong>8 meestgestelde vragen</strong> over loonberekening in België.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <h2 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h2>
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <div className="px-6 pb-6">
              <div className="prose prose-sm max-w-none text-gray-700">
                {faq.answer}
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Bereken je nettoloon</h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-6">
            Wil je precies weten hoeveel je netto overhoudt? Gebruik onze gratis calculator.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-white text-teal-800 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-lg text-lg"
          >
            <span>Start Calculator</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}