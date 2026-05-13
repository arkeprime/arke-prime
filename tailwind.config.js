/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0A0A',
          2: '#111111',
          3: '#1A1A1A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C068',
          dark: '#A8892E',
          pale: '#F0D882',
        },
        cream: '#F5F0E8',
        'warm-white': '#FAFAF8',
        stone: '#2A2A2A',
        muted: '#6B6B6B',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.9' }],
        '10xl': ['10rem', { lineHeight: '0.85' }],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #A8892E 0%, #E2C068 50%, #A8892E 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #A8892E 0%, #E2C068 25%, #F0D882 50%, #E2C068 75%, #A8892E 100%)',
      },
      animation: {
        'spin-slow': 'rotateBadge 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 4s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      boxShadow: {
        'gold': '0 8px 32px rgba(201, 168, 76, 0.4)',
        'gold-sm': '0 4px 16px rgba(201, 168, 76, 0.2)',
        'luxury': '0 32px 64px rgba(0, 0, 0, 0.5)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      borderColor: {
        'gold-subtle': 'rgba(201, 168, 76, 0.2)',
        'gold-medium': 'rgba(201, 168, 76, 0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}