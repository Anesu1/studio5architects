import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About — Studio5 Architects',
  description: 'A registered architectural practice based in Harare, Zimbabwe. Architecture that expresses purpose.',
};

const stats = [
  { val: '10+', label: 'Years of Practice' },
  { val: '180+', label: 'Projects Delivered' },
  { val: '12', label: 'Industry Awards' },
  { val: '4', label: 'University Partners' },
];

const team = [
  { name: 'Brighton Madondo', role: 'Principal Architect', initials: 'BM', quals: ['M.Arch (NUST)', 'B.Arch Studies (Hons)', 'ACZ Board Member', 'AIAZ Board Member'] },
  { name: 'Tapiwa Manditsera', role: 'Architect', initials: 'TM', quals: ['M.Arch (NUST)', 'B.Arch Studies (Hons)', 'Former ACZ Member'] },
  { name: 'Tinashe Honde', role: 'Architect', initials: 'TH', quals: ['M.Arch Professional (Cyprus)', 'B.Arch Studies (Hons)', 'MRICS Associate', 'Registered Architect, ACZ'] },
  { name: 'Tichaona Gondo', role: 'Candidate Architect', initials: 'TG' },
  { name: 'Bernice Murape', role: 'Candidate Architect', initials: 'BM' },
  { name: 'Kelvin Mukucha', role: 'Candidate Architect', initials: 'KM' },
  { name: 'Augustine Jewure', role: 'Candidate Architect', initials: 'AJ' },
  { name: 'Evans Mbizi', role: 'Graduate Architect', initials: 'EM' },
  { name: 'Paddington', role: 'Architectural Technician', initials: 'PA' },
  { name: 'Thelma Mare', role: 'Architectural Technician', initials: 'TM' },
  { name: 'Rumbidzai Njani', role: 'Architectural Technician', initials: 'RN' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" style={{ background: '#FFFFFF', paddingTop: '96px' }} className="pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <div>
              <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-gray-400 mb-8">
                <Link href="/" className="hover:text-[#0A0A0A] transition-colors">Home</Link>
                <span className="text-gray-300">—</span>
                <span style={{ color: 'var(--blue)' }} className="font-bold">About the Practice</span>
              </div>

              <span className="rule" />
              <span className="label">The Practice</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#0A0A0A] leading-[1.05] mt-4 mb-6 tracking-tight">
                Architecture<br/>
                With<br/>
                <em style={{ color: 'var(--blue)' }}>Purpose.</em>
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                Studio5 Architects is a registered architectural practice based in Harare, Zimbabwe. For over a decade we have delivered buildings that are intelligent in their use of climate, honest in their use of materials, and deeply considered.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-5 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                {[
                  'Architects Council of Zimbabwe',
                  'AIAZ Member Practice',
                  'ISO 9001 Quality Management'
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--blue)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                    <span className="text-gray-500 text-xs font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mission image */}
            <div className="principles-wrap rounded-none shadow-2xl relative">
              <Image
                src="/img/mission.webp"
                alt="Studio5 Mission"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>

        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--blue) 0%, var(--blue-light) 50%, transparent 100%)' }}></div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: '#F4F5F7' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-4">
              <span className="rule" />
              <span className="label">Who We Are</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mt-4">
                A Practice<br/>Built on<br/>Conviction.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <p className="text-gray-500 text-base leading-relaxed">
                Founded in Harare in 2014, Studio5 Architects has grown into one of Zimbabwe&apos;s most respected architectural practices. Our team of registered architects and technical specialists works across the full spectrum of building design.
              </p>
              <p className="text-gray-500 text-base leading-relaxed font-serif italic text-lg border-l-4 border-blue-600 pl-8 py-2">
                &ldquo;We believe that good architecture is not a luxury — it is a fundamental act of care. A well-designed building improves the daily lives of the people who use it.&rdquo;
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Our process is transparent and genuinely collaborative. Clients are partners — not just approvers. We share our thinking early and remain engaged long after construction is complete.
              </p>

              <div className="grid sm:grid-cols-3 gap-px mt-10 shadow-sm border border-gray-100">
                {stats.slice(0,3).map((s) => (
                  <div key={s.label} className="p-7 bg-white">
                    <p className="font-serif text-4xl font-bold text-[#0A0A0A] leading-none mb-1.5">{s.val}</p>
                    <p className="text-gray-500 text-[10px] tracking-widest uppercase font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PRINCIPLES ── */}
      <section style={{ background: '#FFFFFF' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="rule" />
              <span className="label">What Guides Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mt-4 tracking-tight">
                Our Design<br/>Principles
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6 flex items-end">
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                Every project we undertake is shaped by a set of core principles that define how we think, work, and deliver. These are the practical commitments we make to every client.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-gray-100 border border-gray-100 shadow-xl">
            <div className="principles-wrap h-full min-h-[480px]">
              <Image
                src="/img/principles (1).webp"
                alt="Studio5 Principles Framework"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div style={{ background: '#F4F5F7' }}>
              {[
                { title: 'Design Excellence', text: 'Architecture is in the details. Every material, joint, and proportion is interrogated until it is exactly right.', icon: 'M9.813 15.904 9 18.75l-.813-2.846' },
                { title: 'Client Collaboration', text: 'A great brief produces a great building. We invest time in understanding not just what clients want to build, but why.', icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479' },
                { title: 'Environmental Responsibility', text: 'Zimbabwe\'s climate is an asset. We use natural ventilation, shading, and thermal mass as primary design tools.', icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747' },
                { title: 'Social Impact', text: 'We help build the profession as well as the buildings through pro-bono work and mentorship.', icon: 'M2.25 21h19.5m-18-18' }
              ].map((p, i) => (
                <div key={p.title} className={`p-10 transition-all hover:bg-white group ${i < 3 ? 'border-bottom border-gray-200' : ''}`}>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white border border-gray-200 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <svg className="w-5 h-5 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={p.icon}/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A0A0A] mb-2 tracking-tight">{p.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{ background: 'var(--blue)' }} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] grid-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-5xl font-bold text-white leading-none mb-3">{s.val}</p>
                <p className="text-blue-200 text-[10px] tracking-widest uppercase font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LEADERSHIP ── */}
      <section style={{ background: '#F4F5F7' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <span className="rule" />
              <span className="label">Our People</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mt-4 tracking-tight">
                The Team<br/>Behind the Work.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6 flex items-end">
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                Our practice is led by architects with broad experience across Zimbabwe and internationally. We are committed to mentoring the next generation.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {team.map((member) => (
              <div key={member.name} className="team-card aspect-[3/4]">
                <TeamMemberImage member={member} />
                <div className="team-card-info">
                  {member.quals && (
                    <div className="team-card-quals">
                      {member.quals.map(q => <p key={q}>{q}</p>)}
                    </div>
                  )}
                  <p className="team-card-name tracking-tight">{member.name}</p>
                  <p className="team-card-role font-bold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ background: 'var(--black)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-12">
          <div>
            <span className="label text-blue-400">Start a Conversation</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Let&apos;s Build Something<br/><em style={{ color: 'var(--blue-light)' }}>Together.</em>
            </h2>
            <p className="text-gray-400 text-sm mt-6 max-w-lg leading-relaxed">
              Initial consultations are free of charge and without obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/contact" className="btn-primary border border-blue-600 bg-blue-600 font-bold px-10">Start Your Project</Link>
            <Link href="/services" className="btn-outline text-white border-white/20 hover:bg-white/5 font-bold px-10 uppercase tracking-widest text-[10px]">Our Services</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function TeamMemberImage({ member }: { member: any }) {
  // Use a fallback SVG if image fails or doesn't exist
  const slug = member.name.toLowerCase().replace(/ /g, '-');
  const src = `/img/team/${slug}.jpg`;
  
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={member.name}
        fill
        className="object-cover"
        // Fallback placeholder logic
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="533"><rect width="400" height="533" fill="#EEF2FF"/><text x="200" y="267" font-family="Inter,sans-serif" font-size="80" font-weight="600" fill="#1B4F8A" text-anchor="middle" dominant-baseline="middle">${member.initials}</text></svg>`
        )}`}
      />
    </div>
  );
}
