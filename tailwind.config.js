/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0F479C",
        secondary: "#7154BB",
      },
      backgroundImage: {
        "site-pattern": "url('./bg-animated.svg')",
        "logo": "url('https://i.imgur.com/vkBFMZ5.png')",
        "site-cover": "url('https://i.imgur.com/8ConyDK.png')",
        "desktop-cover": "url('https://i.imgur.com/tlYNmND.png')",
      }
    },
    plugins: [],
  }
}