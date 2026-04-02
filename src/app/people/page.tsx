import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'People',
  description:
    'Meet the team behind Studio5 Architects. A multi-disciplinary collective of architects, designers, and project managers in Zimbabwe.',
};

export default function PeoplePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal">
            <span className="label mb-6 block">Our collective</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              The Minds Behind
              <br />
              the <em style={{ color: 'var(--blue)' }}>Work.</em>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Studio5 is a collective of architects, designers, and project managers. We bring
              together diverse perspectives and technical expertise to solve complex architectural
              challenges.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TEAM GRID ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {/* 1 — Brighton Madondo */}
            <div
              className="team-card reveal reveal--scale"
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#080808',
                aspectRatio: '4/5',
              }}
            >
              <img
                src="/img/team/brighton-madondo.jpg"
                alt="Brighton Madondo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'grayscale(1) contrast(1.1)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              <div className="team-card-info">
                <p className="font-serif text-2xl font-bold text-white mb-1 underline-offset-4 decoration-blue-500/30">
                  Brighton Madondo
                </p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#3B82F6',
                  }}
                >
                  Principal Architect
                </p>
                <div className="team-card-quals">
                  <p className="text-xs text-white/70 mb-1">M.Arch (NUST)</p>
                  <p className="text-xs text-white/70 mb-1">Member, Architect&apos;s Council Zimbabwe</p>
                  <p className="text-xs text-white/70">Member, AIAZ</p>
                </div>
              </div>
            </div>

            {/* 2 — Tapiwa Manditsera */}
            <div
              className="team-card reveal reveal--scale delay-100"
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#080808',
                aspectRatio: '4/5',
              }}
            >
              <img
                src="/img/team/tapiwa-manditsera.jpg"
                alt="Tapiwa Manditsera"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'grayscale(1) contrast(1.1)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              <div className="team-card-info">
                <p className="font-serif text-2xl font-bold text-white mb-1">Tapiwa Manditsera</p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#3B82F6',
                  }}
                >
                  Architect
                </p>
                <div className="team-card-quals">
                  <p className="text-xs text-white/70 mb-1">M.Arch (NUST)</p>
                  <p className="text-xs text-white/70">B.Arch Studies (Hons)</p>
                </div>
              </div>
            </div>

            {/* 3 — Tinashe Honde */}
            <div
              className="team-card reveal reveal--scale delay-200"
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#080808',
                aspectRatio: '4/5',
              }}
            >
              <img
                src="/img/team/tinashe-honde.jpg"
                alt="Tinashe Honde"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'grayscale(1) contrast(1.1)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              <div className="team-card-info">
                <p className="font-serif text-2xl font-bold text-white mb-1">Tinashe Honde</p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#3B82F6',
                  }}
                >
                  Architect
                </p>
                <div className="team-card-quals">
                  <p className="text-xs text-white/70 mb-1">M.Arch Professional (Cyprus)</p>
                  <p className="text-xs text-white/70">Registered Architect, ACZ</p>
                </div>
              </div>
            </div>

            {/* 4 — Bernice Murape */}
            <div
              className="team-card reveal reveal--scale delay-300"
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#080808',
                aspectRatio: '4/5',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                alt="Bernice Murape"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'grayscale(1) contrast(1.1)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              <div className="team-card-info">
                <p className="font-serif text-2xl font-bold text-white mb-1">Bernice Murape</p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#3B82F6',
                  }}
                >
                  Architectural Lead
                </p>
                <div className="team-card-quals">
                  <p className="text-xs text-white/70 mb-1">B.ArchStudies (Hons)</p>
                  <p className="text-xs text-white/70">Senior Associate</p>
                </div>
              </div>
            </div>

            {/* Join card */}
            <div className="p-10 border border-gray-100 flex flex-col justify-center bg-[#F9FAFB] reveal delay-200">
              <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4">
                Collaborative Spirit
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We are always looking for talented architects and designers who share our design
                conviction.
              </p>
              <a href="/contact" className="btn-primary w-full justify-center">
                Join the Practice
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
