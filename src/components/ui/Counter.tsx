"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({
    value,
    direction = "up",
    className,
}: {
    value: number;
    direction?: "up" | "down";
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    // Set initial value
    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(
                direction === "down" ? value : 0
            );
        }
    }, [direction, value]);

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [isInView, motionValue, direction, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(
                    Math.floor(latest)
                );
            }
        });
    }, [springValue]);

    return <span className={className} ref={ref} />;
}
