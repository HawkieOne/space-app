module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        spacePrimary: '#1e293b',
        spaceText: '#FFFFFF',
        spaceTitle: '#14b8a6',
        spacepurple: '#1A1A40',
        spaceblue: '#270082',
        spaceTealHover: '#0f766e',
        spacedarkpink: '#7A0BC0',
        spacepink: '#FA58B6',
        skeletonLight: '#14b8a6',
        skeletonDark: '#0f766e',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
