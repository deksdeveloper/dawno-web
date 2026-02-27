"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Layout, Server, Share2, Globe } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 relative bg-[#05070a]">
            {/* Background Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Engineered for <br /><span className="text-brand-purple">Efficiency.</span></h2>
                    <p className="text-gray-400 max-w-xl text-lg font-medium leading-relaxed">Every tool you need to build, debug, and deploy SA-MP projects at scale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-2">
                    {/* Monaco Editor */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 md:row-span-2 glass-card p-10 flex flex-col justify-between group"
                    >
                        <div>
                            <Code2 className="w-10 h-10 text-brand-purple mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-black mb-4 tracking-tight">Monaco <br />Intelligence.</h3>
                            <p className="text-gray-400 font-medium leading-relaxed">Powered by the same engine as VS Code. Experience zero-latency scrolling and intelligent code completion.</p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-purple">Core Engine</span>
                        </div>
                    </motion.div>

                    {/* Server Manager */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 glass-card p-8 flex items-start gap-8 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                            <Server className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black mb-2 tracking-tight">Integrated Server Manager.</h3>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">Start, stop, and monitor logs directly from your workspace. No external consoles required.</p>
                        </div>
                    </motion.div>

                    {/* Discord RPC */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 glass-card p-8 flex flex-col justify-between group"
                    >
                        <Share2 className="w-6 h-6 text-blue-400 mb-6" />
                        <div>
                            <h4 className="text-lg font-bold mb-2">Social Sync.</h4>
                            <p className="text-gray-400 text-xs font-medium">Real-time Discord Rich Presence integration.</p>
                        </div>
                    </motion.div>

                    {/* Multi-language */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 glass-card p-8 flex flex-col justify-between group"
                    >
                        <Globe className="w-6 h-6 text-orange-400 mb-6" />
                        <div>
                            <h4 className="text-lg font-bold mb-2">Global UI.</h4>
                            <p className="text-gray-400 text-xs font-medium">Native encoding support for Turkish and 100+ languages.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
