// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-raleway)",
          "Beauty-Rachela",
          "var(--font-oswald)",
          "var(--font-poppins)",
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
