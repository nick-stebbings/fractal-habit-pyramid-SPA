module.exports = {
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          alert: "#de6868",
          success: "#68c49f",
          fawn: "#fcfad1",
          hover: "#79d1ed",
          DEFAULT: "#3e495f",
        },
        "pastel-light": {
          alert: "#f07e7e",
          success: "#7edebc",
          fawn: "#fefde8",
          hover: "#92e8f8",
          DEFAULT: "#4b5873",
        },
        "pastel-dark": {
          alert: "#cb5c5c",
          success: "#5caf8c",
          fawn: "#f8f4bc",
          hover: "#6bbcde",
          DEFAULT: "#374054",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
