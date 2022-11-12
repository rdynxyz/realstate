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
        },
        boxShadow: {
          'main-shadow': '0px 25px 72px 0px rgba(59,77,129,0.08);',
        }
    },
  },
  plugins: [],
}