'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'civic', label: 'Civic & Institutional' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'heritage', label: 'Heritage & Conservation' },
  { key: 'masterplanning', label: 'Urban & Planning' },
];

interface Project {
  id: number;
  sector: string;
  title: string;
  description: string;
  location: string;
  year: string;
  badge?: string;
  award?: boolean;
  featured?: boolean;
  img: string;
  imgAlt: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    sector: 'commercial',
    title: 'Gweru Mall Expansion',
    description: 'A major retail expansion providing 12,000 m² of new retail space, anchor tenants, and a reimagined public food court that serves as a community hub.',
    location: 'Gweru',
    year: '2023',
    badge: 'Retail',
    featured: true,
    img: '/images/gweru-mall (1).webp',
    imgAlt: 'Gweru Mall Expansion Architecture',
  },
  {
    id: 2,
    sector: 'commercial',
    title: 'Cell Insurance Headquarters',
    description: 'A contemporary corporate office building designed with a high-performance glass facade and open-plan workspaces to foster collaboration.',
    location: 'Harare',
    year: '2022',
    badge: 'Office',
    award: true,
    img: '/images/cell-insurance (1).webp',
    imgAlt: 'Cell Insurance Headquarters Exterior',
  },
  {
    id: 3,
    sector: 'commercial',
    title: 'Glow Petroleum Precinct',
    description: 'Strategic retail and industrial hub designed for high-volume logistics and customer experience in Chitungwiza.',
    location: 'Chitungwiza',
    year: '2021',
    badge: 'Industrial',
    img: '/images/glow-petroleum (1).webp',
    imgAlt: 'Glow Petroleum Precinct Chitungwiza',
  },
  {
    id: 4,
    sector: 'commercial',
    title: 'Hyundai Showroom',
    description: 'A minimalist, high-tech automotive showroom that emphasizes transparency and clean lines to showcase premium vehicles.',
    location: 'Harare',
    year: '2023',
    badge: 'Retail',
    img: '/images/projects/hyndai/ezgif-frame-001.webp',
    imgAlt: 'Hyundai Showroom Harare',
  },
  {
    id: 5,
    sector: 'civic',
    title: 'National Sports Stadium Upgrade',
    description: 'Phased upgrade programme for spectator facilities and structural improvements.',
    location: 'Harare',
    year: '2019',
    badge: 'Civic',
    img: '/img/banner1.png',
    imgAlt: 'National Sports Stadium Upgrade',
  },
  {
    id: 6,
    sector: 'masterplanning',
    title: 'Ruwa Township Masterplan',
    description: 'Urban design framework for a 250-hectare mixed-use township extension.',
    location: 'Ruwa',
    year: '2023',
    badge: 'Masterplanning',
    img: '/img/banner2.png',
    imgAlt: 'Ruwa Township Masterplan',
  }
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const sectorParam = searchParams.get('sector');
  const [active, setActive] = useState('all');

  useEffect(() => {
    if (sectorParam && FILTERS.some(f => f.key === sectorParam)) {
      setActive(sectorParam);
    }
  }, [sectorParam]);

  const visible = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.sector === active);
  const activeLabel = FILTERS.find((f) => f.key === active)?.label ?? '';

  return (
    <>
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <div className="reveal">
            <span className="label mb-6 block">Our Work</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              Built Work &amp;<br />
              <em className="text-blue-600 italic">Projects.</em>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Over a decade of architectural practice across Zimbabwe — from residential retreats to
              civic infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 overflow-x-auto py-4 no-scrollbar">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`filter-btn whitespace-nowrap ${active === key ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-10 font-bold border-l-2 border-blue-600 pl-4">
            {active === 'all'
              ? 'Showing full body of work'
              : `Sector: ${activeLabel} (${visible.length})`}
          </p>

          {visible.length === 0 ? (
            <div className="text-center py-32 bg-gray-50 border border-dashed border-gray-200">
              <p className="text-gray-400 font-serif text-xl italic">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="project-card group reveal"
                >
                  <div className="project-img-wrap aspect-[4/5] bg-gray-100 overflow-hidden relative">
                    <img 
                       src={project.img} 
                       alt={project.imgAlt} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-white text-[10px] tracking-[0.3em] font-bold uppercase border border-white/30 px-6 py-3 backdrop-blur-sm">View Details</span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-[10px] tracking-widest uppercase font-bold text-blue-600 bg-blue-50 px-2 py-1">{project.badge}</span>
                       <span className="text-[10px] tracking-widest uppercase font-bold text-gray-300">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">{project.description}</p>
                    <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold text-gray-400 group-hover:text-blue-900 transition-colors">
                       <span>{project.location}, Zimbabwe</span>
                       <span className="w-4 h-px bg-gray-200" />
                       <span>Built Excellence</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div style={{ background: '#1B4F8A' }} className="py-24 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative text-center lg:text-left flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-2xl">
            <span className="label text-blue-200">Partnership</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Ready to create something <em className="italic text-blue-300 underline decoration-1 underline-offset-8">extraordinary?</em>
            </h2>
            <p className="text-blue-100 text-lg opacity-80 leading-relaxed">
              We collaborate with visionary clients to deliver buildings that aren't just seen, but felt. 
              Let's discuss how we can bring technical rigour to your vision.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 shrink-0">
            <Link href="/contact" className="btn-white">Start Your Project</Link>
            <Link href="/practice" className="btn-outline border-white/30 text-white hover:bg-white/10">About Studio5</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="pt-60 pb-40 text-center font-serif italic text-gray-400">Loading Portfolio...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
