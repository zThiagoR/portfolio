/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "quantico": ["Quantico", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
        "economica": ["Economica", "sans-serif"],
      },
      colors: {
        "primary": "#203c52",
        "secondary": "#31346a",
        "tertiary": "#3a3f7a",
      }
    },
  },
  plugins: [],
}

