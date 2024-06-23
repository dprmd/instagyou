/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gwendolyn: ["Gwendolyn", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#0369a1",
      },
    },
  },
  plugins: [],
};
