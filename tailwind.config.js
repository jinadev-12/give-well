/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: "#FF7C48",
        secondary: "#153A43",
      },
    },
  },
  plugins: [],
};
