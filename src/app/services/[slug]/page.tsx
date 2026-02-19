import SubServices from "@/components/services/SubServices";
import ReasonsScroll from "@/components/services/ReasonsScroll";
import ServiceGallery from "@/components/services/ServiceGallery";
import PricingTables from "@/components/services/PricingTables";
import FAQ from "@/components/home/FAQ";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

type ServiceDetailProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export default async function ServiceDetail({ params }: ServiceDetailProps) {
    // In a real app, fetch data based on slug. 
    // For now we use generic content but the hero title uses the slug.

    // Simple slug to title conversion
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug ?? "service-detail";
    const title = slug.replace(/-/g, " ");

    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            {/* Hero */}
            <section className="min-h-[48vh] md:h-[60vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 bg-verdant-black text-white">
                <Reveal>
                    <span className="block text-sm font-bold tracking-widest text-white/50 uppercase mb-4">Expertise Detail</span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-4xl sm:text-5xl md:text-9xl font-heading uppercase leading-none capitalize">
                        {title}
                    </h1>
                </Reveal>
            </section>

            <SubServices />
            <ReasonsScroll />
            <ServiceGallery />
            <PricingTables />

            {/* Reuse FAQ from Home */}
            <FAQ />

            <div className="py-24 px-6 md:px-12 bg-white text-center">
                <h2 className="text-4xl md:text-6xl font-heading uppercase mb-8">Ready to Start?</h2>
                <p className="text-xl mb-12 max-w-2xl mx-auto">Contact Studio 5 Architects to discuss your project goals, timeline, and budget.</p>
                {/* Contact form could go here, or link to contact page */}
            </div>

            <Footer />
        </main>
    );
}
