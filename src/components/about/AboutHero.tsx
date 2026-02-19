"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.75]);

    return (
        <>
            <section className="md:hidden bg-verdant-black text-white px-6 pt-28 pb-14">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">About Studio 5</p>
                <h1 className="text-5xl font-heading uppercase leading-[0.9] mb-5">About</h1>
                <p className="text-white/80 leading-relaxed max-w-xl">
                    We design buildings that enhance the built and natural environment and deliver world-class results tailored to each client&apos;s taste.
                </p>
            </section>

            <section ref={containerRef} className="hidden md:block min-h-[78vh] bg-verdant-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.12),transparent_45%)]" />
                <div className="absolute inset-y-0 left-[46%] w-px bg-white/15" />

                <motion.div style={{ y, opacity }} className="relative z-10 h-full px-10 lg:px-16 xl:px-24 py-24 grid grid-cols-12 items-end">
                    <div className="col-span-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6">About Studio 5</p>
                        <h1 className="text-[10vw] lg:text-[8vw] leading-[0.85] font-heading font-bold text-white uppercase tracking-tighter">
                            About
                        </h1>
                    </div>
                    <div className="col-span-6 pl-12 lg:pl-16">
                        <p className="text-white/80 text-xl lg:text-2xl font-body leading-relaxed max-w-2xl">
                            We design buildings that enhance the built and natural environment and deliver world-class results tailored to each client&apos;s taste.
                        </p>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
