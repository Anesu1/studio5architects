import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getProjects } from "@/lib/projects";
import ProjectScrollSequence from "@/components/projects/ProjectScrollSequence";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGallery from "@/components/projects/ProjectGallery";
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

    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            {/* Premium Hero Section */}
            <ProjectHero project={project} />

            {/* Immersive Visual Section (Sequence or Featured Image) */}
            <section className="px-0 pt-0 pb-24">
                {project.scrollSequence ? (
                    <div className="border-t border-black/5">
                        <ProjectScrollSequence
                            folder={project.scrollSequence.folder}
                            frameCount={project.scrollSequence.frameCount}
                            prefix={project.scrollSequence.prefix}
                            extension={project.scrollSequence.extension}
                            title={project.title}
                        />
                    </div>
                ) : (
                    <div className="px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[4rem] group shadow-2xl">
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
            {project.gallery && (
                <ProjectGallery images={project.gallery} projectTitle={project.title} />
            )}

            {/* Next Project Bridge */}
            <section className="px-6 md:px-12 py-40 bg-black text-white relative overflow-hidden group">
                <div className="absolute inset-0 opacity-30 transition-transform duration-[5s] group-hover:scale-110">
                    <Image 
                        src={nextProject.image} 
                        alt="Next Project" 
                        fill 
                        className="object-cover " 
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-10">Continue Exploring</span>
                    <Link href={`/projects/${nextProject.slug}`} className="group inline-flex flex-col items-center">
                        <div className="overflow-hidden mb-12">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight tracking-tight  transition-all duration-1000">
                                {nextProject.title}
                            </h2>
                        </div>
                        <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl px-12 py-6 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-700">
                            <span className="text-[10px] font-bold tracking-[0.2em]">VIEW PROJECT</span>
                            <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-3 transition-transform duration-700" />
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
