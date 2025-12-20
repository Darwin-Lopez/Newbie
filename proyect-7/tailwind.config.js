/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['"Lexend Deca"', 'sans-serif'],
        big: ['"Big Shoulders Display"', 'cursive'],
      },
      colors: {
        gold: {
          400: "hsl(31, 77%, 52%)",
        },
        cyan: {
          800: "hsl(184, 100%, 22%)",
        },
        green: {
          950: "hsl(179, 100%, 13%)",
        },
        gray: {
          100: "hsl(0, 0%, 95%)",
        },
        whiteTransparent: "hsla(0, 0%, 100%, 0.75)",
      },
    },
  },
  plugins: [],
}
