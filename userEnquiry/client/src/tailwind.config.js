/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./index.html",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
