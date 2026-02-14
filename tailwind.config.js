/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0b0f1a", // Deep Indigo / Midnight Blue
                secondary: "#0f172a", // Darker Indigo
                accent: {
                    cyan: "#00f0ff",
                    purple: "#7000ff",
                },
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                mono: ['Space Grotesk', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            },
        },
    },
    plugins: [],
}
