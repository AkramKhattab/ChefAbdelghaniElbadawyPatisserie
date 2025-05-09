/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4A373',
          light: '#FEFAE0',
          dark: '#BC6C25',
        },
        neutral: '#F5F5F5',
        accent: {
          light: '#FFD700', // Gold
          DEFAULT: '#DAA520', // Golden rod
          dark: '#B8860B', // Dark golden rod
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 