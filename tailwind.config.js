/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ranchers: ['Ranchers', 'sans-serif'],
        jacques: ['Rampart One', 'serif'],
        rampart: ['Rampart One', 'serif'],
        comic: ['"Comic Neue"', 'cursive'],
      },
      colors: {
        'comic-black': '#000000',
        'comic-white': '#ffffff',
      },
      boxShadow: {
        comic: '6px 6px 0px 0px #000000',
        'comic-sm': '4px 4px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}