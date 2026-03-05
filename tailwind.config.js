/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22b1a9',
        'primary-dark': '#1a9d96',
        'primary-light': '#3dd1c9',
        secondary: '#717171',
        'secondary-dark': '#5a5a5a',
        'secondary-light': '#8a8a8a',
      },
    },
  },
  plugins: [],
}
