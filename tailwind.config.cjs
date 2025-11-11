// tailwind.config.cjs (note the .cjs extension)
/** @type {import('tailwindcss').Config} */
module.exports = { // Changed from export default
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        calligraphy: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};