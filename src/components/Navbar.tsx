"use client";

import { motion } from "framer-motion";
import { Github, Download, Terminal } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 inset-x-0 mx-auto z-50 flex items-center justify-between w-[95%] md:w-[90%] max-w-5xl px-6 py-3 backdrop-blur-md bg-brand-dark/40 border border-white/5 rounded-full shadow-2xl"
        >
            <div className="flex items-center gap-3">
                <img src="/assets/icon-32.png" alt="DAWNO" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold tracking-tighter text-white">DAWNO</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                <a href="#features" className="hover:text-white transition-colors">Özellikler</a>
                <a href="#downloads" className="hover:text-white transition-colors">İndir</a>
                <a href="#tech" className="hover:text-white transition-colors">Teknoloji</a>
            </div>

            <div className="flex items-center gap-4">
                <a href="https://github.com/deksdeveloper/dawno" target="_blank" className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-300">
                    <Github className="w-5 h-5" />
                </a>
                <a href="#downloads" className="hidden sm:flex items-center gap-2 px-5 py-2 bg-brand-purple text-white text-[11px] font-black uppercase tracking-wider rounded-full hover:bg-brand-purple-light transition-all shadow-lg shadow-brand-purple/20">
                    <Download className="w-4 h-4" />
                    <span>Hemen İndir</span>
                </a>
            </div>
        </motion.nav>
    );
}
