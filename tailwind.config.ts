import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#4E5FBF",
          light: "#8091F2",
          lighter: "#5864A6",
          grey: "#F2F2F2",
          text: "#0D0D0D",
        },
        // primary:{
        //   DEFAULT:'#36be8b',
        //   light:'#b4ecd5',
        //   dark:'#36be8b'
        // }
      },
    },
  },
  plugins: [],
} satisfies Config;
