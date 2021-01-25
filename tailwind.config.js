module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Rubik', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#6320EE',
      },
    },
  },
  variants: {},
  plugins: [],
}