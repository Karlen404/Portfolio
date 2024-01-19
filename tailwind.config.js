// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      colors:{
        primary: '#416165',
        bgDark: '#00171F',
        bgLight: '#fffffe',
        hover: '#557C81',
        headline: '#272343',
        paragraph: '#2d334a'
      },
      
    },
  },
  plugins: [],
};