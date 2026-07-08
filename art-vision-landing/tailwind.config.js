/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 24px 70px rgba(0, 240, 255, 0.15)',
        'glass-lg': '0 30px 90px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'float-sphere': 'float-sphere 10s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
