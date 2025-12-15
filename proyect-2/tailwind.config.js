/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                pink: {
                    400: 'hsl(0, 36%, 70%)',
                },
                red: {
                    500: 'hsl(0, 93%, 68%)',
                },
            },
            backgroundImage: {
                'gradiente-1': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
                'gradiente-2': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
            },
        },
    },
    plugins: [],
}