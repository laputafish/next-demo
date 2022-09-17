const withMT = require('@material-tailwind/react/utils/withMT');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    accordion: {
      defaultProps: {
        className: 'py-0'
      },
      styles: {
        base: {
          container: {
            bgColor: "bg-white",
          }
        }
      }
    },
    tabs: {
      className: 'bg-blue-500'
    },

    extend: {
      colors: {
        slate: colors.slate
      }
    },
  },
  plugins: [],
});
