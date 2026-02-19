import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-verdant-bg">
            <StickyNavbar />

            <section className="px-6 md:px-12 pt-32 pb-16">
                <h1 className="text-6xl md:text-9xl font-heading uppercase leading-none">Insights</h1>
                <p className="mt-6 max-w-2xl text-black/60 text-lg">
                    Articles on projects, cost planning, urban design, sustainability, and architectural delivery in Zimbabwe.
                </p>
            </section>

            <section className="px-6 md:px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
                            <article className="h-full border border-black/10 bg-white overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-black/50">
                                        <span>{post.category}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="mt-3 text-2xl font-heading uppercase leading-tight">{post.title}</h2>
                                    <p className="mt-4 text-sm text-black/70 leading-relaxed">{post.excerpt}</p>
                                    <p className="mt-6 text-xs uppercase tracking-widest text-black/50">{post.publishedAt}</p>
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
