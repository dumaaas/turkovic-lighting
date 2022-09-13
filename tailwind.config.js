/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    namedGroups: ['menu', 'submenu'],
    extend: {},
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'rajdhani': ['Rajdhani', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px'
      },
      screens: {
        'sm': '640px',
        'md': '750px',
        'lg': '970px',
        'xl': '1170px',
      }
    }
  },
  plugins: [
  ],
}