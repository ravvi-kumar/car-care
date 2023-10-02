/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "colorOne": "#FFC107",
        "colorTwo": "#03031E",
        "colorThree": "#F1EEEE",
        "colorFour": "#000000A3",
        "colorFive": "#007AFF",

      }
    },
  },
  plugins: [],
}