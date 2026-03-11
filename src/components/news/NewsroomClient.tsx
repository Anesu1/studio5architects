"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { blogPosts } from "@/lib/blogs";

export default function NewsroomClient() {
    const newsItems = blogPosts;
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Newsroom"
                description="The latest updates, press releases, and media mentions from Studio 5 Architects. Stay informed about our projects, awards, and insights."
            />

            {/* Newsletter Subscription */}
            <section className="px-6 md:px-12 py-12 border-b border-black/5 bg-black/5">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="bg-verdant-black p-3 rounded-full text-white">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-black uppercase text-sm">Subscribe to Updates</h3>
                            <p className="text-xs text-black/50">Get our latest news delivered straight to your inbox.</p>
                        </div>
                    </div>
                    <form className="flex w-full lg:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-white border border-black/10 px-6 py-3 rounded-full text-xs w-full lg:w-80 focus:outline-none focus:border-black transition-colors"
                        />
                        <button
                            type="submit"
                            className="bg-verdant-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap hover:scale-105 transition-transform"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* News Grid */}
            <section className="px-6 md:px-12 py-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="flex-1 space-y-12">
                        {newsItems.map((item, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative border-b border-black/10 pb-12 last:border-0"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest bg-black/5 px-2 py-1 rounded text-black/60">{item.category}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{item.publishedAt}</span>
                                </div>
                                <Link href={`/blogs/${item.slug}`} className="block group-hover:opacity-70 transition-opacity">
                                    <h2 className="text-2xl md:text-3xl font-heading uppercase mb-4 leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-black/60 text-sm max-w-2xl leading-relaxed mb-6">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                        Read More <ArrowUpRight size={16} />
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 space-y-12">
                        <div className="bg-white p-8 border border-black/5 rounded-2xl">
                            <h4 className="font-bold text-black uppercase text-xs mb-6 tracking-widest">Media Contacts</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">General Inquiries</p>
                                    <p className="text-sm font-medium">press@studio5.co.zw</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Media Relations</p>
                                    <p className="text-sm font-medium">+263 77 123 4567</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-black uppercase text-xs mb-6 tracking-widest">Company Assets</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#" className="flex items-center justify-between text-xs font-bold uppercase tracking-widest hover:text-black/60 transition-colors">
                                        Media Kit (PDF) <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center justify-between text-xs font-bold uppercase tracking-widest hover:text-black/60 transition-colors">
                                        Logo Guidelines <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center justify-between text-xs font-bold uppercase tracking-widest hover:text-black/60 transition-colors">
                                        Executive Bio Pack <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    );
}
