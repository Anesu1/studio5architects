"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Heart, Lightbulb, TrendingUp } from "lucide-react";

const benefits = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Collaborative Culture",
        description: "Work with a diverse team of visionaries who value every voice and perspective."
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Holistic Wellbeing",
        description: "Comprehensive health coverage, mental health support, and flexible work arrangements."
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Innovation First",
        description: "Access to the latest design tools and resources to bring your boldest ideas to life."
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Growth Opportunities",
        description: "Continuous learning programs and clear paths for professional advancement."
    }
];

const openPositions = [
    {
        title: "Senior Project Architect",
        location: "Harare, Zimbabwe",
        type: "Full-time",
        department: "Design"
    },
    {
        title: "Junior Interior Designer",
        location: "Bulawayo, Zimbabwe",
        type: "Full-time",
        department: "Interior Design"
    },
    {
        title: "BIM Manager",
        location: "Hybrid / Remote",
        type: "Full-time",
        department: "Operations"
    },
    {
        title: "Construction Manager",
        location: "On-site",
        type: "Contract",
        department: "Project Management"
    }
];

export default function CareersClient() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Careers"
                description="The future is shaped by you. Join Studio 5 Architects and help us design spaces that inspire, endure, and transform communities."
            />

            {/* Why Join Us */}
            <section className="px-6 md:px-12 py-24 border-b border-black/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs uppercase tracking-widest text-black/40 mb-4 block"
                        >
                            Why Join Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-heading text-verdant-black mb-8 leading-tight"
                        >
                            Grow Your Career at the Intersection of Design and Impact.
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-verdant-black mb-4">{benefit.icon}</div>
                                    <h4 className="font-bold text-black uppercase text-sm mb-2">{benefit.title}</h4>
                                    <p className="text-xs text-black/60 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                            alt="The Studio 5 Team"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="px-6 md:px-12 py-24 bg-black/5">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl font-heading text-verdant-black mb-4">Current Openings</h2>
                            <p className="text-black/60 max-w-xl">We are always looking for passionate individuals to join our team. Explore our current opportunities below.</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest bg-verdant-black text-white px-4 py-2 rounded-full">All Roles ({openPositions.length})</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {openPositions.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group block"
                            >
                                <Link
                                    href="/contact"
                                    className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-verdant-bg border border-black/5 rounded-sm group-hover:border-black transition-all duration-300"
                                >
                                    <div className="mb-4 md:mb-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-bold uppercase tracking-widest bg-black/5 px-2 py-1 rounded text-black/60">{job.department}</span>
                                            <span className="text-xs font-bold uppercase tracking-widest text-black/40">{job.type}</span>
                                        </div>
                                        <h3 className="text-xl font-heading text-verdant-black">{job.title}</h3>
                                        <p className="text-xs text-black/40 mt-1 uppercase tracking-widest">{job.location}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                        Apply Now <ArrowRight size={16} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <h3 className="text-xl font-heading mb-4">Don't see a role that fits?</h3>
                        <p className="text-black/60 mb-8 max-w-lg mx-auto">We're always open to meeting talented people. Send us your portfolio and CV, and we'll keep you in mind for future openings.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-verdant-black text-white px-8 py-4 rounded-sm text-xs font-medium uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                            General Application <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
