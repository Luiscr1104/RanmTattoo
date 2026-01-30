import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const prev = scrollYProgress.getPrevious() ?? 0;
            let direction = current - prev;

            if (current < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    const navItems = [
        { name: "Inicio", link: "#" },
        { name: "Galería", link: "#gallery" },
        { name: "Sobre mí", link: "#about" },
        { name: "Proceso", link: "#process" },
        { name: "Opiniones", link: "#testimonials" },
        { name: "Contacto", link: "#contact" },
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: [0.19, 1, 0.22, 1]
                }}
                className={cn(
                    "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.08] dark:bg-black/40 backdrop-blur-xl z-[5000] px-6 py-3 items-center justify-center space-x-8",
                    className
                )}
            >
                <div className="flex items-center space-x-6">
                    {navItems.map((navItem: any, idx: number) => (
                        <a
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative text-white font-sans text-[10px] uppercase tracking-[0.2em] hover:opacity-100 transition-opacity opacity-50"
                            )}
                        >
                            {navItem.name}
                        </a>
                    ))}
                </div>
                <div className="h-4 w-[1px] bg-white/20 mx-2 hidden md:block" />
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:underline underline-offset-4 decoration-white/30 transition-all">
                    Agendar Ahora
                </button>
            </motion.div>
        </AnimatePresence>
    );
};
