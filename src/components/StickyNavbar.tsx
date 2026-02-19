"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import clsx from "clsx";

const serviceDropdownLinks = [
    { name: "Interior Design", href: "/services/interior-design" },
    { name: "Landscape Design", href: "/services/landscape-design" },
    { name: "Feasibility Studies", href: "/services/feasibility-studies" },
    { name: "Conceptualising", href: "/services/conceptualising" },
    { name: "Project & Construction Management", href: "/services/project-construction-management" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Expertise", href: "/services", children: serviceDropdownLinks },
    { name: "Projects", href: "/projects" },
    { name: "Insights", href: "/blogs" },
    { name: "Contact", href: "/contact" },
];

export default function StickyNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileExpertiseOpen, setIsMobileExpertiseOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileExpertiseOpen(false);
    };

    return (
        <>
            <motion.nav
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 transition-colors duration-300",
                    isScrolled || isMobileMenuOpen
                        ? "bg-verdant-bg/96 backdrop-blur-md border-b border-black/8 shadow-sm"
                        : "bg-verdant-bg/90 backdrop-blur-md border-b border-black/6"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
                <div className="flex items-center gap-2">
                    <Link href="/" className="inline-flex items-center" aria-label="Studio 5 Architects home">
                        <Image
                            src="/logo.png"
                            alt="Studio 5 Architects"
                            width={158}
                            height={44}
                            quality={100}
                            className="h-6 w-auto sm:h-10"
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden sm:flex items-center gap-8 text-verdant-black">
                    {navLinks.map((link) => (
                        link.children ? (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium uppercase tracking-wide hover:opacity-50 transition-opacity flex items-center gap-2"
                                    data-cursor="hover"
                                >
                                    {link.name}
                                </Link>

                                <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-xl border border-black/10 bg-verdant-bg p-2 text-verdant-black shadow-xl opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className="block rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wide hover:bg-black/5 transition-colors"
                                            data-cursor="hover"
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium uppercase tracking-wide hover:opacity-50 transition-opacity"
                                data-cursor="hover"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                <MagneticButton className="hidden sm:block">
                    <Link
                        href="/buy"
                        className={clsx(
                            "px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-transform",
                            isScrolled ? "bg-verdant-black text-verdant-white" : "bg-verdant-black text-verdant-white"
                        )}
                        data-cursor="hover"
                    >
                        Request Consultation
                    </Link>
                </MagneticButton>

                <button
                    className="sm:hidden rounded-full border border-black/25 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-verdant-black"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? "Close" : "Menu"}
                </button>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-verdant-bg pt-24 px-6 pb-8 sm:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-black/10 pb-3">
                                    {link.children ? (
                                        <>
                                            <button
                                                onClick={() => setIsMobileExpertiseOpen((prev) => !prev)}
                                                className="w-full flex items-center justify-between text-left text-lg font-heading uppercase"
                                            >
                                                <span>{link.name}</span>
                                                <span className="text-xs">{isMobileExpertiseOpen ? "-" : "+"}</span>
                                            </button>
                                            <AnimatePresence>
                                                {isMobileExpertiseOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden mt-3 flex flex-col gap-2"
                                                    >
                                                        <Link
                                                            href={link.href}
                                                            onClick={closeMobileMenu}
                                                            className="text-sm uppercase tracking-widest text-black/70 py-1"
                                                        >
                                                            All Expertise
                                                        </Link>
                                                        {link.children.map((child) => (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                onClick={closeMobileMenu}
                                                                className="text-sm uppercase tracking-widest text-black/70 py-1"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link href={link.href} onClick={closeMobileMenu} className="text-lg font-heading uppercase">
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <Link
                                href="/buy"
                                onClick={closeMobileMenu}
                                className="mt-4 inline-flex justify-center rounded-full bg-verdant-black px-6 py-3 text-xs font-bold uppercase tracking-widest text-verdant-white"
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
