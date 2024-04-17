/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#8FBF9F',
        'primary-200': '#68a67d',
        'primary-300': '#24613b',
        'accent-100': '#F18F01',
        'accent-200': '#833500',
        'text-100': '#353535',
        'text-200': '#5f5f5f',
        'bg-100': '#F5ECD7',
        'bg-200': '#ebe2cd',
        'bg-300': '#c2baa6',
        // Agrega más colores según sea necesario
      }
    }
  },
  plugins: []
};