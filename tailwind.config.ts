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

      },
      screens: {
        'custom-min': {
          min: '900px',
        },
        'custom-max': {
          max: '900px',
        },
        'custom-min1100': {
          min: '1100px',
        },
        'custom-max1100': {
          max: '1100px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
