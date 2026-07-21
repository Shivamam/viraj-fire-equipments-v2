/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf3f2',
          100: '#fbe4e1',
          200: '#f5c1ba',
          300: '#ec9a8d',
          400: '#dd6553',
          500: '#c8402c',
          600: '#a9271a', // main brand red
          700: '#861f15',
          800: '#6b1a12',
          900: '#5a1710',
        },
        flame: {
          400: '#f7a94a',
          500: '#f2871f',
          600: '#e06e0d',
        },
        ink: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          400: '#8b8b96',
          600: '#4a4a55',
          800: '#26262e',
          900: '#161619',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(22,22,25,0.08)',
        cardHover: '0 12px 32px -6px rgba(169,39,26,0.18)',
      },
    },
  },
  plugins: [],
}