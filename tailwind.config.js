/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home': "url('../src/assets/images/home.jpg')"
       }),
       fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        },
        colors: {
          'primary' : '#2C3A61',
          'secondary' : '#4A60A1',
        }
    },
  },
  plugins: [],
}