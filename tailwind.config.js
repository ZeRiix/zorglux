/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'news-cycle': ['News Cycle', 'sans-serif']
      },
      colors: {
        darkerblue: "#2f4550",
        darkblue: "#586f7c",
        blue: "#006cb0",
        skyblue: "#4bd5ee",
        darkwhite: "#f4f4f9",
        yellow: "#ffd700"
      }
    },
  },
  plugins: [],
}

