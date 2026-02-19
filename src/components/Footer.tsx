import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-verdant-black text-verdant-bg py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <div>
                        <Link href="/" className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity" aria-label="Studio 5 Architects home">
                            <Image
                                src="/logo.png"
                                alt="Studio 5 Architects"
                                width={240}
                                height={52}
                                className="h-14 w-auto md:h-16"
                            />
                        </Link>
                    </div>
                    <div className="flex gap-12 mt-10 md:mt-0 font-body text-sm uppercase tracking-wider">
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

                <div className="flex justify-between items-end border-t border-white/10 pt-8 text-xs opacity-40">
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
