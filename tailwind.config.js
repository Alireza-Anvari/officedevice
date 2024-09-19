/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",    'node_modules/flowbite-react/lib/esm/**/*.js',],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        "slate50":"#f8fafc",
        "lightGreen1":"#f0ffff",
        "lightGreen2":"#aeffaa",
        "lightGreen3":"#2ecfc0",
        // "lightGreen3":"#60e290",
        "lightGreen4":"#44e690",
        "green1":"#22cc9d",
        "green2":"#23c686",
        "green3":"#5aff86",
        "dark":"#313538fb"
      },
      fontFamily: {
        'fanAvarn': 'fanAvaran',
      },
    },
  },
  plugins: [ require('flowbite/plugin'),],
}

