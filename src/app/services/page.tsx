"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const services = [
    { title: "Interior Design", image: "https://images.unsplash.com/photo-1614595737476-42487331b8a1?fm=jpg&q=80&w=800&auto=format&fit=crop", slug: "interior-design" },
    { title: "Landscape Design", image: "https://images.unsplash.com/photo-1578803203370-8b000b589edd?fm=jpg&q=80&w=800&auto=format&fit=crop", slug: "landscape-design" },
    { title: "Feasibility Studies", image: "https://images.unsplash.com/photo-1543071293-d91175a68672?fm=jpg&q=80&w=800&auto=format&fit=crop", slug: "feasibility-studies" },
    { title: "Conceptualising", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fm=jpg&q=80&w=800&auto=format&fit=crop", slug: "conceptualising" },
    { title: "Project & Construction Management", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=80&w=800&auto=format&fit=crop", slug: "project-construction-management" },
    { title: "Architectural Planning", image: "https://images.unsplash.com/photo-1546349851-64285be8e9fa?fm=jpg&q=80&w=800&auto=format&fit=crop", slug: "architectural-planning" },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            {/* Hero */}
            <section className="pt-28 md:pt-32 pb-14 px-6 md:px-12">
                <Reveal>
                    <h1 className="text-5xl sm:text-6xl md:text-9xl font-heading uppercase leading-none mb-8 md:mb-12">Expertise<br />Services</h1>
                </Reveal>
                <p className="text-lg max-w-3xl text-black/70">
                    We provide interior design, landscape design, feasibility studies, conceptual development, and full project and construction management.
                </p>
            </section>

            {/* Bento Grid */}
            <section className="px-6 md:px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
                    {services.map((service, index) => (
                        <Link
                            href={`/services/${service.slug}`}
                            key={index}
                            className={clsx(
                                "group relative overflow-hidden border border-black/5 bg-gray-100 min-h-[300px] md:min-h-0",
                                // Custom bento layout pattern
                                index === 0 ? "md:col-span-2 md:row-span-2" :
                                    index === 4 ? "md:col-span-2 md:row-span-1" :
                                        "md:col-span-1 md:row-span-1"
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 p-6 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 w-full">
                                <div className="w-8 h-8 mb-2 text-white border border-white/30 rounded-full flex items-center justify-center">
                                    <ArrowUpRight size={16} />
                                </div>
                                <h3 className="text-white text-xl md:text-2xl font-heading uppercase tracking-widest">
                                    {service.title}
                                </h3>
                                <span className="text-white/60 text-xs uppercase tracking-widest block mt-1">
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}/{services.length}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
