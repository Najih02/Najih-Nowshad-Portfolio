import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: (string | undefined)[]) {
    return twMerge(clsx(inputs))
}

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })

            const target = e.target as HTMLElement
            const isClickable = target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.closest('input') !== null ||
                target.closest('textarea') !== null ||
                target.hasAttribute('data-hover')

            setIsHovering(!!isClickable)
        }

        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-50">
            {/* Main Cursor Dot */}
            <motion.div
                className={cn(
                    "absolute top-0 left-0 w-2 h-2 bg-accent-cyan rounded-full", // Solid cyan dot
                    isHovering ? "w-4 h-4 bg-transparent border border-accent-cyan" : "" // Expands on hover
                )}
                animate={{
                    x: mousePosition.x - (isHovering ? 8 : 4),
                    y: mousePosition.y - (isHovering ? 8 : 4),
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 35,
                    mass: 0.1
                }}
            />

            {/* Trailing Outer Ring */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 rounded-full border border-white/20"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1 // Hide outer ring on hover for focus
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.3,
                    delay: 0.02
                }}
            />
        </div>
    )
}
