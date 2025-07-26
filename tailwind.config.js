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
      colors: {
        "main": "#FE5013",
      },
      backgroundImage:{
        "hero-pattern": "url('./src/assets/Images/hero.png')"
      }
    },
  },
  plugins: [],
};
