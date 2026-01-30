import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const targetRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -120]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("w-full", className)}
            ref={targetRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-12 md:gap-20 px-4 md:px-10"
            >
                <div className="grid gap-12">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                            className="relative group overflow-hidden"
                        >
                            <img
                                src={el}
                                className="h-[30rem] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                alt="thumbnail"
                            />
                            <div className="absolute inset-0 border border-white/10" />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-12">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={"grid-2" + idx}
                            className="relative group overflow-hidden"
                        >
                            <img
                                src={el}
                                className="h-[40rem] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                alt="thumbnail"
                            />
                            <div className="absolute inset-0 border border-white/10" />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-12">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={"grid-3" + idx}
                            className="relative group overflow-hidden"
                        >
                            <img
                                src={el}
                                className="h-[35rem] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                alt="thumbnail"
                            />
                            <div className="absolute inset-0 border border-white/10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
