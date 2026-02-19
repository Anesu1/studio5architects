"use client";

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import clsx from "clsx";

const textPattern = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?fm=jpg&q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?fm=jpg&q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?fm=jpg&q=80&w=800&auto=format&fit=crop",
];

export default function ServiceGallery() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <h2 className="text-4xl md:text-6xl font-heading uppercase">Project Gallery</h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 
                   Pattern: 
                   1. Large (Col span 2)
                   2. Small (Col span 1)
                   3. Small (Col span 1)
                   Repeat
                */}

                {textPattern.map((src, index) => {
                    // Determine if large based on pattern index % 3 === 0
                    const isLarge = index % 3 === 0;

                    return (
                        <div
                            key={index}
                            className={clsx(
                                "relative overflow-hidden group mb-4",
                                isLarge ? "md:col-span-2 h-[60vh]" : "md:col-span-1 h-[40vh]"
                            )}
                        >
                            <Reveal width="100%" className="h-full">
                                <Image
                                    src={src}
                                    alt="Project Image"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-500 mix-blend-multiply" />
                            </Reveal>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
