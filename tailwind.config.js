module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
      fontFamily: {
        Constructio: ["ConstructioGrotesk-Regular"],
        Courier: ["courier-std"],
        CourierBold: ["courier-bold"],
        Abril: ["Abril Fatface"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
