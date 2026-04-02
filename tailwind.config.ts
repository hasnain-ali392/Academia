import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stitch: {
          primary:     "var(--stitch-primary)",
          secondary:   "var(--stitch-secondary)",
          accent:      "var(--stitch-accent)",
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
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        stitch:    "var(--radius-md)",
        "stitch-lg":"var(--radius-lg)",
        "stitch-pill":"var(--radius-pill)",
      },
      boxShadow: {
        stitch:    "var(--shadow-md)",
        "stitch-lg":"var(--shadow-lg)",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.4s ease forwards",
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
      },
    },
  },
  plugins: [],
};

export default config;
