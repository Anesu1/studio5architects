"use client";

import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.div
                className="fixed inset-0 z-[100] bg-verdant-black origin-left"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="fixed inset-0 z-[100] bg-verdant-black origin-right"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <CustomCursor />
            {children}
        </>
    );
}
