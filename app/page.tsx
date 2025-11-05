'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContent from './home/HomeContent';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Header route="home" setRoute={() => {}} />

      <main className="pt-6">
        <HomeContent setRoute={() => {}} />
      </main>
      <Footer />
    </div>
  );
}
