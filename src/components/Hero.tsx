"use client";

import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-60 pb-32 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-purple/10 blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex justify-center mb-12"
                >
                    <img src="/assets/icon-256.png" alt="DAWNO Logo" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_50px_rgba(112,48,160,0.3)] float-animation" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-[5.5rem] font-sans font-black tracking-[-0.04em] leading-[0.9] mb-8"
                >
                    Better. Faster. <br />
                    <span className="text-gradient">Professional PAWN Editor.</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Modernize your workflow with the industry's most advanced PAWN code editor.
                    Built for speed, crafted for developers by developers.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#downloads" className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10">
                        <Download className="w-4 h-4" />
                        Download Stable
                    </a>
                    <a href="https://github.com/deksdeveloper/dawno" target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/10 transition-all">
                        <Github className="w-4 h-4" />
                        GitHub Repository
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function Github({ className }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
    );
}
