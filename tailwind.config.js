/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin'),
    require('daisyui')
  ],
  content: [
    "./src/**/*.{html, js}",
    "./src/index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        'brown': {
          '100': '#ffed08',
          '200': '#f3d5b5',
          '300': '#e7bc91',
          '400': '#d4a278',
          '500': '#bc8a5f',
          '600': '#a47148',
          '700': '#8b5e34',
          '800': '#6f4518',
          '900': '#603808',
          'dark' :'#583101'
        }
      },
      screens: {
        'tablet': {'max':'640px'},
      }
    },
  },
  plugins: [],
};