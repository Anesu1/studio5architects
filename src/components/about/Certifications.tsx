"use client";

import Reveal from "@/components/ui/Reveal";

const awards = [
    { year: "2026", title: "Architects Council Registration", category: "Professional Practice" },
    { year: "2025", title: "Commercial Project Delivery Milestone", category: "Commercial" },
    { year: "2024", title: "Institutional & Medical Portfolio Growth", category: "Institutional" },
    { year: "2023", title: "Residential Design Expansion", category: "Residential" },
];

export default function Certifications() {
    return (
        <section className="py-24 bg-verdant-bg">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-6xl font-heading uppercase mb-12">Credentials & Milestones</h2>

                <div className="flex flex-col">
                    {awards.map((award, i) => (
                        <div key={i} className="border-t border-black/10 py-8 group hover:bg-white transition-colors duration-500 px-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <Reveal x={i % 2 === 0 ? -50 : 50}>
                                    <div className="flex items-baseline gap-4 md:gap-12">
                                        <span className="text-sm font-bold tracking-widest opacity-50">{award.year}</span>
                                        <h3 className="text-2xl md:text-4xl font-heading uppercase group-hover:ml-4 transition-all duration-300">
                                            {award.title}
                                        </h3>
                                    </div>
                                </Reveal>

                                <Reveal x={i % 2 === 0 ? 50 : -50} delay={0.1}>
                                    <span className="text-sm uppercase tracking-widest border border-black/20 rounded-full px-4 py-1 mt-4 md:mt-0 inline-block">
                                        {award.category}
                                    </span>
                                </Reveal>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
