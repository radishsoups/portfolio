/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    fontFamily: {
      custom: ['Livvic', 'sans-serif'],
    },
    colors: {
      white: {
        DEFAULT: '#ffffff',
      },
      slate: {
        DEFAULT: '#EAE9E6',
      },
      sage: {
        DEFAULT: '#21816A',
      },
    },
  },
  plugins: [],
}

