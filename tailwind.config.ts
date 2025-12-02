import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
        lobster: ['Lobster', ...defaultTheme.fontFamily.sans],
        shantell: ['Shantell Sans', ...defaultTheme.fontFamily.sans],
        cursive: ['Cedarville Cursive', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: {
          700: '#030014',
        },
        pink: {
          500: '#e28080',
        },
        blue: {
          500: '#2653e7',
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
      fontSize: {
        10: ['0.625rem', { lineHeight: '0.7rem' }],
        11: ['0.6875rem', { lineHeight: '0.75rem' }],
        12: ['0.75rem', { lineHeight: '0.975rem' }],
        14: ['0.875rem', { lineHeight: '1.4rem' }],
        16: ['1rem', { lineHeight: '1.5rem' }],
        18: ['1.125rem', { lineHeight: '1.75rem' }],
        20: ['1.25rem', { lineHeight: '1.75rem' }],
        23: ['1.4375rem', { lineHeight: '1.6875rem' }],
        24: ['1.5rem', { lineHeight: '2rem' }],
        28: ['1.75rem', { lineHeight: '2.0625rem' }],
        32: ['2rem', { lineHeight: '1.75rem' }],
        35: ['2.1875rem', { lineHeight: '2.5625rem' }],
        40: ['2.5rem', { lineHeight: '2.5625rem' }],
        44: ['2.75rem', { lineHeight: '3.25rem' }],
        55: ['3.4375rem', { lineHeight: '4.0625rem' }],
        69: ['4.3125rem', { lineHeight: '5.0625rem' }],
        92: ['5.75rem', { lineHeight: '6.75rem' }],
      },
    },
  },
  plugins: [],
}
export default config
