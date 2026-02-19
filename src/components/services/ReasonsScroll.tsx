"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
    { title: "Bespoke Elegance", desc: "Tailored designs that fit your unique lifestyle and taste." },
    { title: "Timeless Innovation", desc: "Blending classic principles with modern technology." },
    { title: "Green Glamour", desc: "Sustainable luxury that doesn't compromise on style." },
    { title: "Virtual Reality", desc: "Experience your space before it's built with VR tours." },
    { title: "Artisan Craft", desc: "Collaborating with master craftsmen for custom details." },
    { title: "Passionate Design", desc: "Driven by a love for creating beautiful spaces." },
];

export default function ReasonsScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <>
            <section className="bg-verdant-bg py-16 px-6 md:hidden">
                <h2 className="text-4xl font-heading uppercase mb-8">Why Choose Us</h2>
                <div className="space-y-4">
                    {reasons.map((reason, i) => (
                        <div key={reason.title} className="bg-white border border-black/5 p-6 rounded-xl">
                            <div className="flex items-center justify-between mb-4">
                                <CheckCircle2 className="w-8 h-8 text-blue-900" />
                                <span className="text-2xl font-bold text-black/10">{i + 1}</span>
                            </div>
                            <h3 className="text-2xl font-heading uppercase mb-2">{reason.title}</h3>
                            <p className="text-black/65 leading-relaxed">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section ref={targetRef} className="relative h-[250vh] bg-verdant-bg hidden md:block">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 mb-12">
                        <h2 className="text-4xl md:text-6xl font-heading uppercase">Why Choose Us</h2>
                    </div>

                    <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
                        {reasons.map((reason, i) => (
                            <div key={i} className="flex-shrink-0 w-[80vw] md:w-[25vw] bg-white border border-black/5 p-8 md:p-12 flex flex-col justify-between h-[400px]">
                                <div>
                                    <CheckCircle2 className="w-12 h-12 text-blue-900 mb-8" />
                                    <h3 className="text-2xl md:text-3xl font-heading uppercase mb-4">{reason.title}</h3>
                                    <p className="text-lg text-black/60 leading-relaxed">{reason.desc}</p>
                                </div>
                                <span className="text-6xl font-bold text-black/5 self-end">{i + 1}</span>
                            </div>
                        ))}
                        <div className="w-[10vw]" />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
