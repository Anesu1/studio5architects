'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/practice',       label: 'Practice' },
  { href: '/portfolio',      label: 'Portfolio' },
  { href: '/services',       label: 'Services' },
  { href: '/sectors',        label: 'Sectors' },
  { href: '/insights',       label: 'Insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-400 ${scrolled ? 'scrolled' : ''}`}
      style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/Studio-5-logo-wide-02.svg"
            alt="Studio5 Architects"
            width={160}
            height={40}
            className="h-5 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-[11px] tracking-widest uppercase font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="ml-4 text-white text-[11px] tracking-widest uppercase font-semibold px-6 py-2.5 transition-opacity hover:opacity-80"
            style={{ background: 'var(--blue)' }}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-600 p-1"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 py-7 space-y-5"
          style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.08)' }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-[11px] tracking-widest uppercase py-1.5 transition-colors ${
                pathname === href ? 'text-[#0A0A0A] font-semibold' : 'text-[#4B5563] hover:text-[#0A0A0A]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block text-white text-[11px] tracking-widest uppercase px-6 py-3 mt-2"
            style={{ background: 'var(--blue)' }}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
