import React from "react";
import { cn } from "../lib/utils";
import { IconBrandInstagram, IconBrandTwitter, IconBrandFacebook } from "@tabler/icons-react";

export function Footer() {
    return (
        <footer className="w-full bg-black py-10 flex flex-col items-center justify-center border-t border-zinc-800 relative z-10" id="contact">
            <div className="flex space-x-6 mb-4">
                <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                    <IconBrandInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                    <IconBrandFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                    <IconBrandTwitter className="w-6 h-6" />
                </a>
            </div>
            <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Ran Tattoo Art. All rights reserved.
            </p>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-zinc-900 to-transparent h-20 pointer-events-none" />
        </footer>
    );
}
