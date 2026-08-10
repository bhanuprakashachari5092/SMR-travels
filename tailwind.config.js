/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071426',
          900: '#0B1F3A',
          800: '#172033',
          700: '#1E2D4A',
          600: '#2A3E63',
        },
        electric: {
          500: '#1769FF',
          600: '#1254D4',
          700: '#0E40A8',
        },
        royal: {
          600: '#3157D5',
        },
        cyanGlow: {
          400: '#00D8F6',
          500: '#00B8D9',
        },
        goldAccent: {
          400: '#D4AF37',
          500: '#C9A227',
          600: '#B08C1E',
        },
        pearl: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F5F7FA',
          300: '#E5EAF2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(23, 105, 255, 0.25)',
        'glow-cyan': '0 0 25px -5px rgba(0, 184, 217, 0.25)',
        'glass-card': '0 10px 30px 0 rgba(11, 31, 58, 0.06)',
        'card-hover': '0 20px 40px -15px rgba(23, 105, 255, 0.15)',
        'light-elevated': '0 12px 35px -10px rgba(7, 20, 38, 0.08)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 60%, #EEF6FF 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'blue-cta': 'linear-gradient(135deg, #1769FF 0%, #3157D5 50%, #00B8D9 100%)',
        'dark-section': 'linear-gradient(135deg, #071426 0%, #0B1F3A 50%, #1769FF 100%)',
        'light-blue-section': 'linear-gradient(135deg, #F8FBFF 0%, #EEF6FF 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'road-scroll': 'roadScroll 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        roadScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        }
      }
    },
  },
  plugins: [],
}
