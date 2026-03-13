"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, Leaf, BookOpen, ArrowRight, Building2 } from "lucide-react";
import { Metadata } from "next";

const pillars = [
    {
        icon: <Users className="w-7 h-7" />,
        title: "Community Development",
        description: "We invest in the communities where we build, partnering with local organisations to improve infrastructure, access to housing, and public spaces across Zimbabwe.",
    },
    {
        icon: <BookOpen className="w-7 h-7" />,
        title: "Education & Mentorship",
        description: "Through partnerships with NUST and Harare Polytechnic, we host interns, fund architectural scholarships, and mentor the next generation of Zimbabwean designers.",
    },
    {
        icon: <Leaf className="w-7 h-7" />,
        title: "Environmental Stewardship",
        description: "Our projects are designed to minimise ecological impact — from material selection and passive climate strategies to waste reduction on every construction site.",
    },
    {
        icon: <Heart className="w-7 h-7" />,
        title: "Social Impact Design",
        description: "We dedicate a portion of our capacity to pro-bono and reduced-fee work for schools, clinics, and community centres in underserved areas.",
    },
    {
        icon: <Building2 className="w-7 h-7" />,
        title: "Local Procurement",
        description: "We prioritise local suppliers, contractors, and craftspeople, circulating economic benefit within Zimbabwe and reducing imported carbon footprint.",
    },
    {
        icon: <Users className="w-7 h-7" />,
        title: "Workplace Equity",
        description: "Studio 5 is committed to a diverse and inclusive workplace — in hiring, promotion, and studio culture — reflecting the communities we serve.",
    },
];

const initiatives = [
    {
        year: "2024",
        title: "Mbare Community Centre Pro-Bono Design",
        description: "Provided full architectural services at no cost for a community gathering and skills-training facility in Mbare, Harare.",
        tag: "Community",
    },
    {
        year: "2024",
        title: "NUST Architecture Scholarship Programme",
        description: "Funded two full-year scholarships for students from low-income backgrounds pursuing architecture at NUST Bulawayo.",
        tag: "Education",
    },
    {
        year: "2023",
        title: "Rural Clinic Design — Mashonaland East",
        description: "Designed a low-cost, climate-responsive rural health clinic in partnership with a local NGO, completed under budget.",
        tag: "Social Impact",
    },
    {
        year: "2023",
        title: "Construction Waste Reduction Initiative",
        description: "Partnered with contractors on three sites to pilot a zero-landfill construction waste programme, diverting over 12 tonnes from landfill.",
        tag: "Environment",
    },
];

export default function CSRPage() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Corporate Social Responsibility"
                description="Architecture shapes lives. We take seriously our responsibility to the communities, environments, and people that our work touches across Zimbabwe."
            />

            {/* Commitment Banner */}
            <section className="bg-verdant-black text-white px-6 md:px-12 py-20">
                <div className="max-w-5xl mx-auto text-center">
                    <Reveal>
                        <span className="text-xs font-medium uppercase tracking-widest text-white/40 mb-6 block">Our Commitment</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-heading text-white leading-snug mb-8">
                            We believe great architecture must be socially responsible, environmentally conscious, and economically inclusive.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            Studio 5 Architects is not just a design practice. We are an active participant in the development of Zimbabwe — committed to leaving every project, every community, and every partnership better than we found it.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Pillars */}
            <section className="px-6 md:px-12 py-24 border-b border-black/5">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <span className="text-xs font-medium uppercase tracking-widest text-black/40 mb-4 block">Our Pillars</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-heading mb-16">Six Areas of Responsibility</h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="border-t border-black/10 pt-8"
                            >
                                <div className="text-verdant-black mb-5">{pillar.icon}</div>
                                <h3 className="text-xl font-heading mb-3">{pillar.title}</h3>
                                <p className="text-sm text-black/60 leading-relaxed">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section className="px-6 md:px-12 py-24 bg-black/[0.03]">
                <div className="max-w-5xl mx-auto">
                    <Reveal>
                        <span className="text-xs font-medium uppercase tracking-widest text-black/40 mb-4 block">Recent Work</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-heading mb-16">CSR Initiatives</h2>
                    </Reveal>

                    <div className="space-y-0">
                        {initiatives.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="border-t border-black/10 py-10 group"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    <div className="flex items-start gap-8 md:gap-12">
                                        <span className="text-sm font-medium text-black/30 shrink-0 pt-1">{item.year}</span>
                                        <div>
                                            <span className="text-xs font-medium uppercase tracking-widest bg-black/5 px-2 py-1 text-black/50 inline-block mb-3">{item.tag}</span>
                                            <h3 className="text-xl md:text-2xl font-heading mb-2 group-hover:ml-2 transition-all duration-300">{item.title}</h3>
                                            <p className="text-sm text-black/60 leading-relaxed max-w-xl">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-black/10" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-24 text-center">
                <div className="max-w-2xl mx-auto">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-heading mb-6">Partner with Us on a CSR Initiative</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-black/60 leading-relaxed mb-10">
                            If you represent an NGO, government body, educational institution, or corporation looking to collaborate on socially responsible design, we want to hear from you.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-verdant-black text-white px-10 py-4 rounded-sm text-xs font-medium uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                            Get in Touch <ArrowRight size={14} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
