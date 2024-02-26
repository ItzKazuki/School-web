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
          '400': '#FFC346',
          '500': '#FACB69',
          '600': '#FFC346',
          '800': '#6D3705'
        }
      }
    },
  },
  plugins: [],
};
