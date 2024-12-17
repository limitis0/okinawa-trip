import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkgrey: "var(--darkgrey)",
        white: "var(--white)",
        brown: "var(--brown)",
        light: "var(--light)",
        sand: "var(--sand)",
        sea: "var(--sea)",
      },
    },
  },
  plugins: [],
} satisfies Config;
