/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": ['"Josefin Sans"', "sans-serif"],
        

        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
};