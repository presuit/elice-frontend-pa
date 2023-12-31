/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'input-background': 'rgb(201, 202, 204)',
        'filtering-title-background': 'rgb(249, 250, 252)',
        'filtering-title-border': 'rgb(225, 226, 228)',
        'elice-white': 'rgb(240, 241, 243)',
        'elice-gray': '#5e5f61',
        'elice-purple': '#524fa1',
      },
    },
  },
  plugins: [],
}
