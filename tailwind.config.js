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
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
