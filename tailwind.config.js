/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          void: '#0A0A14',
          purple: '#7B61FF',
          'purple-glow': 'rgba(123, 97, 255, 0.45)',
          ghost: '#F0EFF4',
          graphite: '#18181B',
          card: '#121222',
          surface: '#18182E',
          accent: '#7B61FF',
          cyan: '#00F5D4',
          pink: '#FF2A85',
        }
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'neon': '0 0 30px rgba(123, 97, 255, 0.35)',
        'neon-strong': '0 0 60px rgba(123, 97, 255, 0.5), 0 0 20px rgba(0, 245, 212, 0.3)',
        'neon-subtle': '0 10px 40px -10px rgba(123, 97, 255, 0.15)',
        'card-glow': '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
