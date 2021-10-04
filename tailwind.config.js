module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // Text Color Declaration
    textColor: {
      'myText': '#5838fc',
      'white': '#FFFFFF',
      'textPink': '#ff6492',
      'navyBlue': '#2c234d',
    },
    // Background Color Declaration
    backgroundColor: {
      'bgColor': '#5838fc',
      'bgOffwhite': '#f7f6fa',
    },
    // Button Background Color Declaration
    buttonColor: {
      'btnBgColor': '#ff6492',
    },
    // Border Color Declaration
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
