import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-verdant-black text-verdant-bg py-16 md:py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-14 md:mb-20">
                    <div className="w-full md:w-auto">
                        <Link href="/" className="inline-flex items-center opacity-30 hover:opacity-100 transition-opacity" aria-label="Studio 5 Architects home">
                            <h2 className="text-5xl sm:text-6xl md:text-[8vw] leading-none font-heading font-bold uppercase tracking-tighter">
                                Studio5Architects
                            </h2>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:flex md:gap-12 font-body text-sm uppercase tracking-wider w-full md:w-auto">
                        <div className="flex flex-col gap-4">
                            <span className="opacity-50 mb-4">Sitemap</span>
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <Link href="/about" className="hover:text-white transition-colors">About</Link>
                            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                            <Link href="/services" className="hover:text-white transition-colors">Expertise</Link>
                            <Link href="/blogs" className="hover:text-white transition-colors">Insights</Link>
                            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="opacity-50 mb-4">Categories</span>
                            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                            <Link href="/services" className="hover:text-white transition-colors">Commercial</Link>
                            <Link href="/services" className="hover:text-white transition-colors">Industrial</Link>
                            <Link href="/services" className="hover:text-white transition-colors">Residential</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="opacity-50 mb-4">Socials</span>
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-end border-t border-white/10 pt-8 text-xs opacity-40">
                    <span>Copyright 2026 Studio 5 Architects. All rights reserved.</span>
                    <div className="flex gap-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
