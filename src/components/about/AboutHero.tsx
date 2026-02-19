"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="h-[80vh] bg-verdant-black relative overflow-hidden flex items-center">
            <motion.div
                className="absolute inset-0 flex items-center whitespace-nowrap"
                style={{ x }}
            >
                <div className="px-12 md:px-24">
                    <h1 className="text-[15vw] leading-none font-heading font-bold text-white uppercase tracking-tighter">
                        About
                    </h1>
                </div>
                <div className="w-[1px] h-32 bg-white/20 mx-12"></div>
                <div className="max-w-2xl px-12">
                    <p className="text-white/80 text-xl md:text-3xl font-body leading-relaxed">
                        We design buildings that enhance the built and natural environment and deliver world-class results tailored to each client&apos;s taste.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
