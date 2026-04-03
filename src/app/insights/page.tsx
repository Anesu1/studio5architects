import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Insights — Architectural Thinking on the Zimbabwean Built Environment',
  description:
    'Research, material investigation, and architectural reflections from Studio5. Exploring climate-responsive design and urban development in Harare and Bulawayo.',
};

export default function InsightsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: '120px' }} className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-7">
            <span className="rule" />
            <span className="label">Thinking &amp; Journal</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#0A0A0A] leading-tight mb-8">
            Insights into the
            <br />
            Built <em style={{ color: 'var(--blue)' }}>Environment.</em>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            A collection of stories, research, and reflections from our studio. We explore the
            intersection of architectural practice, local materials, and the evolving urban landscape
            of Zimbabwe.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURED ARTICLE ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-none shadow-sm"
              style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}
            >
              <img
                src="/img/banner1.png"
                alt="Featured Article"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
                <span className="label text-blue-600 mb-6 block border-b-2 border-blue-100/50 pb-2">Sustainability Research</span>
              <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-6 leading-tight">
                Thermal Mass &amp; The Highveld: Rethinking Passive Cooling in Harare.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                How traditional building methods can inform modern climate-responsive architecture.
                We investigate the performance of local brickwork and stone in managing the diurnal
                temperature swings of the Zimbabwean plateau.
              </p>
              <a href="#" className="btn-outline">
                Read the Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ────────────────────────────────── */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Article 1 - Case Study */}
            <article className="insight-card border border-gray-100 bg-white shadow-soft group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <Link href="/insights/thermal-mass">
                <div className="insight-img-wrap relative aspect-video overflow-hidden">
                  <Image src="/img/banner1.png" alt="Case Study Details" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <span className="label text-blue-600 mb-6 block border-b border-blue-100/50 pb-2">Case Study Narrative</span>
                  <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                    The Multi-Generational Home: Adaptability in Borrowdale.
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                     Lessons learned from our recent residential commission on designing for three 
                     generations under one roof while maintaining thermal and acoustic privacy.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-gray-400 text-[10px] tracking-widest uppercase font-bold">
                      March 2026
                    </span>
                    <span className="text-blue-600 text-[10px] tracking-widest uppercase font-bold hover:underline">
                      Read Case Study
                    </span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Article 2 - Client Guide */}
            <article className="insight-card border border-gray-100 bg-white shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <Link href="/insights/budgeting-guide">
                <div className="insight-img-wrap relative aspect-video overflow-hidden">
                  <Image src="/img/banner2.png" alt="Guide for clients" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <span className="label text-blue-600 mb-6 block border-b border-blue-100/50 pb-2">Guide for Clients</span>
                  <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                    Budgeting for Design: From Concept to Construction.
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    A comprehensive guide for first-time builders on how to allocate costs across 
                    design, statutory approvals, and construction management.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-gray-400 text-[10px] tracking-widest uppercase font-bold">
                      February 2026
                    </span>
                    <span className="text-blue-600 text-[10px] tracking-widest uppercase font-bold hover:underline">
                      View Guide
                    </span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Article 3 - Lessons Learned */}
            <article className="insight-card border border-gray-100 bg-white shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <Link href="/insights/adaptive-reuse">
                <div className="insight-img-wrap relative aspect-video overflow-hidden">
                  <Image src="/img/banner3.png" alt="Lessons learned" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <span className="label text-blue-600 mb-6 block border-b border-blue-100/50 pb-2">Lessons Learned</span>
                  <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                    Adaptive Reuse: Breathing New Life into Historic Fabric.
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    A retrospective on the Bulawayo Heritage project, exploring the technical 
                    challenges of modern insertions into colonial-era stonework.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-gray-400 text-[10px] tracking-widest uppercase font-bold">
                      January 2026
                    </span>
                    <span className="text-blue-600 text-[10px] tracking-widest uppercase font-bold hover:underline">
                      Read Story
                    </span>
                  </div>
                </div>
              </Link>
            </article>

          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Stay Informed on the Built Environment."
        subtitle="Subscribe to our quarterly journal for technical research and architectural reflections from the Zimbabwe plateau."
        ctaText="Subscribe to Journal"
      />
    </>
  );
}
