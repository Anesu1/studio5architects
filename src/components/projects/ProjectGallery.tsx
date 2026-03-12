"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

interface ProjectGalleryProps {
    images: string[];
    projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto border-t border-black/5 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {images.map((img, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl bg-gray-50 group"
                    >
                        <Image 
                            src={img} 
                            alt={`${projectTitle} perspective ${idx + 1}`} 
                            fill 
                            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
