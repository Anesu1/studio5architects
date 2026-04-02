import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        blue: {
          ink:   '#0B2B50',
          mid:   '#154173',
          DEFAULT: '#1B4F8A',
          light: '#4C95E0',
        },
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
