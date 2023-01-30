module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        spacePrimary: '#1e293b',
        spaceTextInfo: '#d9d6ce',
        spaceText: '#FFFFFF',
        spaceTitle: '#14b8a6',
        spacePurple: '#1A1A40',
        spaceBlue: '#270082',
        spaceTealHover: '#0f766e',
        spaceDarkpink: '#7A0BC0',
        spacePink: '#FA58B6',
        skeletonLight: '#14b8a6',
        skeletonDark: '#0f766e',
        spaceLightGrey: '#cccbc8',
      },
      screens: {
        'mobile': '440px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
