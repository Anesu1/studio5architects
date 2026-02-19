"use client";

import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.div
                className="fixed inset-0 z-[100] origin-left bg-[linear-gradient(120deg,#0b1a24_0%,#0f2a39_45%,#141414_100%)] pointer-events-none"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.div
                className="fixed inset-0 z-[101] pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
                    initial={{ x: "-20vw" }}
                    animate={{ x: "120vw" }}
                    exit={{ x: "-20vw" }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0.55, filter: "blur(0px)" }}
                    animate={{ opacity: 0, filter: "blur(8px)" }}
                    exit={{ opacity: 0.55, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <span className="font-heading text-4xl md:text-6xl uppercase tracking-[0.1em] text-white/70">
                        Studio5Architects
                    </span>
                </motion.div>
            </motion.div>
            <CustomCursor />
            {children}
        </>
    );
}
