"use client";

import { Github, Twitter, MessageSquare } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-brand-dark">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3 mb-6">
                        <img src="/assets/icon-16.png" alt="DAWNO" className="w-5 h-5 opacity-50" />
                        <span className="text-xl font-black tracking-tighter text-white/40">DAWNO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left leading-loose">
                        Built for the modern developer. <br />
                        © 2026 DAWNO Project. Crafted by deksdeveloper.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/deksdeveloper" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <MessageSquare className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
