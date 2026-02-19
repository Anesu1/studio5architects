import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";

type ProjectDetailProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug;

    if (!slug) notFound();

    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-verdant-bg">
            <StickyNavbar />

            <section className="px-6 md:px-12 pt-32 pb-10">
                <Link href="/projects" className="text-xs uppercase tracking-widest text-black/60 hover:text-black">
                    Back to Projects
                </Link>
                <div className="mt-8 max-w-5xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-black/50">
                        <span>{project.category}</span>
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                    </div>
                    <h1 className="mt-5 text-4xl sm:text-5xl md:text-8xl font-heading uppercase leading-[0.95]">
                        {project.title}
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg text-black/70">{project.summary}</p>
                </div>
            </section>

            <section className="px-6 md:px-12">
                <div className="relative aspect-[16/8] overflow-hidden border border-black/10">
                    <Image src={project.image} alt={project.title} fill className="object-cover" priority />
                </div>
            </section>

            <section className="px-6 md:px-12 py-14 md:py-20">
                <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-black/10 bg-white p-6">
                        <span className="text-xs uppercase tracking-widest text-black/50">Location</span>
                        <p className="mt-3 text-xl font-heading uppercase">{project.location}</p>
                    </div>
                    <div className="border border-black/10 bg-white p-6">
                        <span className="text-xs uppercase tracking-widest text-black/50">Category</span>
                        <p className="mt-3 text-xl font-heading uppercase">{project.category}</p>
                    </div>
                    <div className="border border-black/10 bg-white p-6">
                        <span className="text-xs uppercase tracking-widest text-black/50">Year</span>
                        <p className="mt-3 text-xl font-heading uppercase">{project.year}</p>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-12 pb-24">
                <h2 className="text-4xl md:text-6xl font-heading uppercase mb-8">Related Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedProjects.map((item) => (
                        <Link key={item.slug} href={`/projects/${item.slug}`} className="group block">
                            <article className="border border-black/10 bg-white overflow-hidden">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs uppercase tracking-widest text-black/50">{item.category}</p>
                                    <h3 className="mt-3 text-2xl font-heading uppercase">{item.title}</h3>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
