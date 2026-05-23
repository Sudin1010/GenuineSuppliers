import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D62222",
          "red-hover": "#F03E3E",
          dark: "#0B0F19",
          card: "#161F30",
          border: "#1E2A3D",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at center, rgba(214,34,34,0.14) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 20px 52px -26px rgba(214, 34, 34, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
