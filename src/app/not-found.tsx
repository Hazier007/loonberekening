import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Pagina niet gevonden</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Deze pagina bestaat niet of is verplaatst. Gebruik onze calculator of bekijk de kennisbank.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="bg-teal-700 text-white px-6 py-3 rounded-xl hover:bg-teal-800 font-medium">
            Naar homepage
          </Link>
          <Link href="/calculator" className="border border-teal-700 text-teal-700 px-6 py-3 rounded-xl hover:bg-teal-50 font-medium">
            Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
