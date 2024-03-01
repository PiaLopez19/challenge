/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#0250C9",
        "background": "#FEFEFE",
        "button": "#F2F2F2",
        "negro" : "#1C1C1F",
        "subtitle" : "#333333",
        "title": "#272727"
      }
    },
  },
  plugins: [],
}