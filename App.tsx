import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Location } from './components/Location';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Pricing />
          <Location />
          <Reviews />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;