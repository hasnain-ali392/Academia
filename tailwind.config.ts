import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#141E30',
        'secondary': '#35577D',
        'accent': '#A8BFCF',
        'tertiary': '#999999',
        'neutral': '#ffffff',
      },
      fontFamily: {
        body: ['var(--font-public-sans)', 'sans-serif'],
        display: ['var(--font-lexend)', 'sans-serif'],
        headline: ['var(--font-fraunces)', 'serif'],
        label: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
