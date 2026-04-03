import Link from 'next/link';
import Image from 'next/image';

const practiceNav = [
  { href: '/practice',       label: 'Our Practice' },
  { href: '/people',         label: 'Our People' },
  { href: '/services',       label: 'Expertise' },
  { href: '/sectors',        label: 'Sectors' },
  { href: '/portfolio',      label: 'Portfolio' },
];

const insightsNav = [
  { href: '/insights',       label: 'Insights' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/csr',            label: 'CSR' },
  { href: '/community',      label: 'Community' },
  { href: '/contact',        label: 'Connect' },
];

export default function Footer() {
  return (
    <footer className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Brand Area */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/img/Studio-5-logo-wide-white.svg"
                alt="Studio5 Architects"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-10">
              Studio5 is an award-winning architectural practice delivering design excellence 
              across Zimbabwe. We believe in architecture that connects people, place, and purpose.
            </p>
            <div className="flex gap-4">
              {[
                { label: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
                { label: 'Instagram', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/> }
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Practice */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-widest uppercase text-white font-bold mb-7">Practice</h4>
            <ul className="space-y-4">
              {practiceNav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation - Insights */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-widest uppercase text-white font-bold mb-7">Insights</h4>
            <ul className="space-y-4">
              {insightsNav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Area */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="text-[10px] tracking-widest uppercase text-white font-bold mb-7">Harare Studio</h4>
            <div className="space-y-6 text-sm text-gray-400">
              <div className="space-y-1">
                <p>5 Chaifont Road</p>
                <p>Greencroft, Harare</p>
                <p>Zimbabwe</p>
              </div>
              <div className="space-y-1">
                <p className="block">T: +263 783 934 290</p>
                <p className="block">E: info@studio5architects.com</p>
              </div>
              <p className="pt-6 border-t border-white/5 text-[10px] tracking-widest uppercase font-bold text-gray-500">
                Architects Council of Zimbabwe — Reg. 201405
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 font-mono">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
            <p className="text-gray-500 text-[10px] tracking-widest uppercase">
              © {new Date().getFullYear()} Studio5 Architects
            </p>
            <Link href="/privacy" className="text-gray-500 hover:text-white text-[10px] tracking-widest uppercase transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-[10px] tracking-widest uppercase transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-gray-500 text-[10px] tracking-widest uppercase">System Status: Operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
