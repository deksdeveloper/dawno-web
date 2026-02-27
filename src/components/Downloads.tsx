"use client";

import { motion } from "framer-motion";
import { Monitor, Apple, Terminal as LinuxIcon, ArrowRight } from "lucide-react";

export default function Downloads() {
    const platforms = [
        {
            name: "Windows x64",
            icon: Monitor,
            version: "v0.1.0 (Stable)",
            url: "#",
            status: "Primary",
        },
        {
            name: "macOS Silicon",
            icon: Apple,
            version: "v0.1.0-alpha",
            url: "#",
            status: "Preview",
        },
        {
            name: "Linux Generic",
            icon: LinuxIcon,
            version: "v0.1.0-alpha",
            url: "#",
            status: "Dev Only",
        },
    ];

    return (
        <section id="downloads" className="py-32 px-6 relative border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Ready to <br /><span className="text-brand-purple">Level Up?</span></h2>
                        <p className="text-gray-400 max-w-md text-lg font-medium leading-relaxed">Download the latest release and start building something amazing today.</p>
                    </div>
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Stable release: 0.1.0</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {platforms.map((p, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-10 flex flex-col items-center text-center group bg-white/[0.02]"
                        >
                            <p.icon className="w-12 h-12 text-gray-500 mb-8 group-hover:text-brand-purple transition-colors" />
                            <h3 className="text-2xl font-black mb-1">{p.name}</h3>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-10">{p.version}</p>

                            <a
                                href={p.url}
                                className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-brand-purple hover:text-white transition-all shadow-xl shadow-black/40"
                            >
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
