import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen over Loonberekening in België [2026]',
  description: 'Antwoorden op de meest gestelde vragen over loonberekening, bruto-netto, RSZ, bedrijfsvoorheffing en meer in België.',
};

const faqItems = [
  {
    question: 'Hoe bereken ik mijn nettoloon in België?',
    answer: 'Je nettoloon bereken je door van je brutoloon achtereenvolgens de <strong>RSZ-bijdrage (13,07%)</strong> en de <strong>bedrijfsvoorheffing</strong> af te trekken. Gebruik onze <a href="/calculator" class="text-teal-700 underline">gratis calculator</a> voor een snelle berekening.',
  },
  {
    question: 'Wat is het verschil tussen bruto en netto?',
    answer: 'Je <strong>brutoloon</strong> is het totale bedrag dat je werkgever betaalt vóór inhoudingen. Je <strong>nettoloon</strong> is wat je effectief op je rekening ontvangt, na aftrek van RSZ-bijdragen en bedrijfsvoorheffing. Lees meer op onze pagina <a href="/bruto-netto-verschil" class="text-teal-700 underline">bruto vs netto</a>.',
  },
  {
    question: 'Hoeveel RSZ betaal ik als werknemer?',
    answer: 'Als werknemer betaal je <strong>13,07%</strong> van je brutoloon aan RSZ (sociale zekerheid). Dit wordt automatisch ingehouden door je werkgever. Meer info op onze <a href="/rsz-bijdrage" class="text-teal-700 underline">RSZ-pagina</a>.',
  },
  {
    question: 'Wat is bedrijfsvoorheffing?',
    answer: 'Bedrijfsvoorheffing is een <strong>voorschot op je personenbelasting</strong> dat maandelijks van je loon wordt ingehouden. Het bedrag hangt af van je belastbaar inkomen, gezinssituatie en eventuele kinderen ten laste. Bekijk de <a href="/bedrijfsvoorheffing" class="text-teal-700 underline">details hier</a>.',
  },
  {
    question: 'Wat zijn de belastingschijven in België in 2026?',
    answer: 'België hanteert een progressief belastingsysteem met schijven van <strong>25%, 40%, 45% en 50%</strong>. Hoe hoger je inkomen, hoe hoger het tarief op het bovenste deel. Bekijk alle <a href="/belastingschijven-belgie" class="text-teal-700 underline">belastingschijven</a>.',
  },
  {
    question: 'Wat is de werkbonus en kom ik in aanmerking?',
    answer: 'De <strong>werkbonus</strong> is een vermindering van je RSZ-bijdrage voor werknemers met een laag tot gemiddeld brutoloon (tot ca. €3.208/maand). Dit verhoogt je nettoloon. Meer details op onze <a href="/werkbonus" class="text-teal-700 underline">werkbonus-pagina</a>.',
  },
  {
    question: 'Hoeveel vakantiegeld krijg ik?',
    answer: 'Bedienden ontvangen <strong>enkel vakantiegeld</strong> (normaal loon tijdens vakantie) en <strong>dubbel vakantiegeld</strong> (92% van je brutoloon voor die maand). Arbeiders ontvangen vakantiegeld via de vakantiekas. Lees er alles over op <a href="/vakantiegeld-berekenen" class="text-teal-700 underline">vakantiegeld berekenen</a>.',
  },
  {
    question: 'Wat is het gemiddeld loon in België?',
    answer: 'Het gemiddelde brutoloon in België ligt rond de <strong>€4.000 per maand</strong>. Dit verschilt sterk per sector, ervaring en regio. Bekijk het volledige overzicht op onze pagina <a href="/gemiddeld-loon-belgie" class="text-teal-700 underline">gemiddeld loon</a>.',
  },
  {
    question: 'Hoe werkt de indexatie van lonen?',
    answer: 'In België worden lonen automatisch aangepast aan de <strong>gezondheidsindex</strong> (levensduurte). Wanneer de spilindex wordt overschreden, stijgen lonen in de openbare sector met 2%. In de privésector hangt het af van je paritair comité. Meer op <a href="/indexatie-lonen" class="text-teal-700 underline">indexatie lonen</a>.',
  },
  {
    question: 'Wat is de eindejaarspremie (13e maand)?',
    answer: 'De eindejaarspremie of <strong>13e maand</strong> is een extra vergoeding die je in december ontvangt. Het bedrag en de voorwaarden worden bepaald door je sector (paritair comité). Niet elke sector voorziet een volledige 13e maand. Lees meer op <a href="/eindejaarspremie" class="text-teal-700 underline">eindejaarspremie</a>.',
  },
  {
    question: 'Hoeveel kost een werknemer de werkgever?',
    answer: 'Bovenop het brutoloon betaalt de werkgever nog ca. <strong>25-30% patronale RSZ-bijdragen</strong>, plus eventuele verzekeringen en voordelen. De totale loonkost ligt dus aanzienlijk hoger dan je brutoloon. Bekijk de berekening op <a href="/loonkost-werkgever" class="text-teal-700 underline">loonkost werkgever</a>.',
  },
  {
    question: 'Is deze calculator 100% accuraat?',
    answer: 'Onze calculator geeft een <strong>betrouwbare indicatie</strong> op basis van de officiële tarieven en schalen. Voor een exacte berekening raden we aan om je loonfiche te raadplegen of contact op te nemen met je boekhouder of sociaal secretariaat.',
  },
];

export default function VeelgesteldeVragenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Veelgestelde Vragen' }]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Veelgestelde Vragen</h1>

      <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-6 mb-8 border border-teal-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Hier vind je antwoorden op de meest gestelde vragen over loonberekening in België. Van bruto naar netto, RSZ-bijdragen, bedrijfsvoorheffing tot vakantiegeld — alles helder uitgelegd.
        </p>
      </div>

      <FAQ items={faqItems} showSchema={true} />

      <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Vraag niet beantwoord?</h2>
        <p className="text-gray-600 mb-4">Bereken je nettoloon direct met onze gratis tool.</p>
        <a
          href="/calculator"
          className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 font-medium"
        >
          Bereken je loon →
        </a>
      </div>
    </div>
  );
}
