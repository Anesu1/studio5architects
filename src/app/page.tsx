import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FAQ from "@/components/home/FAQ";

export default function Home() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <Hero />
            <Stats />
            <WhyUs />
            <ServicesPreview />
            <FeaturedProjects />
            <FAQ />

            <Footer />
        </main>
    );
}
