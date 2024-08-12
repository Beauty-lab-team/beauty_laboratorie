/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: '#FFFFFF',
            'text-1': '#fb7185e2',
            'text-2': '#f49ca6',
            'accent-1': '#fda4afe6',
            'accent-2': '#fdf2f89e',
         },
         fontSize: {
            'heading-mobile': '56px',
            'heading-mobile-sm': '32px',
            'heading-desktop': '70px',
            'heading-desktop-sm': '36px',
            'cardHeading-mobile': '24px',
            'cardHeading-desktop': '28px',
         },
         fontFamily: {
            helvetica: ['Helvetica', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            'nyght-italic': ['Nyght-serif-italic', 'serif'],
            nyght: ['Nyght-serif', 'serif'],
         },
         borderRadius: {
            basic: '20px',
            inner: '14px',
         },
      },
   },
   plugins: [require('@tailwindcss/typography'), require('daisyui')],
   daisyui: {
      styled: false,
   },
}
