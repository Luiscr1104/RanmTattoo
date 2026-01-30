import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function Hero() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 relative overflow-hidden px-4">
            {/* Background Architectural Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                    className="flex flex-col items-center"
                >
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/40 mb-8 block font-sans">
                        Excelencia Artística en Tinta
                    </span>
                    <h1 className="text-6xl md:text-[12rem] font-display font-black leading-[0.8] text-center tracking-tighter mb-10">
                        RAN<br />TATTOO
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    className="flex flex-col md:flex-row items-center md:items-end justify-between w-full mt-12 gap-8 md:gap-0"
                >
                    <p className="font-sans text-sm md:text-lg text-white/60 max-w-md leading-relaxed">
                        Tinta tan eterna como tu historia. Especialista en arte geométrico, realismo y fine line. Ubicado en el corazón de la ciudad.
                    </p>

                    <div className="flex flex-col items-center md:items-end">
                        <button className="group relative px-12 py-5 bg-white text-black font-display text-[10px] font-bold tracking-[0.2em] overflow-hidden transition-all hover:pr-16">
                            <span className="relative z-10">AGENDAR CITA</span>
                            <span className="absolute right-0 top-0 bottom-0 w-0 bg-zinc-200 transition-all group-hover:w-full z-0" />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Side Labels */}
            <div className="absolute bottom-12 left-12 hidden lg:block">
                <div className="flex items-center gap-4 -rotate-90 origin-left">
                    <div className="w-12 h-[1px] bg-white/20" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 whitespace-nowrap">Est. 2024</span>
                </div>
            </div>
        </div>
    );
}
