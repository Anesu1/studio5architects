import type { Metadata } from 'next';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Sustainability — Climate-Responsive Architecture for Zimbabwe',
  description:
    'Dedicated to socially responsible and environmentally respectful design. Our mission is to improve both the built and natural environments using passive design strategies and resource efficiency.',
};

export default function SustainabilityPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-white relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)', backgroundSize: '72px 72px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="reveal">
            <span className="label mb-6 block">Our Commitment</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              Designing for <br />
              <em style={{ color: 'var(--blue)' }}>Climate Resilience.</em>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              We acknowledge that construction is a primary contributor to the climate crisis. 
              Our response is to pragmatically embed sustainability into every project — 
              from intimate retreats to civic infrastructure.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── MANIFESTO ── */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="label mb-8 block text-blue-500">The Sustainability Action Plan</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 leading-tight">
                An Active Participant in <br />Zimbabwe&apos;s Development.
              </h2>
              <div className="space-y-12">
                {[
                  { title: 'Passive Design Strategies', desc: 'Orientation, thermal mass, and natural ventilation are core generators, not add-ons. We design for the specific Zimbabwean sun-path to reduce energy costs.' },
                  { title: 'Material Selection', desc: 'We evaluate materials for carbon footprint and lifecycle impact, prioritising local stone, timber, and recycled aggregates to reduce imported carbon.' },
                  { title: 'Innovation & Research', desc: 'Our lab tests architectural solutions for climate performance, ensuring that our buildings are "future-ready" for changing environments.' },
                ].map(item => (
                  <div key={item.title} className="group border-l-2 border-blue-600/30 pl-8 hover:border-blue-600 transition-colors duration-500">
                    <h3 className="font-bold text-lg mb-3 tracking-widest uppercase">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal--scale">
               <div className="relative aspect-square md:aspect-[4/5] bg-gray-900 overflow-hidden shadow-2xl skew-y-1">
                 <Image src="/img/hero-1.png" alt="Brutalist Sustainable Architecture" fill className="object-cover opacity-60 grayscale" />
                 <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
                 <div className="absolute inset-0 flex items-center justify-center p-10">
                    <p className="font-serif text-3xl font-light italic leading-relaxed text-blue-100 text-center">
                      “We design to improve both the built and natural environments.”
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCE EFFICIENCY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
             <span className="rule mx-auto mb-6" />
             <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Resource Efficiency</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Focused on long-term sustainability through meticulous engineering and architectural logic.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Water Security', desc: 'Integrated rainwater harvesting and grey-water recycling systems.' },
              { label: 'Energy Sovereignty', desc: 'Solar-integrated designs and passive solar heating for winter months.' },
              { label: 'Carbon Logic', desc: 'Evaluating structural materials to minimise embodied carbon across the lifecycle.' },
            ].map(pillar => (
              <div key={pillar.label} className="p-10 border border-gray-100 hover:bg-gray-50 transition-colors group">
                <p className="text-blue-600 text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">{pillar.label}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Responsibly?"
        subtitle="Passive design and resource efficiency are integrated into every project from day one. Let's discuss your sustainable vision."
      />
    </>
  );
}
