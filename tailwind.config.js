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
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "primary": "#363062",
        "secondary": "#435585",
        "tertiary": "#818FB4", 
        "button-primary": "#596FB7",
        "button-secondary": "#11235A",
      }
    },
  },
  plugins: [],
}

