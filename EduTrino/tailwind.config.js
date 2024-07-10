/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       "lg" : "1025px",
       "1400" : "1400px",
       "500" : "500px",
       "550" : "550px"
      },
    },
  },
  plugins: [],
}

