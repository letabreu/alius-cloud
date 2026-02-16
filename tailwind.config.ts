// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "rgb(var(--ac-deep) / <alpha-value>)",
          petroleum: "rgb(var(--ac-petroleum) / <alpha-value>)",
          teal: "rgb(var(--ac-teal) / <alpha-value>)",
          gray: "rgb(var(--ac-gray) / <alpha-value>)",
          off: "rgb(var(--ac-off) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
