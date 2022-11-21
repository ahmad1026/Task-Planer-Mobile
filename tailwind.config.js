/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors:{
        white:'#FFFFFF',
        primary:'#2FD1C5',
        login_bg:'#F5FBFF',
        border_bg:'#E4EDFF',
        primaryText:'#00394C',
        secondaryText:'#2F394B'


      },
      fontFamily:{
        body:['Nunito']
      }
    },
    plugins: [],
  }