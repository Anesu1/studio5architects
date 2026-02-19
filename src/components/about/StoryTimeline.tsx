"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
    { year: "2021", title: "Foundations", desc: "Studio 5 Architects formalized its delivery model around client-focused architectural services in Zimbabwe." },
    { year: "2022", title: "Growth", desc: "Expanded residential and commercial portfolio with stronger technical documentation standards." },
    { year: "2023", title: "Diversification", desc: "Scaled institutional, industrial, and medical project capability across multidisciplinary teams." },
    { year: "2024", title: "Recognition", desc: "Delivered high-visibility projects including showroom and healthcare-oriented developments." },
    { year: "2025", title: "Impact", desc: "Reached a milestone of 30 completed projects and 5 years of active experience." },
];

export default function StoryTimeline() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <>
            <section className="bg-verdant-black text-white py-16 px-6 md:hidden">
                <h2 className="text-sm font-bold tracking-widest uppercase border-b border-white/30 pb-1 inline-block mb-8">Our History</h2>
                <div className="space-y-8">
                    {milestones.map((item) => (
                        <div key={item.year} className="border border-white/15 p-5 rounded-xl">
                            <span className="text-4xl font-heading opacity-30 block leading-none">{item.year}</span>
                            <h3 className="text-2xl font-heading mt-3">{item.title}</h3>
                            <p className="text-white/70 mt-3">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section ref={targetRef} className="relative h-[300vh] bg-verdant-black text-white hidden md:block">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-24 px-24">
                    {milestones.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-[60vw] md:w-[40vw] flex flex-col gap-8 relative">
                            {/* The Circle/Dot */}
                            <div className="w-full h-[1px] bg-white/20 relative flex items-center">
                                <div className="w-4 h-4 rounded-full bg-white absolute left-0" />
                            </div>

                            <div>
                                <span className="text-8xl md:text-[10rem] font-heading font-bold opacity-20 block leading-none mb-4">
                                    {item.year}
                                </span>
                                <h3 className="text-4xl font-heading mb-4 text-white">{item.title}</h3>
                                <p className="text-xl text-white/60 max-w-md">{item.desc}</p>
                            </div>
                        </div>
                        ))}
                        {/* Extra padding at end */}
                        <div className="w-[20vw]" />
                    </motion.div>

                    <div className="absolute bottom-12 left-12">
                        <h2 className="text-sm font-bold tracking-widest uppercase border-b border-white pb-1">Our History</h2>
                    </div>
                </div>
            </section>
        </>
    );
}
