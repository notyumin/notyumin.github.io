import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--highlight)",
        light: "var(--bg-light)",
        myBlue: "var(--blue)",
      },
      keyframes: {
        blink: {
          '0%': { visibility: "hidden" },
        }
      },
      animation: {
        blink: "blink 1s steps(2) infinite;"
      }
    },
  },
  plugins: [],
} satisfies Config;
