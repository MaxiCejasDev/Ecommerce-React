/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins','sans-serif']
    },
    extend: {
      colors: {
        darkpure:'#030303',
        darklight: '#131313',
        greenlight: '#739072',
        fontlight: '#BBBBBB'
      },
      boxShadow: {
        'blue':'-2px 19px 32px -3px rgba(19,121,232,0.19)'
      }
    },
  },
  plugins: [],
}

