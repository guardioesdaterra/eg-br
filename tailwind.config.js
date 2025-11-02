/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-hover': 'rgba(255, 255, 255, 0.08)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-green': 'rgba(0, 255, 136, 0.1)',
        'glass-green-hover': 'rgba(0, 255, 136, 0.2)',
        'glass-green-border': 'rgba(0, 255, 136, 0.3)',
        'nature': '#00ff88',
        'water': '#00ffff',
        'arts': '#ff00ff',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'text-muted': '#a0a0a0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-15px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-30px) translateX(-15px)' },
          '50%': { transform: 'translateY(20px) translateX(20px)' },
          '75%': { transform: 'translateY(-10px) translateX(-5px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 136, 0.6)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'glass': '0 20px 40px rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 25px 50px rgba(0, 255, 136, 0.2)',
        'nature-glow': '0 0 20px rgba(0, 255, 136, 0.3)',
        'water-glow': '0 0 20px rgba(0, 255, 255, 0.3)',
        'arts-glow': '0 0 20px rgba(255, 0, 255, 0.3)',
      },
    },
  },
  plugins: [],
}