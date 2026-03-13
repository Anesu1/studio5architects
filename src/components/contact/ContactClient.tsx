"use client";

import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import PageHero from "@/components/ui/PageHero";

import { Map, MapMarker, MarkerContent, MapControls, MarkerPopup, MarkerTooltip } from "@/components/ui/map";

export default function ContactClient() {
    const officeCoords: [number, number] = [31.0105744, -17.7743602]; // 5 Chalfont Road, Greencroft, Harare [lng, lat]

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
                        <form className=" space-y-8 md:space-y-12 mt-8 md:mt-12">
                            <Reveal delay={0.2} width={`100%`}>
                                <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-transparent py-4 outline-none text-lg md:text-xl placeholder:text-black/30 text-black uppercase font-heading tracking-wide"
                                    />
                                </div>
                            </Reveal>
                            <Reveal delay={0.3} width={`100%`}>
                                <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-transparent py-4 outline-none text-lg md:text-xl placeholder:text-black/30 text-black uppercase font-heading tracking-wide"
                                    />
                                </div>
                            </Reveal>
                            <Reveal delay={0.4} width={`100%`}>
                                <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full bg-transparent py-4 outline-none text-lg md:text-xl placeholder:text-black/30 text-black uppercase font-heading tracking-wide resize-none"
                                    />
                                </div>
                            </Reveal>

                            <Reveal delay={0.5} width={`100%`}>
                                <MagneticButton>
                                    <button className="w-full sm:w-auto px-10 md:px-12 py-4 bg-verdant-black text-verdant-white rounded-sm uppercase text-sm font-medium tracking-widest hover:scale-105 transition-transform">
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
                                <h2 className="text-2xl font-heading mb-8">Details</h2>
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

                        <div className="mt-12 h-[300px] md:h-[550px] relative overflow-hidden bg-gray-100 rounded border border-black/5 shadow-inner grayscale group pointer-events-auto">
                            <Map
                                center={officeCoords}
                                zoom={14}
                                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                            >
                                <MapMarker longitude={officeCoords[0]} latitude={officeCoords[1]}>
                                    <MarkerContent>
                                        <div className="flex flex-col items-center">
                                            <div className="bg-verdant-black w-8 h-8 rounded-full border-4 border-white shadow-xl flex items-center justify-center animate-bounce">
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </div>
                                            <div className="mt-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-sm">
                                                Get Directions
                                            </div>
                                        </div>
                                    </MarkerContent>
                                    <MarkerPopup closeButton={true}>
                                        <div className="p-2 min-w-[220px]">
                                            <h3 className="font-heading text-sm mb-2 text-verdant-black">Studio 5 Architects</h3>
                                            <p className="text-xs text-black/60 mb-3 uppercase tracking-wider leading-relaxed">
                                                5 Chaifont Road,<br />Greencroft, Harare
                                            </p>
                                            <div className="flex flex-col gap-1 text-xs uppercase tracking-widest text-black/40 mb-4 border-t pt-2">
                                                <span>Mon - Fri: 8 AM - 5 PM</span>
                                                <span>Sat - Sun: Closed</span>
                                            </div>
                                            <a 
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${officeCoords[1]},${officeCoords[0]}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full bg-verdant-black text-white text-xs font-medium text-center py-2.5 rounded-sm hover:bg-black/80 transition-colors uppercase tracking-[0.2em]"
                                            >
                                                Get Directions
                                            </a>
                                        </div>
                                    </MarkerPopup>
                                    <MarkerTooltip>
                                        <div className="px-2 py-1 text-xs font-bold uppercase tracking-widest">
                                            Get Directions
                                        </div>
                                    </MarkerTooltip>
                                </MapMarker>
                                <MapControls />
                            </Map>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
