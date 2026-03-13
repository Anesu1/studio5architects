"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/components/navigation/BackButton";
import { Project } from "@/lib/projects";
import clsx from "clsx";

interface ProjectHeroProps {
    project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
    const ease = [0.33, 1, 0.68, 1] as [number, number, number, number];

    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-verdant-bg border-b border-black/5">
            <div className="px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
                    <BackButton label="Back to Projects" />
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-black/30">Sector:</span>
                        <span className="text-xs font-bold text-black/60">{project.category}</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                        className="text-4xl sm:text-5xl md:text-6xl font-heading leading-[1.1] tracking-normal mb-8 text-black/90"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1, ease }}
                        className="text-lg md:text-xl text-black/50 leading-relaxed font-light max-w-2xl"
                    >
                        {project.summary}
                    </motion.p>
                </div>

                {/* Vitals Bar */}
                <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-black/5 pt-10">
                    {[
                        { label: "Location", value: project.location },
                        { label: "Year", value: project.year },
                        { label: "Status", value: project.status },
                        { label: "Sector", value: project.category }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                        >
                            <span className="text-xs font-bold tracking-wider text-black/20 block mb-2">{stat.label}</span>
                            <span className="text-sm font-medium text-black/70 block">{stat.value}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
