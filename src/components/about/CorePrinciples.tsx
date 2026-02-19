"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const principles = [
    {
        id: "01",
        title: "Comfort & Function",
        desc: "Every concept is anchored in use-case clarity, spatial comfort, and practical long-term operation for occupants and owners.",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Environmental Respect",
        desc: "Our design decisions consider climate response, durability, and resource-conscious material choices to support responsible architecture.",
        image: "https://images.unsplash.com/photo-1518531933037-9a847e0d3886?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Client Alignment",
        desc: "Design quality and delivery quality are both essential; we coordinate closely with clients and technical teams so outcomes match intent.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    }
];

export default function CorePrinciples() {
    const [activeTab, setActiveTab] = useState(principles[0]);

    return (
        <section className="py-24 bg-white text-verdant-black">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-6xl font-heading uppercase mb-12">Core Principles</h2>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Tabs / Navigation */}
                    <div className="flex md:flex-col gap-8 md:w-1/3">
                        {principles.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActiveTab(p)}
                                className={clsx(
                                    "text-left relative py-2 group transition-opacity",
                                    activeTab.id === p.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                                )}
                            >
                                <span className="text-sm font-bold tracking-widest block mb-1">0{p.id}</span>
                                <span className="text-2xl md:text-4xl font-heading uppercase">{p.title}</span>

                                {activeTab.id === p.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="md:w-2/3 h-[50vh] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="h-full flex flex-col md:flex-row gap-8"
                            >
                                <div className="relative w-full md:w-1/2 h-full overflow-hidden">
                                    <Image src={activeTab.image} alt={activeTab.title} fill className="object-cover" />
                                </div>
                                <div className="md:w-1/2 flex items-center">
                                    <p className="text-xl md:text-2xl leading-relaxed font-body">
                                        {activeTab.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
