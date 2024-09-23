/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #E84A4A 0%, #F1833F 100%)",
      },
    },
  },
  plugins: [],
};
