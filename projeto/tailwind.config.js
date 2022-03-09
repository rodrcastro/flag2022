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
          primary: '#0a192f',
          secondary: '#112240',
          accent: '#64ffda',
          neutral: '#8892b0',
          'base-100': '#e6f1ff',
          lightNavy: '#233554',
          slate: '#8892b0',
          lightSlate: '#a8b2d1',
          lightestSlate: '#ccd6f6',
        },
      },
    ],
  },
};
