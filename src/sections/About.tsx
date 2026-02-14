import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Brain, Cpu, Code2, Globe } from 'lucide-react'
import profileImg from '../assets/profile.jpeg'

function DataCard({ title, icon: Icon, value }: { title: string, icon: any, value: string }) {
    return (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="p-2 rounded-md bg-accent-purple/20 text-accent-purple">
                <Icon size={20} />
            </div>
            <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{title}</p>
                <p className="text-sm font-bold text-white">{value}</p>
            </div>
        </div>
    )
}

function MinimalTiltCard() {
    const ref = useRef<HTMLDivElement>(null)

    // Mouse tracking
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth physics
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

    // Shine effect
    const shineX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
    const shineY = useTransform(mouseY, [-0.5, 0.5], [0, 100])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = (mouseX / width) - 0.5
        const yPct = (mouseY / height) - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group perspective-1000 shadow-2xl"
        >
            {/* Image Layer with subtle scale on hover */}
            <motion.div
                className="absolute inset-0 bg-black/50 overflow-hidden"
                style={{ transform: "translateZ(0px)" }}
            >
                <img
                    src={profileImg}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://api.dicebear.com/9.x/micah/svg?seed=Najih"
                    }}
                    alt="Najih Nowshad"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </motion.div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

            {/* Dynamic Shine Layer */}
            <motion.div
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgb(255,255,255), transparent)`
                }}
            />

            {/* Floating Info Content */}
            <div
                className="absolute bottom-6 left-6 right-6 p-4 transform-style-3d"
                style={{ transform: "translateZ(40px)" }}
            >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-1">Najih Nowshad</h3>
                    <p className="text-accent-cyan text-xs font-mono tracking-[0.2em] uppercase font-bold">AI | Data Scientist</p>
                </div>
            </div>
        </motion.div>
    )
}

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 relative z-10 transition-colors">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

                    {/* Left: Minimal 3D Profile */}
                    <div className="w-full md:w-5/12 relative z-10 flex justify-center">
                        {/* Subtle Ambient Back Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-cyan/20 blur-[100px] -z-10 rounded-full" />

                        <MinimalTiltCard />
                    </div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-7/12 text-left"
                    >
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-bold tracking-widest uppercase">
                            About Me
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Turning Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Intelligence</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                            I am an AI Engineer and Data Scientist passionate about building intelligent systems that solve real-world problems. With 2 years of hands-on experience, I specialize in developing machine learning models, deploying AI agents, and analyzing complex datasets to drive actionable insights.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            My work bridges the gap between raw data and scalable AI solutions. Whether it's crafting Generative AI applications, optimizing data pipelines, or fine-tuning LLMs, I approach every project with a focus on efficiency, accuracy, and innovation.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cyan/10 border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan hover:text-black transition-all duration-300 font-bold uppercase text-xs tracking-widest"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                Download CV
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <DataCard title="Experience" icon={Brain} value="2 Years" />
                            <DataCard title="Projects" icon={Code2} value="10+ Built" />
                            <DataCard title="Stack" icon={Cpu} value="Modern AI" />
                            <DataCard title="Location" icon={Globe} value="Global" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
