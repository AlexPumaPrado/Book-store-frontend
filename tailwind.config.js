/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#881337",
        secondary: "#18181b",
        blackBG: "F3F3F3",
        favorite: "#f59e0b",
      },
      fontFamily: {
        primary: ["Jaro", "sans-serif"],
        secondary: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
