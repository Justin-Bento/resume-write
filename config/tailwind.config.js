const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
         'chicago': {
          50: "#F5F6F6",
          100: "#E6E7E7",
          200: "#CFD2D2",
          300: "#AEB2B1",
          400: "#868A88",
          500: "#6B6F6D",
          600: "#595D5C",
          700: "#4D5150",
          800: "#444645",
          900: "#444645",
          950: "#252727",
         }
        //...
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        grotesk: ['Space Grotesk', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
