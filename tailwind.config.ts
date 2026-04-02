import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stitch: {
          primary:     "var(--stitch-primary)",
          secondary:   "var(--stitch-secondary)",
          accent:      "var(--stitch-accent)",
          tertiary:    "var(--stitch-tertiary)",
          "soft-blue": "var(--stitch-soft-blue)",
          surface:     "var(--stitch-surface)",
          "surface-alt":"var(--stitch-surface-alt)",
          text:        "var(--stitch-text)",
          "text-muted":"var(--stitch-text-muted)",
          border:      "var(--stitch-border)",
          error:       "var(--stitch-error)",
          success:     "var(--stitch-success)",
        },
      },
      fontFamily: {
        display: ["var(--inter-font-display)", "var(--font-display)", "sans-serif"],
        body:    ["var(--inter-font-body)", "var(--font-body)", "sans-serif"],
        editorial: ["var(--inter-font-editorial)", "var(--font-editorial)", "serif"],
        inter: ["var(--inter-font-inter)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        stitch:    "var(--radius-md)",
        "stitch-sm": "var(--radius-sm)",
        "stitch-lg":"var(--radius-lg)",
        "stitch-xl":"var(--radius-xl)",
        "stitch-pill":"var(--radius-pill)",
      },
      boxShadow: {
        stitch:    "var(--shadow-md)",
        "stitch-lg":"var(--shadow-lg)",
        "stitch-3d":"var(--shadow-3d)",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.4s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 2s",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        }
      },
    },
  },
  plugins: [],
};

export default config;
