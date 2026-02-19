"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
    {
        num: "01",
        title: "Conceptual Design",
        desc: "We begin by understanding your vision, needs, and the unique characteristics of the site. This phase involves brainstorming, sketching, and exploring initial ideas.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        num: "02",
        title: "Schematic Design",
        desc: "We refine the concepts into tangible plans. Floor plans, elevations, and 3D models are developed to visualize the spatial relationships and overall aesthetic.",
        image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        num: "03",
        title: "Design Development",
        desc: "Detailed drawings and specifications are created. We select materials, finishes, and fixtures, ensuring every detail aligns with the design intent.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    },
    {
        num: "04",
        title: "Construction Docs",
        desc: "Comprehensive technical drawings are produced for construction. We coordinate with engineers and consultants to ensure a smooth build process.",
        image: "https://images.unsplash.com/photo-1581094794320-c914639975b9?fm=jpg&q=80&w=1600&auto=format&fit=crop"
    }
];

export default function Process() {
    return (
        <section className="bg-verdant-black py-24 text-white">
            <div className="container mx-auto px-6 md:px-12 mb-24">
                <h2 className="text-5xl md:text-8xl font-heading mb-8">Our Process</h2>
            </div>

            <div className="flex flex-col gap-6 md:hidden px-6">
                {steps.map((step) => (
                    <div key={step.num} className="border border-white/15 rounded-xl overflow-hidden bg-white/5">
                        <div className="relative h-56 w-full">
                            <Image src={step.image} alt={step.title} fill className="object-cover opacity-70" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold tracking-widest text-white/60 block mb-2">STEP {step.num}</span>
                            <h3 className="text-3xl font-heading mb-3">{step.title}</h3>
                            <p className="text-white/75 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden md:flex flex-col gap-0">
                {steps.map((step, i) => (
                    <StickyStep key={i} step={step} index={i} total={steps.length} />
                ))}
            </div>
        </section>
    );
}

type ProcessStep = {
    num: string;
    title: string;
    desc: string;
    image: string;
};

function StickyStep({ step, index }: { step: ProcessStep, index: number, total: number }) {
    const ref = useRef<HTMLDivElement>(null);
    useScroll({
        target: ref,
        offset: ["start end", "start start"]
    });

    // Scale down slightly as it goes up to create depth?
    // Or just simple sticky stacking.

    return (
        <div
            ref={ref}
            className="sticky top-0 h-screen flex items-center justify-center bg-verdant-black border-t border-white/10"
            style={{
                zIndex: index + 1,
                // Make each subsequent card slightly offset if desired, or just full cover
            }}
        >
            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center h-full">
                <div className="relative h-[60vh] w-full overflow-hidden bg-white/5">
                    <Image src={step.image} alt={step.title} fill className="object-cover opacity-60 mix-blend-overlay" />
                    <div className="absolute bottom-4 left-4 text-9xl font-heading font-bold text-white/10 select-none">
                        {step.num}
                    </div>
                </div>

                <div className="bg-verdant-black/50 backdrop-blur-sm p-8 md:p-12 border border-white/10">
                    <span className="text-sm font-bold tracking-widest text-white/50 mb-4 block">STEP {step.num}</span>
                    <h3 className="text-4xl md:text-5xl font-heading mb-6">{step.title}</h3>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-md">
                        {step.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
