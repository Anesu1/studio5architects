"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Recycle, Wind, ShieldCheck } from "lucide-react";

const sustainabilityValues = [
    {
        icon: <Leaf className="w-8 h-8 text-verdant-black" />,
        title: "Responsible Materials",
        description: "We prioritize low-impact, sustainable materials that reduce carbon footprint while maintaining architectural integrity."
    },
    {
        icon: <Recycle className="w-8 h-8 text-verdant-black" />,
        title: "Social Impact",
        description: "Our designs promote healthy communities and foster social well-being through inclusive and accessible architecture."
    },
    {
        icon: <Wind className="w-8 h-8 text-verdant-black" />,
        title: "Climate Goals",
        description: "We are committed to achieving net-zero carbon emissions in our projects by 2040, ahead of industry standards."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-verdant-black" />,
        title: "Ethics & Governing",
        description: "Our practice is built on transparency, integrity, and a commitment to ethical design and construction practices."
    }
];

export default function SustainabilityClient() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Sustainability"
                description="Our commitment to sustainable design and construction. Shaping a greener future through responsible architecture and social impact."
            />

            {/* Vision Section */}
            <section className="px-6 md:px-12 py-24 border-b border-black/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-widest text-black/40 mb-4 block"
                    >
                        Our Vision
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-heading uppercase text-verdant-black mb-8"
                    >
                        Building for a Better Tomorrow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-black/70 leading-relaxed"
                    >
                        At Studio 5 Architects, sustainability isn't an afterthought—it's the foundation of everything we do. We believe that good design must be responsible, efficient, and resilient, ensuring that the spaces we create today serve generations to come.
                    </motion.p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="px-6 md:px-12 py-24 bg-black/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sustainabilityValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-verdant-bg p-8 border border-black/5 rounded-2xl"
                        >
                            <div className="mb-6">{value.icon}</div>
                            <h3 className="text-xl font-heading uppercase text-verdant-black mb-4">{value.title}</h3>
                            <p className="text-sm text-black/60 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Climate Goals Section */}
            <section className="px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-heading uppercase text-verdant-black mb-8"
                        >
                            Our Climate Journey
                        </motion.h2>
                        <div className="space-y-8">
                            <div className="border-l-2 border-black/10 pl-6">
                                <h4 className="font-bold text-black uppercase text-sm mb-2">2025: Waste Reduction</h4>
                                <p className="text-sm text-black/60">Eliminating single-use plastics and minimizing construction waste across all sites.</p>
                            </div>
                            <div className="border-l-2 border-black/10 pl-6">
                                <h4 className="font-bold text-black uppercase text-sm mb-2">2030: Carbon Neutrality</h4>
                                <p className="text-sm text-black/60">Reducing operational carbon emissions across our entire portfolio by 50%.</p>
                            </div>
                            <div className="border-l-2 border-black/10 pl-6 font-bold text-black uppercase text-sm mb-2">
                                <h4 className="font-bold text-black uppercase text-sm mb-2">2040: Net Zero</h4>
                                <p className="text-sm text-black/60">Achieving fully net-zero emissions throughout our supply chain and project lifecycles.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                            alt="Sustainable Architecture in Zimbabwe"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
