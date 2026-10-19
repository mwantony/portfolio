/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic custom theme colors using CSS variables
        surface: {
          light: '#ffffff',
          dark: '#1f1f23',
          'dark-card': '#27272a',
          'dark-elevated': '#303036',
        },
        canvas: {
          light: '#fafafa',
          'light-subtle': '#f4f4f5',
          dark: '#121214',
          'dark-subtle': '#18181b',
        },
        border: {
          light: '#e4e4e7',
          'light-hover': '#d4d4d8',
          dark: '#2e2e33',
          'dark-hover': '#3f3f46',
        },
        txt: {
          'light-primary': '#18181b',
          'light-secondary': '#52525b',
          'light-muted': '#71717a',
          'dark-primary': '#e4e4e7',
          'dark-secondary': '#a1a1aa',
          'dark-muted': '#71717a',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
