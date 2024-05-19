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
         },
         'comet': {
          50: "#F6F7F9",
          100: "#EDEDF1",
          200: "#D7D9E0",
          300: "#B3B8C6",
          400: "#8A91A6",
          500: "#6C748B",
          600: "#585F75",
          700: "#474C5D",
          800: "#3D414F",
          900: "#363944",
          950: "#24252D",
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
