import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { JOTFORM_ID } from '../constants';

export const BookingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Secure your spot</h1>
            <p className="text-gray-600">
              Complete the form below to book your storage. Payment is made at the store.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[800px]">
             <iframe
               id="JotFormIFrame-230000000000000"
               title="Luggage Storage Booking"
               src={`https://form.jotform.com/${JOTFORM_ID}`}
               allow="geolocation; microphone; camera"
               className="w-full h-full border-none"
               scrolling="yes"
             >
             </iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};