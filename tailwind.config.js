/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
    },

    container : {
      center: true,

    },

    fontFamily: {
      body : ["Roboto", "san-serif"],
      title: ["Gelasio"  , "san-serif"],
      logo: ["Ribeye", "Gelasio" , "Roboto" , "san-serif"]
    }
  },
  plugins: [],
}