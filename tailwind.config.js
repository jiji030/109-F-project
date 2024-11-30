/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F0F3FF",
        secondary: "#white",
        tertiary: "#211951",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        customNeon: '#15F5BA',
        customPurple: '#836FFF',
        customYellow: "#FFF59D"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        'move-light': 'move-light 20s ease-in-out infinite',
        'move-light-reverse': 'move-light-reverse 25s ease-in-out infinite',
        'move-light-alt': 'move-light-alt 30s ease-in-out infinite',
      },
      keyframes: {
        'move-light': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(200px, -100px) scale(1.1)' },
          '50%': { transform: 'translate(-100px, 150px) scale(0.9)' },
          '75%': { transform: 'translate(100px, 100px) scale(1.05)' },
        },
        'move-light-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-150px, 100px) scale(1.05)' },
          '50%': { transform: 'translate(120px, -80px) scale(0.95)' },
          '75%': { transform: 'translate(-80px, -120px) scale(1.1)' },
        },
        'move-light-alt': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(100px, 50px) rotate(120deg) scale(1.1)' },
          '66%': { transform: 'translate(-50px, -100px) rotate(240deg) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};

