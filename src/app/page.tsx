import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';

export const metadata: Metadata = {
  title: 'Studio5 Architects — Designing Spaces Where Humanity Can Thrive',
  description: 'Studio5 Architects is a registered architectural practice based in Harare, Zimbabwe. Architecture that expresses purpose.',
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" style={{ background: '#FFFFFF', paddingTop: '72px' }} className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: content */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="rule" />
                <span className="label">Harare, Zimbabwe · Est. 2014</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.04] text-[#0A0A0A] mb-8">
                Designing<br/>Spaces Where<br/>
                <em style={{ color: 'var(--blue)' }}>Humanity<br/>Can Thrive.</em>
              </h1>

              <p className="text-[#4B5563] text-base md:text-lg leading-relaxed max-w-lg mb-10">
                For over a decade, Studio5 Architects has shaped the built environment of Zimbabwe — 
                crafting buildings that are technically rigorous, contextually rooted, and designed with people at the centre of every decision.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-4 mb-14">
                <Link href="/services"
                   style={{ background: 'var(--blue)' }}
                   className="text-white text-[11px] tracking-widest uppercase font-semibold px-8 py-4 hover:opacity-90 transition-opacity">
                  Our Services
                </Link>
                <Link href="/about"
                   className="text-[#0A0A0A] text-[11px] tracking-widest uppercase font-medium px-8 py-4 hover:bg-black/5 transition-colors"
                   style={{ border: '1px solid rgba(0,0,0,0.15)' }}>
                  About the Practice
                </Link>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-6 pt-8 border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
                {[
                  'Registered — Architects Council of Zimbabwe',
                  'AIAZ Member Practice',
                  'ISO 9001 Quality Management'
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--blue)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                    </svg>
                    <span className="text-[#6B7280] text-xs font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image slider with geometric clip + stat overlay */}
            <div className="relative hidden lg:block">
              <div className="hero-img-wrap overflow-hidden h-[580px] relative">
                <HeroCarousel />
                {/* Blue tint overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(200deg, rgba(27,79,138,0.25) 0%, transparent 60%)', zIndex: 1 }}></div>
              </div>

              {/* Blue corner accent */}
              <div className="absolute -bottom-5 left-0 w-16 h-16 pointer-events-none" style={{ borderBottom: '3px solid var(--blue)', borderLeft: '3px solid var(--blue)' }}></div>

              {/* Floating stats card */}
              <div className="absolute bottom-10 -left-10 shadow-2xl z-10"
                   style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.09)', padding: '1.5rem 2rem' }}>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="font-serif text-4xl font-bold text-[#0A0A0A] leading-none">10<span style={{ color: 'var(--blue)' }}>+</span></p>
                    <p className="text-[#6B7280] text-[10px] tracking-widest uppercase mt-1.5 font-bold">Years</p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl font-bold text-[#0A0A0A] leading-none">180<span style={{ color: 'var(--blue)' }}>+</span></p>
                    <p className="text-[#6B7280] text-[10px] tracking-widest uppercase mt-1.5 font-bold">Projects</p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl font-bold text-[#0A0A0A] leading-none">12</p>
                    <p className="text-[#6B7280] text-[10px] tracking-widest uppercase mt-1.5 font-bold">Awards</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT MINI ── */}
      <section id="about-mini" style={{ background: 'var(--white)', color: 'var(--black)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-5">
              <span className="rule" style={{ background: 'var(--blue)' }} />
              <span className="label" style={{ color: 'var(--blue)' }}>About the Practice</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mt-4">
                Architecture That<br/>Expresses Purpose.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <p className="text-gray-500 text-base leading-relaxed mb-5">
                Studio5 Architects is a full-service practice built on the conviction that architecture is most powerful when it grows from its context — from the climate, the community, the brief, and the site. Founded in Harare, we bring together registered architects, designers, and project managers united by a singular commitment: buildings that serve people with intelligence and integrity.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We work at every scale — from intimate private residences to large civic and commercial commissions. Every project receives the same rigorous design thinking, precise technical execution, and close client collaboration.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {[
              { title: 'Attention to Detail', icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z', text: 'Every material, junction, and proportion is deliberate. The quality of a building is ultimately the sum of its smallest decisions.' },
              { title: 'Client-Centred', icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z', text: 'We listen before we design. Understanding the full picture allows us to deliver outcomes that genuinely exceed expectations.' },
              { title: 'Environmentally Responsible', icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418', text: 'Climate-responsive design and locally sourced materials are embedded in our process from day one.' },
              { title: 'Socially Responsible', icon: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 5.49Z', text: 'We measure our success in the lasting benefit we create for communities and emerging professionals.' }
            ].map((pillar, i) => (
              <div key={pillar.title} className={`p-8 group hover:bg-gray-50 transition-colors ${i < 3 ? 'border-r border-gray-200' : ''}`}>
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: 'var(--blue-dim)', border: '1px solid rgba(27,79,138,0.2)' }}>
                  <svg className="w-5 h-5" style={{ color: 'var(--blue)' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon}/>
                  </svg>
                </div>
                <h3 className="font-semibold text-sm mb-2">{pillar.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{ background: 'var(--blue)' }} className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
            {[
              { val: '10+', label: 'Years of Practice', sub: 'Est. Harare, 2014' },
              { val: '180+', label: 'Projects Completed', sub: 'Across all sectors' },
              { val: '12', label: 'Industry Awards', sub: 'National & regional' },
              { val: '18', label: 'Professional Staff', sub: 'Architects, designers, PMs' }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-5xl font-bold text-white leading-none mb-2">{stat.val}</p>
                <p className="text-blue-200 text-xs tracking-widest uppercase font-bold">{stat.label}</p>
                <p className="text-blue-300/60 text-xs mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: '#F4F5F7' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-5">
              <span className="rule" />
              <span className="label">What We Offer</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mt-4">
                Integrated<br/>Design Services
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6">
              <p className="text-[#374151] text-sm leading-relaxed">
                We offer a complete suite of architectural, design, and project management services — structured to give clients a single point of accountability from the earliest brief to occupation and beyond.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: 'Architectural Design', desc: 'From the first sketch to the final inspection, we guide every project through concept, design development, and delivery.', bullets: ['Residential, commercial & civic', 'Concept to construction drawings', 'Regulatory submissions & approvals'], icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z' },
              { title: 'Interior Architecture', desc: 'Interior spaces that balance function, beauty, and material honesty. We design environments that work intuitively.', bullets: ['Corporate & hospitality fitout', 'Private residential interiors', 'FF&E specification & sourcing'], icon: 'M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819' },
              { title: 'Heritage & Conservation', desc: 'Historic structures carry stories worth protecting. We work sensitively with existing fabric — respecting its character.', bullets: ['Conservation management plans', 'Adaptive reuse design', 'NMMZ approvals liaison'], icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z' },
              { title: 'Urban & Landscape Design', desc: 'Great buildings need great settings. We design the spaces between and around structures with the same care.', bullets: ['Site master planning', 'Public space & streetscape', 'Environmental impact assessment'], icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z' },
              { title: 'Feasibility & Advisory', desc: 'The most valuable investment before breaking ground. We help clients understand what a site can carry and what planning constraints apply.', bullets: ['Development potential assessment', 'Zoning & planning compliance', 'Preliminary cost estimates'], icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605' },
              { title: 'Project & Construction Management', desc: 'We act as your single point of accountability from procurement through to handover — managing contractors and controlling costs.', Special: true }
            ].map((s, i) => (
              s.Special ? (
                <div key={s.title} className="p-8 relative overflow-hidden group" style={{ background: 'var(--blue)' }}>
                  <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center mb-6 bg-white/10 border border-white/20">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-3 tracking-tight">{s.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed mb-10">{s.desc}</p>
                    <Link href="/practice" className="inline-flex items-center gap-2 text-white text-[11px] tracking-widest uppercase font-bold border-b border-white/40 pb-0.5 hover:border-white transition-colors">
                      See Our Process
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <div key={s.title} className="service-card p-8 group">
                  <div className="card-icon w-12 h-12 flex items-center justify-center mb-6" style={{ background: 'rgba(27,79,138,0.15)', border: '1px solid rgba(59,130,196,0.25)' }}>
                    <svg className="w-5 h-5" style={{ color: 'var(--blue-light)' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon}/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0A0A0A] mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.bullets?.map((b) => (
                      <li key={b} className="text-xs text-gray-500 flex gap-2"><span style={{ color: 'var(--blue)' }}>—</span> {b}</li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section id="sectors" style={{ background: 'var(--grey-bg)', color: 'var(--black)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="rule" style={{ background: 'var(--blue)' }} />
              <span className="label" style={{ color: 'var(--blue)' }}>Where We Work</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mt-4">
                Sectors &amp;<br/>Project Types
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6 flex items-end">
              <p className="text-gray-500 text-sm leading-relaxed">
                Studio5 operates across the full range of building typologies in Zimbabwe. Our depth of experience across diverse sectors means we bring genuinely applicable precedent knowledge to every commission.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: 'Residential', icon: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', text: 'From carefully considered private homes to cluster housing and high-density developments.' },
              { title: 'Commercial & Office', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21', text: 'Workplaces designed to attract, retain, and inspire — from office towers to corporate headquarters.' },
              { title: 'Civic & Institutional', icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z', text: 'Buildings that represent public institutions — government facilities, embassies, and civic centres.' },
              { title: 'Education', icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342', text: 'Learning environments that encourage curiosity and wellbeing — schools and university facilities.' },
              { title: 'Healthcare', icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z', text: 'Healthcare facilities designed with patient dignity and clinical efficiency in equal measure.' },
              { title: 'Heritage & Hospitality', icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z', text: 'Hotels, lodges, and tourism facilities authentic to their setting and heritage restorations.' }
            ].map((sector) => (
              <div key={sector.title} className="sector-card bg-white p-7 cursor-default group">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#f0f4f8] border border-[#d1dce8] group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="w-5 h-5 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={sector.icon}/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{sector.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{sector.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section id="approach" style={{ background: '#F4F5F7' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <span className="rule" />
              <span className="label">How We Work</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mt-4">
                Our Approach to<br/>Every Commission
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6 flex items-end">
              <p className="text-gray-500 text-sm leading-relaxed">
                Our process is structured, transparent, and deeply collaborative. From first contact to final handover, clients know exactly where their project stands and what comes next.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.07)' }}>
            {[
              { n: '01', t: 'Listen & Understand', b: 'Every engagement starts with listening. We invest time in understanding the motivation and aspiration behind the project.' },
              { n: '02', t: 'Explore & Concept', b: 'Multiple design directions are tested against context, site, and budget before we converge on the final concept.' },
              { n: '03', t: 'Develop & Document', b: 'The approved concept is developed into fully coordinated technical documentation to reduce surprises on site.' },
              { n: '04', t: 'Procure & Appoint', b: 'We manage the full tender process — pre-qualifying contractors and advising on appointment.' },
              { n: '05', t: 'Build & Administer', b: 'Regular site inspections and proactive contract administration ensure the building is built as designed.' },
              { n: '06', t: 'Complete & Sustain', b: 'Post-occupation reviews and defects management reflect the lasting commitment we make to every project.', Special: true }
            ].map((step) => (
              step.Special ? (
                <div key={step.n} style={{ background: 'var(--blue)' }} className="p-10 group relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04] grid-pattern pointer-events-none"></div>
                  <div className="relative z-10">
                    <p className="step-num mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>{step.n}</p>
                    <h3 className="font-semibold text-white mb-3 tracking-tight">{step.t}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{step.b}</p>
                  </div>
                </div>
              ) : (
                <div key={step.n} style={{ background: '#FFFFFF' }} className="p-10 hover:bg-gray-50 transition-colors group">
                  <p className="step-num mb-4">{step.n}</p>
                  <h3 className="font-semibold text-[#0A0A0A] mb-3 group-hover:text-blue-600 transition-colors tracking-tight">{step.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.b}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── CSR BAND ── */}
      <div style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="label">Corporate Social Responsibility</span>
              <h3 className="font-serif text-3xl font-bold text-[#0A0A0A] mt-3 mb-3 uppercase tracking-tight">We Build Beyond Buildings.</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Studio5 invests in the communities and profession it serves — through pro-bono design work, university scholarships, and environmental stewardship.
              </p>
            </div>
            <div className="flex flex-wrap gap-10">
              {[
                { val: '12+', label: 'CSR Initiatives', color: 'var(--blue)' },
                { val: '4', label: 'Partners', color: '#0A0A0A' },
                { val: '100%', label: 'Local', color: 'var(--blue)' }
              ].map((c) => (
                <div key={c.label} className="text-center">
                  <p className="font-serif text-4xl font-bold mb-1" style={{ color: c.color }}>{c.val}</p>
                  <p className="text-gray-500 text-[10px] tracking-widest uppercase font-bold">{c.label}</p>
                </div>
              ))}
              <div className="flex items-center ml-4">
                <Link href="/csr"
                   style={{ background: 'var(--blue)' }}
                   className="text-white text-[11px] font-bold tracking-widest uppercase px-7 py-3.5 hover:opacity-90 transition-opacity flex items-center gap-2">
                  View Our Impact
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
