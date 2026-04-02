import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSR — Corporate Social Responsibility',
  description:
    'Studio5 Architects takes seriously our responsibility to the communities, environments, and people our work touches across Zimbabwe.',
};

/* ── Inline style helpers ─────────────────────────────── */
const pillarCardBase: React.CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid rgba(0,0,0,0.09)',
  padding: '2.5rem 2rem',
  position: 'relative',
  overflow: 'hidden',
  transition: 'border-color 0.3s ease, transform 0.3s ease',
};

const iconBoxStyle: React.CSSProperties = {
  width: '3rem',
  height: '3rem',
  background: 'rgba(27,79,138,0.15)',
  border: '1px solid rgba(27,79,138,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem',
};

export default function CSRPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{ background: '#F4F5F7', paddingTop: '96px' }}
        className="relative overflow-hidden"
      >
        {/* Background grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Blue corner glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(27,79,138,0.1) 0%, transparent 65%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-gray-400 mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">
              Home
            </a>
            <span>/</span>
            <span style={{ color: 'var(--blue)' }}>Corporate Social Responsibility</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end pb-20">
            {/* Headline */}
            <div>
              <span className="rule mb-6" />
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0A0A] leading-[1.05] mb-8">
                Building More
                <br />
                Than
                <br />
                <em style={{ color: 'var(--blue)' }}>Structures.</em>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                Architecture shapes lives. Studio5 Architects takes seriously our responsibility to
                the communities, environments, and people our work touches across Zimbabwe.
              </p>
            </div>

            {/* Right column statement */}
            <div
              className="lg:pl-12 lg:border-l"
              style={{ borderColor: 'rgba(0,0,0,0.1)' }}
            >
              <p className="text-gray-600 text-xl md:text-2xl font-light leading-relaxed font-serif italic mb-8">
                &ldquo;Great architecture must be socially responsible, environmentally conscious,
                and economically inclusive.&rdquo;
              </p>
              <a
                href="#commitment"
                className="inline-flex items-center gap-3 text-[11px] tracking-widest uppercase font-semibold hover:gap-5 transition-all duration-200"
                style={{ color: 'var(--blue)' }}
              >
                Our Commitment
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div
            style={{
              borderTop: '1px solid rgba(0,0,0,0.09)',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              marginLeft: '-1.5rem',
              marginRight: '-1.5rem',
            }}
          >
            {[
              { value: '10+', label: 'Years in Practice' },
              { value: '12+', label: 'CSR Initiatives' },
              { value: '4', label: 'University Partnerships' },
              { value: '100%', label: 'Local Procurement Priority' },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  padding: '2rem 1.5rem',
                  borderRight: '1px solid rgba(0,0,0,0.09)',
                }}
              >
                <p className="font-serif text-4xl font-bold text-[#0A0A0A] mb-1">{value}</p>
                <p className="text-[10px] tracking-widest uppercase text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT ───────────────────────────────── */}
      <section id="commitment" className="py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Large text */}
            <div className="lg:col-span-3">
              <span className="rule mb-6" />
              <p className="label mb-4">Our Commitment</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mb-8">
                An Active Participant
                <br />
                in Zimbabwe&apos;s Development
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                Studio5 Architects is not just a design practice. We are an active participant in
                the development of Zimbabwe — committed to leaving every project, every community,
                and every partnership better than we found it.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Our CSR programme is structured around six pillars that guide how we engage with
                society, the environment, and the profession. These are not aspirational targets —
                they are embedded in how we work every day.
              </p>
            </div>

            {/* Commitment tiles */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              <div
                className="p-6"
                style={{ background: 'var(--blue)', border: '1px solid var(--blue)' }}
              >
                <svg
                  className="w-6 h-6 text-white mb-4 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12"
                  />
                </svg>
                <p className="text-white font-semibold text-sm leading-snug">
                  Community Infrastructure
                </p>
              </div>
              <div
                className="p-6"
                style={{ background: '#F4F5F7', border: '1px solid rgba(0,0,0,0.08)' }}
              >
                <svg
                  className="w-6 h-6 mb-4 opacity-70"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489"
                  />
                </svg>
                <p className="text-[#0A0A0A] font-semibold text-sm leading-snug">
                  Education &amp; Mentorship
                </p>
              </div>
              <div
                className="p-6"
                style={{ background: '#F4F5F7', border: '1px solid rgba(0,0,0,0.08)' }}
              >
                <svg
                  className="w-6 h-6 mb-4 opacity-70"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                  />
                </svg>
                <p className="text-[#0A0A0A] font-semibold text-sm leading-snug">
                  Environmental Stewardship
                </p>
              </div>
              <div
                className="p-6"
                style={{ background: '#F4F5F7', border: '1px solid rgba(0,0,0,0.08)' }}
              >
                <svg
                  className="w-6 h-6 mb-4 opacity-70"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584"
                  />
                </svg>
                <p className="text-[#0A0A0A] font-semibold text-sm leading-snug">Workplace Equity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS ──────────────────────────────────── */}
      <section id="pillars" className="py-28" style={{ background: '#F4F5F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="rule mb-6" />
            <p className="label mb-4">Our Framework</p>
            <div className="flex flex-wrap justify-between items-end gap-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A]">
                Six Areas of Responsibility
              </h2>
              <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                Each pillar represents a concrete commitment — embedded in our practice, not printed
                on a wall.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* 01 Community Development */}
            <div style={pillarCardBase}>
              <div style={iconBoxStyle}>
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12"
                  />
                </svg>
              </div>
              <p
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: 'var(--blue)' }}
              >
                01
              </p>
              <h3 className="font-semibold text-[#0A0A0A] text-lg mb-3">Community Development</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We invest in the communities where we build, partnering with local organisations to
                improve infrastructure, access to housing, and public spaces across Zimbabwe.
              </p>
            </div>

            {/* 02 Education & Mentorship */}
            <div style={pillarCardBase}>
              <div style={iconBoxStyle}>
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <p
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: 'var(--blue)' }}
              >
                02
              </p>
              <h3 className="font-semibold text-[#0A0A0A] text-lg mb-3">
                Education &amp; Mentorship
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Through partnerships with NUST and Harare Polytechnic, we host interns, fund
                architectural scholarships, and mentor the next generation of Zimbabwean designers.
              </p>
            </div>

            {/* 03 Environmental Stewardship (featured — blue) */}
            <div
              style={{
                ...pillarCardBase,
                background: 'var(--blue)',
                borderColor: 'var(--blue)',
              }}
            >
              <div
                style={{
                  ...iconBoxStyle,
                  background: 'rgba(255,255,255,0.15)',
                  borderColor: 'rgba(255,255,255,0.25)',
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253"
                  />
                </svg>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-blue-200 mb-3">03</p>
              <h3 className="font-semibold text-white text-lg mb-3">Environmental Stewardship</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Our projects minimise ecological impact — from material selection and passive climate
                strategies to waste reduction on every construction site.
              </p>
            </div>

            {/* 04 Social Impact Design */}
            <div style={pillarCardBase}>
              <div style={iconBoxStyle}>
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
              </div>
              <p
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: 'var(--blue)' }}
              >
                04
              </p>
              <h3 className="font-semibold text-[#0A0A0A] text-lg mb-3">Social Impact Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We dedicate a portion of our capacity to pro-bono and reduced-fee work for schools,
                clinics, and community centres in underserved areas.
              </p>
            </div>

            {/* 05 Local Procurement */}
            <div style={pillarCardBase}>
              <div style={iconBoxStyle}>
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
                  />
                </svg>
              </div>
              <p
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: 'var(--blue)' }}
              >
                05
              </p>
              <h3 className="font-semibold text-[#0A0A0A] text-lg mb-3">Local Procurement</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We prioritise local suppliers, contractors, and craftspeople, circulating economic
                benefit within Zimbabwe and reducing imported carbon footprint.
              </p>
            </div>

            {/* 06 Workplace Equity */}
            <div style={pillarCardBase}>
              <div style={iconBoxStyle}>
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--blue)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <p
                className="text-[10px] tracking-widest uppercase mb-3"
                style={{ color: 'var(--blue)' }}
              >
                06
              </p>
              <h3 className="font-semibold text-[#0A0A0A] text-lg mb-3">Workplace Equity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Studio5 is committed to a diverse and inclusive workplace — in hiring, promotion,
                and studio culture — reflecting the communities we serve.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── INITIATIVES TIMELINE ─────────────────────────── */}
      <section id="initiatives" className="py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Sticky header */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32">
                <span className="rule mb-6" />
                <p className="label mb-4">Recent Work</p>
                <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] leading-tight mb-6">
                  CSR
                  <br />
                  Initiatives
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  A selection of the community, education, and environmental projects we have
                  delivered or supported in recent years.
                </p>
                <a href="/contact" className="btn-primary text-[11px]">
                  Propose an Initiative
                </a>
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-2">
              <div
                style={{
                  position: 'relative',
                  paddingLeft: '2.5rem',
                }}
              >
                {/* Vertical track line */}
                <div
                  style={{
                    content: "''",
                    position: 'absolute',
                    left: 7,
                    top: 8,
                    bottom: 0,
                    width: 2,
                    background:
                      'linear-gradient(to bottom, var(--blue), rgba(27,79,138,0.1))',
                  }}
                />

                {[
                  {
                    year: '2024',
                    tag: 'Community',
                    title: 'Mbare Community Centre Pro-Bono Design',
                    body: 'Provided full architectural services at no cost for a community gathering and skills-training facility in Mbare, Harare. The project created a flexible multi-use space serving over 500 residents.',
                  },
                  {
                    year: '2024',
                    tag: 'Education',
                    title: 'NUST Architecture Scholarship Programme',
                    body: 'Funded two full-year scholarships for students from low-income backgrounds pursuing architecture at NUST Bulawayo, alongside a structured internship programme at our Harare studio.',
                  },
                  {
                    year: '2023',
                    tag: 'Social Impact',
                    title: 'Rural Clinic Design — Mashonaland East',
                    body: 'Designed a low-cost, climate-responsive rural health clinic in partnership with a local NGO. The facility serves a catchment area of over 3,000 people and was completed under budget.',
                  },
                  {
                    year: '2023',
                    tag: 'Environment',
                    title: 'Construction Waste Reduction Initiative',
                    body: 'Partnered with contractors on three sites to pilot a zero-landfill construction waste programme, diverting over 12 tonnes of material from landfill through reuse and recycling partnerships.',
                  },
                ].map((entry, i) => (
                  <div key={i} style={{ position: 'relative', paddingBottom: '2.5rem' }}>
                    {/* Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2.5rem',
                        top: 6,
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: 'var(--blue)',
                        border: '3px solid #FFFFFF',
                        boxShadow: '0 0 0 3px rgba(27,79,138,0.35)',
                      }}
                    />
                    <div
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(0,0,0,0.09)',
                        padding: '1.75rem 2rem',
                        transition: 'border-color 0.25s',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          color: 'rgba(27,79,138,0.7)',
                          textTransform: 'uppercase',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {entry.year}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: '0.6rem',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            padding: '3px 10px',
                            background: 'rgba(27,79,138,0.08)',
                            color: 'var(--blue)',
                            border: '1px solid rgba(27,79,138,0.2)',
                          }}
                        >
                          {entry.tag}
                        </span>
                      </div>
                      <h3 className="font-semibold text-[#0A0A0A] text-xl mb-3">{entry.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{entry.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IMPACT BAND ──────────────────────────────────── */}
      <section style={{ background: 'var(--blue)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            {[
              { value: '500+', label: 'Community members reached' },
              { value: '12', label: 'Tonnes waste diverted' },
              { value: '6', label: 'Student scholarships funded' },
              { value: '3', label: 'Pro-bono projects completed' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-5xl font-bold mb-2">{value}</p>
                <p className="text-[10px] tracking-widest uppercase text-blue-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER CTA ──────────────────────────────────── */}
      <section
        id="partner"
        className="py-28 relative overflow-hidden"
        style={{ background: '#F4F5F7' }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(to right, var(--blue), rgba(27,79,138,0.2), transparent)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left: text */}
            <div>
              <span className="rule mb-6" />
              <p className="label mb-4">Get Involved</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mb-6">
                Partner With Us
                <br />
                on a CSR Initiative
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                If you represent an NGO, government body, educational institution, or corporation
                looking to collaborate on socially responsible design, we want to hear from you.
              </p>

              <div className="space-y-4">
                <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-3">
                  Who we partner with
                </p>
                <div className="flex flex-wrap gap-3">
                  {['NGOs', 'Government Bodies', 'Educational Institutions', 'Corporations', 'Community Groups'].map(
                    (tag) => (
                      <span
                        key={tag}
                        style={{
                          display: 'inline-block',
                          fontSize: '0.6rem',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          padding: '3px 10px',
                          background: 'rgba(27,79,138,0.08)',
                          color: 'var(--blue)',
                          border: '1px solid rgba(27,79,138,0.2)',
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div
                className="mt-12 pt-8"
                style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
              >
                <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-3">
                  Prefer to reach us directly?
                </p>
                <a
                  href="mailto:info@studio5architects.com"
                  className="text-gray-600 hover:text-[#0A0A0A] text-sm transition-colors"
                >
                  info@studio5architects.com
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.09)',
                padding: '2.5rem',
              }}
            >
              <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-8">
                Partnership Enquiry Form
              </p>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="csr-label">Name</label>
                    <input type="text" placeholder="Your name" className="csr-input" />
                  </div>
                  <div>
                    <label className="csr-label">Organisation</label>
                    <input type="text" placeholder="Your organisation" className="csr-input" />
                  </div>
                </div>
                <div>
                  <label className="csr-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@organisation.org"
                    className="csr-input"
                  />
                </div>
                <div>
                  <label className="csr-label">Type of Partnership</label>
                  <select className="csr-input" style={{ color: '#6b7280' }}>
                    <option value="">Select…</option>
                    <option style={{ color: '#111', background: '#fff' }}>
                      Pro-bono / Reduced-Fee Design
                    </option>
                    <option style={{ color: '#111', background: '#fff' }}>
                      Scholarship / Education Sponsorship
                    </option>
                    <option style={{ color: '#111', background: '#fff' }}>
                      Environmental Initiative
                    </option>
                    <option style={{ color: '#111', background: '#fff' }}>
                      Community Infrastructure
                    </option>
                    <option style={{ color: '#111', background: '#fff' }}>Other</option>
                  </select>
                </div>
                <div>
                  <label className="csr-label">Tell us about the initiative</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project or initiative…"
                    className="csr-input"
                    style={{ resize: 'none' }}
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-[11px] py-4">
                  Submit Partnership Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
