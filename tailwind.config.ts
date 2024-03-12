import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'shake': 'shake 1s cubic-bezier(.36,.07,.19,.97) both',
        'up': 'up 0.35s 2 cubic-bezier(.36, .07, .19, .97) both',
      },
      keyframes: {
        'shake' : {
          '10%, 90%': {
            transform: 'translate3d(0, -1px, 0)'
          },
          '20%, 80%' : {
            transform: 'translate3d(0, 2px, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(0, -4px, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(0, 4px, 0)'
          }
        },
        'up' : {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '50%': {
            transform: 'translate3d(0, -8px, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)'
          }
        },
      },
    },
  },
  plugins: [],
};
export default config;
