module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'openSans': ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('images/hero.jpg')",
        'hero-sm': "url('images/hero-sm.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
