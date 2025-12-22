/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: {
          50: 'hsl(225, 100%, 98%)',
          100: 'hsl(225, 100%, 94%)',
          700: 'hsl(245, 75%, 52%)',
          950: 'hsl(223, 47%, 23%)',
        },
        Gray: {
          600: 'hsl(224, 23%, 55%)',
        },
      },
    },
  },
  plugins: [],
}

