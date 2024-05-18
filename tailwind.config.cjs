module.exports = {
  // https://tailwindcss.com/docs/content-configuration
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'class'
  theme: {
    // https://v2.tailwindcss.com/docs/theme
    extend: {
      colors: {
        primary: '#F87575',
        secondary: '#73B7F9',
        'secondary-darker': '#60A5EA',
        tertiary: '#FFC931',
        dark: '#044389',
        light: '#FFF0D9'
      },
      keyframes: {
        fadeInOut: {
          '0%, 50%, 100%': { opacity: 0 },
          '25%, 75%': { opacity: 0.8 }
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 5s ease-in-out 3s 2 alternate-reverse both'
      },
      screens: {
        xs: '480px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
