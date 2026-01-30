import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
        <>
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
                        "fixed top-6 inset-x-0 mx-auto border border-white/[0.08] bg-black/80 backdrop-blur-xl z-[5000] px-6 py-3 items-center justify-between lg:justify-center lg:space-x-8 flex transition-all duration-300",
                        isMobile ? "w-[90%] rounded-full" : "max-w-fit rounded-full",
                        className
                    )}
                >
                    {/* Logo/Brand for Mobile */}
                    <div className="lg:hidden text-[10px] font-display font-black tracking-tighter text-white">
                        RAN TATTOO
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-6">
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

                    <div className="hidden lg:block h-4 w-[1px] bg-white/20 mx-2" />

                    <button className="hidden lg:block text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:underline underline-offset-4 decoration-white/30 transition-all">
                        Agendar Ahora
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex flex-col items-center justify-center space-y-1 w-8 h-8 focus:outline-none"
                    >
                        <span className={cn("block w-5 h-[1px] bg-white transition-all duration-300", isMenuOpen ? "rotate-45 translate-y-[5px]" : "")} />
                        <span className={cn("block w-5 h-[1px] bg-white transition-all duration-300", isMenuOpen ? "opacity-0" : "")} />
                        <span className={cn("block w-5 h-[1px] bg-white transition-all duration-300", isMenuOpen ? "-rotate-45 -translate-y-[5px]" : "")} />
                    </button>
                </motion.div>
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-[6000] flex flex-col items-center justify-center p-8 lg:hidden"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>

                        <div className="flex flex-col items-center space-y-8">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={idx}
                                    href={item.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-display font-black text-white uppercase tracking-wider"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                className="mt-8 px-12 py-4 border border-white/20 text-white font-display text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
                            >
                                Agendar Ahora
                            </motion.button>
                        </div>

                        <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] text-white/20">
                            Ran Tattoo Art 2024
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
