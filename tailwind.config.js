/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        genesysTheme: {        
          primary: '#2554D7',
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",   
          "base-100": "#F0EFF1"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
