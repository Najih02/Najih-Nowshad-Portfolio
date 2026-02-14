import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log(formData)
        alert("Message sent! (Simulation)")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative z-10">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/20 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-12 relative z-10">
                        {/* Left: Contact Info */}
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold mb-6">Let's <span className="text-accent-cyan">Connect</span></h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Ready to build something extraordinary? Whether it's an AI-powered platform or a 3D immersive experience, I'm just a message away.
                            </p>

                            <div className="space-y-6">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=najinowshad@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent-cyan/20 group-hover:text-accent-cyan transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <span className="text-lg">najinowshad@gmail.com</span>
                                </a>
                                <a href="https://linkedin.com/in/najihnowshad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent-purple/20 group-hover:text-accent-purple transition-colors">
                                        <Linkedin size={24} />
                                    </div>
                                    <span className="text-lg">linkedin.com/in/najihnowshad</span>
                                </a>
                                <a href="https://github.com/najih02" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors">
                                        <Github size={24} />
                                    </div>
                                    <span className="text-lg">github.com/najih02</span>
                                </a>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <form onSubmit={handleSubmit} className="flex-1 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-accent-cyan to-accent-purple text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity transform active:scale-95"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
