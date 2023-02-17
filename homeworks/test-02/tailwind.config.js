/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1140px',
        xl: '1140px',
        lg: '1140px'
      },
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        'custom-gemunu': ['Gemunu Libre', 'sans-serif'],
        'custom-open': ['Open Sans', 'sans-serif']
      },
      colors: {
        'custom-red': '#BC1A45',
        'custom-melon': '#FDD369',
        'custom-grey': '#F8F8F8',
        'custom-white': '#F7F7F7',
        'custom-black': '#1e1e1e'
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
};
