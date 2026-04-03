import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'People',
  description:
    'Meet the team behind Studio5 Architects. A multi-disciplinary collective of architects, designers, and project managers in Zimbabwe.',
};

const TEAM = [
  {
    name: 'Brighton Madondo',
    role: 'Principal Architect',
    img: '/about/team/madondo.webp',
    quals: ['M.Arch (NUST)', 'Member, Architect\'s Council Zimbabwe', 'Member, AIAZ'],
    delay: 0,
  },
  {
    name: 'Tapiwa Manditsera',
    role: 'Architect',
    img: '/about/team/manditsera.webp',
    quals: ['M.Arch (NUST)', 'B.Arch Studies (Hons)'],
    delay: 100,
  },
  {
    name: 'Tinashe Honde',
    role: 'Architect',
    img: '/about/team/honde.webp',
    quals: ['M.Arch Professional (Cyprus)', 'Registered Architect, ACZ'],
    delay: 200,
  },
  {
    name: 'Bernice Murape',
    role: 'Architectural Lead',
    img: '/about/team/murape.webp',
    quals: ['B.ArchStudies (Hons)', 'Senior Associate'],
    delay: 300,
  },
  {
    name: 'Tichaona Gondo',
    role: 'Candidate Architect',
    img: '/about/team/gondo.webp',
    quals: ['Candidate — Architects Council of Zimbabwe'],
    delay: 0,
  },
  {
    name: 'Kelvin Mukucha',
    role: 'Candidate Architect',
    img: '/about/team/mukucha.webp',
    quals: ['Candidate — Architects Council of Zimbabwe'],
    delay: 100,
  },
  {
    name: 'Augustine Jewure',
    role: 'Candidate Architect',
    img: '/about/team/jewure.webp',
    quals: ['Candidate — Architects Council of Zimbabwe'],
    delay: 200,
  },
  {
    name: 'Thelma Mare',
    role: 'Architectural Technician',
    img: '/about/team/mare.webp',
    quals: ['Technical Documentation Specialist'],
    delay: 300,
  },
  {
    name: 'Rumbidzai Njani',
    role: 'Architectural Technician',
    img: '/about/team/njani.webp',
    quals: ['Technical Drawing & Documentation'],
    delay: 0,
  },
  {
    name: 'Helegwa',
    role: 'Team Member',
    img: '/about/team/helegwa.webp',
    quals: ['Studio Support'],
    delay: 100,
  }
];

export default function PeoplePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div className="reveal">
              <span className="label mb-6 block">Our collective</span>
              <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-[1.1] mb-8">
                The Minds Behind<br />the <em className="text-blue-600 italic">Work.</em>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                Studio5 is a multidisciplinary collective driven by <em className="text-blue-600 font-semibold">Skill, not Ego.</em> We bring
                together diverse perspectives—architects, landscape designers, and researchers—to solve complex architectural
                challenges through collaboration rather than standardisation.
              </p>
            </div>
            <div className="reveal reveal--scale delay-300">
               <div className="relative aspect-video lg:aspect-square bg-gray-50 overflow-hidden shadow-xl border border-gray-100">
                 <img
                   src="/img/banner3.png"
                   alt="Studio5 Team in Consultation"
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TEAM GRID ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {TEAM.map((person) => (
              <div
                key={person.name}
                className={`team-card reveal reveal--scale delay-${person.delay}`}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#080808',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    filter: 'grayscale(1) contrast(1.1)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="hover:scale-110"
                />
                <div className="team-card-info">
                  <p className="font-serif text-2xl font-bold text-white mb-1">
                    {person.name}
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
                    {person.role}
                  </p>
                  <div className="team-card-quals">
                    {person.quals.map((q, i) => (
                      <p key={i} className="text-xs text-white/70 mb-1">{q}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Diversity & Inclusion Section */}
            <div className="lg:col-span-2 p-12 bg-[#F9FAFB] border border-gray-100 reveal lg:row-span-2 flex flex-col justify-center">
              <span className="label mb-4 block">Our Culture</span>
              <h3 className="font-serif text-3xl font-bold text-[#0A0A0A] mb-6">
                Diversity as a Catalyst.
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Reflecting the communities we serve, Studio5 is committed to gender equity and cultural diversity. 
                Our leadership is balanced, and our studio thrive on the friction of different perspectives — 
                leading to outcomes that are more than just technically sound, but socially and environmentally responsive.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                   <p className="font-serif text-4xl font-bold text-blue-600 mb-1">50%</p>
                   <p className="text-[10px] tracking-widest uppercase text-gray-500 font-bold">Female Leadership</p>
                 </div>
                 <div>
                   <p className="font-serif text-4xl font-bold text-blue-600 mb-1">Pay</p>
                   <p className="text-[10px] tracking-widest uppercase text-gray-500 font-bold">Equity Committed</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        title="Skills, Not Egos."
        subtitle="Our team is a collective of diverse minds committed to regional architectural excellence. Explore how we can work together."
        ctaText="Join the Collective"
      />
    </>
  );
}
