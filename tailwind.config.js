/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "space": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "dark": "#0f0f23",
        "darker": "#1a1a2e",
        "primary": "#16213e",
        "secondary": "#0e3460",
        "accent": "#06b6d4",
        "purple": "#8b5cf6",
        "pink": "#ec4899",
        "success": "#00ff88",
        "warning": "#ffaa00",
        "danger": "#ff3366",
        "text-primary": "#ffffff",
        "text-secondary": "#b8c5d6",
        "text-muted": "#8892a6",
        "border": "#2d3748",
        "card": "#1e2a3a",
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
      },
    },
  },
  plugins: [],
}

