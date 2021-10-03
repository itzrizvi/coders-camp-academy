module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'myText': '#5838fc',
      'white': '#FFFFFF',
      'textPink': '#ff6492',
    },
    backgroundColor: {
      'bgColor': '#5838fc',
    },
    buttonColor: {
      'btnBgColor': '#ff6492',
    },
    borderColor: {
      'borderPink': '#ff6492'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
