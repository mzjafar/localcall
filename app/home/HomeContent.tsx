'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';





export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Top Header */}
      <Header route="home" setRoute={() => {}} />

      {/* Main Content */}
      <main className="p-4">
        {/* 🖼️ Rotating Image Banner */}
        <Banner />

        {/* 💡 Home Content Section */}
        <HomeContent setRoute={() => {}} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ✅ Keep HomeContent as a regular (non-default) export
export function HomeContent({ setRoute }: { setRoute: (r: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Advertisement Block */}
      <div className="rounded-xl overflow-hidden shadow-lg bg-white">
        <div className="relative h-48 md:h-60 bg-gradient-to-r from-blue-50 to-white flex items-center">
          <div className="absolute left-4 md:left-8">
            <div className="text-xs text-blue-600">Advertisement</div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700">Partner Ad</h2>
            <p className="text-sm text-gray-600">Promote your business here</p>
            <a
              className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              href="#"
            >
              Learn more
            </a>
          </div>
          <div className="absolute right-4 md:right-8 text-xs text-gray-400">1/1</div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="mt-6">
        <h3 className="text-xl font-semibold text-blue-700">Quick Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          <button
            onClick={() => setRoute('categories')}
            className="flex flex-col items-center p-4 rounded-lg border hover:shadow-md bg-white"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
              🚨
            </div>
            <div className="text-sm font-medium">Emergency</div>
          </button>

          <button
            onClick={() => setRoute('categories')}
            className="flex flex-col items-center p-4 rounded-lg border hover:shadow-md bg-white"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
              🚕
            </div>
            <div className="text-sm font-medium">Taxi</div>
          </button>
        </div>
      </section>
    </div>
  );
}
