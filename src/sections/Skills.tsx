import { motion } from 'framer-motion'
import { Server, Database, Code, Cpu, Globe, Layers, Workflow, BarChart } from 'lucide-react'

const SKILLS = [
    { name: "Python", level: 98, icon: Code },
    { name: "Machine Learning", level: 95, icon: BrainIcon },
    { name: "AI Agents", level: 92, icon: Workflow },
    { name: "Data Analysis", level: 94, icon: BarChart },
    { name: "LLMs / RAG", level: 96, icon: Cpu },
    { name: "React", level: 85, icon: Globe },
    { name: "PostgreSQL", level: 88, icon: Database },
    { name: "FastAPI", level: 92, icon: Server },
    { name: "Docker", level: 90, icon: Layers },
]

// Custom Brain Icon 
function BrainIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.97-3.465" /><path d="M20 18a4 4 0 0 0 1.97-3.465" />
        </svg>
    )
}


export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-24 relative z-10 px-4">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200 mb-4">
                        Technical Arsenal
                    </h2>
                    <div className="w-24 h-1 bg-accent-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent-cyan/30 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-black/50 rounded-lg text-accent-cyan group-hover:text-white transition-colors">
                                        <skill.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-lg">{skill.name}</h3>
                                </div>
                                <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
                            </div>

                            <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden relative z-10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
