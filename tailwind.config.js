module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Constructio': ['ConstructioGrotesk-Regular'],
        'Courier': ['courier-std'],
        'Abril': ['Abril Fatface']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
