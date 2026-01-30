"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function Testimonials() {
    return (
        <div className="py-32 flex flex-col antialiased bg-zinc-950 items-center justify-center relative overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto w-full px-4 mb-20">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
                    04 • Reputación en la Calle
                </span>
                <h2 className="text-4xl md:text-8xl font-display font-black text-left text-white tracking-tighter leading-tight">
                    OPINIONES<br />DE CLIENTES
                </h2>
            </div>

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
            "Ran es verdaderamente un artista. La precisión en su trabajo de líneas finas no se parece a nada que haya visto. Mi tatuaje sanó perfectamente y parece un dibujo en mi piel.",
        name: "Alex Rivera",
        title: "Cliente de Black & Grey",
    },
    {
        quote:
            "Vine por una cobertura y salí con una obra maestra. Convirtió un error de mi juventud en algo de lo que estoy orgullosa de mostrar todos los días.",
        name: "Samantha Reed",
        title: "Entusiasta de Coberturas",
    },
    {
        quote: "Las vibras del estudio son de primer nivel. Limpio, profesional y extremadamente auténtico. Si quieres un tatuaje que destaque, este es el lugar.",
        name: "Marcus Thorne",
        title: "Coleccionista de Arte Geométrico",
    },
    {
        quote:
            "Profesional de principio a fin. Ran tomó mi idea vaga y bocetó algo mejor de lo que podría haber imaginado. Muy recomendado.",
        name: "Elena Vance",
        title: "Primera vez",
    },
    {
        quote:
            "Tinta negra profunda y líneas nítidas. Exactamente lo que estaba buscando. Volveré por mi manga completa el próximo año.",
        name: "Jordan Smith",
        title: "Fan del Minimalismo",
    },
];
