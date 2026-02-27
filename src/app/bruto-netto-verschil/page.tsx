import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bruto vs Netto Verschil in België — Complete Uitleg [2026]',
  description: 'Wat is het verschil tussen bruto en netto loon in België? Complete uitleg met voorbeelden, berekeningen en tips om je nettoloon te verhogen.',
};

export default function BrutoNettoVerschilPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Bruto vs Netto Verschil' }]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Het Verschil tussen Bruto en Netto Loon in België</h1>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 mb-8 border border-teal-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            Als werknemer in België is het cruciaal om het verschil te begrijpen tussen je bruto en netto loon. Je brutoloon is het bedrag dat op je arbeidsovereenkomst staat, maar het bedrag dat je effectief op je rekening ontvangt — je nettoloon — is aanzienlijk lager. In dit artikel leggen we uitgebreid uit welke inhoudingen er plaatsvinden en hoe je van bruto naar netto gaat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">💰</span>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Wat is brutoloon?</h2>
            </div>
            <p className="text-gray-700 mb-3">
              Je <strong>brutoloon</strong> is het totale loon dat je werkgever je betaalt vóór enige inhouding. Dit is het bedrag dat vermeld staat in je arbeidsovereenkomst en op je loonbrief.
            </p>
            <p className="text-gray-700 mb-0">
              Het brutoloon omvat je basissalaris plus eventuele premies, overuren en andere vergoedingen. Dit is het startpunt voor alle berekeningen.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">✅</span>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Wat is nettoloon?</h2>
            </div>
            <p className="text-gray-700 mb-3">
              Je <strong>nettoloon</strong> is het bedrag dat je effectief op je bankrekening gestort krijgt na alle wettelijke inhoudingen. Dit is het geld waar je echt over beschikt.
            </p>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-sm text-amber-900 font-medium mb-0">
                📊 Gemiddeld hou je als alleenstaande werknemer slechts <strong>55-65%</strong> van je brutoloon over als nettoloon.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Welke inhoudingen worden er gedaan?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Er zijn drie grote categorieën van inhoudingen die het verschil maken tussen bruto en netto:
        </p>

        <div className="space-y-6 mb-10">
          <div className="bg-blue-50 rounded-xl border-l-4 border-blue-500 p-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏛️</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. RSZ-bijdrage (Rijkssociale Zekerheid) — 13,07%</h3>
                <p className="text-gray-700 mb-3">
                  De eerste en meest zichtbare inhouding is de <Link href="/rsz-bijdrage" className="text-teal-700 font-medium hover:underline">RSZ-bijdrage</Link>. Als werknemer betaal je 13,07% van je brutoloon aan de sociale zekerheid. Dit bedrag gaat naar het financieren van het Belgische socialezekerheidsstelsel: pensioenen, gezondheidszorg, werkloosheidsuitkeringen, kinderbijslag en meer.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-medium text-gray-900 mb-1">💡 Voorbeeld:</p>
                  <p className="text-sm text-gray-700 mb-0">Bij een brutoloon van €3.000 per maand betaal je €3.000 × 13,07% = <strong>€392,10</strong> aan RSZ-bijdragen.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl border-l-4 border-red-500 p-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🧾</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Bedrijfsvoorheffing (belastingen)</h3>
                <p className="text-gray-700 mb-3">
                  Na aftrek van de RSZ-bijdrage wordt op het resterende bedrag (je belastbaar inkomen) <Link href="/bedrijfsvoorheffing" className="text-teal-700 font-medium hover:underline">bedrijfsvoorheffing</Link> ingehouden. Dit is een voorschot op je jaarlijkse personenbelasting.
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Progressieve belastingschijven 2026:</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between"><span>€0 — €15.200:</span><strong className="text-red-700">25%</strong></div>
                    <div className="flex justify-between"><span>€15.200 — €26.830:</span><strong className="text-red-700">40%</strong></div>
                    <div className="flex justify-between"><span>€26.830 — €46.440:</span><strong className="text-red-700">45%</strong></div>
                    <div className="flex justify-between"><span>Boven €46.440:</span><strong className="text-red-700">50%</strong></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 mb-0">
                    ⚠️ <strong>Belangrijk:</strong> Niet je hele inkomen wordt belast aan het hoogste tarief. Alleen het gedeelte boven elke drempel wordt aan het hogere tarief belast. Bovendien geniet iedereen van een belastingvrije som van €10.160/jaar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl border-l-4 border-purple-500 p-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">📊</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Bijzondere bijdrage sociale zekerheid</h3>
                <p className="text-gray-700 mb-0">
                  Als derde inhouding is er de bijzondere bijdrage voor de sociale zekerheid. Dit is een relatief klein bedrag dat kwartaal per kwartaal geïnd wordt en afhangt van je gezinsinkomen. Voor een alleenstaande met een modaal loon bedraagt dit ongeveer <strong>€50-65 per maand</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Voorbeeldberekening: €3.000 bruto naar netto</h2>
        <p className="text-lg text-gray-600 mb-6">Laten we een concrete berekening maken voor een alleenstaande werknemer zonder kinderen met een brutoloon van €3.000 per maand:</p>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-6">
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-teal-700">
                <tr>
                  <th className="text-left text-white font-semibold px-6 py-4">Omschrijving</th>
                  <th className="text-right text-white font-semibold px-6 py-4">Bedrag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Bruto maandloon</td>
                  <td className="px-6 py-3 text-right font-medium text-gray-900">€ 3.000,00</td>
                </tr>
                <tr className="bg-blue-50 hover:bg-blue-100">
                  <td className="px-6 py-3 text-gray-700">RSZ-bijdrage (13,07%)</td>
                  <td className="px-6 py-3 text-right font-medium text-blue-700">- € 392,10</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Belastbaar inkomen</td>
                  <td className="px-6 py-3 text-right font-medium text-gray-900">€ 2.607,90</td>
                </tr>
                <tr className="bg-red-50 hover:bg-red-100">
                  <td className="px-6 py-3 text-gray-700">Bedrijfsvoorheffing</td>
                  <td className="px-6 py-3 text-right font-medium text-red-700">- € 504,82</td>
                </tr>
                <tr className="bg-purple-50 hover:bg-purple-100">
                  <td className="px-6 py-3 text-gray-700">Bijzondere bijdrage SZ</td>
                  <td className="px-6 py-3 text-right font-medium text-purple-700">- € 61,55</td>
                </tr>
                <tr className="bg-teal-100 border-t-4 border-teal-700">
                  <td className="px-6 py-4 text-lg font-bold text-gray-900">Netto maandloon</td>
                  <td className="px-6 py-4 text-right text-xl font-bold text-teal-800">€ 2.041,53</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between bg-teal-50 rounded-lg p-4 border border-teal-200">
            <p className="text-gray-800 font-medium mb-0">Van de €3.000 bruto hou je <strong>€2.042 netto</strong> over — dat is <strong>68%</strong> van je brutoloon.</p>
            <Link href="/loon/3000" className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-800 transition-colors whitespace-nowrap">
              Bereken nu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Factoren die je netto loon beïnvloeden</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💑</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Burgerlijke staat</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Je burgerlijke staat heeft invloed op je bedrijfsvoorheffing. Gehuwden of wettelijk samenwonenden met één inkomen genieten van een hogere belastingvrije som door het huwelijksquotiënt. Dit kan je nettoloon merkbaar verhogen.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">👶</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Kinderen ten laste</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Elk kind ten laste verhoogt je belastingvrije som, waardoor je minder bedrijfsvoorheffing betaalt.
            </p>
            <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
              <p className="text-xs text-teal-900 mb-0">
                <strong>1 kind:</strong> +€1.850 | <strong>2 kinderen:</strong> +€4.760 | <strong>3 kinderen:</strong> +€8.000 | <strong>4 kinderen:</strong> +€9.160
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Werkbonus</h3>
            </div>
            <p className="text-gray-700 mb-0">
              Werknemers met een laag brutoloon (tot circa €3.144 per maand) komen in aanmerking voor de <Link href="/werkbonus" className="text-teal-700 font-medium hover:underline">werkbonus</Link>. Dit is een vermindering van de persoonlijke RSZ-bijdrage die je nettoloon verhoogt. Het maximum voordeel bedraagt ongeveer <strong>€230 per maand</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎁</span>
              <h3 className="text-xl font-bold text-gray-900 m-0">Extralegale voordelen</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Veel werkgevers bieden extralegale voordelen aan die fiscaal voordeliger zijn dan een gewone loonsverhoging:
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-0 pl-0 list-none">
              <li className="flex items-start gap-2"><span className="text-teal-600">✓</span><span><strong>Maaltijdcheques</strong> — tot €8/werkdag</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600">✓</span><span><strong>Bedrijfswagen</strong> — voordelig belast</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600">✓</span><span><strong>Groepsverzekering</strong> — pensioenvoordeel</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600">✓</span><span><strong>Ecocheques</strong> — €250/jaar vrijgesteld</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600">✓</span><span><strong>Thuiswerk</strong> — €148,73/maand belastingvrij</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">België vergeleken met buurlanden</h2>
        <p className="text-lg text-gray-600 mb-6">
          België staat bekend als één van de landen met de hoogste belastingdruk op arbeid in de wereld. Volgens de OESO betaal je in België gemiddeld meer belastingen en sociale bijdragen dan in de meeste andere ontwikkelde landen:
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md mb-6">
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇧🇪</span>
                  <span className="font-bold text-gray-900">België</span>
                </div>
                <span className="text-2xl font-bold text-red-700">52%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇩🇪</span>
                  <span className="font-semibold text-gray-900">Duitsland</span>
                </div>
                <span className="text-xl font-bold text-orange-600">49%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-full rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇫🇷</span>
                  <span className="font-semibold text-gray-900">Frankrijk</span>
                </div>
                <span className="text-xl font-bold text-amber-600">47%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇱🇺</span>
                  <span className="font-semibold text-gray-900">Luxemburg</span>
                </div>
                <span className="text-xl font-bold text-green-600">38%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full" style={{width: '73%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇳🇱</span>
                  <span className="font-semibold text-gray-900">Nederland</span>
                </div>
                <span className="text-xl font-bold text-teal-600">37%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-400 to-teal-500 h-full rounded-full" style={{width: '71%'}}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-900 font-medium mb-0">
              ℹ️ <strong>Balans:</strong> Daar staat tegenover dat België een uitgebreid sociaal vangnet biedt: uitstekende gezondheidszorg, werkloosheidsuitkeringen zonder tijdslimiet, en automatische loonindexatie.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hoe kun je je nettoloon verhogen?</h2>
        <p className="text-lg text-gray-600 mb-6">Hoewel je de belastingtarieven niet zelf kunt veranderen, zijn er wel manieren om je nettoloon te optimaliseren:</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">💼</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Onderhandel over extralegale voordelen</h3>
                <p className="text-sm text-gray-700 mb-0">Maaltijdcheques, bedrijfswagen en een groepsverzekering zijn fiscaal voordeliger dan een gewone loonsverhoging.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">📄</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Controleer je loonbrief</h3>
                <p className="text-sm text-gray-700 mb-0">Zorg dat je burgerlijke staat en het aantal kinderen ten laste correct geregistreerd staan bij je werkgever.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">🧾</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Benut fiscale aftrekposten</h3>
                <p className="text-sm text-gray-700 mb-0">Kinderopvang, dienstencheques, pensioensparen en hypotheekleningen geven recht op belastingverminderingen.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">🎛️</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Overweeg een cafetariaplan</h3>
                <p className="text-sm text-gray-700 mb-0">Steeds meer werkgevers bieden flexibele verloningssystemen aan waarbij je zelf kiest hoe je loon samengesteld wordt.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Bereken je eigen nettoloon</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Wil je precies weten hoeveel je netto overhoudt? Gebruik onze gratis calculator voor een gedetailleerde berekening op maat van jouw situatie.
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <Link 
              href="/calculator" 
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-lg text-lg"
            >
              <span>Start Calculator</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-teal-600 pt-6">
            <p className="text-center text-teal-100 text-sm font-medium mb-4">Of bekijk direct populaire berekeningen:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
              {[2000, 2500, 3000, 4000, 5000].map((amount) => (
                <Link
                  key={amount}
                  href={`/loon/${amount}`}
                  className="bg-teal-800/50 hover:bg-teal-800 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors border border-teal-600"
                >
                  €{amount.toLocaleString('nl-BE')}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
