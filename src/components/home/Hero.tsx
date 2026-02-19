"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

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
        <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-verdant-bg">
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* The Masking Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Carousel (Visible only through text) */}
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

                        {/* The Content visible ONLY inside the text */}
                        <foreignObject x="0" y="0" width="100%" height="100%" mask="url(#textMask)">
                            <div className="w-full h-full overflow-hidden relative">
                                {/* Carousel Animation */}
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

            {/* Sub-headline / Floating Content */}
            <div className="absolute bottom-12 left-6 md:left-12 z-20 max-w-xl text-verdant-black mix-blend-difference text-white">
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ delay: 1, duration: 1, ease: [0.33, 1, 0.68, 1] }}
                        className="text-xl md:text-2xl font-body leading-relaxed text-white drop-shadow-md"
                    >
                        Designing spaces where humanity can thrive.
                    </motion.p>
                </div>
                <div className="h-[2px] bg-white mt-4 w-0 animate-grow-line" />

                <div className="mt-8">
                    <MagneticButton>
                        <button className="px-8 py-3 border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                            More Projects
                        </button>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
