import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogs";
import BentoGallery from "@/components/ui/BentoGallery";
import BackButton from "@/components/navigation/BackButton";

import { Metadata } from "next";

type BlogDetailProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug;
    if (!slug) return { title: "Blog Post" };
    const post = getBlogPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };
    
    return {
        title: `${post.title} | Studio 5 Architects News & Insights`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug;

    if (!slug) notFound();

    const post = getBlogPostBySlug(slug);
    if (!post) notFound();

    const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

    return (
        <main className="min-h-screen bg-verdant-bg">
            <StickyNavbar />

            <article>
                <section className="px-6 md:px-12 pt-32 pb-16">
                    <BackButton label="BACK TO INSIGHTS" />
                    
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-8">
                            <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black/40 mb-6">
                                <span>{post.category}</span>
                                <div className="w-1 h-1 rounded-full bg-black/10" />
                                <span>{post.publishedAt}</span>
                                <div className="w-1 h-1 rounded-full bg-black/10" />
                                <span>{post.readTime}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading uppercase leading-[0.95] tracking-tighter">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="px-6 md:px-12">
                    <div className="relative aspect-[16/8] overflow-hidden border border-black/10">
                        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                    </div>
                </section>

                <section className="px-6 md:px-12 py-14 md:py-16">
                    <div className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-black/80">
                        {post.content.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    {post.gallery && (
                        <div className="mt-16">
                            <div className="flex items-center gap-4 mb-8 text-xs font-bold uppercase tracking-widest text-black/40">
                                <span>Project Gallery</span>
                                <div className="h-px w-20 bg-black/10" />
                            </div>
                            <BentoGallery images={post.gallery} />
                        </div>
                    )}
                </section>
            </article>

            <section className="px-6 md:px-12 pb-24">
                <h2 className="text-4xl md:text-6xl font-heading uppercase mb-8">Related Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.slug} href={`/blogs/${relatedPost.slug}`} className="group block">
                            <article className="border border-black/10 bg-white overflow-hidden">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-xs uppercase tracking-widest text-black/50">{relatedPost.category}</p>
                                    <h3 className="mt-3 text-2xl font-heading uppercase leading-tight">{relatedPost.title}</h3>
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
