import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import Process from "@/components/about/Process";
import CorePrinciples from "@/components/about/CorePrinciples";
import StoryTimeline from "@/components/about/StoryTimeline";
import TeamGrid from "@/components/about/TeamGrid";
import Certifications from "@/components/about/Certifications";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <AboutHero />
            <MissionVision />
            <Process />

            <CorePrinciples />
            <StoryTimeline />

            <TeamGrid />
            <Certifications />

            <Footer />
        </main>
    );
}
