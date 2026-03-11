import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import Process from "@/components/about/Process";
import CorePrinciples from "@/components/about/CorePrinciples";
import StoryTimeline from "@/components/about/StoryTimeline";
import TeamGrid from "@/components/about/TeamGrid";
import Certifications from "@/components/about/Certifications";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Leading Architecture Firm in Harare, Zimbabwe",
    description: "Learn more about Studio 5 Architects, our mission, vision, and the expert team of architects and project managers dedicated to excellence in Zimbabwe.",
};

export default function About() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar isDarkBackground={true} />

            <AboutHero />

            {/* WHO WE ARE Section */}
            <section id="who-we-are" className="pt-12">
                <div className="px-6 md:px-12 mb-12">
                    <h2 className="text-4xl md:text-6xl font-heading uppercase text-verdant-black border-b border-black/10 pb-8">Who we are</h2>
                </div>
                <MissionVision />
                <StoryTimeline />
            </section>

            {/* WHAT WE DO Section */}
            <section id="what-we-do" className="pt-24 bg-black/5">
                <div className="px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <h2 className="text-4xl md:text-6xl font-heading uppercase text-verdant-black">What we do</h2>
                    <Link href="/services" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-black/60 transition-colors">
                        View All Expertise
                    </Link>
                </div>
                <CorePrinciples />
                <Certifications />
            </section>

            {/* HOW WE WORK Section */}
            <section id="how-we-work" className="pt-24">
                <div className="px-6 md:px-12 mb-12">
                    <h2 className="text-4xl md:text-6xl font-heading uppercase text-verdant-black border-b border-black/10 pb-8">How we work</h2>
                </div>
                <Process />
                <TeamGrid />
            </section>

            <Footer />
        </main>
    );
}
