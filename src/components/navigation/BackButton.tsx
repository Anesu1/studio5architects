"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ label = "Back" }: { label?: string }) {
    const router = useRouter();

    return (
        <motion.button
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all mb-8"
        >
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-black/5 group-hover:border-black/20 group-hover:bg-black group-hover:text-white transition-all duration-500">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            {label}
        </motion.button>
    );
}
