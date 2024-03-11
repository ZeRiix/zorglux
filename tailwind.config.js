/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
    colors: {
      blueNavy: "#031C49",
      golden: "#D0A616",
      beige: "#FFEFCA",
      wood: "#857555"
    }
  },
  plugins: [],
};