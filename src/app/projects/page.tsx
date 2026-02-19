"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { projects } from "@/lib/projects";
import PageHero from "@/components/ui/PageHero";

const categories = ["All", "Commercial", "Industrial", "Institutional", "Medical", "Residential"];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Projects"
                description="Good design blends comfort with necessity. We shape spaces around client lifestyle, project function, and realistic budget outcomes."
            />

            <section className="pb-12 px-6 md:px-12">
                {/* Filter Tabs */}
                <div className="mb-16 border-b border-black/10 pb-4 overflow-x-auto">
                    <div className="flex min-w-max gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={clsx(
                                "rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors",
                                activeCategory === cat
                                    ? "border-black bg-black text-white"
                                    : "border-black/20 text-black/60 hover:border-black/40 hover:text-black"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group"
                                data-cursor-text="View"
                            >
                                <Link href={`/projects/${project.slug}`} className="block">
                                    <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>
                                    <div className="flex justify-between items-end border-b border-black/10 pb-4 group-hover:border-black transition-colors duration-300">
                                        <div>
                                            <h2 className="text-2xl font-heading uppercase mb-1">{project.title}</h2>
                                            <p className="text-xs uppercase tracking-widest opacity-50">{project.category}</p>
                                        </div>
                                        <span className="text-xs uppercase tracking-widest opacity-50">{project.location}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}
