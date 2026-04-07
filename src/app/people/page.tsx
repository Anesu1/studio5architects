import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { getAllTeamMembers } from '@/lib/queries';

export const metadata: Metadata = {
  title: 'People',
  description:
    'Meet the team behind Studio5 Architects. A multi-disciplinary collective of architects, designers, and project managers in Zimbabwe.',
};

// Static fallback — used when Sanity has no teamMember documents yet
const STATIC_TEAM = [
  { name: 'Brighton Madondo', role: 'Principal Architect', bio: 'Master of Architecture (NUST), Member of Architects Council of Zimbabwe and Institute of Architects Zimbabwe.', image: '/about/team/madondo.webp', order: 1 },
  { name: 'Tapiwa Manditsera', role: 'Architect', bio: 'Master of Architecture (NUST). Bachelor of Architectural Studies (Hons) (NUST). Member of ACZ and AIAZ.', image: '/about/team/manditsera.webp', order: 2 },
  { name: 'Tinashe Honde', role: 'Architect', bio: 'Master of Architecture (Professional) (Cyprus). Associate Member of RICS. Member of ACZ.', image: '/about/team/honde.webp', order: 3 },
  { name: 'Tichaona Gondo', role: 'Candidate Architect', bio: 'Bachelor of Architectural Studies (Hons) (NUST).', image: '/about/team/gondo.webp', order: 4 },
  { name: 'Bernice Murape', role: 'Candidate Architect', bio: 'Bachelor of Architectural Studies (Hons) (NUST).', image: '/about/team/murape.webp', order: 5 },
  { name: 'Kelvin Mukucha', role: 'Candidate Architect', bio: 'Bachelor of Architectural Studies (Hons) (NUST).', image: '/about/team/mukucha.webp', order: 6 },
  { name: 'Augustine Jewure', role: 'Candidate Architect', bio: 'Bachelor of Architectural Studies (Hons) (NUST) and Diploma in Architectural Technology.', image: '/about/team/jewure.webp', order: 7 },
  { name: 'Thelma Mare', role: 'Architectural Technician', bio: 'National Diploma in Architectural Technology (Harare Polytechnic).', image: '/about/team/mare.webp', order: 8 },
  { name: 'Rumbidzai Njani', role: 'Architectural Technician', bio: 'National Diploma in Architectural Technology (Harare Polytechnic).', image: '/about/team/njani.webp', order: 9 },
  { name: 'Fortunate Nyamanza', role: 'Administration', bio: 'Studio operations and client communications.', image: '/about/team/placeholder.svg', order: 10 },
];

export default async function PeoplePage() {
  let team: { name: string; role: string; bio: string; image: string; order: number }[] = STATIC_TEAM;
  try {
    const sanityTeam = await getAllTeamMembers();
    if (sanityTeam && sanityTeam.length > 0) {
      team = sanityTeam.map(m => ({ name: m.name, role: m.role, bio: m.bio || '', image: m.image || '/about/team/placeholder.svg', order: m.order }));
    }
  } catch { /* use static fallback */ }
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {team.map((person, i) => (
              <div
                key={person.name}
                className={`team-card reveal reveal--scale delay-${[0,100,200,300][i%4]} group`}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#080808',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src={(person as any).image || (person as any).img || '/about/team/placeholder.svg'}
                  alt={person.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    filter: 'grayscale(1) contrast(1.1)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="group-hover:scale-110 group-hover:opacity-40 transition-all"
                />
                <div className="team-card-info p-8 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-serif text-3xl font-bold text-white mb-2 leading-tight">
                      {person.name}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        letterSpacing: '0.25rem',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        color: '#3B82F6',
                        marginBottom: '1.5rem'
                      }}
                    >
                      {person.role}
                    </p>
                    <div className="overflow-hidden">
                       <p className="text-xs text-white/70 leading-relaxed max-h-0 group-hover:max-h-40 transition-all duration-700 opacity-0 group-hover:opacity-100">
                         {person.bio}
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Diversity & Inclusion Section (Optional/Adjusted) */}
            <div className="lg:col-span-full mt-20 p-12 bg-[#F9FAFB] border border-gray-100 reveal flex flex-col items-center text-center">
              <span className="label mb-4 block">Our Culture</span>
              <h3 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-6">
                Diversity as a Catalyst.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl">
                Reflecting the communities we serve, Studio5 is committed to gender equity and cultural diversity. 
                Our leadership is balanced, and our studio thrives on the friction of different perspectives — 
                leading to outcomes that are more than just technically sound, but socially and environmentally responsive.
              </p>
              <div className="grid grid-cols-2 gap-16">
                 <div>
                   <p className="font-serif text-5xl font-bold text-blue-600 mb-2">50%</p>
                   <p className="text-[11px] tracking-[0.3em] uppercase text-gray-500 font-bold">Female Leadership</p>
                 </div>
                 <div>
                   <p className="font-serif text-5xl font-bold text-blue-600 mb-2">Pay</p>
                   <p className="text-[11px] tracking-[0.3em] uppercase text-gray-500 font-bold">Equity Committed</p>
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
