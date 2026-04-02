import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Studio5 Architects — Designing Spaces Where Humanity Can Thrive',
};

const pillars = [
  {
    title: 'Attention to Detail',
    body: 'Every material, junction, and proportion is deliberate. The quality of a building is ultimately the sum of its smallest decisions — and we never lose sight of that.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />,
  },
  {
    title: 'Client-Centred',
    body: 'We listen before we design. Understanding the full picture — budget, timeline, lifestyle, aspiration — allows us to deliver outcomes that genuinely exceed expectations.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />,
  },
  {
    title: 'Environmentally Responsible',
    body: 'Climate-responsive design, locally sourced materials, and construction waste reduction are not add-ons — they are embedded in our process from day one.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />,
  },
  {
    title: 'Socially Responsible',
    body: 'We measure our success not just in completed projects but in the lasting benefit we create for communities, emerging professionals, and the built environment of Zimbabwe.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 5.49Z" />,
  },
];

const stats = [
  { value: '10+', label: 'Years of Practice', sub: 'Est. Harare, 2014' },
  { value: '180+', label: 'Projects Completed', sub: 'Across all sectors' },
  { value: '12', label: 'Industry Awards', sub: 'National & regional' },
  { value: '18', label: 'Professional Staff', sub: 'Architects, designers, PMs' },
];

const services = [
  {
    title: 'Architectural Design',
    body: 'Our core offering — from concept through to detailed construction documentation. We work at every scale, bringing design intelligence and technical rigour to every commission.',
    bullets: ['Concept & schematic design', 'Design development & documentation', 'Planning & statutory approvals'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />,
  },
  {
    title: 'Interior Architecture',
    body: 'Interiors that are a natural extension of the architecture — not an afterthought. We design spaces from the inside out, balancing aesthetics, functionality, and the lived experience.',
    bullets: ['Corporate & hospitality fitout', 'Private residential interiors', 'FF&E specification & sourcing'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />,
  },
  {
    title: 'Heritage & Conservation',
    body: 'Historic structures carry stories worth protecting. We work sensitively with existing fabric — respecting its character while finding ways to make it viable and relevant for the present day.',
    bullets: ['Conservation management plans', 'Adaptive reuse design', 'NMMZ approvals liaison'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />,
  },
  {
    title: 'Urban & Landscape Design',
    body: 'Great buildings need great settings. We design the spaces between and around structures — streets, courtyards, public plazas, and landscapes — with the same care as the buildings themselves.',
    bullets: ['Site master planning', 'Public space & streetscape', 'Environmental impact assessment'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />,
  },
  {
    title: 'Feasibility & Advisory',
    body: 'The most valuable investment before breaking ground. We help clients understand what a site can carry, what planning constraints apply, and what a project will realistically cost.',
    bullets: ['Development potential assessment', 'Zoning & planning compliance', 'Preliminary cost estimates'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />,
  },
];

const sectors = [
  { title: 'Residential', body: 'From carefully considered private homes to cluster housing and high-density developments — designed for the way people actually live.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /> },
  { title: 'Commercial & Office', body: 'Workplaces designed to attract, retain, and inspire — from Grade-A office towers to business parks and corporate headquarters.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /> },
  { title: 'Civic & Institutional', body: 'Buildings that represent public institutions deserve a standard that reflects their importance — government facilities, embassies, courts, and civic centres.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /> },
  { title: 'Education', body: 'Learning environments that encourage curiosity, focus, and wellbeing — schools, university facilities, libraries, and early childhood centres.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342" /> },
  { title: 'Healthcare', body: 'Healthcare facilities designed with patient dignity and clinical efficiency in equal measure — from rural health clinics to specialist medical centres.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /> },
  { title: 'Heritage & Hospitality', body: 'Hotels, lodges, and tourism facilities authentic to their setting — alongside sensitive restoration of Zimbabwe\'s historic and culturally significant structures.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" /> },
];

const approachSteps = [
  { num: '01', title: 'Listen & Understand', body: 'Every engagement starts with listening. We invest time in understanding not just the programme and budget, but the motivation and aspiration behind the project.' },
  { num: '02', title: 'Explore & Concept', body: 'We explore broadly before committing. Multiple design directions are tested against context, site, programme, and budget before we converge on the best concept.' },
  { num: '03', title: 'Develop & Document', body: 'The approved concept is developed into fully coordinated technical documentation. Clear, complete drawings reduce surprises on site.' },
  { num: '04', title: 'Procure & Appoint', body: 'We manage the full tender process — pre-qualifying contractors, analysing submissions, and advising on appointment.' },
  { num: '05', title: 'Build & Administer', body: 'Regular site inspections, proactive contract administration, and careful cost management ensure the building is built as designed — on time.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section id="hero" style={{ background: '#FFFFFF', paddingTop: '72px' }} className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            <div>
              <span className="label mb-6 block tracking-[0.4em]">Practice • Est. 2014</span>
              <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-bold text-[#0A0A0A] leading-[1.05] tracking-tight mb-10">
                Architecture that<br />Expresses <em style={{ color: 'var(--blue)' }} className="italic">Purpose.</em>
              </h1>
              <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed max-w-xl mb-12">
                Studio5 Architects creates spaces that interact sympathetically with their surroundings,
                delivering design excellence through technical rigour and architectural conviction.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/portfolio" className="btn-primary">View Portfolio</Link>
                <Link href="/practice" className="btn-outline border-none !px-0 flex items-center gap-3 group">
                  Our Practice
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="hero-img-wrap rounded-none shadow-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <img src="/img/hero-image.jpg" alt="Harare Architectural Design" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-black p-8 text-white hidden lg:block">
                <p className="text-[10px] tracking-widest uppercase mb-2 text-blue-400">Featured Project</p>
                <p className="font-serif text-xl">Harare Civic<br />Centre Expansion</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" style={{ background: 'var(--white)', color: 'var(--black)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-5">
              <span className="rule" style={{ background: 'var(--blue)' }} />
              <span className="label" style={{ color: 'var(--blue)' }}>About the Practice</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mt-4" style={{ color: 'var(--black)' }}>
                Architecture That<br />Expresses Purpose.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <p className="text-[#374151] text-base leading-relaxed mb-5">
                Studio5 Architects is a full-service practice built on the conviction that architecture is most powerful when it grows from its context — from the climate, the community, the brief, and the site.
                Founded in Harare, we bring together registered architects, designers, and project managers united by a singular commitment: buildings that serve people with intelligence and integrity.
              </p>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                We work at every scale — from intimate private residences to large civic and commercial commissions. Every project receives the same rigorous design thinking, precise technical execution, and close client collaboration.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`p-8 group hover:bg-gray-50 transition-colors ${i < 3 ? 'border-r border-gray-200' : ''}`}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: 'var(--blue-dim)', border: '1px solid rgba(27,79,138,0.2)' }}>
                  <svg className="w-5 h-5" style={{ color: 'var(--blue)' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">{p.icon}</svg>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--black)' }}>{p.title}</h3>
                <p className="text-[#4B5563] text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <div style={{ background: 'var(--blue)' }} className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
            {stats.map(({ value, label, sub }) => (
              <div key={label}>
                <p className="font-serif text-5xl font-bold text-white leading-none mb-2">{value}</p>
                <p className="text-blue-200 text-xs tracking-widest uppercase">{label}</p>
                <p className="text-blue-200/70 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <section id="services" style={{ background: '#FFFFFF' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="rule" style={{ background: 'var(--blue)' }} />
              <span className="label" style={{ color: 'var(--blue)' }}>What We Do</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mt-4" style={{ color: 'var(--black)' }}>
                Services &amp;<br />Capabilities
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6 flex items-end">
              <p className="text-[#4B5563] text-sm leading-relaxed">
                From initial concept to construction completion, Studio5 provides a comprehensive range of architectural and project management services tailored to each client&apos;s unique requirements.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map(({ title, body, bullets, icon }) => (
              <div key={title} className="service-card p-8">
                <div className="card-icon w-12 h-12 flex items-center justify-center mb-6" style={{ background: 'rgba(27,79,138,0.15)', border: '1px solid rgba(59,130,196,0.25)' }}>
                  <svg className="w-5 h-5" style={{ color: 'var(--blue-light)' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="font-semibold text-[#0A0A0A] mb-3">{title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-5">{body}</p>
                <ul className="space-y-1.5">
                  {bullets.map(b => (
                    <li key={b} className="text-xs text-[#6B7280] flex gap-2">
                      <span style={{ color: 'var(--blue)' }}>—</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* P&CM highlight card */}
            <div className="p-8 relative overflow-hidden" style={{ background: 'var(--blue)' }}>
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center mb-6 bg-white/10 border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
                </div>
                <h3 className="font-semibold text-white mb-3">Project &amp; Construction Management</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">We act as your single point of accountability from procurement through to handover — managing contractors, controlling costs, and ensuring the building you receive matches the building you approved.</p>
                <Link href="#approach" className="inline-flex items-center gap-2 text-white text-[11px] tracking-widest uppercase font-semibold border-b border-white/40 pb-0.5 hover:border-white transition-colors">
                  See Our Process
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section id="sectors" style={{ background: 'var(--grey-bg)', color: 'var(--black)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <span className="rule" style={{ background: 'var(--blue)' }} />
              <span className="label" style={{ color: 'var(--blue)' }}>Where We Work</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mt-4" style={{ color: 'var(--black)' }}>
                Sectors &amp;<br />Project Types
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6 flex items-end">
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Studio5 operates across the full range of building typologies in Zimbabwe. Our depth of experience across diverse sectors means we bring genuinely applicable precedent knowledge to every commission.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sectors.map(({ title, body, icon }) => (
              <div key={title} className="sector-card bg-white p-7">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center" style={{ background: 'var(--blue-dim)', border: '1px solid rgba(27,79,138,0.2)' }}>
                    <svg className="w-5 h-5" style={{ color: 'var(--blue)' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--black)' }}>{title}</h3>
                    <p className="text-[#4B5563] text-xs leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section id="approach" style={{ background: '#F4F5F7' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <span className="rule" />
              <span className="label">How We Work</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight mt-4">
                Our Approach to<br />Every Commission
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-6 flex items-end">
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Our process is structured, transparent, and deeply collaborative. From first contact to final handover, clients know exactly where their project stands and what comes next.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.07)' }}>
            {approachSteps.map(({ num, title, body }) => (
              <div key={num} style={{ background: '#FFFFFF' }} className="p-10 hover:bg-gray-50 transition-colors group">
                <p className="step-num mb-4">{num}</p>
                <h3 className="font-semibold text-[#0A0A0A] mb-3 group-hover:text-blue-700 transition-colors">{title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
            <div style={{ background: 'var(--blue)' }} className="p-10 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative z-10">
                <p className="step-num mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>06</p>
                <h3 className="font-semibold text-white mb-3">Complete &amp; Sustain</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Handover is not the end of our relationship. Post-occupation reviews, defects management, and long-term availability to our clients reflect the lasting commitment we make to every project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSR Band ── */}
      <div style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="label">Corporate Social Responsibility</span>
              <h3 className="font-serif text-3xl font-bold text-[#0A0A0A] mt-3 mb-3">We Build Beyond Buildings.</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Studio5 invests in the communities and profession it serves — through pro-bono design work, university scholarships, environmental stewardship, and local procurement.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { val: '12+', label: 'CSR Initiatives', blue: true },
                { val: '4',   label: 'University Partners', blue: false },
                { val: '100%', label: 'Local Procurement', blue: true },
              ].map(({ val, label, blue }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-4xl font-bold mb-1" style={{ color: blue ? 'var(--blue)' : 'var(--black)' }}>{val}</p>
                  <p className="text-[#4B5563] text-xs tracking-widest uppercase">{label}</p>
                </div>
              ))}
              <div className="flex items-center">
                <Link href="/csr" style={{ background: 'var(--blue)' }} className="text-white text-[11px] tracking-widest uppercase font-semibold px-7 py-3.5 hover:opacity-90 transition-opacity flex items-center gap-2">
                  Read Our CSR Report
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact ── */}
      <section id="contact" style={{ background: '#F4F5F7' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <span className="rule" />
              <span className="label">Start a Conversation</span>
              <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] leading-tight mt-4 mb-6">
                Let&apos;s Build<br /><em style={{ color: 'var(--blue)' }}>Something Great.</em>
              </h2>
              <p className="text-[#374151] text-sm leading-relaxed mb-10">
                Whether you have a fully developed brief or are still turning an idea over, we welcome the conversation. Initial consultations are free of charge, without obligation, and often the most valuable hour of a project.
              </p>
              <div className="space-y-7">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-1.5">Studio Address</p>
                  <p className="text-[#0A0A0A] text-sm">5 Chaifont Road</p>
                  <p className="text-[#4B5563] text-sm">Greencroft, Harare, Zimbabwe</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-1.5">Contact</p>
                  <p className="text-[#0A0A0A] text-sm">0783 934 290</p>
                  <p className="text-[#4B5563] text-sm">0719 690 587</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-1.5">Email</p>
                  <p className="text-[#0A0A0A] text-sm">info@studio5architects.com</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form className="space-y-5" action="/contact" method="get">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">First Name *</label>
                    <input type="text" required placeholder="John" className="w-full text-[#0A0A0A] text-sm px-4 py-3.5 placeholder-gray-400 outline-none transition-all form-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Last Name *</label>
                    <input type="text" required placeholder="Doe" className="w-full text-[#0A0A0A] text-sm px-4 py-3.5 placeholder-gray-400 outline-none transition-all form-input" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Email *</label>
                    <input type="email" required placeholder="john@company.com" className="w-full text-[#0A0A0A] text-sm px-4 py-3.5 placeholder-gray-400 outline-none form-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Phone</label>
                    <input type="tel" placeholder="+263 77 000 0000" className="w-full text-[#0A0A0A] text-sm px-4 py-3.5 placeholder-gray-400 outline-none form-input" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Service Required</label>
                  <select className="w-full text-gray-500 text-sm px-4 py-3.5 outline-none appearance-none form-input">
                    <option value="">Select a service…</option>
                    <option>Architectural Design</option>
                    <option>Interior Architecture</option>
                    <option>Project &amp; Construction Management</option>
                    <option>Urban &amp; Landscape Design</option>
                    <option>Heritage &amp; Conservation</option>
                    <option>Feasibility &amp; Advisory</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Project Brief</label>
                  <textarea rows={5} placeholder="Describe your project — type, location, approximate budget, and timescale…" className="w-full text-[#0A0A0A] text-sm px-4 py-3.5 placeholder-gray-400 outline-none resize-none form-input" />
                </div>
                <Link href="/contact" className="block w-full text-white py-4 text-[11px] tracking-widest uppercase font-semibold text-center transition-opacity hover:opacity-90" style={{ background: 'var(--blue)' }}>
                  Submit Enquiry
                </Link>
                <p className="text-[#4B5563] text-xs text-center">We respond to all enquiries within one business day.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
