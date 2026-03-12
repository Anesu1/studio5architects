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
const statuses = ["All", "Conceptualization", "Under Construction", "Completed"];

interface ProjectsContentProps {
    currentProjects: any[];
}

function ProjectsContent({ currentProjects }: ProjectsContentProps) {
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

    const filteredProjects = currentProjects.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesStatus = activeStatus === "All" || p.status === activeStatus;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesStatus && matchesSearch;
    });

    const getCount = (type: 'category' | 'status', value: string) => {
        if (value === "All") return currentProjects.length;
        return currentProjects.filter(p => 
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
            <div className="mb-20 space-y-12 max-w-7xl mx-auto">
                {/* Search Bar - More Integrated */}
                <div className="relative group flex items-center max-w-3xl mx-auto border-b border-black/10 focus-within:border-black transition-all duration-500">
                    <span className="text-black/30 group-focus-within:text-black transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="SEARCH PROJECTS BY NAME OR LOCATION..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent px-6 py-6 text-sm font-bold uppercase tracking-widest placeholder:text-black/20 focus:outline-none transition-all"
                    />
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="text-black/30 hover:text-black transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                
                {/* Responsive Filter System */}
                <div className="flex flex-col gap-10">
                    {/* Categories - Horizontal Scroll on Mobile */}
                    <div className="flex flex-col gap-5">
                        
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black/60 text-center md:text-left">Sector Selection</span>
                        <div className="flex overflow-x-auto no-scrollbar pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
                            <div className="flex md:flex-wrap items-center gap-x-10 gap-y-4 min-w-max md:min-w-0 mx-auto md:mx-0">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={clsx(
                                            "text-[12px] font-bold uppercase tracking-[0.2em] transition-all relative py-1 flex items-center gap-2 group whitespace-nowrap",
                                            activeCategory === cat
                                                ? "text-black"
                                                : "text-black/50 hover:text-black/80"
                                        )}
                                    >
                                        <span className={clsx(
                                            "w-1 h-1 rounded-full transition-all duration-500",
                                            activeCategory === cat ? "bg-black scale-125 shadow-[0_0_8px_rgba(0,0,0,0.3)]" : "bg-black/10 group-hover:bg-black/30"
                                        )} />
                                        {cat}
                                        <span className="ml-0.5 text-[8px] opacity-40 font-medium tracking-normal">({getCount('category', cat)})</span>
                                        {activeCategory === cat && (
                                            <motion.div 
                                                layoutId="activeCat"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black" 
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Status & Utilities Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between border-t border-black/5 pt-8 gap-8">
                        {/* Status Toggles */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black/60">Project Status</span>
                            <div className="flex flex-wrap justify-center gap-3">
                                {statuses.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setActiveStatus(s as any)}
                                        className={clsx(
                                            "text-[11px] font-bold uppercase tracking-widest transition-all px-6 py-2.5 rounded-full border flex items-center gap-2",
                                            activeStatus === s 
                                                ? "bg-black text-white border-black shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]" 
                                                : "text-black/60 border-black/20 hover:border-black/50 hover:text-black bg-white/50 backdrop-blur-sm"
                                        )}
                                    >
                                        {activeStatus === s && (
                                            <motion.div 
                                                layoutId="statusCircle"
                                                className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" 
                                            />
                                        )}
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Reset Filter Utility */}
                        {(activeCategory !== "All" || activeStatus !== "All" || searchQuery !== "") && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={resetFilters}
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors group"
                            >
                                <svg className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Clear All Parameters
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Results Info */}
            <div className="max-w-7xl mx-auto mb-12 flex justify-between items-end border-b border-black/5 pb-8">
                <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30">Showing Results</span>
                    <h3 className="text-xl font-heading uppercase">
                        {filteredProjects.length} {filteredProjects.length === 1 ? 'Record' : 'Architectural Records'}
                    </h3>
                </div>
                <div className="hidden md:block text-[9px] font-bold uppercase tracking-[0.2em] text-black/20">
                    Studio 5 Portfolio / {new Date().getFullYear()}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="min-h-[400px] max-w-7xl mx-auto">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-24">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.slug || project._id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="group"
                                    data-cursor-text="EXPLORE"
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
                                           {project.status && (
                                            <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest text-black shadow-sm">
                                                    {project.status}
                                                </span>
                                            </div>
                                           )} 
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

interface ProjectClientProps {
    initialProjects?: any[];
}

export default function ProjectClient({ initialProjects = projects }: ProjectClientProps) {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Projects"
                description="Good design blends comfort with necessity. We shape spaces around client lifestyle, project function, and realistic budget outcomes."
            />

            <Suspense fallback={<div className="py-20 text-center uppercase tracking-widest text-[10px] opacity-50">Loading Projects...</div>}>
                <ProjectsContent currentProjects={initialProjects} />
            </Suspense>

            <Footer />
        </main>
    );
}
