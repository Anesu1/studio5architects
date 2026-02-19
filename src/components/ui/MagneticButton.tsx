"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function MagneticButton({
    children,
    className,
    onClick,
}: {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const transform = useTransform(
        [xSpring, ySpring],
        ([latestX, latestY]) => `translate(${latestX}px, ${latestY}px)`
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distance = 15; // Max distance the button moves

        const moveX = ((clientX - centerX) / width) * distance;
        const moveY = ((clientY - centerY) / height) * distance;

        x.set(moveX);
        y.set(moveY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={className}
        >
            {children}
        </motion.div>
    );
}
