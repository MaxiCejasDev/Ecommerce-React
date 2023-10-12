/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins','sans-serif']
    },
    extend: {
      colors: {
        primary:'#6b7390',
        secondary: '#1379E8'
      },
      boxShadow: {
        'blue':'-2px 19px 32px -3px rgba(19,121,232,0.19)'
      }
    },
  },
  plugins: [],
}

