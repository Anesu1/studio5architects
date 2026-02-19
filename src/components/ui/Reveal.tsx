"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface RevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    x?: number;
    y?: number;
}

export default function Reveal({
    children,
    width = "fit-content",
    delay = 0.25,
    className,
    x = 0,
    y = 75,
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: x, y: y },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
}
