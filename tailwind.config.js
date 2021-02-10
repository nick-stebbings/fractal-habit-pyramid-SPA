module.exports = {
  plugins: [require("@tailwindcss/custom-forms")],
  theme: {
    extend: {
      colors: {
        balance: {
          alert: "#F25042",
          success: "#80E055",
          info: "#56CCF2",
          darkprimary: "#CFDC4F",
          lightprimary: "#E8F18F",
          darkbg: "#50442E",
          lightbg: "#8C7851",
          darkgrey: "#E2E1E1",
          lightgrey: "#F1EDEB",
          lilac: "#EDD3F8",
          DEFAULT: "#121428",
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
};
