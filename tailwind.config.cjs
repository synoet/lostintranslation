/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'hand': ['"Amatic Sc"', 'cursive'],
        'libre': ['"Libre Baskerville"', 'serif']
      }
    },
  },
  plugins: [],
};
