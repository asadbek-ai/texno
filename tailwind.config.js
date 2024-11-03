/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        "mont" : `"Montserrat", sans-serif`,
        "inter" : `"Inter", system-ui`,
        "poppins" : `"Poppins", sans-serif`
      }
    },
  },
  plugins: [],
}

