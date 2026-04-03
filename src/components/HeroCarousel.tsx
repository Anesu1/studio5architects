'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SLIDES = [
  { img: '/images/gweru-mall (1).webp', label: 'Commercial & Retail', title: 'Gweru Mall Expansion', sub: 'Gweru, Zimbabwe' },
  { img: '/images/cell-insurance (1).webp', label: 'Corporate Office', title: 'Cell Insurance Headquarters', sub: 'Harare, Zimbabwe' },
  { img: '/images/glow-petroleum (1).webp', label: 'Industrial & Retail', title: 'Glow Petroleum Precinct', sub: 'Chitungwiza, Zimbabwe' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${
            i === current ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-12'
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          
          {/* Caption Overlay */}
          <div className="absolute -bottom-10 -left-10 bg-black p-8 text-white hidden lg:block reveal">
            <p className="text-[10px] tracking-widest uppercase mb-2 text-blue-400 font-bold">{slide.label}</p>
            <p className="font-serif text-xl mb-1">{slide.title}</p>
            <p className="text-[10px] tracking-widest uppercase opacity-60">{slide.sub}</p>
          </div>
        </div>
      ))}

      {/* Nav Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-12 h-1 transition-all ${i === current ? 'bg-blue-600' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
