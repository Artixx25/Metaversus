/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'black-rgba': 'rgba(0, 0, 0, 0.5)',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      dropShadow: {
        '3xlOrange': '0 0 25px rgba(246,98,62, 1)',
        '3xlPurple': '0 0 25px rgba(242,157,176, 1)',
        '3xlBlue': '0 0 25px rgba(173,182,215, 1)'
      }
    },
  },
  plugins: [],
};
