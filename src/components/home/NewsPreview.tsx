"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import Reveal from "@/components/ui/Reveal";

export default function NewsPreview() {
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 px-6 md:px-12 bg-verdant-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <Reveal>
                            <span className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4 block">Research & Updates</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
                                Latest News & <br /> Architectural Insights
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <Link
                            href="/blogs"
                            className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white hover:text-white/60 transition-colors"
                        >
                            View All Articles
                            <div className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUpRight size={18} />
                            </div>
                        </Link>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <Link href={`/blogs/${post.slug}`} className="block">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-none mb-6 bg-gray-800 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/30">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-black shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-white/40">
                                        <span>{post.publishedAt}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-heading leading-snug text-white">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
