"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

const services = [
    { title: "Interior Design", slug: "interior-design", image: "https://images.unsplash.com/photo-1614595737476-42487331b8a1?fm=jpg&q=80&w=800&auto=format&fit=crop" },
    { title: "Landscape Design", slug: "landscape-design", image: "https://images.unsplash.com/photo-1578803203370-8b000b589edd?fm=jpg&q=80&w=800&auto=format&fit=crop" },
    { title: "Feasibility Studies", slug: "feasibility-studies", image: "https://images.unsplash.com/photo-1543071293-d91175a68672?fm=jpg&q=80&w=800&auto=format&fit=crop" },
    { title: "Conceptualising", slug: "conceptualising", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fm=jpg&q=80&w=800&auto=format&fit=crop" },
    { title: "Project & Construction Management", slug: "project-construction-management", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=80&w=800&auto=format&fit=crop" },
    { title: "Architectural Planning", slug: "architectural-planning", image: "https://images.unsplash.com/photo-1546349851-64285be8e9fa?fm=jpg&q=80&w=800&auto=format&fit=crop" },
];

export default function ServicesPreview() {

    return (
        <section className="py-24 bg-verdant-white">
            <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
                <Reveal>
                    <h2 className="text-5xl md:text-7xl font-heading uppercase">Expertise</h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <Link href="/services" className="hidden md:block text-sm uppercase font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity">
                        View All Expertise
                    </Link>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
                {services.map((service, index) => (
                    <Link
                        href={`/services/${service.slug}`}
                        key={index}
                        className={clsx(
                            "group relative overflow-hidden border border-black/5 cursor-none bg-gray-100",
                            index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1",
                            // Make the 4th item span 2 columns if strictly following a specific bento, 
                            // but for 6 items in 4x2 grid:
                            // Item 0: 2x2
                            // Item 1: 1x1
                            // Item 2: 1x1
                            // Item 3: 1x1
                            // Item 4: 1x1
                            // We have 6 items. 
                            // Let's try a different pattern:
                            // 0: 2x2
                            // 1: 1x1
                            // 2: 1x1
                            // 3: 1x1
                            // 4: 1x1
                            // 5... wait 2x2 takes 4 spots. Total slots in 4x2 = 8.
                            // We have 6 items. 4 + 1 + 1 + 1 + 1 = 8 slots? No 2x2 is 4 slots.
                            // So Item 0 (4 slots) + Item 1 (1) + Item 2 (1) + Item 3 (1) + Item 4 (1) = 8.
                            // That leaves Item 5.
                            // Let's adjust grid to be flexible or hardcode classes for 6 items.
                            // Let's go with a responsive masonry-like or just alternating spans.
                            index === 0 || index === 5 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
                        )}
                        data-cursor="hover"
                        data-cursor-text="View Service"
                        data-cursor-type="pill"
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full">
                            <div className="w-8 h-8 mb-2 text-white border border-white/30 rounded-full flex items-center justify-center">
                                <ArrowUpRight size={16} />
                            </div>
                            <h3 className="text-white text-xl md:text-2xl font-heading uppercase tracking-widest">
                                {service.title}
                            </h3>
                            <span className="text-white/60 text-xs uppercase tracking-widest block mt-1">0{index + 1}/{services.length}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
