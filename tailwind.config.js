const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: {
        50: '#edecf7',
        100: '#dad9ef',
        200: '#c8c5e7',
        300: '#a39fd8',
        400: '#7e79c8',
        500: '#5952b8',
        600: '#463fb0', // primary
        700: '#3f399e',
        800: '#38328d',
        900: '#312c7b',
      },
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
