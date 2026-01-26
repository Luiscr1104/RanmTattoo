"use client";
import { cn } from "../../lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                className
            )}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 900"
                fill="none"
                className="absolute h-full w-full pointer-events-none"
            >
                <path
                    d="M-201.334 506.667C-201.334 506.667 -10.667 433.333 193.333 433.333C397.333 433.333 553.333 540 762.667 540C972 540 1128 433.333 1332 433.333C1536 433.333 1726.67 506.667 1726.67 506.667"
                    stroke="url(#paint0_linear_1808_12697)"
                    strokeOpacity="0.2"
                />
                <path
                    d="M-201.334 333.333C-201.334 333.333 -10.667 260 193.333 260C397.333 260 553.333 366.667 762.667 366.667C972 366.667 1128 260 1332 260C1536 260 1726.67 333.333 1726.67 333.333"
                    stroke="url(#paint1_linear_1808_12697)"
                    strokeOpacity="0.2"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1808_12697"
                        x1="762.667"
                        y1="433.333"
                        x2="762.667"
                        y2="540"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#94A3B8" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#94A3B8" />
                        <stop offset="1" stopColor="#94A3B8" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_1808_12697"
                        x1="762.667"
                        y1="260"
                        x2="762.667"
                        y2="366.667"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#94A3B8" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#94A3B8" />
                        <stop offset="1" stopColor="#94A3B8" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
