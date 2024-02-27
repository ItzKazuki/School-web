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
        brown: {
          400: "#FFC346",
          500: "#FACB69",
          600: "#FFC346",
          800: "#6D3705",
        },
      },
    },
  },
  plugins: [],
};
