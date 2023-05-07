const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'color-primary': '#23f7dd',
        'color-secondary': '#393B3D',
        'color-black': '#090909',
        'color-gray-dark':'#292B2F',
        'color-gray-light':'#4F545C',
        'color-white': '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
