const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/heroBg.png')",
      },
      animation: {
        marquee: 'marquee linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        // Dynamic theme colors using CSS variables
        primary: {
          DEFAULT: 'var(--color-primary, #27628B)',
          50: '#f0f7fb',
          100: '#e0eff7',
          200: '#b8daf1',
          300: '#7cbbe8',
          400: '#3a95d4',
          500: 'var(--color-primary, #27628B)',
          600: '#1e4d6e',
          700: '#183e5a',
          800: '#14334a',
          900: '#11293e',
        },
        parentPrimary: {
          DEFAULT: '#27628B',
          50: '#f0f7fb',
          100: '#e0eff7',
          200: '#b8daf1',
          300: '#7cbbe8',
          400: '#3a95d4',
          500: '#27628B',
          600: '#1e4d6e',
          700: '#183e5a',
          800: '#14334a',
          900: '#11293e',
        },
        parentPrimaryFirst: '#27628B',
        parentPrimarySecond: '#DE6129',
        parentSecondary: '#DE6129',
        parentAccent: '#000000',
        parentGreen: {
          500: '#4ADE80',
          900: '#1B4332',
        },
        parentGray: {
          25:  "#fafafa",
          50:  "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          925: "#0d0d0d",
        },
        secondary: 'var(--color-secondary, #DE6129)',
        accent: 'var(--color-accent, #000000)',
        background: 'var(--color-background, #FFFFFF)',
        text: 'var(--color-text, #1C1B19)',
        error: 'var(--color-error, #EF4444)',
        success: 'var(--color-success, #10B981)',
        green: {
          500: '#4ADE80',
          900: '#1B4332',
        },
        gray: {
          25:  "#fafafa",
          50:  "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          925: "#0d0d0d",
        },
        dark: {
          25:  "#fafafa",
          50:  "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          925: "#0d0d0d",
        },
      },
      keyframes: {
        fadeWord: {
          '0%':   { opacity: '0', filter: 'blur(6px)' },
          '20%':  { opacity: '0' },
          '30%':  { opacity: '1', filter: 'blur(0)' },
          '45%':  { opacity: '1' },
          '55%':  { opacity: '0', filter: 'blur(6px)' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-word': 'fadeWord 8s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.bg-green-striped': {
          'background-image': `linear-gradient(45deg, #0a2000 10%, transparent 10%,
            transparent 20%, #0a2000 20%, #0a2000 30%, transparent 30%, transparent 40%,
            #0a2000 40%, #0a2000 50%, transparent 50%, transparent 60%, #0a2000 60%,
            #0a2000 70%, transparent 70%, transparent 80%, #0a2000 80%, #0a2000 90%,
            transparent 90%, transparent)`,
        },
      })
    })
  ],
}