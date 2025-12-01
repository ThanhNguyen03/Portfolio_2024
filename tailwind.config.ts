import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          700: '#030014',
        },
        pink: {
          500: '#e28080',
        },
        blue: {
          700: '#2A0E61',
        },
      },
      spacing: {
        0: '0rem',
        ...Array(100 * 4)
          .fill(0)
          .map((_, i) => i + 1)
          .reduce<Record<string, string>>((acc, i) => {
            acc[i / 4] = i / 16 + 'rem'
            return acc
          }, {}),
      },
      borderRadius: {
        0: '0rem',
        ...Array(100 * 4)
          .fill(0)
          .map((_, i) => i + 1)
          .reduce<Record<string, string>>((acc, i) => {
            acc[i / 4] = i / 16 + 'rem'
            return acc
          }, {}),
      },
      screens: {
        xs: '375px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '4k': '2000px',
      },
    },
  },
  plugins: [],
}
export default config
