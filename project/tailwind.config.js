/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF512F',
          orange: '#F09819',
        },
        accent: {
          purple: '#6A11CB',
        },
        text: {
          dark: '#14213D',
        },
        background: {
          light: '#F7F8FA',
        },
      },
    },
  },
  plugins: [],
};
