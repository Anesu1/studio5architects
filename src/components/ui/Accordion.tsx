"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    index: number; // For ordered index display 01, 02 etc
}

function AccordionItem({ title, children, isOpen, onClick, index }: AccordionItemProps) {
    return (
        <div className="border-t border-black/10 last:border-b">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 group cursor-none" // cursor-none because we will handle it with custom cursor logic if wanted, or just standard
                data-cursor="hover"
            >
                <div className="flex items-center gap-8">
                    <span className="text-xs font-mono text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-xl md:text-3xl font-heading uppercase text-left group-hover:pl-4 transition-all duration-300">{title}</span>
                </div>
                <div className="relative">
                    <Plus className={clsx("w-6 h-6 transition-transform duration-300", isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100")} />
                    <Minus className={clsx("w-6 h-6 absolute top-0 left-0 transition-transform duration-300", isOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0")} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pl-12 md:pl-16 text-verdant-black/70 leading-relaxed max-w-2xl">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first open

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
