"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface BentoGalleryProps {
    images: string[];
}

export default function BentoGallery({ images }: BentoGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Layout patterns for bento grid
    // We'll map indices to specific grid spans
    const getGridSpan = (index: number) => {
        const pattern = [
            "md:col-span-2 md:row-span-2", // Large
            "md:col-span-1 md:row-span-1", // Small
            "md:col-span-1 md:row-span-2", // Tall
            "md:col-span-1 md:row-span-1", // Small
            "md:col-span-2 md:row-span-1", // Wide
            "md:col-span-1 md:row-span-1", // Small
        ];
        return pattern[index % pattern.length];
    };

    return (
        <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 0.98 }}
                        onClick={() => setSelectedImage(image)}
                        className={`relative overflow-hidden cursor-pointer border border-black/5 group ${getGridSpan(index)}`}
                    >
                        <Image
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110  group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs uppercase font-bold tracking-widest border border-white/40 px-4 py-2 backdrop-blur-sm">
                                View Detail
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-full h-full max-w-6xl"
                    >
                        <Image
                            src={selectedImage}
                            alt="Selected gallery image"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
