import { motion } from "framer-motion";
import { Code2, Zap, Layout, Server, Share2, Globe } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export default function Features() {
    const { t } = useI18n();

    return (
        <section id="features" className="py-32 px-6 relative bg-[#05070a]">
            {/* Background Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">{t.features.title1} <br /><span className="text-brand-purple">{t.features.title2}</span></h2>
                    <p className="text-gray-400 max-w-xl text-lg font-medium leading-relaxed">{t.features.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Monaco Editor */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 glass-card p-10 flex flex-col justify-between group"
                    >
                        <div>
                            <Code2 className="w-10 h-10 text-brand-purple mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-black mb-4 tracking-tight">{t.features.monacoTitle}</h3>
                            <p className="text-gray-400 font-medium leading-relaxed">{t.features.monacoDesc}</p>
                        </div>
                    </motion.div>

                    {/* Integrated Server Manager */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 glass-card p-10 flex flex-col justify-between group"
                    >
                        <div>
                            <Server className="w-10 h-10 text-green-500 mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-black mb-4 tracking-tight">{t.features.serverTitle}</h3>
                            <p className="text-gray-400 font-medium leading-relaxed">{t.features.serverDesc}</p>
                        </div>
                    </motion.div>

                    {/* Automated Detection */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 glass-card p-8 flex flex-col justify-between group"
                    >
                        <Zap className="w-6 h-6 text-yellow-400 mb-6" />
                        <div>
                            <h4 className="text-lg font-bold mb-2">{t.features.autoTitle}</h4>
                            <p className="text-gray-400 text-xs font-medium">{t.features.autoDesc}</p>
                        </div>
                    </motion.div>

                    {/* Configuration Editor */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 glass-card p-8 flex flex-col justify-between group"
                    >
                        <Layout className="w-6 h-6 text-pink-400 mb-6" />
                        <div>
                            <h4 className="text-lg font-bold mb-2">{t.features.configTitle}</h4>
                            <p className="text-gray-400 text-xs font-medium">{t.features.configDesc}</p>
                        </div>
                    </motion.div>

                    {/* Discord RPC */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 glass-card p-8 flex flex-col justify-between group"
                    >
                        <Share2 className="w-6 h-6 text-blue-400 mb-6" />
                        <div>
                            <h4 className="text-lg font-bold mb-2">{t.features.discordTitle}</h4>
                            <p className="text-gray-400 text-xs font-medium">{t.features.discordDesc}</p>
                        </div>
                    </motion.div>

                    {/* Multi-language & Encoding */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 glass-card p-8 flex flex-col justify-between group"
                    >
                        <Globe className="w-6 h-6 text-orange-400 mb-6" />
                        <div>
                            <h4 className="text-lg font-bold mb-2">{t.features.langTitle}</h4>
                            <p className="text-gray-400 text-xs font-medium">{t.features.langDesc}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
