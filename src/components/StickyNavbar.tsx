"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const serviceDropdownLinks = [
    { name: "Interior Design", href: "/services/interior-design" },
    { name: "Landscape Design", href: "/services/landscape-design" },
    { name: "Feasibility Studies", href: "/services/feasibility-studies" },
    { name: "Conceptualising", href: "/services/conceptualising" },
    { name: "Project & Construction Management", href: "/services/project-construction-management" },
];

const projectDropdownLinks = [
    { name: "Commercial", href: "/projects?category=Commercial" },
    { name: "Industrial", href: "/projects?category=Industrial" },
    { name: "Institutional", href: "/projects?category=Institutional" },
    { name: "Medical", href: "/projects?category=Medical" },
    { name: "Residential", href: "/projects?category=Residential" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Projects",
        href: "/projects",
        children: projectDropdownLinks
    },
    {
        name: "Services",
        href: "/services",
        children: serviceDropdownLinks
    },
    { name: "Contact", href: "/contact" },
];

export default function StickyNavbar({ isDarkBackground = false }: { isDarkBackground?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    };

    const toggleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(prev => prev === name ? null : name);
    };

    return (
        <>
            <motion.nav
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-10 transition-all duration-500",
                    isScrolled || isMobileMenuOpen
                        ? "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm py-3"
                        : "bg-transparent py-6"
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
                            className={clsx(
                                "h-8 sm:h-10 w-auto transition-transform duration-500",
                                isScrolled ? "scale-90" : "scale-100"
                            )}
                            priority
                        />
                    </Link>
                </div>

                <div className={clsx(
                    "hidden lg:flex items-center gap-10",
                    isScrolled || isMobileMenuOpen ? "text-verdant-black" : (isDarkBackground ? "text-white" : "text-verdant-black")
                )}>
                    {navLinks.map((link) => (
                        link.children ? (
                            <div key={link.name} className="relative group py-2">
                                <Link
                                    href={link.href}
                                    className="text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-100 transition-all flex items-center gap-1 group-hover:text-black/60"
                                    data-cursor="hover"
                                >
                                    {link.name}
                                    <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180 opacity-40" />
                                </Link>

                                {/* Hover Bridge and Dropdown */}
                                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                    <div className="w-64 rounded-2xl border border-black/5 bg-white/95 backdrop-blur-xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block rounded-xl px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black hover:bg-black/[0.03] transition-all"
                                                data-cursor="hover"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-100 opacity-100 transition-all hover:text-black/60"
                                data-cursor="hover"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <MagneticButton className="hidden sm:block">
                        <Link
                            href="/contact"
                            className={clsx(
                                "px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all",
                                isScrolled
                                    ? "bg-black text-white hover:bg-black/80"
                                    : "bg-black text-white hover:shadow-lg"
                            )}
                            data-cursor="hover"
                        >
                            Get In Touch
                        </Link>
                    </MagneticButton>

                    <button
                        className={clsx(
                            "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border transition-colors",
                            isScrolled || isMobileMenuOpen
                                ? "border-black/10 bg-white/80"
                                : (isDarkBackground ? "border-white/20 bg-white/10" : "border-black/10 bg-white/80")
                        )}
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle menu"
                    >
                        <span className={clsx(
                            "w-5 h-0.5 transition-all duration-300",
                            isScrolled || isMobileMenuOpen || !isDarkBackground ? "bg-black" : "bg-white",
                            isMobileMenuOpen && "rotate-45 translate-y-2"
                        )} />
                        <span className={clsx(
                            "w-5 h-0.5 transition-all duration-300",
                            isScrolled || isMobileMenuOpen || !isDarkBackground ? "bg-black" : "bg-white",
                            isMobileMenuOpen && "opacity-0"
                        )} />
                        <span className={clsx(
                            "w-5 h-0.5 transition-all duration-300",
                            isScrolled || isMobileMenuOpen || !isDarkBackground ? "bg-black" : "bg-white",
                            isMobileMenuOpen && "-rotate-45 -translate-y-2"
                        )} />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white pt-32 px-10 pb-10 lg:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className="border-b border-black/5 pb-6"
                                >
                                    {link.children ? (
                                        <>
                                            <button
                                                onClick={() => toggleMobileDropdown(link.name)}
                                                className="w-full flex items-center justify-between text-left text-2xl font-heading uppercase"
                                            >
                                                <span>{link.name}</span>
                                                <ChevronDown className={clsx("transition-transform duration-300", openMobileDropdown === link.name && "rotate-180")} />
                                            </button>
                                            <AnimatePresence>
                                                {openMobileDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden mt-6 flex flex-col gap-4 pl-4"
                                                    >
                                                        <Link
                                                            href={link.href}
                                                            onClick={closeMobileMenu}
                                                            className="text-sm font-bold uppercase tracking-widest text-black/40"
                                                        >
                                                            All {link.name}
                                                        </Link>
                                                        {link.children.map((child) => (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                onClick={closeMobileMenu}
                                                                className="text-sm font-bold uppercase tracking-widest text-black/70"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            className="text-2xl font-heading uppercase block"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4"
                            >
                                <Link
                                    href="/contact"
                                    onClick={closeMobileMenu}
                                    className="w-full inline-flex justify-center rounded-full bg-black px-10 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl"
                                >
                                    Request Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
