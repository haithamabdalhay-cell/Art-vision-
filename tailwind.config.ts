import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        deep: '#050810',
        surface: '#0B101E',
        neon: '#00F0FF',
        glow: '#7DE6FF'
      },
      boxShadow: {
        glow: '0 0 40px rgba(0,240,255,0.18)',
        'glass-lg': '0 20px 80px rgba(0,240,255,0.12)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(0,255,255,0.14), transparent 14%)'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
