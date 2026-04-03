import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './LanguageContext';
import { SEO } from './components/SEO';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SEO />
        <div className="min-h-screen bg-background font-sans text-gray-900 selection:bg-primary/20 selection:text-primary">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;