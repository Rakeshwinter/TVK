/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          700: '#a00000', // Tamilnadu red
          800: '#8b0000', // Darker red for hover
        },
        yellow: {
          300: '#ffcc00', // Tamilnadu yellow
        },
      },
    },
  },
  plugins: [],
};
