const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/*.html', './app/helpers/**/*.rb', './app/javascript/**/*.js', './app/views/**/*.{erb,haml,html,slim}'],
  theme: {
    extend: {
      colors: {
        vanilla: {
          50: '#f9f6f3',
          100: '#f0ebe4',
          200: '#e1d5c7',
          300: '#d4c3b0',
          400: '#b99a7e',
          500: '#aa8265',
          600: '#9d7159',
          700: '#835c4b',
          800: '#6b4d41',
          900: '#574037',
          950: '#2e201c'
        },
        comet: {
          50: '#F6F7F9',
          100: '#EDEDF1',
          200: '#D7D9E0',
          300: '#B3B8C6',
          400: '#8A91A6',
          500: '#6C748B',
          600: '#585F75',
          700: '#474C5D',
          800: '#3D414F',
          900: '#363944',
          950: '#24252D'
        }
        //...
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        grotesk: ['Space Grotesk', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/container-queries')]
};
