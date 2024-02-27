/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js}",
    "./src/index.html",,
    "./src/marketplace.html"
  ],
  theme: {
    extend: {
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
