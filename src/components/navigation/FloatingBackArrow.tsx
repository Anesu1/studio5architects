"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function FloatingBackArrow() {
    const router = useRouter();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show if not on the homepage
        setIsVisible(pathname !== "/");
    }, [pathname]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => router.back()}
                className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] group hidden md:flex items-center gap-3"
                aria-label="Go back"
            >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-black/10 bg-white/80 backdrop-blur-md shadow-lg group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-500">
                    <ArrowLeft size={20} className="transition-transform duration-500 group-hover:-translate-x-1" />
                </div>
                
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-black opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    Previous Page
                </span>
            </motion.button>
        </AnimatePresence>
    );
}
