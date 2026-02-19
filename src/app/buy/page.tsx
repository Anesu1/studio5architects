import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function BuyPage() {
    return (
        <main className="min-h-screen bg-verdant-bg">
            <StickyNavbar />

            <PageHero
                title="Request Consultation"
                description="Tell us about your project goals, timeline, and budget. We will guide you from feasibility to delivery."
            />
            <section className="px-6 md:px-12 pb-24 pt-2">
                <div className="mt-4">
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
