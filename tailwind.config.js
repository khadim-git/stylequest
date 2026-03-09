/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0b0f1a',
        softgray: '#f2f4f7',
      },
      boxShadow: {
        'deep': '0 30px 60px -15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
