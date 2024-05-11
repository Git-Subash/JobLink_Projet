/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // xs: { min: "412px" },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        mon: ["Montserat", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
