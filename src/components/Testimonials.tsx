"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function Testimonials() {
    return (
        <div className="min-h-[40rem] py-20 rounded-md flex flex-col antialiased bg-zinc-950 items-center justify-center relative overflow-hidden" id="testimonials">
            <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-10 md:mb-20 font-graffiti bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 px-4">
                Street Rep
            </h2>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Ran is truly an artist. The precision in his fine line work is unlike anything I've seen. My tattoo healed perfectly and looks like a drawing on my skin.",
        name: "Alex Rivera",
        title: "Black & Grey Client",
    },
    {
        quote:
            "Came in for a cover-up and walked out with a masterpiece. He turned a mistake from my youth into something I'm proud to show off every day.",
        name: "Samantha Reed",
        title: "Cover-up Enthusiast",
    },
    {
        quote: "The studio vibes are top-tier. Clean, professional, and edgy as hell. If you want a tattoo that stands out, this is the place.",
        name: "Marcus Thorne",
        title: "Geometric Art Collector",
    },
    {
        quote:
            "Professional from start to finish. Ran took my vague idea and sketched something better than I could have imagined. Highly recommend.",
        name: "Elena Vance",
        title: "First-timer",
    },
    {
        quote:
            "Deep black ink and sharp lines. Exactly what I was looking for. Will be back for my full sleeve next year.",
        name: "Jordan Smith",
        title: "Minimalist Fan",
    },
];
