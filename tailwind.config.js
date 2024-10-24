/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: 'Urbanist, sans-serif'
    },
    colors: {
      primary: '#260026',
      white: '#B9B8B6'
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

