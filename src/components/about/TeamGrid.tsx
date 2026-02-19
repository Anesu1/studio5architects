"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Eye, X } from "lucide-react";
import clsx from "clsx";

const team = [
    {
        name: "Brighton Madondo",
        role: "Architect",
        bio: "NUST graduate and board member of the Architects Council of Zimbabwe with leadership across complex architectural projects.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Tapiwa Manditsera",
        role: "Architect",
        bio: "Architect and NUST graduate with past board service and extensive experience in project design coordination.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Tinashe Honde",
        role: "Architect",
        bio: "Architect with a master's degree from Cyprus and associate of the Royal Institute of Chartered Surveyors.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "C. B. Helegwa",
        role: "Project Manager",
        bio: "Project manager with an HND in Architecture and a diploma in Project Management, focused on delivery performance.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Augustine Jewure",
        role: "Graduate Architect",
        bio: "Graduate architect contributing to concept development, documentation, and technical coordination.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Tichaona Gondo",
        role: "Graduate Architect",
        bio: "Supports design production and project visualization across residential and commercial workstreams.",
        image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Bernice Murape",
        role: "Architectural Technician",
        bio: "Technician with strong drafting and detailing capability, supporting precise construction documentation.",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Rumbidzai Njani",
        role: "Graduate Architect",
        bio: "Contributes to design research, planning studies, and coordinated architectural documentation.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Kelvin Mukucha",
        role: "Graduate Architect",
        bio: "Supports project development through modeling, drawing coordination, and interdisciplinary collaboration.",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Thelma Mare",
        role: "Architectural Technician",
        bio: "Technician focused on production quality, drawing consistency, and support to on-site implementation teams.",
        image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?fm=jpg&q=80&w=800&auto=format&fit=crop"
    },
];

export default function TeamGrid() {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);

    return (
        <section className="py-24 bg-verdant-white">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <h2 className="text-4xl md:text-6xl font-heading uppercase">Meet Our Team</h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {team.map((member, index) => (
                    <TeamCard
                        key={index}
                        member={member}
                        isOpen={selectedMember === index}
                        onToggle={() => setSelectedMember(selectedMember === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
}

type TeamMember = {
    name: string;
    role: string;
    bio: string;
    image: string;
};

function TeamCard({ member, isOpen, onToggle }: { member: TeamMember, isOpen: boolean, onToggle: () => void }) {
    return (
        <motion.div
            layout
            className={clsx(
                "relative bg-white border border-black/5 overflow-hidden transition-all duration-500",
                isOpen ? "col-span-1 md:col-span-2 row-span-1 h-[400px]" : "h-[400px]"
            )}
            style={{ borderRadius: isOpen ? 24 : 0 }}
        >
            <motion.div layout className={clsx("relative w-full h-full transition-all duration-500", isOpen ? "p-8" : "p-0")}>

                {/* Image State */}
                <motion.div
                    layoutId={`image-${member.name}`}
                    className={clsx(
                        "relative overflow-hidden bg-gray-200 transition-all duration-500",
                        isOpen ? "w-24 h-24 rounded-full float-left mr-6 mb-2" : "w-full h-full absolute inset-0"
                    )}
                >
                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    {!isOpen && (
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    )}
                </motion.div>

                {/* Content Overlay (Closed) */}
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent text-white"
                    >
                        <h3 className="text-xl font-heading uppercase">{member.name}</h3>
                        <p className="text-xs font-body tracking-widest opacity-80">{member.role}</p>
                    </motion.div>
                )}

                {/* Toggle Button */}
                <button
                    onClick={onToggle}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <X size={18} className="text-black" />
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                <Eye size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="pt-2"
                    >
                        <h3 className="text-3xl font-heading uppercase mb-1">{member.name}</h3>
                        <p className="text-sm font-bold tracking-widest text-gray-500 mb-6">{member.role}</p>
                        <p className="text-lg leading-relaxed text-gray-700 max-w-lg">
                            {member.bio}
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}
