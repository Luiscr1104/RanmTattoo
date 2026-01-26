import React from "react";
import { cn } from "../lib/utils";

const steps = [
    {
        title: "The Vision",
        description: "We start with your idea. Whether it's a rough sketch or a vague concept, we'll refine it together until it's perfect.",
        icon: "01",
    },
    {
        title: "The Design",
        description: "I'll create a custom digital stencil tailored to your body's anatomy, ensuring the flow is natural and striking.",
        icon: "02",
    },
    {
        title: "The Ink",
        description: "The execution phase. Using the highest quality pigments and top-tier hygiene standards to bring the art to life.",
        icon: "03",
    },
    {
        title: "The Legacy",
        description: "Detailed aftercare instructions to ensure your investment stays vibrant and sharp for a lifetime.",
        icon: "04",
    },
];

export function Process() {
    return (
        <div className="w-full bg-zinc-950 py-20 px-4 antialiased" id="process">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-20 font-graffiti bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
                    The Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-400 transition-all duration-500 group overflow-hidden"
                        >
                            <span className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 font-graffiti group-hover:text-white/10 transition-colors duration-500">
                                {step.icon}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4 font-graffiti group-hover:text-accent transition-colors duration-500">
                                {step.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-200 transition-colors duration-500">
                                {step.description}
                            </p>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
