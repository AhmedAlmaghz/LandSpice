/**** TailwindCSS Config ****/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Cairo', 'Inter',
          'ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Noto Sans','Ubuntu','Cantarell','Helvetica Neue','Arial',
          'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'
        ],
      },
    },
  },
  plugins: [],
}
