/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#9A65CF"
        },
        black: {
          1: "#3C3742",
          2: "#3C374280"
        }
      }
    },
  },
  plugins: [],
}