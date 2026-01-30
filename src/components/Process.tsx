import React from "react";
import { cn } from "../lib/utils";

const steps = [
    {
        title: "LA VISIÓN",
        description: "Ya sea un boceto rápido o un concepto vago, lo perfeccionaremos juntos hasta que sea ideal.",
        id: "01",
    },
    {
        title: "EL DISEÑO",
        description: "Crearé un stencil digital personalizado adaptado a la anatomía de tu cuerpo, asegurando un flujo natural.",
        id: "02",
    },
    {
        title: "LA TINTA",
        description: "La fase de ejecución. Utilizando pigmentos de la más alta calidad y estándares de higiene de primer nivel.",
        id: "03",
    },
    {
        title: "EL CUIDADO",
        description: "Instrucciones detalladas para asegurar que tu inversión se mantenga vibrante y nítida de por vida.",
        id: "04",
    },
];

export function Process() {
    return (
        <div className="w-full bg-zinc-950 py-32 px-4 antialiased" id="process">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
                        03 • El Método
                    </span>
                    <h2 className="text-4xl md:text-8xl font-display font-black text-white tracking-tighter leading-tight">
                        EL<br />PROCESO
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-zinc-950 p-12 md:p-16 flex flex-col justify-between group hover:bg-white transition-colors duration-700"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-4xl md:text-6xl font-display font-black text-white/10 group-hover:text-black/5 transition-colors duration-700">
                                    {step.id}
                                </span>
                                <div className="p-2 border border-white/10 group-hover:border-black/10 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/40 group-hover:text-black/40"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 group-hover:text-black transition-colors duration-700">
                                    {step.title}
                                </h3>
                                <p className="text-white/40 text-sm md:text-base leading-relaxed font-sans group-hover:text-black/60 transition-colors duration-700">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
