"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const projects = [
    {
        title: "Hyundai Showroom",
        location: "Harare, Zimbabwe",
        image: "https://images.unsplash.com/photo-1614595737683-1740e41bfaac?fm=jpg&q=80&w=2670&auto=format&fit=crop",
        year: "2024",
    },
    {
        title: "MSS Factory",
        location: "Zimbabwe",
        image: "https://images.unsplash.com/photo-1554793000-245d3a3c2a51?fm=jpg&q=80&w=2670&auto=format&fit=crop",
        year: "2023",
    },
    {
        title: "UZ Quinary Hospital",
        location: "Harare, Zimbabwe",
        image: "https://images.unsplash.com/photo-1574848296471-28f79a036f79?fm=jpg&q=80&w=2670&auto=format&fit=crop",
        year: "2024",
    },
    {
        title: "Electra House",
        location: "Harare, Zimbabwe",
        image: "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?fm=jpg&q=80&w=2670&auto=format&fit=crop",
        year: "2022",
    },
];

export default function FeaturedProjects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <>
            <section className="bg-verdant-bg py-16 px-6 md:hidden">
                <h2 className="text-4xl font-heading uppercase leading-none mb-4">
                    Some Of Our
                    <br />
                    Best Work
                </h2>
                <p className="text-black/70 mb-8">
                    Good design blends comfort with necessity and responds to lifestyle, context, and budget.
                </p>
                <div className="space-y-6">
                    {projects.map((project) => (
                        <Link key={project.title} href="/projects" className="block group">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/15" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-2xl font-heading uppercase text-white">{project.title}</h3>
                                    <div className="mt-1 flex items-center justify-between text-xs uppercase tracking-wider text-white/80">
                                        <span>{project.location}</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link
                    href="/projects"
                    className="mt-8 inline-flex px-7 py-3 border border-black rounded-full uppercase text-xs font-bold tracking-widest"
                >
                    More Projects
                </Link>
            </section>

            <section ref={targetRef} className="relative h-[300vh] bg-verdant-bg hidden md:block">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-12 pl-12 md:pl-24">
                    <div className="flex flex-col justify-center min-w-[30vw] md:min-w-[20vw] pr-12">
                        <Reveal>
                            <h2 className="text-5xl md:text-7xl font-heading uppercase leading-none mb-6">
                                Some Of Our<br />Best Work
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="max-w-xs mb-8">
                                Good design blends comfort with necessity and responds to lifestyle, context, and budget.
                            </p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <Link
                                href="/projects"
                                className="inline-block px-8 py-4 border border-black rounded-full uppercase text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
                                data-cursor="hover"
                            >
                                More Projects
                            </Link>
                        </Reveal>
                    </div>

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[50vw] flex-shrink-0 group overflow-hidden"
                                data-cursor-text="View Project"
                            >
                                <Link href={`/projects`}>
                                    <div className="w-full h-full overflow-hidden relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-3xl font-heading uppercase text-white mb-1">{project.title}</h3>
                                        <div className="flex justify-between text-white/80 text-sm uppercase tracking-wider">
                                            <span>{project.location}</span>
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
