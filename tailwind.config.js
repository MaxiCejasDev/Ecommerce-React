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
        ivorywhite: '#EFF6FF',
        greenlight: '#739072',
        fontlight: '#BBBBBB',
        bagstroke: '#C8C0C0'
      },
      boxShadow: {
        'blue':'-2px 19px 32px -3px rgba(19,121,232,0.19)'
      },
      gridTemplateRows:{
        'rowbag': '10% 1fr 25%',
        'rowdetail': '70% 1fr'
      },
      gridTemplateColumns:{
        'colbag': '25% 1fr 10%'
      }
    },
  },
  plugins: [],
}

