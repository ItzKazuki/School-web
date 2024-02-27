/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./src/**/*.{html, js}",
    "./src/index.html",
    "./node_modules/flowbite/**/*.js",
    "./src/marketplace.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        'brown': {
          '400': '#e7bc91',
          '500': '#d4a276',
          '600': '#a47148',
          '800': '#6f4518',
          '0'  : 'rgba(111, 64, 29, 1)' 
        },
        'black' : {
         '400' : '#ffffff'
        }
      }
    },
  },
  plugins: [],
};
