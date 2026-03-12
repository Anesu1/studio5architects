"use client";

export default function BackToTopButton() {
    return (
        <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:text-white transition-all uppercase tracking-widest font-bold"
        >
            Back to Top ↑
        </button>
    );
}
