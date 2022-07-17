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
          800: 'hsl(213, 19%, 18%)',
          900: 'hsl(216, 12%, 8%)',
        },
        orange: {
          500: 'hsl(25, 97%, 53%)',
        },
      },
    },
  },
  plugins: [],
}
