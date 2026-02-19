"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function PinnedSection({ title, children, image }: { title: string, children: React.ReactNode, image: string }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const textY = useTransform(scrollYProgress, [0.2, 0.5], ["50px", "0px"]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

    return (
        <div ref={sectionRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden border-b border-black/10 bg-white">
            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.03]">
                <h2 className="text-[25vw] font-heading font-bold uppercase tracking-tighter text-black leading-none">
                    {title}
                </h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="h-[60vh] relative overflow-hidden">
                    <motion.div style={{ y }} className="w-full h-[120%] relative top-[-10%]">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </motion.div>
                </div>
                <motion.div style={{ y: textY, opacity }} className="md:pl-12">
                    <h3 className="text-4xl md:text-6xl font-heading mb-6 uppercase">{title}</h3>
                    <div className="text-lg md:text-xl leading-relaxed text-black/70 font-body space-y-6">
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default function MissionVision() {
    return (
        <section>
            <PinnedSection
                title="Mission"
                image="https://images.unsplash.com/photo-1486325212027-8081e485255e?fm=jpg&q=80&w=1600&auto=format&fit=crop"
            >
                <p>Designing spaces where humanity can thrive by balancing comfort, performance, and contextual relevance.</p>
                <p>We deliver architecture that respects the environment, reflects client goals, and remains practical to build and operate.</p>
            </PinnedSection>

            <PinnedSection
                title="Vision"
                image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?fm=jpg&q=80&w=1600&auto=format&fit=crop"
            >
                <p>To be a leading Zimbabwean practice known for socially responsible, high-impact design in commercial, institutional, medical, industrial, and residential sectors.</p>
                <p>We envision built environments that are durable, inclusive, and aligned with local realities and global standards.</p>
            </PinnedSection>
        </section>
    );
}
