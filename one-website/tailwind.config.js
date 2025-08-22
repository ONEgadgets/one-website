/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#EF4444',
          dark: '#0a0a0a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(239,68,68,0.4)'
      }
    },
  },
  plugins: [],
}