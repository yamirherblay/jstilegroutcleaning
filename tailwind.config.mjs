/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B1B2F',
        'navy-dark': '#13131F',
        maroon: '#8B1A1A',
        gold: '#C5A028',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
