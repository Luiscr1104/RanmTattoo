import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function About() {
    return (
        <div className="w-full bg-zinc-950 py-32 px-6 antialiased relative overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                <div className="flex-1 relative group">
                    <div className="absolute -inset-4 border border-white/5 group-hover:border-white/20 transition-colors duration-700 -z-10" />
                    <img
                        src="/images/10.webp"
                        alt="Artist"
                        className="w-full h-[600px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    />
                    <div className="absolute bottom-10 -right-10 hidden lg:block rotate-90 origin-left">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">Portafolio de Artista 2024</span>
                    </div>
                </div>

                <div className="flex-1 space-y-12">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
                            02 • El Artista
                        </span>
                        <h2 className="text-4xl md:text-8xl font-display font-black text-white tracking-tighter leading-tight">
                            CREANDO<br />LEGADOS
                        </h2>
                    </div>

                    <p className="text-white/60 text-lg leading-relaxed font-sans max-w-xl">
                        Con más de 10 años de experiencia, me especializo en dar vida a tus historias a través de la tinta. Mi trabajo se centra en la precisión, la higiene y la expresión artística, creando diseños personalizados que son únicamente tuyos.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8" id="services">
                        <div className="flex flex-col space-y-4 border-l border-white/10 pl-6 group">
                            <h3 className="font-display text-sm font-bold text-white tracking-wider flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                                01 / PERSONALIZADOS
                            </h3>
                            <p className="text-white/40 text-sm font-sans tracking-wide uppercase">Diseños únicos adaptados a tu visión</p>
                        </div>
                        <div className="flex flex-col space-y-4 border-l border-white/10 pl-6 group">
                            <h3 className="font-display text-sm font-bold text-white tracking-wider flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                                02 / COBERTURAS
                            </h3>
                            <p className="text-white/40 text-sm font-sans tracking-wide uppercase">Transformando tatuajes antiguos en arte nuevo</p>
                        </div>
                        <div className="flex flex-col space-y-4 border-l border-white/10 pl-6 group">
                            <h3 className="font-display text-sm font-bold text-white tracking-wider flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                                03 / RETOQUES
                            </h3>
                            <p className="text-white/40 text-sm font-sans tracking-wide uppercase">Revitalizando tinta desgastada</p>
                        </div>
                        <div className="flex flex-col space-y-4 border-l border-white/10 pl-6 group">
                            <h3 className="font-display text-sm font-bold text-white tracking-wider flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                                04 / FINE LINE
                            </h3>
                            <p className="text-white/40 text-sm font-sans tracking-wide uppercase">Detallado delicado y preciso</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
