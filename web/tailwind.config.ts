import type { Config } from 'tailwindcss';
import preset from './src/tailwind/tw.preset';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector'],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          from: { opacity: '.75', transform: 'scale(0)' },
          to: { opacity: '0', transform: 'scale(2)' },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
  presets: [preset],
};
export default config;
