import type { Metadata } from 'next';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Sectors',
  description:
    'Expertise sectors of Studio5 Architects. Residential, Commercial, Civic, Healthcare, and Heritage design excellence in Zimbabwe.',
};

const SECTORS = [
  {
    title: 'Residential',
    description:
      "Bespoke private homes and multi-unit developments designed for Zimbabwe's climate and lifestyle.",
    filter: 'residential',
  },
  {
    title: 'Commercial & Office',
    description:
      'Workplaces that inspire productivity and represent corporate identity with technical rigour.',
    filter: 'commercial',
  },
  {
    title: 'Civic & Institutional',
    description:
      'Public buildings that serve communities with dignity — from government offices to embassies.',
    filter: 'civic',
  },
  {
    title: 'Healthcare',
    description:
      'Complex clinical environments designed for patient safety, staff efficiency, and wellbeing.',
    filter: 'healthcare',
  },
  {
    title: 'Heritage',
    description:
      "Sensitive restoration and adaptive reuse of Zimbabwe's culturally significant built history.",
    filter: 'heritage',
  },
  {
    title: 'Masterplanning',
    description:
      'Strategic urban frameworks and site masterplans that unlock value and guide long-term growth.',
    filter: 'masterplanning',
  },
  {
    title: 'Community',
    description:
      'Designing inclusive spaces that foster connection and support community growth across Zimbabwe.',
    filter: 'community',
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: '120px' }} className="pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-end relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="rule" />
              <span className="label">Sectors &amp; Expertise</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#0A0A0A] leading-tight mb-8">
              Every Site Has Its <br />
              <em style={{ color: 'var(--blue)' }}>Own Narrative.</em>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              We bring specialized knowledge to every building typology. From complex institutional
              infrastructure to climate-responsive residential architecture, our methodology remains rooted in context.
            </p>
          </div>
          <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
             <Image src="/img/hero-1.png" alt="Residential sector focus" fill className="object-cover" />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── SECTORS GRID ─────────────────────────────────── */}
      <section className="py-24 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {SECTORS.map(({ title, description, filter }, i) => (
              <div
                key={filter}
                className="bg-white p-12 hover:bg-gray-50 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none scale-110 group-hover:scale-100 duration-1000">
                   <Image src={i % 2 === 0 ? '/img/banner1.png' : '/img/banner3.png'} alt="Sector Context" fill className="object-cover grayscale" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-10">{description}</p>
                  <a
                    href={`/portfolio?sector=${filter}`}
                    className="text-blue-600 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-blue-600/20 hover:border-blue-600 transition-all pb-1"
                  >
                    View Case Studies →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Sector-Specific Exploration?"
        subtitle="Our depth of experience across diverse sectors means we bring genuinely applicable precedent knowledge to every commission."
        ctaHref="/contact"
        ctaText="Consult Our Specialists"
      />
    </>
  );
}
