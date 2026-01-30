/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Noto Sans"', 'sans-serif'],
      },
      colors: {
        background: '#fcfbf8',
        textDark: '#1c170d',
        textMuted: '#9b844b',
        borderSoft: '#e8e1cf',
        primary: '#f4c653',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
