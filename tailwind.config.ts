import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        sans: ['"SF Pro Text"', 'system-ui', 'sans-serif'],
        display: ['"SF Pro Display"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
