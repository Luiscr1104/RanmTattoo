"use client";
import { ParallaxScroll } from "./ui/ParallaxScroll";

export function Gallery() {
    return (
        <div className="h-screen w-full bg-zinc-950 relative flex flex-col items-center justify-center antialiased" id="gallery">
            <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-10 font-graffiti bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">Featured Works</h2>
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
