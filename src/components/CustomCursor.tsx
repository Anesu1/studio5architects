"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [cursorType, setCursorType] = useState<"default" | "pill">("default");

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for closest interactive element
            const interactive = target.closest("button, a, [data-cursor='hover']");

            if (interactive) {
                setIsHovering(true);

                const text = (interactive as HTMLElement).dataset.cursorText;
                const type = (interactive as HTMLElement).dataset.cursorType;

                if (text) setCursorText(text);
                if (type === "pill") setCursorType("pill");
            } else {
                setIsHovering(false);
                setCursorText("");
                setCursorType("default");
            }
        };

        const handleHoverEnd = (e: MouseEvent) => {
            // We can rely on mouseover to handle transitions between elements, 
            // but if we leave an interactive element to a non-interactive one:
            const target = e.relatedTarget as HTMLElement;
            if (!target || !target.closest("button, a, [data-cursor='hover']")) {
                setIsHovering(false);
                setCursorText("");
                setCursorType("default");
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Use capture to ensure we catch events
        document.addEventListener("mouseover", handleHoverStart, { capture: true });
        document.addEventListener("mouseout", handleHoverEnd, { capture: true });


        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseover", handleHoverStart, { capture: true });
            document.removeEventListener("mouseout", handleHoverEnd, { capture: true });
        };
    }, []);

    if (typeof window === "undefined") return null;

    // Variants for different cursor states
    const variants = {
        default: {
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "white",
            mixBlendMode: "difference" as const,
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "white",
            mixBlendMode: "difference" as const,
        },
        pill: {
            x: mousePosition.x - 60, // Center horizontally (width 120 / 2)
            y: mousePosition.y - 20, // Center vertically (height 40 / 2)
            width: 120,
            height: 40,
            borderRadius: "9999px",
            backgroundColor: "#222", // Verdant Black-ish
            color: "white",
            mixBlendMode: "normal" as const, // No difference mode for pill usually, or verified against design
        }
    };

    // Determine which variant to use
    let currentVariant = "default";
    if (isHovering) {
        currentVariant = cursorType === "pill" ? "pill" : "hover";
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={clsx(
                        "fixed top-0 left-0 z-[9999] pointer-events-none",
                        "flex items-center justify-center font-bold uppercase tracking-widest overflow-hidden"
                    )}
                    animate={variants[currentVariant as keyof typeof variants]}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 0.25,
                    }}
                >
                    {cursorText && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className={clsx(
                                "text-[10px] leading-tight text-center",
                                cursorType === "pill" ? "text-white" : "text-black mix-blend-difference" // Invert color logic if needed
                            )}
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
