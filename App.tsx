import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './LanguageContext';
import { SEO } from './components/SEO';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SEO />
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/it" element={<Home />} />
            <Route path="/es" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;