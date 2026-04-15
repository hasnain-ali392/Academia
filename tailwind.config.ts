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
        'secondary': '#224061',
        'accent': '#7A9CB5',
        'tertiary': '#666666',
        'neutral': '#ffffff',
        'brand-blue': '#35577D',
      },
      fontFamily: {
        body: ['var(--font-public-sans)', 'sans-serif'],
        display: ['var(--font-lexend)', 'sans-serif'],
        headline: ['var(--font-fraunces)', 'serif'],
        label: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -20px, 0) rotate(5deg)' },
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
