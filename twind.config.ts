/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'poiret-one': ['"Poiret One"', 'cursive']
       },
       colors: {
         'complette-purple': "#5A43A5",
         'complette-gray': "#585858",
         'complette-gray-light': "#969696",
         'complette-purple-light': "#8D78D0"
       },
       fontSize: {
         '1xs': '9px'
       }
    },
  },
};
