"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const subServices = [
    {
        title: "Space Planning",
        desc: "Optimizing the flow and functionality of your space to ensure it meets your specific needs while maximizing potential.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        title: "Concept Development",
        desc: "Creating a cohesive design language that reflects your brand or personality through mood boards and initial sketches.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        title: "Material Selection",
        desc: "Curating a palette of materials and finishes that align with the aesthetic and functional requirements of the project.",
        image: "https://images.unsplash.com/photo-1581094794320-c914639975b9?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        title: "Lighting Design",
        desc: "Designing lighting schemes that enhance the mood and architectural features of the space.",
        image: "https://images.unsplash.com/photo-1554793000-245d3a3c2a51?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    }
];

export default function SubServices() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-verdant-white">
            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
                {/* Pinned Image Left */}
                <div className="hidden md:block h-[80vh] sticky top-24">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <div className="absolute inset-0 bg-blue-900/20 z-10 mix-blend-multiply" />
                                <Image
                                    src={subServices[activeIndex || 0].image}
                                    alt={subServices[activeIndex || 0].title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Accordion Right */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-heading uppercase mb-12">Sub Services</h2>
                    <div className="border-t border-black/10">
                        {subServices.map((service, index) => (
                            <div key={index} className="border-b border-black/10">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full py-8 flex items-center justify-between group hover:pl-4 transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-heading uppercase">{service.title}</h3>
                                    <div className={clsx(
                                        "w-8 h-8 rounded-full border border-black/20 flex items-center justify-center transition-colors",
                                        activeIndex === index ? "bg-black text-white" : "group-hover:bg-black group-hover:text-white"
                                    )}>
                                        {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-8 text-lg text-black/60 leading-relaxed max-w-md">
                                                {service.desc}
                                            </p>
                                            {/* Mobile Image Fallback */}
                                            <div className="md:hidden relative h-64 w-full mb-8 rounded-lg overflow-hidden">
                                                <Image src={service.image} alt={service.title} fill className="object-cover" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
