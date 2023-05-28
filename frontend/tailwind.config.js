/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        image: "url(./assets/background/Bg.png)",
        "image-md": "url(./assets/background/Bg-md.png)",
        imageF :'url(./assets/background/Bg.jpg)'
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "576px" },
      // => @media (max-width: 576px) { ... }
    },
    colors: {
      "transparent-black": "rgba(25, 25, 25, 0.297)",
      card: "rgb(34, 34, 34)",
      backgroundd:'#141414'
    },
  },
  plugins: [],
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//     screens: {
//       '2xl': {'max': '1535px'},
//       // => @media (max-width: 1535px) { ... }

//       'xl': {'max': '1279px'},
//       // => @media (max-width: 1279px) { ... }

//       'lg': {'max': '1023px'},
//       // => @media (max-width: 1023px) { ... }

//       'md': {'max': '767px'},
//       // => @media (max-width: 767px) { ... }

//       'sm': {'max': '576px'},
//       // => @media (max-width: 576px) { ... }
//     },
//     colors:{
//       'transparent-black' : 'rgba(25, 25, 25, 0.297)',
//     }

//   },
//   plugins: [],
// }
