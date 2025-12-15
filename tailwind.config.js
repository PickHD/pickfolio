/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0f172a', // Deep slate blue (Background)
          800: '#1e293b', // Lighter slate (Cards)
          700: '#334155', // Borders
        },
        primary: {
          400: '#60a5fa', // Soft Blue
          500: '#3b82f6', // Standard Blue
          600: '#2563eb', // Deep Blue
        },
        accent: '#38bdf8', // Cyan/Sky for pop
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, professional
      },
    },
  },
  plugins: [],
};
