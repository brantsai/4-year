/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: '#F7C1CC',
        pastelPink: '#FFE5EE',
      },
      fontFamily: {
        vollkorn: ['Vollkorn', 'serif'],
      }
    },
  },
  plugins: [],
}

