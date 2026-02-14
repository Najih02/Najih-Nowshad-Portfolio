import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-sm md:text-base text-gray-400 font-light tracking-[0.2em] uppercase">
                        AI | Data Science
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-semibold tracking-tighter text-white mb-6"
                >
                    Najih Nowshad.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12"
                >
                    Crafting intelligent systems with elegance and precision.
                    <br className="hidden md:block" />
                    Specializing in Generative AI and Large Language Models.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-widest uppercase"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase"
                    >
                        Contact
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
