import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacybeleid — Loonberekening.be',
  description: 'Privacybeleid van Loonberekening.be. Hoe wij omgaan met je gegevens en privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacybeleid' }]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacybeleid</h1>

      <article className="prose prose-lg max-w-none">
        <p className="text-gray-500 text-sm">Laatst bijgewerkt: maart 2026</p>

        <h2 className="text-2xl font-bold text-gray-900">1. Inleiding</h2>
        <p>
          Loonberekening.be respecteert je privacy. Dit privacybeleid legt uit welke gegevens we verzamelen, 
          hoe we ze gebruiken en welke rechten je hebt conform de <strong>Algemene Verordening Gegevensbescherming (AVG/GDPR)</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">2. Welke gegevens verzamelen we?</h2>
        <p>
          <strong>Kort antwoord: zo goed als niets.</strong> Loonberekening.be slaat geen persoonlijke gegevens op. 
          De loonberekeningen worden volledig in je browser uitgevoerd — er worden geen bedragen naar onze servers verstuurd.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">3. Cookies</h2>
        <p>
          Wij gebruiken enkel <strong>functionele cookies</strong> die nodig zijn voor de werking van de website. 
          Daarnaast kunnen er analytische cookies worden geplaatst (via Google Analytics) om het gebruik van de 
          website te meten. Deze gegevens zijn geanonimiseerd en niet herleidbaar tot individuele bezoekers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">4. Google AdSense</h2>
        <p>
          Op onze website worden advertenties getoond via Google AdSense. Google kan cookies plaatsen om 
          relevante advertenties te tonen op basis van je surfgedrag. Je kunt je advertentievoorkeuren beheren 
          via <a href="https://adssettings.google.com" className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">Google Ads-instellingen</a>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">5. Derden</h2>
        <p>
          We verkopen of delen geen persoonlijke gegevens met derden. De enige externe diensten die we 
          gebruiken zijn Google Analytics (websitestatistieken) en Google AdSense (advertenties).
        </p>

        <h2 className="text-2xl font-bold text-gray-900">6. Je rechten</h2>
        <p>Conform de AVG heb je recht op:</p>
        <ul>
          <li><strong>Inzage</strong> — welke gegevens we over je hebben (spoiler: geen)</li>
          <li><strong>Rectificatie</strong> — correctie van onjuiste gegevens</li>
          <li><strong>Verwijdering</strong> — het wissen van je gegevens</li>
          <li><strong>Bezwaar</strong> — tegen de verwerking van je gegevens</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
        <p>
          Heb je vragen over dit privacybeleid? Neem contact op via <a href="https://hazier.be" className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">hazier.be</a>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">8. Wijzigingen</h2>
        <p>
          Dit privacybeleid kan periodiek worden bijgewerkt. De meest recente versie is altijd beschikbaar op deze pagina.
        </p>
      </article>
    </div>
  );
}
