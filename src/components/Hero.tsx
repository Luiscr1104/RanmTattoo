import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../lib/utils";

export function Hero() {
    return (
        <div className="min-h-screen md:h-screen w-full rounded-md flex items-center justify-center bg-zinc-950 antialiased bg-grid-white relative overflow-hidden py-20 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
                <h1 className="text-5xl md:text-9xl font-bold font-graffiti text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50 drop-shadow-2xl px-2">
                    Ran Tattoo Art
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Ink as eternal as your story. Specialized in geometric, realism, and fine line tattoo art. Located in the heart of the city.
                </p>
                <div className="mt-8 flex justify-center">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[shimmer_2s_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Book Appointment
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
