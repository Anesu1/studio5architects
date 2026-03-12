"use client";

import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface ProjectScrollSequenceProps {
    folder: string;
    frameCount: number;
    prefix: string;
    extension: string;
    title?: string;
}

export default function ProjectScrollSequence({
    folder,
    frameCount,
    prefix,
    extension,
    title = "The Journey"
}: ProjectScrollSequenceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    useEffect(() => {
        const loadImages = async () => {
            setIsLoaded(false);
            const loadedImages: HTMLImageElement[] = [];

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                const formattedIndex = i.toString().padStart(3, "0");
                img.src = `/images/projects/${folder}/${prefix}${formattedIndex}.${extension}`;
                loadedImages.push(img);
            }

            await Promise.all(
                loadedImages.map(
                    (img) =>
                        new Promise((resolve) => {
                            img.onload = resolve;
                            img.onerror = resolve;
                        })
                )
            );

            imagesRef.current = loadedImages;
            setIsLoaded(true);
        };

        loadImages();
    }, [folder, frameCount, prefix, extension]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        const images = imagesRef.current;

        if (!canvas || !context || images.length === 0) return;

        const img = images[Math.floor(index)];
        if (!img) return;

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    };

    useEffect(() => {
        if (!isLoaded) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(frameIndex.get());
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => window.removeEventListener("resize", resizeCanvas);
    }, [isLoaded, frameIndex]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (isLoaded) {
            requestAnimationFrame(() => renderFrame(latest));
        }
    });

    return (
        <section ref={containerRef} className="h-[400vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                
                {/* Background Placeholder (First Frame) */}
                {!isLoaded && (
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-1000"
                        style={{ backgroundImage: `url(/images/projects/${folder}/${prefix}001.${extension})` }}
                    />
                )}

                {!isLoaded && (
                    <div className="relative z-30 flex flex-col items-center gap-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="text-white/60"
                        >
                            <Loader2 size={40} strokeWidth={1.5} />
                        </motion.div>
                        <div className="text-white text-center text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
                            initiating experience
                        </div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className={`w-full h-full block relative z-10 transition-opacity duration-1000 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Title Overlay */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 px-6"
                >
                    <h2 className="text-white text-4xl md:text-7xl font-heading uppercase tracking-widest text-center">
                        {title}
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        className="h-px bg-white/40 mt-8"
                    />
                </motion.div>

                {/* Final Overlay */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]) }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 text-center px-6"
                >
                    <h2 className="text-white text-4xl md:text-7xl font-heading uppercase tracking-widest leading-[0.9]">
                        Vision Into <br /> Reality
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
