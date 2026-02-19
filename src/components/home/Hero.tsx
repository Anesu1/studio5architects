"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

const carouselImages = [
    "https://images.unsplash.com/photo-1519662978799-2f05096d3636?fm=jpg&q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614595737683-1740e41bfaac?fm=jpg&q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554793000-245d3a3c2a51?fm=jpg&q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614595737476-42487331b8a1?fm=jpg&q=80&w=2670&auto=format&fit=crop",
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="relative min-h-[88svh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-verdant-bg">
            {/* Mobile Hero */}
            <div className="absolute inset-0 z-0 md:hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: `url(${carouselImages[1]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
            </div>

            <div className="absolute inset-0 z-0 select-none pointer-events-none hidden md:block">
                <div className="relative w-full h-full flex items-center justify-center">
                    <svg className="w-full h-full font-heading font-bold uppercase tracking-tighter" viewBox="0 0 1320 300">
                        <defs>
                            <mask id="textMask">
                                <rect width="100%" height="100%" fill="black" />
                                <motion.text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="white"
                                    fontSize="280"
                                    initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                >
                                    STUDIO 5
                                </motion.text>
                            </mask>
                        </defs>

                        <foreignObject x="0" y="0" width="100%" height="100%" mask="url(#textMask)">
                            <div className="w-full h-full overflow-hidden relative">
                                <motion.div
                                    className="flex w-[200%] h-full"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                >
                                    {[...carouselImages, ...carouselImages].map((src, i) => (
                                        <div key={i} className="w-1/4 h-full relative shrink-0">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center"
                                                style={{ backgroundImage: `url(${src})` }}
                                            />
                                            <div className="absolute inset-0 bg-black/20" />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-[44%] z-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />

            <div className="relative md:absolute md:bottom-12 md:left-12 z-20 max-w-xl text-white px-6 pt-28 pb-10 md:px-8 md:py-7 md:rounded-2xl md:border md:border-white/20 md:bg-black/30 md:backdrop-blur-sm">
                <div className="md:hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md px-5 py-6 shadow-2xl">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/75 mb-3">Studio 5 Architects</p>
                    <h1 className="font-heading text-4xl leading-[0.92] uppercase tracking-tight mb-3">
                        Designing Spaces For Human Thrive
                    </h1>
                    <p className="text-sm text-white/85 leading-relaxed">
                        Registered architecture practice delivering commercial, institutional, medical, industrial, and residential projects.
                    </p>
                </div>

                <div className="hidden md:block overflow-hidden">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ delay: 0.3, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                        className="text-lg md:text-2xl font-body leading-relaxed drop-shadow-md"
                    >
                        Designing spaces where humanity can thrive.
                    </motion.p>
                </div>
                <div className="h-[2px] bg-white/80 mt-4 w-20 md:w-0 md:animate-grow-line" />

                <div className="mt-8">
                    <MagneticButton>
                        <Link
                            href="/projects"
                            className="inline-flex px-7 py-3 border border-white/40 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            More Projects
                        </Link>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
