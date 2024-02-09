/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "c1":"#FAFBFC",
        "c2":"#1A1B21",
        "c3":"#2140A6",
        "c4":"#A62140",
        "c5":"#333742",
      }
    },
   
  },
  plugins: [],
}

