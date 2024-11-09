const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Twemoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Twemoji',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      keyframes: {
        circle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(3.5)', opacity: '0' },
        },
        rotate: {
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        circle: 'circle 3s infinite ease-in-out',
        rotate: 'rotate 6s linear -2s infinite',
        rotate1: 'rotate 5s linear infinite',
      },
      transitionDuration: {
        2000: '2000ms',
        6000: '6000ms',
      },
    },
    dropShadow: {
      custom: 'rgba(0, 0, 0, 0.1) 0px 0px 2.55px',
      'custom-1': 'rgba(0, 0, 0, 0.3) 0px 0px 2.55px',
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('scrollbar', '&::-webkit-scrollbar');
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
      addVariant('scrollbar-corner', '&::-webkit-scrollbar-corner');
    }),
  ],
};
