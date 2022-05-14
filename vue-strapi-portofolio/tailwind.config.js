module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        green: {
          500: "#2bf4a1",
        },
        purple: {
          100: "#800080",
        },
        slate: {
          800: "#2a303c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
