import React, { Suspense, lazy } from 'react';
import { Hero } from './Hero';

// Lazy load below-the-fold components
const Stats = lazy(() => import('./Stats').then(m => ({ default: m.Stats })));
const Services = lazy(() => import('./Services').then(m => ({ default: m.Services })));
const Pricing = lazy(() => import('./Pricing').then(m => ({ default: m.Pricing })));
const Location = lazy(() => import('./Location').then(m => ({ default: m.Location })));
const Reviews = lazy(() => import('./Reviews').then(m => ({ default: m.Reviews })));
const FAQ = lazy(() => import('./FAQ').then(m => ({ default: m.FAQ })));

export const Home: React.FC = () => {
  return (
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
  );
};
