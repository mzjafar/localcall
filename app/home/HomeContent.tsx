// File: app/home/HomeContent.tsx
import React from 'react';

export default function HomeContent({ setRoute }: { setRoute: (r: any) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="rounded-xl overflow-hidden shadow-lg bg-white">
        <div className="relative h-48 md:h-60 bg-gradient-to-r from-blue-50 to-white flex items-center">
          <div className="absolute left-4 md:left-8">
            <div className="text-xs text-blue-600">Advertisement</div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700">Partner Ad</h2>
            <p className="text-sm text-gray-600">Promote your business here</p>
            <a className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-md" href="#">Learn more</a>
          </div>
          <div className="absolute right-4 md:right-8 text-xs text-gray-400">1/1</div>
        </div>
      </div>

      <section className="mt-6">
        <h3 className="text-xl font-semibold text-blue-700">Quick Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          <button onClick={() => setRoute('categories')} className="flex flex-col items-center p-4 rounded-lg border hover:shadow-md bg-white">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">🚨</div>
            <div className="text-sm font-medium">Emergency</div>
          </button>
          <button onClick={() => setRoute('categories')} className="flex flex-col items-center p-4 rounded-lg border hover:shadow-md bg-white">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">🚕</div>
            <div className="text-sm font-medium">Taxi</div>
          </button>
        </div>
      </section>

    </div>
  );
}

