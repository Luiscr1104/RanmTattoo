import React from "react";
import { cn } from "../lib/utils";

export function Footer() {
    return (
        <footer className="w-full bg-zinc-950 py-20 px-4 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h2 className="text-xl font-display font-black tracking-tighter">RAN TATTOO</h2>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                        © {new Date().getFullYear()} Ran Tattoo Art. Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex space-x-12">
                    <a href="#" className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em]">
                        Instagram
                    </a>
                    <a href="#" className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em]">
                        Facebook
                    </a>
                    <a href="#" className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em]">
                        Twitter
                    </a>
                </div>

                <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 flex flex-col items-center md:items-end gap-2">
                    <span>Diseñado con Precisión</span>
                    <a
                        href="https://luisroberto.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                    >
                        POR LUISROBERTO.DEV
                    </a>
                </div>
            </div>
        </footer>
    );
}
