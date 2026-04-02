'use client';

import { useState } from 'react';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'civic', label: 'Civic' },
  { key: 'heritage', label: 'Heritage' },
  { key: 'interior', label: 'Interior' },
  { key: 'masterplanning', label: 'Planning' },
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
    sector: 'civic',
    title: 'Harare Civic Centre Renovation',
    description:
      'A comprehensive restoration and adaptive reuse of a 1960s civic building, integrating modern accessibility requirements while preserving heritage character.',
    location: 'Harare',
    year: '2023',
    badge: 'Civic',
    award: true,
    featured: true,
    img: '/img/banner1.png',
    imgAlt: 'Harare Civic Centre Renovation',
  },
  {
    id: 2,
    sector: 'residential',
    title: 'Borrowdale Private Residence',
    description:
      'A contemporary family home designed to respond to the topography of the site, with passive cooling strategies and natural material palette.',
    location: 'Harare',
    year: '2022',
    badge: 'Residential',
    img: '/img/banner2.png',
    imgAlt: 'Borrowdale Private Residence',
  },
  {
    id: 3,
    sector: 'commercial',
    title: "Sam Levy's Village Retail Precinct",
    description:
      'Retail precinct expansion and public realm upgrade, improving pedestrian connectivity and tenant experience across 4,200 m².',
    location: 'Harare',
    year: '2021',
    badge: 'Commercial',
    img: '/img/banner3.png',
    imgAlt: "Sam Levy's Village Retail Precinct",
  },
  {
    id: 4,
    sector: 'heritage',
    title: 'Bulawayo Heritage Conservation',
    description:
      "Structural and façade conservation of a Grade II listed colonial building in Bulawayo's historic CBD, with sensitive new insertions.",
    location: 'Bulawayo',
    year: '2022',
    badge: 'Heritage',
    award: true,
    img: '/img/mission.webp',
    imgAlt: 'Bulawayo Colonial Heritage Conservation',
  },
  {
    id: 5,
    sector: 'interior',
    title: 'Meikles Hotel Interior Refresh',
    description:
      "Comprehensive interior redesign of the landmark five-star hotel's public areas, balancing contemporary elegance with historical identity.",
    location: 'Harare',
    year: '2020',
    badge: 'Interior Design',
    img: '/img/principles (1).webp',
    imgAlt: 'Meikles Hotel Interior Refresh',
  },
  {
    id: 6,
    sector: 'civic',
    title: 'National Sports Stadium Upgrade',
    description:
      'Phased upgrade programme for spectator facilities, structural improvements, and new ancillary buildings within the national stadium precinct.',
    location: 'Harare',
    year: '2019',
    badge: 'Civic',
    img: '/img/banner1.png',
    imgAlt: 'National Sports Stadium Upgrade',
  },
  {
    id: 7,
    sector: 'masterplanning',
    title: 'Ruwa Township Masterplan',
    description:
      'Urban design framework for a 250-hectare mixed-use township extension, integrating green corridors, transit nodes, and affordable housing clusters.',
    location: 'Ruwa',
    year: '2023',
    badge: 'Masterplanning',
    img: '/img/banner2.png',
    imgAlt: 'Ruwa Township Masterplan',
  },
  {
    id: 8,
    sector: 'residential',
    title: 'Gunhill Apartment Complex',
    description:
      'A 48-unit medium-density residential development with communal amenities, designed around a landscaped central courtyard.',
    location: 'Harare',
    year: '2021',
    badge: 'Residential',
    img: '/img/banner3.png',
    imgAlt: 'Gunhill Apartments',
  },
  {
    id: 9,
    sector: 'commercial',
    title: 'Eastgate Office Tower',
    description:
      'A 12-storey mixed-use commercial tower in Harare CBD, featuring flexible floor plates, sky gardens, and ground-level retail activation.',
    location: 'Harare',
    year: '2020',
    badge: 'Commercial',
    img: '/img/mission.webp',
    imgAlt: 'Eastgate Commercial Tower',
  },
  {
    id: 10,
    sector: 'interior',
    title: 'Rainbow Towers Conference Suite',
    description:
      "Interior design and fitout of the hotel's 2,000 m² international conference centre, accommodating 1,200 delegates across multiple configurations.",
    location: 'Harare',
    year: '2019',
    badge: 'Interior Design',
    img: '/img/principles (1).webp',
    imgAlt: 'Rainbow Towers Interior',
  },
  {
    id: 11,
    sector: 'heritage',
    title: 'Matobo Hills Cultural Centre',
    description:
      'A new visitor and interpretation centre at the UNESCO World Heritage Site, designed using local stone and timber in response to the ancient landscape.',
    location: 'Matobo',
    year: '2018',
    badge: 'Heritage',
    award: true,
    img: '/img/banner1.png',
    imgAlt: 'Matobo Hills Cultural Centre',
  },
  {
    id: 12,
    sector: 'civic',
    title: 'Chitungwiza Community Library',
    description:
      'A community library and learning hub for 80,000 residents, delivered under a public-private partnership with an emphasis on natural daylighting and flexible spaces.',
    location: 'Chitungwiza',
    year: '2022',
    badge: 'Civic',
    img: '/img/banner2.png',
    imgAlt: 'Chitungwiza Community Library',
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.sector === active);
  const activeLabel = FILTERS.find((f) => f.key === active)?.label ?? '';

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal">
            <span className="label mb-6 block">Our Work</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              Built Work &amp;<br />
              <em style={{ color: 'var(--blue)' }}>Projects.</em>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              Over a decade of architectural practice across Zimbabwe — from residential retreats to
              civic infrastructure.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FILTER BAR ─────────────────────────────────── */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 overflow-x-auto py-2">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`filter-btn${active === key ? ' active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ───────────────────────────────── */}
      <section className="py-16" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-8">
            {active === 'all'
              ? 'Showing all projects'
              : `Showing ${visible.length} result${visible.length !== 1 ? 's' : ''} for ${activeLabel}`}
          </p>

          {visible.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-600 text-sm">No projects in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((project) => (
                <div
                  key={project.id}
                  className={`project-card${project.featured ? ' featured' : ''}`}
                  data-sector={project.sector}
                >
                  <div className="project-img-wrap">
                    <img src={project.img} alt={project.imgAlt} loading="lazy" />
                    <div className="project-overlay">
                      <span className="text-white text-xs font-medium">View Project →</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-[#0A0A0A] font-semibold text-base leading-snug">
                        {project.title}
                      </h3>
                      <span className="sector-badge shrink-0">{project.badge}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">
                        {project.location} · {project.year}
                      </span>
                      {project.award && (
                        <span className="text-blue-400 text-xs font-medium">Award Winner</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────── */}
      <div
        style={{ background: 'var(--blue)', position: 'relative', overflow: 'hidden' }}
        className="py-20"
      >
        <div className="grid-pattern absolute inset-0 opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="label" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Commission a Project
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 leading-snug">
                Have a project in mind?
                <br />
                <em>Let&apos;s discuss it.</em>
              </h2>
              <p className="text-blue-100 text-sm mt-4 max-w-lg leading-relaxed opacity-80">
                Initial consultations are free of charge and without obligation. We work across all
                sectors, scales, and budgets.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a href="/contact" className="btn-white">
                Start Your Project
              </a>
              <a
                href="/practice"
                className="btn-outline"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                About the Practice
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
