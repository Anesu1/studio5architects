import type { Metadata } from 'next';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Social Impact & CSR — Architecture for Zimbabwe',
  description:
    'Studio5 Architects is committed to socially responsible design through pro-bono work, university scholarships, and sustainable environmental stewardship across Zimbabwe.',
};

export default function CSRPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image src="/img/hero-1.png" alt="Brutalist Architecture" fill className="object-cover opacity-40 grayscale" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-blue-400 mb-10 reveal">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">CSR</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div className="reveal">
              <span className="label text-blue-500 mb-8 block">Social Impact</span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-10">
                Building More <br />Than <em className="italic">Structures.</em>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-0 font-medium">
                Architecture shapes lives. We take deep responsibility for the environments and people our work touches across Zimbabwe.
              </p>
            </div>
            <div className="reveal hidden lg:block">
               <div className="p-12 border border-white/10 bg-white/5 backdrop-blur-md">
                  <p className="text-white font-serif text-2xl leading-relaxed italic mb-0">
                    &ldquo;Great architecture must be socially responsible, environmentally conscious, and economically inclusive.&rdquo;
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT ───────────────────────────────── */}
      <section id="commitment" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-16">
              <span className="rule mb-6" />
              <p className="label mb-4">Our Commitment</p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#0A0A0A] leading-tight max-w-4xl">
                An Active Participant <br />in Zimbabwe&apos;s Development.
              </h2>
            </div>
            
            <div className="lg:col-span-5 space-y-10">
              <p className="text-gray-600 text-lg leading-relaxed">
                Studio5 Architects is not just a design practice. We are an active participant in 
                the development of Zimbabwe — committed to leaving every project, every community, 
                and every partnership better than we found it.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Our CSR programme is structured around several pillars that guide how we engage with 
                society, the environment, and the profession. These are not aspirational targets — 
                they are embedded in how we work every day.
              </p>
              <div className="pt-8">
                 <a href="/contact" className="btn-primary">Collaborate on Impact</a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
              {[
                { title: 'Environment', desc: 'Prioritising passive design and local materials to reduce lifecycle carbon.' },
                { title: 'Education', desc: 'University partnerships and career mentorship for local architecture students.' },
                { title: 'Pro-Bono', desc: 'Strategic advisory and design for non-profit and community-led initiatives.' },
                { title: 'Equity', desc: 'Committed to 50% female leadership and absolute pay transparency.' },
              ].map(p => (
                <div key={p.title} className="bg-white p-10 group hover:bg-blue-50 transition-colors">
                   <h3 className="font-bold text-[#0A0A0A] text-sm mb-4 uppercase tracking-[0.3em] group-hover:text-blue-600">{p.title}</h3>
                   <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STORY ────────────────────────────────── */}
      <section className="py-32 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                 <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                    <Image src="/img/banner3.png" alt="Community Engagement" fill className="object-cover" />
                 </div>
              </div>
              <div className="reveal">
                 <span className="label mb-6 block text-blue-600">Impact Narrative</span>
                 <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-8 leading-tight">
                    Architecture as a <br />Collective Journey.
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10 font-serif italic border-l-4 border-blue-600 pl-8">
                    &ldquo;When we design for a community, we aren&apos;t just delivering a building. We are 
                    creating the scaffolding for shared memories and future growth.&rdquo;
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-12">
                    Our pro-bono work focus specifically on 'social infrastructure'—schools, 
                    health outposts, and community hubs—where architectural thinking can 
                    multiply the return on investment for the common good.
                  </p>
                  <div className="grid grid-cols-2 gap-10">
                     {[
                       { stat: '1000+', label: 'Students Impacted' },
                       { stat: '12', label: 'Pro-Bono Projects' },
                     ].map(s => (
                       <div key={s.label}>
                          <p className="font-serif text-4xl font-bold text-[#0A0A0A] mb-1">{s.stat}</p>
                          <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">{s.label}</p>
                       </div>
                     ))}
                  </div>
              </div>
           </div>
        </div>
      </section>

      <CTASection
        title="Impact Beyond Architecture."
        subtitle="We are committed to Zimbabwe's development through education, pro-bono work, and environmental stewardship."
      />
    </>
  );
}
