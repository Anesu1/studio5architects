import type { Metadata } from 'next';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Community & Culture — Collaborative Architectural Practice',
  description:
    'Studio5 Architects engages with local communities, artisans, and cultural contexts to create architecture that resonates with its people and place.',
};

export default function CommunityPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal">
            <span className="label mb-6 block">Our Impact</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              Architecture as a <br />
              <em style={{ color: 'var(--blue)' }}>Shared Narrative.</em>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              We believe that architecture is most powerful when it reflects the stories, 
              aspirations, and logic of the people who use it. Our process is deeply 
              rooted in community engagement and local craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── ENGAGEMENT ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal order-last lg:order-first">
               <div className="relative aspect-[4/5] bg-white border border-gray-100 shadow-xl p-8">
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-600 -translate-x-3 -translate-y-3" />
                  <Image src="/img/banner3.png" alt="Community Dialogue" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
            </div>
            <div className="reveal">
              <span className="label mb-6 block text-blue-600">The Power of Listening</span>
              <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900 leading-tight">
                Engaging with Zimbabwe&apos;s <br />Diverse Tapestry.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-serif italic">
                 “Every site has a memory. Every community has a dream. Our role is to 
                 listen first, then translate those voices into a built form that 
                 stands for generations.”
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                 <div className="p-6 bg-white border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm mb-2 uppercase tracking-widest">Local Artisans</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Collaborating with stonemasons, weavers, and metalworkers to integrate traditional crafts into modern architecture.</p>
                 </div>
                 <div className="p-6 bg-white border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm mb-2 uppercase tracking-widest">Stakeholder Workshops</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Facilitating deep-dive workshops with stakeholders to ensure equitable and functional design outcomes.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURAL CONTEXT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
             <span className="rule mx-auto mb-6" />
             <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Cultural Stewardship</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">We protect and evolve Zimbabwe&apos;s architectural heritage through sensitive conservation and innovative adaptive reuse.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
             {[
               { title: 'Heritage Conservation', desc: 'Preserving Grade I and II listed structures with modern technical rigour.' },
               { title: 'Vernacular Evolvement', desc: 'Reinterpreting traditional building methods with contemporary materials.' },
               { title: 'Public Infrastructure', desc: 'Focusing on the "common good" through high-impact civic commissions.' },
             ].map(c => (
               <div key={c.title} className="p-10 border border-gray-50 hover:border-blue-100 hover:bg-blue-50/20 transition-all text-left">
                  <h3 className="font-bold text-[#0A0A0A] text-sm mb-4 uppercase tracking-widest">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">{c.desc}</p>
                  <p className="text-blue-600 text-[9px] font-bold tracking-widest uppercase cursor-pointer">Learn More →</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Architecture as a Conversation."
        subtitle="Collaboration with local communities and artisans is at the heart of our practice. Let's start a dialogue today."
      />
    </>
  );
}
