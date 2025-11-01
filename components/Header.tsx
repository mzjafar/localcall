// File: components/Header.tsx
import React from 'react';

export default function Header({ route, setRoute }: { route: string; setRoute: (r: string) => void }) {
  return (
    <header className="backdrop-blur-sm bg-white/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" fill="currentColor" opacity=".12"/><path d="M8 12a4 4 0 108 0 4 4 0 00-8 0z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-700">LocalCall.in</div>
            <div className="text-xs text-blue-600">Service at Doorstep</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          <button className={`px-3 py-2 rounded-md ${route==='home' ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-50'}`} onClick={() => setRoute('home')}>Home</button>
          <button className={`px-3 py-2 rounded-md ${route==='categories' ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-50'}`} onClick={() => setRoute('categories')}>Categories</button>
          <button className={`px-3 py-2 rounded-md ${route==='register' ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-50'}`} onClick={() => setRoute('register')}>Register Your Service</button>
          <button className={`px-3 py-2 rounded-md ${route==='contact' ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-50'}`} onClick={() => setRoute('contact')}>Contact</button>
          <button className={`px-3 py-2 rounded-md ${route==='about' ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-50'}`} onClick={() => setRoute('about')}>About</button>
        </nav>

        <div className="md:hidden">
          <select value={route} onChange={(e) => setRoute(e.target.value)} className="rounded-md p-2 border">
            <option value="home">Home</option>
            <option value="categories">Categories</option>
            <option value="register">Register</option>
            <option value="contact">Contact</option>
            <option value="about">About</option>
          </select>
        </div>
      </div>
    </header>
  );
}

