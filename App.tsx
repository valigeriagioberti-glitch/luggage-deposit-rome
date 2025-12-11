import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Booking } from './components/Booking';
import { Location } from './components/Location';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <Booking />
        <Location />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
