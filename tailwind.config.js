/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xmd: "800px",
      },
      height: {
        aside: "calc(100vh - 0.5rem - 6rem - 2rem)",
      },
      minHeight: {
        "screen-hf": "calc(100vh - 0.5rem - 6rem)",
      },
      fontFamily: {
        "news-cycle": ["News Cycle", "sans-serif"],
      },
      colors: {
        dark: "#080c0f",
        darkerblue: "#2f4550",
        blue: "#8e0705",
        skyblue: "#FFFFFF",
        "dark-grey": "#293B4B",
        grey: "#838587",
        darkwhite: "#f4f4f9",
        yellow: "#ce0c08",
      },
    },
  },
  plugins: [],
};
