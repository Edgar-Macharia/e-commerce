/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Urbanist, sans-serif'
      },
      colors: {
        'primary': '#260026',
        'snow': '#F5F1EF',
        'yellow': '#fcd34d'
      },
      container: {
        center: true,
      },
    }
  },
  plugins: [],
}

