import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice',
  description:
    'Inside the architectural practice of Studio5. Established in Harare in 2014, we deliver architecture that expresses purpose across Zimbabwe.',
};

export default function PracticePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal">
            <span className="label mb-6 block">The Studio</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              Architecture<br />Built on<br />
              <em style={{ color: 'var(--blue)' }}>Conviction.</em>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Studio5 Architects is an architectural practice established in Harare in 2014. We
              believe that good architecture is a fundamental act of care — a commitment to improving
              the daily lives of people and the health of our environment.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────── */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-center">
            <div className="reveal">
              <span className="label mb-6 block">Our Approach</span>
              <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-8 leading-tight">
                Listening before designing.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Our process starts with thorough listening. We seek to understand the motivation
                behind a project, the climate of the site, and the aspirations of the community it
                serves. A well-considered brief is the key to an intelligent building.
              </p>
              <div className="flex gap-4">
                <div className="p-8 bg-white shadow-soft transition-transform hover:-translate-y-1 flex-1">
                  <p className="font-serif text-3xl font-bold text-blue-600 mb-2">100%</p>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">
                    Client-Centred Focus
                  </p>
                </div>
                <div className="p-8 bg-white shadow-soft transition-transform hover:-translate-y-1 flex-1">
                  <p className="font-serif text-3xl font-bold text-blue-600 mb-2">AIAZ</p>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">
                    Registered Practice
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal reveal--scale delay-200">
              <img
                src="/img/principles (1).webp"
                alt="Practice values"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Philosophy cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1px',
              background: 'rgba(0,0,0,0.06)',
            }}
          >
            <div
              style={{
                background: '#FFFFFF',
                padding: '3rem',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                borderRight: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                Climate Responsiveness
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Passive cooling, natural ventilation, and honest materials are at the heart of our
                design response to the Zimbabwean plateau.
              </p>
            </div>
            <div
              style={{
                background: '#FFFFFF',
                padding: '3rem',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                borderRight: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                Social Responsibility
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We measure success by the positive impact on our communities — through pro-bono work
                and mentorship.
              </p>
            </div>
            <div
              style={{
                background: '#FFFFFF',
                padding: '3rem',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
              }}
            >
              <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                Design Intelligence
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Buildings that work intuitively and maintain their quality over decades of
                occupation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORY ──────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <span className="label text-center block mb-16">The Journey So Far</span>
          <div className="relative py-12">
            {/* Timeline line */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '1px',
                background: 'rgba(0,0,0,0.1)',
                zIndex: 1,
              }}
            />
            <div className="flex justify-between items-center relative">
              {[
                { year: '2014', label: 'Foundation in Harare' },
                { year: '2018', label: 'First Institutional Commission' },
                { year: '2021', label: 'Bulawayo Presence Established' },
                { year: '2026', label: 'Leading Regional Practice' },
              ].map(({ year, label }) => (
                <div key={year} className="text-center w-1/4 px-4 bg-white">
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      background: 'var(--blue)',
                      borderRadius: '50%',
                      position: 'relative',
                      zIndex: 2,
                      margin: '0 auto 1rem',
                    }}
                  />
                  <p className="font-bold text-gray-900">{year}</p>
                  <p className="text-gray-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
