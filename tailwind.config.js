/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      
    },
    colors: {
      purple: '#4D2C5E',
      orange: '#FF7426',
      background: '#FDF8EE',
      white: '#FFF',
      black: '#1D1D1D',
      gray: '#8A8A8A',
      shadow: 'rgba(255, 255, 255, 0.20)',
      shadowText : 'rgba(255, 255, 255, 0.60)'
      
      
    },
    extend: {
      fontWeight: {
        bold: '800'
      },
     
    },
  },
  plugins: [],
}