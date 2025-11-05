// File: components/Banner.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/banner1.jpg',
  '/banner2.jpg',
  '/banner3.jpg',
  '/banner4.jpg'
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
      {/* background placeholder */}
      <div className="absolute inset-0 bg-gray-100" />

      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={i !== index}
        >
          {/* Use next/image with fill — parent must be position:relative and have height */}
          <Image
            src={src}
            alt={`Banner ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ objectFit: 'cover' }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* small pager / count */}
      <div className="absolute bottom-3 right-4 bg-black/40 text-white text-xs px-2 py-1 rounded">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
