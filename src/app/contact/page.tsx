"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import PageHero from "@/components/ui/PageHero";

export default function Contact() {
    return (
        <main className="min-h-screen bg-verdant-bg relative">
            <StickyNavbar />

            <PageHero
                title="Contact"
                description="Get in touch to discuss your project goals, location, timeline, and budget requirements."
                compact
            />

            <section className="pb-20 px-6 md:px-12 bg-verdant-bg min-h-screen">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-7xl mx-auto">
                    {/* Form Section */}
                    <div className="md:w-1/2">
                        <form className="space-y-8 md:space-y-12 mt-8 md:mt-12">
                            <Reveal delay={0.2}>
                                <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-transparent py-4 outline-none text-lg md:text-xl placeholder:text-black/30 text-black uppercase font-heading tracking-wide"
                                    />
                                </div>
                            </Reveal>
                            <Reveal delay={0.3}>
                                <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-transparent py-4 outline-none text-lg md:text-xl placeholder:text-black/30 text-black uppercase font-heading tracking-wide"
                                    />
                                </div>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full bg-transparent py-4 outline-none text-lg md:text-xl placeholder:text-black/30 text-black uppercase font-heading tracking-wide resize-none"
                                    />
                                </div>
                            </Reveal>

                            <Reveal delay={0.5}>
                                <MagneticButton>
                                    <button className="w-full sm:w-auto px-10 md:px-12 py-4 bg-verdant-black text-verdant-white rounded-full uppercase text-sm font-bold tracking-widest hover:scale-105 transition-transform">
                                        Send Message
                                    </button>
                                </MagneticButton>
                            </Reveal>
                        </form>
                    </div>

                    {/* Info / Map Section */}
                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div>
                            <Reveal delay={0.3}>
                                <h2 className="text-2xl font-heading uppercase mb-8">Details</h2>
                                <div className="space-y-8 opacity-70">
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest opacity-50 mb-2">Address</span>
                                        <p className="text-lg">5 Chaifont Road,<br />Greencroft, Harare</p>
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest opacity-50 mb-2">Email</span>
                                        <p className="text-lg">info@studio5architects.com</p>
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest opacity-50 mb-2">Phones</span>
                                        <p className="text-lg">0783 934 290<br />0719 690 587</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="mt-12 h-64 md:h-auto md:flex-grow grayscale relative overflow-hidden bg-gray-200 rounded-xl">
                            {/* Placeholder Map Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-50 hover:opacity-100 transition-opacity duration-700"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?fm=jpg&q=80&w=1200')" }}
                            />
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
                                Open Map
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
