import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const galleryImages = [
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?fm=jpg&q=80&w=1400&auto=format&fit=crop",
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-verdant-bg">
            <StickyNavbar />

            <section className="px-6 md:px-12 pt-32 pb-16">
                <h1 className="text-6xl md:text-9xl font-heading uppercase leading-none">Gallery</h1>
                <p className="mt-6 max-w-2xl text-black/60 text-lg">
                    A curated selection of interiors, facades, and material studies from recent work.
                </p>
            </section>

            <section className="px-6 md:px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {galleryImages.map((src, index) => (
                        <div key={src} className="group relative aspect-[4/5] overflow-hidden bg-black/5">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
