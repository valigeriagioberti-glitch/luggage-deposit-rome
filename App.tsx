import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LanguageProvider } from './LanguageContext';
import { SEO } from './components/SEO';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

// Lazy load below-the-fold components
const Stats = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const Location = lazy(() => import('./components/Location').then(m => ({ default: m.Location })));
const Reviews = lazy(() => import('./components/Reviews').then(m => ({ default: m.Reviews })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-20 bg-gray-50 flex items-center justify-center">Loading...</div>}>
            <Stats />
            <Services />
            <Pricing />
            <Location />
            <Reviews />
            <FAQ />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;