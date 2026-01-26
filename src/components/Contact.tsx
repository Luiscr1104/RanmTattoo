"use client";
import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export function Contact() {
    return (
        <div className="min-h-[40rem] py-20 w-full bg-zinc-950 relative flex flex-col items-center justify-center antialiased" id="contact">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-graffiti font-bold">
                    Get Inked
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Ready to ink your story? We are currently booking for next month.
                    Leave your details and we will reach out soon.
                </p>
                <div className="mt-10 space-y-4 relative z-10">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-zinc-500  w-full relative z-10 mt-4  bg-zinc-950 placeholder:text-neutral-700 text-white p-4"
                    />
                    <input
                        type="email"
                        placeholder="hi@manuarora.in"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-zinc-500  w-full relative z-10 mt-4  bg-zinc-950 placeholder:text-neutral-700 text-white p-4"
                    />
                    <textarea
                        rows={4}
                        placeholder="Tell us about your tattoo idea..."
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-zinc-500  w-full relative z-10 mt-4  bg-zinc-950 placeholder:text-neutral-700 text-white p-4"
                    ></textarea>
                    <button className="w-full h-12 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 transition duration-200">
                        Submit Application
                    </button>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
