import SubServices from "@/components/services/SubServices";
import ReasonsScroll from "@/components/services/ReasonsScroll";
import ServiceGallery from "@/components/services/ServiceGallery";
import PricingTables from "@/components/services/PricingTables";
import FAQ from "@/components/home/FAQ";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

import { Metadata } from "next";

import { services, getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";

type ServiceDetailProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug;
    const service = slug ? getServiceBySlug(slug) : null;
    
    if (!service) return { title: "Service | Studio 5 Architects" };

    return {
        title: `${service.title} | Professional Architecture Services in Harare`,
        description: service.description,
    };
}

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetail({ params }: ServiceDetailProps) {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug;
    
    if (!slug) notFound();

    const service = getServiceBySlug(slug);
    if (!service) notFound();

    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar isDarkBackground={true} />

            {/* Hero */}
            <section className="min-h-[48vh] md:h-[60vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 bg-verdant-black text-white">
                <Reveal>
                    <span className="block text-sm font-bold tracking-widest text-white/50 uppercase mb-4">Expertise Detail</span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-4xl sm:text-5xl md:text-9xl font-heading uppercase leading-none">
                        {service.title}
                    </h1>
                </Reveal>
            </section>

            {/* Value Delivered Section */}
            <section className="py-24 px-6 md:px-12 border-b border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <Reveal>
                                <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4 block">Our Approach</span>
                                <h2 className="text-3xl md:text-5xl font-heading uppercase text-verdant-black mb-8">Value Delivered</h2>
                                <p className="text-lg text-black/70 leading-relaxed mb-8">
                                    {service.longDescription || service.description}
                                </p>
                            </Reveal>
                            
                            <div className="space-y-6">
                                {service.approach.map((item, idx) => (
                                    <Reveal key={idx} delay={0.1 * idx}>
                                        <div className="flex gap-6">
                                            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center shrink-0">
                                                <span className="text-xs font-bold">0{idx + 1}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold uppercase text-sm mb-2">{item.title}</h4>
                                                <p className="text-xs text-black/60 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <SubServices />
            <ReasonsScroll />
            <ServiceGallery />
            {/* <PricingTables /> */}

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
