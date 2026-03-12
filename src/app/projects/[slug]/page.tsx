import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getProjects } from "@/lib/projects";
import ProjectScrollSequence from "@/components/projects/ProjectScrollSequence";
import BackButton from "@/components/navigation/BackButton";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ProjectDetailProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export async function generateStaticParams() {
    const allProjects = await getProjects();
    return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug;

    if (!slug) notFound();

    const project = await getProjectBySlug(slug);
    if (!project) notFound();

    const allProjects = await getProjects();
    const currentIndex = allProjects.findIndex(p => p.slug === project.slug);
    const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
    const relatedProjects = allProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            {/* Premium Header Section */}
            <section className="px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
                <BackButton label="BACK TO PORTFOLIO" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Detailed View</span>
                            <div className="h-px w-12 bg-black/10" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">{project.category}</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading uppercase leading-[0.9] tracking-tighter mb-10">
                            {project.title}
                        </h1>
                    </div>
                    
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-light italic border-l-2 border-black/5 pl-8 py-4">
                            {project.summary}
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Vitals / Stats */}
            <section className="px-6 md:px-12 pb-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 border border-black/5 bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm">
                    <div className="p-8 md:p-12 border-r border-b md:border-b-0 border-black/5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-black/30 block mb-4">Location</span>
                        <p className="text-sm font-bold uppercase tracking-wider">{project.location}</p>
                    </div>
                    <div className="p-8 md:p-12 border-r border-b md:border-b-0 border-black/5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-black/30 block mb-4">Year</span>
                        <p className="text-sm font-bold uppercase tracking-wider">{project.year}</p>
                    </div>
                    <div className="p-8 md:p-12 border-r border-black/5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-black/30 block mb-4">Sector</span>
                        <p className="text-sm font-bold uppercase tracking-wider">{project.category}</p>
                    </div>
                    <div className="p-8 md:p-12">
                        <span className="text-[9px] font-black uppercase tracking-widest text-black/30 block mb-4">Status</span>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                            <p className="text-sm font-bold uppercase tracking-wider">{project.status}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Immersive Visual Section */}
            <section className="px-0 pt-0 pb-24">
                {project.scrollSequence ? (
                    <ProjectScrollSequence
                        folder={project.scrollSequence.folder}
                        frameCount={project.scrollSequence.frameCount}
                        prefix={project.scrollSequence.prefix}
                        extension={project.scrollSequence.extension}
                        title={project.title}
                    />
                ) : (
                    <div className="px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[4rem] group">
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill 
                                className="object-cover transition-transform duration-[3s] group-hover:scale-110" 
                                priority 
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
                        </div>
                    </div>
                )}
            </section>

            {/* Bento Grid Gallery */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
                    <div className="mb-12 flex items-end justify-between border-b border-black/5 pb-8">
                        <div>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30">Visual Archive</span>
                            <h2 className="text-2xl font-heading uppercase mt-2">Gallery & Perspectives</h2>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                        {project.gallery.map((img, idx) => (
                            <div 
                                key={idx} 
                                className={clsx(
                                    "relative overflow-hidden rounded-3xl bg-gray-100 group shadow-sm hover:shadow-2xl transition-all duration-700",
                                    idx % 3 === 0 ? "lg:col-span-8 aspect-[16/9]" : "lg:col-span-4 aspect-square"
                                )}
                            >
                                <Image 
                                    src={img} 
                                    alt={`${project.title} - Perspective ${idx + 2}`} 
                                    fill 
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Next Project Bridge */}
            <section className="px-6 md:px-12 py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image 
                        src={nextProject.image} 
                        alt="Next Project" 
                        fill 
                        className="object-cover grayscale" 
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-8">Up Next / Selection</span>
                    <Link href={`/projects/${nextProject.slug}`} className="group inline-flex flex-col items-center">
                        <h2 className="text-4xl md:text-7xl lg:text-9xl font-heading uppercase leading-none tracking-tighter mb-10 group-hover:italic transition-all duration-700">
                            {nextProject.title}
                        </h2>
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-10 py-5 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                            <span className="text-xs font-bold uppercase tracking-widest">EXPLORE PROJECT</span>
                            <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
