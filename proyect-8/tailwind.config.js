/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['"Lexend Deca"', 'sans-serif'],
      },
      colors: {
        Navy: {
          950: "hsl(233, 47%, 7%)"
        },
        Blue: {
          950: "hsl(244, 37%, 16%)"
        },
        Purple: {
          500: "hsl(277, 64%, 61%)"
        },
        White: "hsl(0, 0%, 100%)",
        WhiteParagrapth: "hsla(0, 0%, 100%, 0.75)",
        whitHeadings: "hsla(0, 0%, 100%, 0.6)"
        //         - White (main heading, stats): hsl(0, 0%, 100%)
        // - White (main paragraph): hsla(0, 0%, 100%, 0.75)
        // - White (stat headings): hsla(0, 0%, 100%, 0.6)
      }
    },
  },
  plugins: [],
}

