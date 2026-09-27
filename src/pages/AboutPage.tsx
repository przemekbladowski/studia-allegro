import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Info, ExternalLink } from 'lucide-react';

const vercelUrl = import.meta.env.VITE_VERCEL_URL as string | undefined;
const vercelLink = vercelUrl ? `https://${vercelUrl}` : 'https://vercel.com';

export function AboutPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 max-w-3xl mx-auto w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Info className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
          <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl">Kim jesteśmy</h1>
        </div>

        <p className="text-gray-600 text-sm sm:text-base mb-4">
          Ten sklep internetowy powstał jako projekt studencki (WSB Merito),
          łączący aplikację React + Vite z automatyzacją testów Playwright.
        </p>

        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Autorzy: Rafał Bojarski, Przemysław Bladowski, Jakub Dampc, Kacper Rynkiewicz, Nikita Kostiuchok.
        </p>

        <a
          href={vercelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm sm:text-base hover:bg-gray-800 transition-colors"
        >
          Zobacz stronę na Vercel
          <ExternalLink className="w-4 h-4" />
        </a>
      </main>

      <Footer />
    </div>
  );
}
