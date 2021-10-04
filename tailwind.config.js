module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'myText': '#5838fc',
      'white': '#FFFFFF',
      'textPink': '#ff6492',
      'navyBlue': '#2c234d',
    },
    backgroundColor: {
      'bgColor': '#5838fc',
      'bgOffwhite': '#f7f6fa',
    },
    buttonColor: {
      'btnBgColor': '#ff6492',
    },
    borderColor: {
      'borderPink': '#ff6492',
      'grayBorder': '#eff2f7'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
