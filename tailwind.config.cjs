/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skilled-light-blue': '#666CA3',
        'skilled-dark-blue': '#13183F',
        'skilled-gray': '#83869A',
        'skilled-dark-pink': '#F74780',
        'skilled-light-pink': '#FFA7C3',
        'skilled-white': '#FFFFFF',

        'skilled-graident-orange': '#FF6F48',
        'skilled-gradient-hot-pink': '#F02AA6',

        'skilled-gradient-purple': '#4851FF',
        'skilled-gradient-pink': '#F02AA6'
      }
    },
  },
  plugins: [],
}