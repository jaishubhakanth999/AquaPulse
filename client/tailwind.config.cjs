/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aqua: '#00B4D8',
        deep: '#0077B6'
      }
    }
  },
  plugins: []
}
