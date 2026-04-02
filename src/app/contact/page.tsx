'use client';

import type { Metadata } from 'next';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';

// Note: metadata export doesn't work with 'use client' — handled via generateMetadata or moved to a parent
// Title is set via the layout default template

const inputClass =
  'form-input w-full text-[#0A0A0A] text-sm px-4 py-3.5 placeholder-gray-400 outline-none transition-all';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    // POST to API route
    try {
      const fd = new FormData(e.currentTarget);
      const body = {
        firstName: fd.get('firstName'),
        lastName:  fd.get('lastName'),
        email:     fd.get('email'),
        phone:     fd.get('phone'),
        company:   fd.get('company'),
        service:   fd.get('service'),
        budget:    fd.get('budget'),
        message:   fd.get('message'),
      };
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#F4F5F7', paddingTop: '96px' }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#0A0A0A] transition-colors">Home</Link>
            <span>—</span>
            <span style={{ color: 'var(--blue)' }}>Contact</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <span className="rule" />
              <span className="label">Get in Touch</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#0A0A0A] leading-[1.05] mt-4 mb-6">
                Start a<br />
                <em style={{ color: 'var(--blue)' }}>Conversation.</em>
              </h1>
              <p className="text-[#4B5563] text-base leading-relaxed max-w-lg">
                Whether you have a fully developed brief or are still exploring an idea, we are happy to talk.
                Initial consultations are free of charge and without obligation.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-end">
              {[
                { label: 'Response Time',         value: 'Within 1 Business Day' },
                { label: 'Initial Consultation',  value: 'Free & Without Obligation' },
                { label: 'Office Hours',           value: 'Mon – Fri, 8:00 – 17:00' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-5 pl-6 border-l-[3px] transition-all"
                  style={{ borderLeftColor: 'transparent' }}
                  onMouseEnter={e => (e.currentTarget.style.borderLeftColor = 'var(--blue-light)')}
                  onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
                >
                  <p className="text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">{label}</p>
                  <p className="text-[#0A0A0A] font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Contact + Form ── */}
      <section id="enquiry" style={{ background: '#FFFFFF' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: 'rgba(27,79,138,0.15)', border: '1px solid rgba(59,130,196,0.25)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--blue-light)' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-[#4B5563]">Studio Address</p>
                </div>
                <p className="text-[#0A0A0A] text-sm font-medium mb-1">5 Chaifont Road</p>
                <p className="text-[#4B5563] text-sm">Greencroft, Harare, Zimbabwe</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=5+Chaifont+Road,+Greencroft,+Harare,+Zimbabwe"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-[11px] tracking-widest uppercase font-medium transition-colors"
                  style={{ color: 'var(--blue)' }}
                >
                  Get Directions
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: 'rgba(27,79,138,0.15)', border: '1px solid rgba(59,130,196,0.25)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--blue-light)' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-[#4B5563]">Telephone</p>
                </div>
                <a href="tel:+263783934290" className="block text-[#0A0A0A] text-sm font-medium mb-1 hover:text-blue-700 transition-colors">0783 934 290</a>
                <a href="tel:+263719690587" className="block text-[#0A0A0A] text-sm font-medium hover:text-blue-700 transition-colors">0719 690 587</a>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: 'rgba(27,79,138,0.15)', border: '1px solid rgba(59,130,196,0.25)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--blue-light)' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-[#4B5563]">Email</p>
                </div>
                <a href="mailto:info@studio5architects.com" className="text-sm font-medium transition-colors hover:underline" style={{ color: 'var(--blue)' }}>
                  info@studio5architects.com
                </a>
              </div>

              {/* Office Hours */}
              <div style={{ background: '#F4F5F7', border: '1px solid rgba(0,0,0,0.08)' }} className="p-6">
                <p className="text-[10px] tracking-widest uppercase text-[#4B5563] mb-4">Office Hours</p>
                <div className="space-y-2.5">
                  {[
                    { day: 'Monday – Friday', hours: '08:00 – 17:00', closed: false },
                    { day: 'Saturday', hours: '08:00 – 13:00', closed: false },
                    { day: 'Sunday & Public Holidays', hours: 'Closed', closed: true },
                  ].map(({ day, hours, closed }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-[#4B5563]">{day}</span>
                      <span className={closed ? 'text-gray-400 font-medium' : 'text-[#0A0A0A] font-medium'}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#4B5563] mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {['LinkedIn', 'Instagram', 'Facebook'].map(name => (
                    <a key={name} href="#" aria-label={name}
                      className="w-9 h-9 flex items-center justify-center text-gray-500 transition-colors social-icon"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                    >
                      <span className="text-[10px]">{name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-3">
              <span className="label">Send an Enquiry</span>
              <h2 className="font-serif text-3xl font-bold text-[#0A0A0A] mt-3 mb-8">
                Tell Us About<br />Your Project.
              </h2>

              {status === 'sent' ? (
                <div style={{ background: 'rgba(27,79,138,0.06)', border: '1px solid rgba(27,79,138,0.2)' }} className="p-8 text-center">
                  <p className="font-serif text-2xl font-bold text-[#0A0A0A] mb-3">Thank you.</p>
                  <p className="text-[#4B5563] text-sm leading-relaxed">We&apos;ve received your enquiry and will respond within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">First Name *</label>
                      <input id="firstName" name="firstName" type="text" required placeholder="John" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" required placeholder="Doe" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="+263 77 000 0000" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Company / Organisation</label>
                    <input id="company" name="company" type="text" placeholder="Your company name (optional)" className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Service Required</label>
                      <select id="service" name="service" className={`${inputClass} appearance-none`}>
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
                      <label htmlFor="budget" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Approximate Budget</label>
                      <select id="budget" name="budget" className={`${inputClass} appearance-none`}>
                        <option value="">Select a range…</option>
                        <option>Under $50,000</option>
                        <option>$50,000 – $200,000</option>
                        <option>$200,000 – $500,000</option>
                        <option>$500,000 – $1M</option>
                        <option>Over $1M</option>
                        <option>To be determined</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] tracking-widest uppercase text-[#4B5563] mb-2">Project Brief</label>
                    <textarea
                      id="message" name="message" rows={6}
                      placeholder="Describe your project — type, location, approximate budget, and timescale…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-xs">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full text-white py-4 text-[11px] tracking-widest uppercase font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{ background: 'var(--blue)' }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                  </button>
                  <p className="text-[#4B5563] text-xs text-center">We respond to all enquiries within one business day.</p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
