"use client";
import { ParallaxScroll } from "./ui/ParallaxScroll";

export function Gallery() {
    return (
        <div className="min-h-screen w-full bg-zinc-950 relative flex flex-col items-center justify-center antialiased py-32" id="gallery">
            <div className="max-w-7xl mx-auto w-full px-4 mb-20 flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block font-sans">
                    01 • Portafolio
                </span>
                <h2 className="text-4xl md:text-8xl font-display font-black text-left text-white tracking-tighter">
                    TRABAJOS<br />SELECCIONADOS
                </h2>
            </div>
            <ParallaxScroll images={images} />
        </div>
    );
}

const images = [
    "/images/1 (1).webp",
    "/images/2 (1).webp",
    "/images/3 (1).webp",
    "/images/4 (1).webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
    "/images/8.webp",
    "/images/9.webp",
    "/images/10.webp",
];
