import type { Metadata } from 'next';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Services & Expertise — Holistic Design Solutions',
  description:
    'Studio5 Architects provides multidisciplinary services including Architecture, Interior Design, Landscape, Feasibility, and Construction Management in Zimbabwe.',
};

const SERVICES = [
  {
    title: 'Architectural Design',
    body: 'Our core offering — from concept through to detailed construction documentation.',
    benefits: 'Designing expressive structures that maximize light, space and functionality while minimising environmental impact.',
    process: 'Research > Schematic Design > Design Development > Documentation > Statutory Approvals.',
    valueAdd: 'We integrate climate-responsive design into every schematic to ensure long-term sustainability.',
  },
  {
    title: 'Interior Architecture & Design',
    body: 'Human-centred spaces that are a natural extension of the architecture.',
    benefits: 'Enhances occupant comfort, staff productivity and reflects corporate or private identity.',
    process: 'Concept Creation > Space Planning > Material & FF&E Selection > Detailed Tailoring.',
    valueAdd: 'We specify local artisans and materials to ensure a unique, authentic, and sustainable finish.',
  },
  {
    title: 'Landscape & Ecological Design',
    body: 'Integrating biodiversity and regional setting for resilient environments.',
    benefits: 'Improves thermal performance of structures and promotes local biodiversity.',
    process: 'Site Hydrology Study > Flora Selection > Groundplane Integration > Implementation Strategy.',
    valueAdd: 'We design with endemic species to ensure low-maintenance and high climate resilience.',
  },
  {
    title: 'Feasibility & Strategy',
    body: 'The most valuable investment before breaking ground.',
    benefits: 'Reduces financial risk by uncovering site potential and planning constraints before investment.',
    process: 'Zoning Analysis > Massing Study > Preliminary Costing > SWOT Analysis.',
    valueAdd: 'Our intelligence-led approach identifies regulatory loopholes and density opportunities.',
  },
  {
    title: 'Project & Construction Management',
    body: 'A single point of accountability from procurement to handover.',
    benefits: 'Guarantees that the building is delivered on time, within budget, and to the specified quality.',
    process: 'Tendering > Contractor Selection > Site Administration > Quality Assurance > Handover.',
    valueAdd: 'We act as the client’s advocate, ensuring that technical rigour is maintained through every build stage.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal">
            <span className="label mb-6 block">Our Capabilities</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              Holistic Solutions for<br />
              <em style={{ color: 'var(--blue)' }}>Progressive Builders.</em>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              We offer the sophistication of a boutique studio combined with the management 
              capabilities of a highly experienced firm. Our multidisciplinary approach 
              ensures total cohesion at every scale.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="py-24 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white p-12 border border-gray-100 shadow-sm reveal">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <span className="label mb-4 block" style={{ color: 'var(--blue)' }}>Major Service</span>
                    <h2 className="font-serif text-3xl font-bold text-[#0A0A0A] mb-6">{s.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">{s.body}</p>
                    <div className="p-6 bg-blue-50/50 border-l-4 border-blue-600">
                       <p className="text-[10px] tracking-widest uppercase font-bold text-blue-600 mb-2">Benefit</p>
                       <p className="text-sm text-gray-700 leading-relaxed font-semibold">{s.benefits}</p>
                    </div>
                  </div>
                  <div className="space-y-8 lg:border-l lg:pl-12 border-gray-100">
                    <div className="space-y-3">
                       <p className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Collaborative Process</p>
                       <p className="text-sm text-gray-500 leading-relaxed">{s.process}</p>
                    </div>
                    <div className="space-y-3">
                       <p className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Value-Add</p>
                       <p className="text-sm text-gray-500 leading-relaxed">{s.valueAdd}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR SPECIALISATIONS grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <span className="label mb-6 block">Our Expertise</span>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Sector Specialisations</h2>
              <p className="text-gray-500 text-sm tracking-widest uppercase font-bold">Zimbabwe Context Experts</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-100 border border-gray-100">
             {['Healthcare', 'Education', 'Civic', 'Heritage', 'Commercial', 'Residential'].map(sector => (
               <div key={sector} className="bg-white p-6 text-center hover:bg-blue-50 transition-colors group">
                  <p className="text-[10px] tracking-widest uppercase font-bold text-gray-400 group-hover:text-blue-600 transition-colors">{sector}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <CTASection
        title="Thinking Beyond the Structures."
        subtitle="Our multidisciplinary approach ensures total cohesion at every scale. Let's discuss your next project."
      />
    </>
  );
}
