/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "main":["Fira Sans", "sans-serif"],
      "secondary":["Fira Code", "monospace"],
    },
    extend: {
      backgroundImage:{
        "hero-pattern": "url('./src/assets/images/hero.jpg')"
      }
    },
  },
  plugins: [],
};
