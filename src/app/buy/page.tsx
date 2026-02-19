import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BuyPage() {
    return (
        <main className="min-h-screen bg-verdant-bg">
            <StickyNavbar />

            <section className="px-6 md:px-12 pt-32 pb-24">
                <h1 className="text-6xl md:text-9xl font-heading uppercase leading-none">Request Consultation</h1>
                <p className="mt-8 max-w-3xl text-xl text-black/70">
                    Tell us about your project goals, timeline, and budget. We will guide you from feasibility to delivery.
                </p>
                <div className="mt-12">
                    <Link
                        href="/contact"
                        className="inline-flex items-center rounded-full bg-verdant-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-verdant-white"
                    >
                        Contact Studio 5
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
