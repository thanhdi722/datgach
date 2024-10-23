/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using app directory in Next.js
    "./public/**/*.html", // If you have any HTML files in public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
