/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#edf8f8',
          100: '#d8f0ef',
          200: '#b7e1df',
          300: '#84cbc7',
          400: '#4aafaa',
          500: '#1f9690',
          600: '#108080',
          700: '#0d6f6f',
          800: '#0f5859',
          900: '#11494a',
        },
      },
    },
  },
  plugins: [],
};
