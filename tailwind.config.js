/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          500: "#ff4b2b",
        },
        pink: {
          500: "#ff416c",
        },
      },
    },
  },
  plugins: [],
};
