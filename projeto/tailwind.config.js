module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#c3a6ff',
          secondary: '#8695b7',
          accent: '#1FB2A6',
          neutral: '#1d2433',
          'base-100': '#2f3b54',
          info: '#5ccfe6',
          success: '#bae67e',
          warning: '#ffcc66',
          error: '#ef6b73',
        },
      },
    ],
  },
};
