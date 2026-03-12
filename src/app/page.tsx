import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FAQ from "@/components/home/FAQ";
import NewsPreview from "@/components/home/NewsPreview";
import { getProjects } from "@/lib/projects";

export default async function Home() {
    const projects = await getProjects();
    const featuredProjects = projects.slice(0, 4);

    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <Hero />
            <Stats />
            <WhyUs />
            <ServicesPreview />
            <FeaturedProjects initialProjects={featuredProjects} />
            <NewsPreview />
            <FAQ />

            <Footer />
        </main>
    );
}
