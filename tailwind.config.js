module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#4A8FF7', // Custom color between blue-400 & blue-500
        },
        gray: {
          25: '#f9fafb', // Custom color between white & gray-50
        },
        green: {
          350: '#32d398', // Custom color between green-300 & green-400
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
