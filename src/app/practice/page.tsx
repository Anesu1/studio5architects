import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Practice',
  description:
    'Inside the architectural practice of Studio5. Established in Harare in 2014, we deliver architecture that expresses purpose across Zimbabwe.',
};

export default function PracticePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <div className="reveal">
            <span className="label mb-6 block text-blue-600">The Studio</span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#0A0A0A] leading-tight mb-8">
              Architecture<br />Built on<br />
              <em style={{ color: 'var(--blue)' }}>Intelligence.</em>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Studio5 Architects is an architectural practice specializing in research-led 
              design infrastructure. Based in Harare since 2014, we operate at the 
              intersection of technical rigour and geographical sensitivity.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE / RESEARCH ──────────────────────── */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="label mb-6 block">Intelligence & R&D</span>
              <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-8 leading-tight">
                Data-Driven Design Thinking.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Our Research and Development team explores the boundaries of computational 
                design, Building Information Modelling (BIM), and site performance metrics. 
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-4">
                   <span className="text-blue-600 font-bold">01.</span>
                   <p className="text-sm text-gray-600"><strong className="text-gray-900">Computational Design:</strong> We use algorithms to optimize solar orientation and ventilation for the Highveld climate.</p>
                </li>
                <li className="flex gap-4">
                   <span className="text-blue-600 font-bold">02.</span>
                   <p className="text-sm text-gray-600"><strong className="text-gray-900">Material Lab:</strong> Continuous testing of stabilized earth, local timber, and recycled aggregates.</p>
                </li>
                <li className="flex gap-4">
                   <span className="text-blue-600 font-bold">03.</span>
                   <p className="text-sm text-gray-600"><strong className="text-gray-900">Site Performance:</strong> Quantitative analysis of every built project to inform future iterations.</p>
                </li>
              </ul>
              <div className="flex gap-4">
                <div className="p-8 bg-white border border-gray-100 transition-transform hover:-translate-y-1 flex-1">
                  <p className="font-serif text-3xl font-bold text-blue-600 mb-2">BIM</p>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">
                    Full Integration
                  </p>
                </div>
                <div className="p-8 bg-white border border-gray-100 transition-transform hover:-translate-y-1 flex-1">
                  <p className="font-serif text-3xl font-bold text-blue-600 mb-2">AIAZ</p>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">
                    Accredited Studio
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal reveal--scale delay-200">
               <div className="bg-gray-200 aspect-[4/5] relative">
                  <img
                    src="/img/principles (1).webp"
                    alt="BIM modeling and data analysis"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-8 -right-8 p-10 bg-blue-600 text-white hidden lg:block">
                     <p className="text-xs uppercase tracking-widest mb-2 font-bold">Technical Focus</p>
                     <p className="font-serif text-2xl">Parametric<br />Optimization</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY MANIFESTO ─────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
             <span className="label mb-6 block">Sustainability Manifesto</span>
             <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-8 leading-tight">
                Net-Zero Architecture for the Highveld.
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed">
                By publishing our Sustainability Action Plan, we commit to transparency 
                and accountability in reducing the carbon footprint of the built environment 
                in Zimbabwe.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              { 
                title: 'Climate Responsive', 
                body: 'Passive cooling, natural ventilation, and honest materials integrated into the Highveld plateau landscape.',
                stat: '100%'
              },
              { 
                title: 'Social Impact', 
                body: 'We measure success by the positive impact on our communities — through pro-bono work and career mentorship.',
                stat: '12K+'
              },
              { 
                title: 'Carbon Logic', 
                body: 'Prioritizing low-embodied carbon materials: timber, stabilized earth, and local stone over imported glass.',
                stat: 'Net-Zero'
              },
            ].map(({ title, body, stat }) => (
              <div key={title} className="bg-white p-12 hover:bg-gray-50 transition-all">
                <p className="font-serif text-3xl font-bold text-blue-600 mb-4">{stat}</p>
                <h3 className="font-serif text-xl font-bold text-[#0A0A0A] mb-4">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATED PRACTICE ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <span className="label mb-6 block">Our Structure</span>
              <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-8 leading-tight">
                 Integrated Thinking.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                 We bring Architecture, Landscape, Interiors, and Research together to create sustainable, 
                 human-centred environments grounded in evidence, collaboration, and a profound respect for the land.
              </p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Architecture', desc: 'Crafting expressive structures rooted in context.' },
                { title: 'Landscape', desc: 'Integrating biodiversity and regional setting.' },
                { title: 'Interiors', desc: 'Human-centred environments with total cohesion.' },
                { title: 'Research', desc: 'Computational design and material innovation labs.' },
              ].map(({ title, desc }) => (
                <div key={title} className="text-center group">
                   <div className="w-16 h-16 bg-blue-600/5 group-hover:bg-blue-600 transition-colors duration-500 border border-blue-600/10 mx-auto flex items-center justify-center mb-6">
                      <span className="font-serif text-xl font-bold text-blue-600 group-hover:text-white transition-colors duration-500">
                         {title.charAt(0)}
                      </span>
                   </div>
                   <h3 className="font-serif text-xl font-semibold text-[#0A0A0A] mb-2">{title}</h3>
                   <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">Inclusive Discipline</p>
                   <p className="text-sm text-gray-500 leading-relaxed px-4">{desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── OUR APPROACH: THE FOUR PILLARS ──────────────── */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                 <span className="rule mb-6" />
                 <span className="label mb-4 block">Our Approach</span>
                 <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mb-8">
                    Rigour, Intelligence,<br />and <em style={{ color: 'var(--blue)' }}>Pragmatism.</em>
                 </h2>
                 <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    We believe the "perfect" solution is one that balances poetic aspiration with structural logic and financial reality.
                 </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                 {[
                   { title: 'Context-First Design', desc: 'Every project begins with a deep analysis of site, climate, and culture. We don’t impose a style; we respond to what is already there.' },
                   { title: 'Collaborative Process', desc: 'We view architecture as a collective journey. Our process thrives on cross-disciplinary teamwork and constant client engagement.' },
                   { title: 'Sustainability', desc: 'Passive design strategies and resource efficiency are integrated into every project from day one, reducing carbon footprint and operating costs.' },
                   { title: 'Buildability', desc: 'Our designs consider budget and materials from the outset. We work closely with contractors to ensure that bold ideas are also buildable.' },
                 ].map(({ title, desc }) => (
                   <div key={title} className="p-8 border border-gray-100 hover:border-blue-200 transition-colors bg-[#F9FAFB]">
                      <h3 className="font-bold text-[#0A0A0A] text-sm mb-3 uppercase tracking-widest">{title}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── PEOPLE & LEADERSHIP ─────────────────────────── */}
      <section id="people" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="rule mb-6" />
              <span className="label mb-4 block">Our Team</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-[1.1] mb-8">
                The Architects of <br /><em style={{ color: 'var(--blue)' }}>Progress.</em>
              </h2>
            </div>
            <Link href="/people" className="text-blue-600 text-[10px] font-bold tracking-[0.4em] uppercase border-b-2 border-blue-600/10 hover:border-blue-600 transition-all pb-2">
              Meet the Full Collective →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
             {[
               { name: 'Brighton Madondo', role: 'Principal Architect & Director', img: '/about/team/madondo.webp', bio: 'With over 12 years of experience in civic and residential architecture, Brighton focuses on the intersection of climate performance and structural honesty. He leads the studio’s research into Highveld-specific passive cooling.' },
               { name: 'Tapiwa Manditsera', role: 'Architect & Design Lead', img: '/about/team/manditsera.webp', bio: 'Tapiwa specializes in technical coordination and BIM implementation, ensuring that Studio5 designs are as efficient in their construction as they are in their architectural expression.' },
               { name: 'Tinashe Honde', role: 'Registered Architect', img: '/about/team/honde.webp', bio: 'Tinashe brings a multi-disciplinary perspective to the studio, integrating urban design principles into site-specific architectural solutions across diverse sectors.' },
             ].map(member => (
               <div key={member.name} className="reveal reveal--scale">
                  <div className="aspect-[4/5] bg-gray-100 mb-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-sm border border-gray-100">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-[10px] tracking-widest uppercase font-bold mb-6">{member.role}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed font-medium">{member.bio}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-32 bg-[#F4F5F7] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <span className="label mb-6 block text-blue-600">Client Feedback</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A]">Trust is our <em className="italic">primary</em> metric.</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-px bg-gray-300 border border-gray-300">
              {[
                { quote: 'Studio5 took our complex brief for the Civic Centre and transformed it into a space that feels both modern and deeply connected to its history.', author: 'Civic Development Board', project: 'Harare Centre' },
                { quote: 'The attention to climate-responsive detail in our home is remarkable. We rarely use artificial cooling, even in the peak of October.', author: 'Private Residential Client', project: 'Borrowdale' },
              ].map((t, i) => (
                <div key={i} className="bg-white p-20 flex flex-col justify-between">
                   <p className="text-gray-600 font-serif text-2xl leading-relaxed mb-12 italic opacity-80">“{t.quote}”</p>
                   <div>
                     <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#0A0A0A] mb-2">{t.author}</p>
                     <p className="text-[10px] text-blue-600 tracking-widest uppercase font-bold">{t.project} Case Study</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <CTASection 
        title="Thinking Beyond the Structures." 
        subtitle="Collaboration and technical rigour are at the heart of our practice. Let's discuss how we can bring your next vision to life." 
      />
    </>
  );
}
