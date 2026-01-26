import React from "react";
import { cn } from "../lib/utils";

export function About() {
    return (
        <div className="w-full bg-zinc-950 py-20 px-6 flex flex-col items-center justify-center antialiased relative" id="about">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                    <img
                        src="/images/10.webp"
                        alt="Artist"
                        className="rounded-2xl shadow-2xl skew-y-3 hover:skew-y-0 transition duration-500 ease-in-out w-full h-[500px] object-cover"
                    />
                </div>
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h2 className="text-4xl md:text-7xl font-bold font-graffiti bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 via-zinc-400 to-neutral-500 drop-shadow-lg">
                        About the Artist
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        With over 10 years of experience, I specialize in bringing your stories to life through ink. My work focuses on precision, hygiene, and artistic expression, creating custom designs that are uniquely yours.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left mt-8" id="services">
                        <div className="flex flex-col space-y-2 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-zinc-500 transition-colors duration-300">
                            <h3 className="font-bold text-xl text-neutral-200 font-graffiti">Custom Design</h3>
                            <p className="text-neutral-400 text-sm">Unique sketches tailored to your vision</p>
                        </div>
                        <div className="flex flex-col space-y-2 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-zinc-500 transition-colors duration-300">
                            <h3 className="font-bold text-xl text-neutral-200 font-graffiti">Cover Ups</h3>
                            <p className="text-neutral-400 text-sm">Transforming old tattoos into new art</p>
                        </div>
                        <div className="flex flex-col space-y-2 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-zinc-500 transition-colors duration-300">
                            <h3 className="font-bold text-xl text-neutral-200 font-graffiti">Touch Ups</h3>
                            <p className="text-neutral-400 text-sm">Revitalizing faded ink</p>
                        </div>
                        <div className="flex flex-col space-y-2 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-zinc-500 transition-colors duration-300">
                            <h3 className="font-bold text-xl text-neutral-200 font-graffiti">Fine Line</h3>
                            <p className="text-neutral-400 text-sm">Delicate and precise detailing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
