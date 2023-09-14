/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: '#FAFAFA',
            'text-1': '#1A1A1A',
            'text-2': '#4D4D5D',
            'accent-1': '#414358',
            'accent-2': '#eef0f3',
            navbar: 'rgba(255, 255, 255, 0.7)',
            navlinks: '#9699a0',
            'navlinks-current': '#d1d5db',
            footer: '#F2F2F2',
            'footer-text': '#9699a0',
         },
         fontSize: {
            'heading-mobile': '54px',
            'heading-desktop': '64px',
            'cardHeading-mobile': '30px',
            'cardHeading-desktop': '32px',
         },
         fontFamily: {
            helvetica: ['Helvetica', 'sans-serif'],
         },
         borderRadius: {
            basic: '18px',
         },
      },
   },
   plugins: [],
}
