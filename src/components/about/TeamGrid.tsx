"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Eye, X } from "lucide-react";
import clsx from "clsx";

const team = [
    {
        name: "Brighton Madondo",
        role: "Principal Architect",
        bio: "Master of Architecture (NUST), Member of Architects Council of Zimbabwe and Institute of Architects Zimbabwe. Board Member of both professional bodies.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/10/DSC_0864-scaled.jpg"
    },
    {
        name: "Tapiwa Manditsera",
        role: "Architect",
        bio: "Master of Architecture (NUST). Member of Architects Council of Zimbabwe and Institute of Architects Zimbabwe. Former Board Member of both professional bodies.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/10/DSC_0857-scaled.jpg"
    },
    {
        name: "Tinashe Honde",
        role: "Architect",
        bio: "Master of Architecture (Professional) (Cyprus), Associate Member of Royal Institute of Chartered Surveyors, and Member of the Architects Council of Zimbabwe.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/10/DSC_0865-scaled.jpg"
    },
    {
        name: "C. B. Helegwa",
        role: "Project Manager",
        bio: "Project Manager with an HND in Architecture and a Diploma in Project Management. Associate Member of the Institute of Architects Zimbabwe.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/10/DSC_0943-scaled.jpg"
    },
    {
        name: "Augustine Jewure",
        role: "Graduate Architect",
        bio: "Bachelor of Architectural Studies (Hons) (NUST) and Diploma in Architectural Technology (Harare Polytechnic).",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/10/DSC_1008-scaled.jpg"
    },
    {
        name: "Tichaona Gondo",
        role: "Graduate Architect",
        bio: "Bachelor of Architectural Studies (Hons) (NUST). Expert in architectural visualization and technical documentation.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/10/DSC_1034-scaled.jpg"
    },
    {
        name: "Bernice Murape",
        role: "Graduate Architect",
        bio: "Bachelor of Architectural Studies (Hons) (NUST). Specializes in coordinating complex design projects and documentation.",
        image: "https://www.studio5architects.com/wp-content/uploads/2022/09/DSC_0874-scaled.jpg"
    },
    {
        name: "Rumbidzai Njani",
        role: "Architectural Technician",
        bio: "National Diploma in Architectural Technology (Harare Polytechnic). Focused on technical precision and construction detailing.",
        image: "https://www.studio5architects.com/wp-content/uploads/2021/10/DSC_1038-scaled.jpg"
    },
];

export default function TeamGrid() {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);

    return (
        <section className="py-24 bg-verdant-white">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <h2 className="text-4xl md:text-6xl font-heading uppercase">Meet Our Team</h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
