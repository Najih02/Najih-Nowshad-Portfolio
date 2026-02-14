import { motion } from 'framer-motion'
import { ExternalLink, Github, FolderOpen } from 'lucide-react'

const PROJECTS = [
    {
        title: "Reflaire.in",
        description: "Advanced AI fashion recommendation engine using computer vision.",
        tags: ["React", "FastAPI", "PyTorch"],
        links: { github: "#", live: "#" }
    },
    {
        title: "SmartFace Market",
        description: "Biometric payment system via facial recognition.",
        tags: ["Python", "OpenCV", "Stripe"],
        links: { github: "#", live: "#" }
    },
    {
        title: "Data Groom",
        description: "Automated cleaning pipeline for ML datasets.",
        tags: ["Pandas", "Scikit-learn"],
        links: { github: "#", live: "#" }
    },
    {
        title: "AI Sales Agent",
        description: "Voice-enabled AI for autonomous lead qualification.",
        tags: ["Whisper", "GPT-4", "Twilio"],
        links: { github: "#", live: "#" }
    },
    {
        title: "Halora",
        description: "Automated self-checkin platform for hotels utilizing WhatsApp for seamless guest onboarding.",
        tags: ["WhatsApp API", "Python", "Automation"],
        links: { github: "#", live: "#" }
    }
]

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen py-24 relative z-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
                    <div className="w-24 h-1 bg-accent-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent-cyan/50 transition-colors duration-300"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-accent-purple/20 rounded-lg text-accent-purple group-hover:text-white group-hover:bg-accent-purple transition-all duration-300">
                                        <FolderOpen size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.live} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-black/30 rounded-full text-xs font-mono text-gray-300 border border-white/5 group-hover:border-accent-cyan/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
