import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogs";

type BlogDetailProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

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
                <section className="px-6 md:px-12 pt-32 pb-10">
                    <Link href="/blogs" className="text-xs uppercase tracking-widest text-black/60 hover:text-black">
                        Back to Insights
                    </Link>
                    <div className="mt-8 max-w-4xl">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-black/50">
                            <span>{post.category}</span>
                            <span>{post.publishedAt}</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-8xl font-heading uppercase leading-[0.95]">{post.title}</h1>
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
