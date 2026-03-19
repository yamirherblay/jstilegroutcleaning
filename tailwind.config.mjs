/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        orange: '#ff9004',
        'orange-dark': '#A65E10',
        brown: '#950328',
        'brown-dark': '#950321',
        'blue-accent': '#0D80A1',
        'blue-light': '#1A9EC4',
        'blue-bg': '#E6F5F9',
      },
      fontFamily: {
        heading: ['"Inter"', 'serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
