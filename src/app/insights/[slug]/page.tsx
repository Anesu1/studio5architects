import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: 'Insight Detail — Studio5',
  };
}

export default function InsightPost({ params }: { params: { slug: string } }) {
  return (
    <>
      <article className="pt-40 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-blue-600 mb-10">
            <Link href="/insights" className="hover:underline">Insights</Link>
            <span>/</span>
            <span className="text-gray-400 uppercase">Sustainability Research</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0A0A0A] leading-tight mb-8">
            Thermal Mass & The Highveld: Rethinking Passive Cooling in Harare.
          </h1>
          
          <div className="flex items-center gap-6 py-6 border-y border-gray-100 mb-12">
             <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                   <Image src="/img/team/brighton-madondo.jpg" alt="Author" fill className="object-cover" />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Brighton Madondo</p>
                   <p className="text-[10px] text-gray-400">Principal Architect</p>
                </div>
             </div>
             <div className="h-4 w-px bg-gray-100" />
             <p className="text-[10px] text-gray-400 uppercase tracking-widest">March 2026</p>
             <div className="h-4 w-px bg-gray-100" />
             <p className="text-[10px] text-gray-400 uppercase tracking-widest">8 Min Read</p>
          </div>

          <div className="relative aspect-video bg-gray-100 mb-12">
             <Image src="/img/banner1.png" alt="Insight Featured" fill className="object-cover shadow-2xl" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8 font-serif">
             <p className="text-xl font-medium text-gray-900 italic leading-relaxed">
                “Designing for the Zimbabwean plateau requires a deep understanding of its diurnal rhythms. 
                The heat of the day is often followed by a crisp, cool night — a delta that we can 
                architecturally exploit for cooling.”
             </p>
             
             <p>
                Harare's climate is one of the most temperate in the world, yet modern architectural 
                trends often lean towards heavily glazed envelopes that require excessive mechanical 
                cooling. In this piece, we explore how traditional thermal mass strategies can be 
                reinvented using contemporary material science.
             </p>

             <h2 className="text-2xl font-bold text-gray-900 pt-6">The Logic of Stone</h2>
             <p>
                By utilizing local granite and stabilized earth blocks, we create 'thermal batteries' 
                within our structures. These materials absorb solar heat during the peak of the day 
                and gradually release it during the cooler evening hours, maintaining a stable internal 
                mean temperature.
             </p>

             <div className="bg-[#F4F5F7] p-10 border-l-4 border-blue-600 my-12 not-prose">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Technical Takeaway</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                   Properly calculated thermal mass can reduce interior peak temperatures by up to 5-7°C 
                   on the Highveld without a single watt of electricity being used for cooling.
                </p>
             </div>

             <h2 className="text-2xl font-bold text-gray-900 pt-6">Future-Ready Practice</h2>
             <p>
                As we face a changing global climate, these 'low-tech' interventions represent the 
                most resilient and cost-effective way to build. Studio5 is currently prototyping 
                a new range of pre-cast masonry units that integrate thermal mass into a rapid 
                construction system.
             </p>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
             <div className="flex gap-4">
                {['Sustainability', 'Research', 'Regionalism'].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
                ))}
             </div>
             <Link href="/insights" className="text-blue-600 text-[10px] font-bold uppercase tracking-widest border-b border-blue-100 hover:border-blue-600">Back to Journal</Link>
          </div>
        </div>
      </article>

      <CTASection
        title="Thinking Beyond the Structures."
        subtitle="Our research informs every commission at Studio5. Let's discuss how we can apply these insights to your vision."
        ctaHref="/contact"
        ctaText="Collaborate with Us"
      />
    </>
  );
}
