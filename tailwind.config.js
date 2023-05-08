const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
      './components/**/*.{vue, js, jsx, ts, tsx}',
    './layouts/**/*.vue',
    'composables/**/*.{ts,js}',
    './pages/**/*.{vue, js, jsx, ts, tsx}',
    './plugins/**/*.{js, ts}',
    './nuxt.config.{js, ts}'],

  theme: {
    fontFamily: {
      sans: ['"Calibri"', ...defaultTheme.fontFamily.sans],
      serif: ['"Calibri"', 'serif'],
    },


    colors: {

      primary: '#8BA039',
      secondary: '#828282',
      tertiary : '#606060',
      white: "#FFFFFFFF"
    },

    extend: {
      transitionProperty: {
        width: "width"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}
