module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#ef4444', // Explicitly define red-500
        }
      }
    },
  },
  plugins: [],
}