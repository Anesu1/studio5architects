"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { projects } from "@/lib/projects";
import PageHero from "@/components/ui/PageHero";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";

const categories = ["All", "Commercial", "Industrial", "Institutional", "Medical", "Residential"];
const statuses = ["All", "Completed", "In Progress"];

function ProjectsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeStatus, setActiveStatus] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Update category when URL param changes (e.g. from navbar)
    useEffect(() => {
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [categoryParam]);

    const filteredProjects = projects.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesStatus = activeStatus === "All" || p.status === activeStatus;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesStatus && matchesSearch;
    });

    const getCount = (type: 'category' | 'status', value: string) => {
        if (value === "All") return projects.length;
        return projects.filter(p => 
            type === 'category' ? p.category === value : p.status === value
        ).length;
    };

    const resetFilters = () => {
        setActiveCategory("All");
        setActiveStatus("All");
        setSearchQuery("");
    };

    return (
        <section className="pb-24 px-6 md:px-12">
            {/* Search and Filters Bar */}
            <div className="mb-20 space-y-10">
                {/* Search Row */}
                <div className="relative group max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/50 backdrop-blur-sm border-b border-black/10 px-0 py-6 text-xl md:text-2xl font-heading uppercase placeholder:text-black/20 focus:outline-none focus:border-black transition-all text-center"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black group-focus-within:w-full transition-all duration-700" />
                </div>
                
                {/* Filters Row */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={clsx(
                                    "text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-1",
                                    activeCategory === cat
                                        ? "text-black"
                                        : "text-black/30 hover:text-black/60"
                                )}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div 
                                        layoutId="activeCat"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-black" 
                                    />
                                )}
                                <span className="ml-1.5 text-[8px] opacity-40 font-medium">({getCount('category', cat)})</span>
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:block w-px h-4 bg-black/10" />

                    {/* Status Toggles */}
                    <div className="flex gap-6">
                        {statuses.map((s) => (
                            <button
                                key={s}
                                onClick={() => setActiveStatus(s as any)}
                                className={clsx(
                                    "text-[10px] font-bold uppercase tracking-widest transition-all px-4 py-1.5 rounded-full border",
                                    activeStatus === s 
                                        ? "bg-black text-white border-black shadow-sm" 
                                        : "text-black/40 border-black/5 hover:border-black/20 hover:text-black"
                                )}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                    className="group"
                                    data-cursor-text="View Project"
                                >
                                    <Link href={`/projects/${project.slug}`} className="block">
                                        <div className="relative aspect-[16/10] overflow-hidden mb-8 rounded-3xl bg-gray-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-black/10">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                            <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest text-black shadow-sm">
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-start border-b border-black/5 pb-6 group-hover:border-black/20 transition-colors duration-500">
                                            <div>
                                                <h2 className="text-3xl font-heading uppercase mb-2 group-hover:tracking-tight transition-all duration-500">{project.title}</h2>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{project.category}</span>
                                                    <span className="w-1 h-1 rounded-full bg-black/10" />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{project.year}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 block mb-1">Location</span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-black">{project.location}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center py-32 text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center mb-8">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h3 className="text-2xl font-heading uppercase text-black mb-4">No projects found</h3>
                            <p className="text-black/50 max-w-sm mb-8">We couldn't find any projects matching your current filters or search query.</p>
                            <button
                                onClick={resetFilters}
                                className="px-8 py-3 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default function ProjectClient() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Projects"
                description="Good design blends comfort with necessity. We shape spaces around client lifestyle, project function, and realistic budget outcomes."
            />

            <Suspense fallback={<div className="py-20 text-center uppercase tracking-widest text-[10px] opacity-50">Loading Projects...</div>}>
                <ProjectsContent />
            </Suspense>

            <Footer />
        </main>
    );
}
