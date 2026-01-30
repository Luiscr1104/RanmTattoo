"use client";
import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export function Contact() {
    return (
        <div className="min-h-screen py-32 w-full bg-zinc-950 relative flex flex-col items-center justify-center antialiased" id="contact">
            <div className="max-w-4xl mx-auto p-4 relative z-10 w-full">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="flex-1">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
                            05 • Hablemos
                        </span>
                        <h2 className="text-4xl md:text-8xl font-display font-black text-white tracking-tighter leading-tight mb-8">
                            INICIA TU<br />PROYECTO
                        </h2>
                        <p className="text-white/40 max-w-sm font-sans leading-relaxed">
                            ¿Listo para tatuar tu historia? Actualmente estamos agendando para el próximo mes.
                            Nuestro estudio sigue los más estrictos protocolos de seguridad médica.
                        </p>
                    </div>

                    <div className="flex-1 space-y-6">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Nombre Completo</label>
                            <input
                                type="text"
                                placeholder="JUANA PÉREZ"
                                className="border border-white/10 focus:border-white transition-colors w-full bg-transparent placeholder:text-white/10 text-white p-4 font-display text-[10px] tracking-widest outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Correo Electrónico</label>
                            <input
                                type="email"
                                placeholder="JUANA@EJEMPLO.COM"
                                className="border border-white/10 focus:border-white transition-colors w-full bg-transparent placeholder:text-white/10 text-white p-4 font-display text-[10px] tracking-widest outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">La Visión</label>
                            <textarea
                                rows={4}
                                placeholder="DESCRIBE LA OBRA, TAMAÑO Y UBICACIÓN..."
                                className="border border-white/10 focus:border-white transition-colors w-full bg-transparent placeholder:text-white/10 text-white p-4 font-display text-[10px] tracking-widest outline-none resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full h-16 bg-white text-black font-display font-bold text-[10px] tracking-[0.3em] hover:bg-zinc-200 transition-all uppercase">
                            Enviar Solicitud
                        </button>
                    </div>
                </div>
            </div>
            <div className="opacity-20">
                <BackgroundBeams />
            </div>
        </div>
    );
}
