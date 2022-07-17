/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        slate: {
          400: 'hsl(217, 12%, 63%)',
          500: 'hsl(216, 12%, 54%)',
          700: 'hsl(213, 19%, 18%)',
          800: 'hsl(216, 12%, 8%)',
          900: 'hsl(212, 28%, 12%)',
        },
        gray: {
          900: 'hsl(210, 17%, 16%)',
        },
        orange: {
          500: 'hsl(25, 97%, 53%)',
        },
      },
    },
  },
  plugins: [],
}
