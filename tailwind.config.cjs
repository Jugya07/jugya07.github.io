/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#373b40",
      secondary: "#68E0CF",
      secondary1: "#585D65",
      white: "#ffffff",
      black: "#000000",
      red: colors.red,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [],
};