// File: components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-t from-gray-50 to-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg text-blue-700">LocalCall.in</h3>
          <p className="text-sm text-gray-600 mt-2">Help. Fast. Nearby.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">Email: <a href="mailto:info@localcall.in" className="text-blue-600">info@localcall.in</a></p>
          <p className="text-sm">WhatsApp: <a href="https://wa.me/918086963769" className="text-blue-600">+91 8086963769</a></p>
        </div>
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li><a href="/about" className="text-blue-600">About</a></li>
            <li><a href="/terms" className="text-blue-600">Terms</a></li>
            <li><a href="/contact" className="text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} LocalCall.in · All rights reserved</div>
    </footer>
  );
}
