module.exports = {
  content : [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme : {
    extend : {
      colors : {
        'spacepurple' : '#1A1A40',
        'spaceblue' : '#270082',
        'spacedarkpink' : '#7A0BC0',
        'spacepink' : '#FA58B6',
        'skeletonLight' : '#d1d5db',
        'skeletonDark' : '#9ca3af',
      },
    },
  },
  plugins : [
    require('tailwind-scrollbar'),
  ],
}
