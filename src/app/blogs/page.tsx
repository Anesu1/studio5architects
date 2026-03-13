import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";
import PageHero from "@/components/ui/PageHero";

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-verdant-bg">
            <StickyNavbar />

            <PageHero
                title="Insights"
                description="Articles on projects, cost planning, urban design, sustainability, and architectural delivery in Zimbabwe."
            />

            <section className="px-6 md:px-12 pb-24 pt-2">
                {Array.from(new Set(blogPosts.map(p => p.category))).map((category) => (
                    <div key={category} className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-2xl md:text-3xl font-heading">{category}</h2>
                            <div className="h-px flex-1 bg-black/10" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogPosts.filter(p => p.category === category).map((post) => (
                                <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
                                    <article className="h-full border border-black/10 bg-white overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                                        <div className="relative aspect-[16/10] overflow-hidden  group-hover:grayscale-0 transition-all duration-700">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-black/50">
                                                <span>{post.readTime}</span>
                                                <span>{post.publishedAt}</span>
                                            </div>
                                            <h3 className="mt-3 text-xl font-heading leading-tight group-hover:text-black/60 transition-colors">{post.title}</h3>
                                            <p className="mt-4 text-xs text-black/70 leading-relaxed line-clamp-3">{post.excerpt}</p>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
