/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: '#FFFFFF',
            'text-1': '#fb7185e6',
            'text-2': '#fda4afe6',
            'accent-1': '#fda4af',
            'accent-2': '#fdf2f8c6',
         },
         fontSize: {
            'heading-mobile': '56px',
            'heading-desktop': '70px',
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
   plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('daisyui')],
   daisyui: {
      styled: false,
   },
}
