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
        brand: {
          primary: "#1e40af", // blue-800
          secondary: "#3b82f6", // blue-500
          accent: "#60a5fa", // blue-400
          dark: "#0f172a", // slate-900
        },
      },
    },
  },
  plugins: [],
};
export default config;

