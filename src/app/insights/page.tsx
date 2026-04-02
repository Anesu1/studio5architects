import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Insights and architectural thinking from Studio5 Architects. Exploring the intersection of design, climate, and community in Zimbabwe.',
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
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--blue)',
                  borderBottom: '2px solid var(--blue-dim)',
                  paddingBottom: 2,
                  marginBottom: '1rem',
                  display: 'inline-block',
                }}
              >
                Research &amp; Materials
              </span>
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

            {/* Article 1 */}
            <article className="insight-card">
              <div className="insight-img-wrap">
                <img src="/img/mission.webp" alt="Article 1" />
              </div>
              <div className="p-8">
                <span
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--blue)',
                    borderBottom: '2px solid var(--blue-dim)',
                    paddingBottom: 2,
                    marginBottom: '1rem',
                    display: 'inline-block',
                  }}
                >
                  Studio Life
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                  Architecture as a Fundamental Act of Care.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Reflecting on a decade of practice in Harare and the responsibility architects
                  carry in shaping the public realm.
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-gray-400 text-[10px] tracking-widest uppercase">
                    March 2026
                  </span>
                  <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="insight-card">
              <div className="insight-img-wrap">
                <img src="/img/banner2.png" alt="Article 2" />
              </div>
              <div className="p-8">
                <span
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--blue)',
                    borderBottom: '2px solid var(--blue-dim)',
                    paddingBottom: 2,
                    marginBottom: '1rem',
                    display: 'inline-block',
                  }}
                >
                  Urban Design
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                  The Porous City: Pedestrian Connectivity in CBD.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Exploring ways to reclaim the street level for people in high-density urban
                  environments through mixed-use activation.
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-gray-400 text-[10px] tracking-widest uppercase">
                    February 2026
                  </span>
                  <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="insight-card">
              <div className="insight-img-wrap">
                <img src="/img/principles (1).webp" alt="Article 3" />
              </div>
              <div className="p-8">
                <span
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--blue)',
                    borderBottom: '2px solid var(--blue-dim)',
                    paddingBottom: 2,
                    marginBottom: '1rem',
                    display: 'inline-block',
                  }}
                >
                  Heritage
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                  Adaptive Reuse: Breathing Life into Historic Fabric.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  The technical and ethical challenges of modern additions to colonial-era structures
                  in Bulawayo.
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-gray-400 text-[10px] tracking-widest uppercase">
                    January 2026
                  </span>
                  <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </>
  );
}
