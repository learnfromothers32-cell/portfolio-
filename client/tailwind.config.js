/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#060608',
          2: '#0d0d10',
          3: '#111116',
          surface: '#14141a',
        },
        border: {
          DEFAULT: '#1e1e26',
          2: '#2a2a36',
        },
        green: {
          DEFAULT: '#00ff87',
          2: '#00cc6a',
        },
        cyan: '#00d4ff',
        muted: {
          DEFAULT: '#6b6b7a',
          2: '#4a4a58',
        },
      },
      animation: {
        blink: 'blink 0.8s step-end infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
