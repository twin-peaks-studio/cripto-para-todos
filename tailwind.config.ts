import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm teal primary (replaces cold navy)
        teal: {
          950: '#0D2B22',
          900: '#1B4332',
          800: '#2D6A4F',
          700: '#40916C',
        },
        // Warm amber accent
        amber: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        // Warm cream backgrounds
        cream: {
          50:  '#FEFCF8',
          100: '#FBF8F4',
          200: '#F5EFE6',
          300: '#EDE3D5',
        },
        // Warm text
        brown: {
          900: '#2C1A0E',
          700: '#6B4E3D',
          500: '#9E7B6A',
          300: '#C9A99A',
        },
        // Success sage
        sage: {
          900: '#1A4731',
          700: '#2D7A5F',
          100: '#D1FAE5',
        },
        // Danger
        rose: {
          700: '#BE123C',
          100: '#FFE4E6',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        warm: '0 4px 24px rgba(44, 26, 14, 0.08)',
        'warm-lg': '0 8px 40px rgba(44, 26, 14, 0.12)',
      },
      animation: {
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97)',
        'shake': 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97)',
        'confetti': 'confetti 1s ease-out forwards',
        'fade-up': 'fadeUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'star-spin': 'starSpin 0.6s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-6px)' },
          '80%': { transform: 'translateX(6px)' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        starSpin: {
          '0%': { transform: 'rotate(0deg) scale(0)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
