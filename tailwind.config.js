/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",

        ...defaultTheme.screens,
      },
      colors:{
        primary: "red",

      },
      backgroundImage: {
        bannerBackground: "url('/src/assets/images/bannerbackground.png')",
        
      },
    },
  },
  plugins: [],
}
