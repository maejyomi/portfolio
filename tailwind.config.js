/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily : {
      'archivo' : ["Archivo Black", "sans-serif"]
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

