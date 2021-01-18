module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "extra-none": "0.8",
      },
    },
    fontFamily: {
      sans: ["Proza Libre", "sans-serif"],
      serif: ["PT Serif", "serif"],
    },
  },
  variants: {
    extend: {
      letterSpacing: ["hover"],
    },
  },
  plugins: [],
};
