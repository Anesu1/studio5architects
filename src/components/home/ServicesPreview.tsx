"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

const services = [
    { title: "Interior Design", slug: "interior-design", image: "/images/services/interior/interior (3).webp" },
    { title: "Landscape Design", slug: "landscape-design", image: "/images/services/landscape.webp" },
    { title: "Feasibility Studies", slug: "feasibility-studies", image: "/images/services/feasibility.webp" },
    { title: "Conceptualising", slug: "conceptualising", image: "/images/services/conceptualizing.webp" },
    { title: "Project & Construction Management", slug: "project-construction-management", image: "/images/services/manage.webp" },
];

export default function ServicesPreview() {

    return (
        <section className="py-24 bg-verdant-white">
            <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
                <Reveal>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading capitalize">Expertise</h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <Link href="/services" className="hidden md:block text-sm uppercase font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity">
                        View All Expertise
                    </Link>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[260px]">
                {services.map((service, index) => (
                    <Link
                        href={`/services/${service.slug}`}
                        key={index}
                        className={clsx(
                            "group relative overflow-hidden border border-black/5 bg-gray-100 min-h-[280px] md:min-h-0",
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
                            <h3 className="text-white text-xl md:text-2xl font-heading">
                                {service.title}
                            </h3>
                            <span className="text-white/60 text-xs uppercase tracking-widest block mt-1">{index + 1 < 10 ? `0${index + 1}` : index + 1}/{services.length}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
