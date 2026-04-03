'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import CTASection from '@/components/CTASection';

const PROJECTS = [
  { id: '1', title: 'Gweru Mall Expansion', sector: 'Commercial', year: '2023', location: 'Gweru', img: '/images/gweru-mall (1).webp' },
  { id: '2', title: 'Cell Insurance Headquarters', sector: 'Commercial', year: '2022', location: 'Harare', img: '/images/cell-insurance (1).webp'  },
  { id: '3', title: 'Glow Petroleum Precinct', sector: 'Commercial', year: '2021', location: 'Chitungwiza', img: '/images/glow-petroleum (1).webp'  },
  { id: '4', title: 'Hyundai Showroom', sector: 'Commercial', year: '2023', location: 'Harare', img: '/images/projects/hyndai/ezgif-frame-001.webp'  },
  { id: '5', title: 'National Sports Stadium Upgrade', sector: 'Civic', year: '2019', location: 'Harare', img: '/img/banner1.png' },
  { id: '6', title: 'Ruwa Township Masterplan', sector: 'Masterplanning', year: '2023', location: 'Ruwa', img: '/img/banner2.png' },
];

function ProjectContent({ id }: { id: string }) {
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  return (
    <>
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-blue-600 mb-10">
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <span>/</span>
            <span className="text-gray-400">{project.title}</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#0A0A0A] leading-tight mb-8">
            {project.title}
          </h1>
          
          <div className="grid md:grid-cols-4 gap-8 py-10 border-y border-gray-100 mb-16">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold mb-2">Location</p>
              <p className="text-sm font-medium">{project.location}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold mb-2">Sector</p>
              <p className="text-sm font-medium">{project.sector}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold mb-2">Year</p>
              <p className="text-sm font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold mb-2">Status</p>
              <p className="text-sm font-medium font-serif italic text-blue-600">Built Excellence</p>
            </div>
          </div>

          <div className="relative aspect-video bg-gray-100 overflow-hidden mb-20 shadow-2xl">
             <Image src={project.img} alt={project.title} fill className="object-cover" priority />
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
             <div className="lg:col-span-8 space-y-12">
                <div className="reveal">
                   <h2 className="font-serif text-3xl font-bold mb-6">Brief & Vision</h2>
                   <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-8">
                     “Our client required a space that defines the future of Zimbabwean architecture — 
                     rooted in the landscape but technically world-class.”
                   </p>
                   <p className="text-gray-500 text-sm leading-relaxed mt-8">
                      The core challenge was to create a thermally efficient volume that didn't sacrifice 
                      the dramatic views of the Highveld. Use of local stone as thermal mass and deep 
                      overhangs for sun control were the primary generators of form.
                   </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 reveal">
                   <div className="relative aspect-square bg-gray-50 overflow-hidden order-last md:order-first">
                      <Image src={project.img} alt="Process Detail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                   </div>
                   <div>
                      <h3 className="font-serif text-2xl font-bold mb-4">The Response</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        We responded with a tiered strategy, using computational design to optimize the 
                        roof line for the October heat. The building is designed to breathe naturally, 
                        eliminating the need for mechanical cooling in 90% of the year.
                      </p>
                      <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-xs font-bold text-gray-400 tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 bg-blue-600" /> Passive Solar Logic
                         </li>
                         <li className="flex items-center gap-3 text-xs font-bold text-gray-400 tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 bg-blue-600" /> Local Stone Construction
                         </li>
                         <li className="flex items-center gap-3 text-xs font-bold text-gray-400 tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 bg-blue-600" /> Integrated Landscape
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
             
             <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-10">
                <div className="p-10 bg-[#F4F5F7] border border-gray-100">
                   <h3 className="text-[10px] tracking-widest uppercase font-bold text-blue-600 mb-6">Performance Metric</h3>
                   <div className="space-y-6">
                      <div>
                         <p className="font-serif text-4xl font-bold text-gray-900 mb-1">40%</p>
                         <p className="text-[10px] tracking-widest uppercase text-gray-500">Energy Savings</p>
                      </div>
                      <div>
                         <p className="font-serif text-4xl font-bold text-gray-900 mb-1">100%</p>
                         <p className="text-[10px] tracking-widest uppercase text-gray-500">Local Procurement</p>
                      </div>
                   </div>
                </div>
                
                <div className="reveal">
                   <h3 className="font-serif text-xl font-bold mb-4 italic text-blue-900">&ldquo;A hallmark of regional excellence.&rdquo;</h3>
                   <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">— ACZ Award Citation</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Inspired by this Project?"
        subtitle="Let's discuss how we can bring same technical rigour and geographical sensitivity to your next project."
        ctaText="Start Your Journey"
      />
    </>
  );
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div className="pt-60 pb-40 text-center font-serif italic text-gray-400">Loading Project Details...</div>}>
      <ProjectContent id={params.id} />
    </Suspense>
  );
}
