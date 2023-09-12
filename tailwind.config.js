/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: '#FAFAFA',
            'text-1': '#1A1A1A',
            'text-2': '#4B4B4B',
            'accent-1': '#4d4dff',
            navbar: 'rgba(255, 255, 255, 0.7)',
            navlinks: '#9699a0',
            'navlinks-current': '#d1d5db',
            footer: '#F2F2F2',
            'footer-text': '#9699a0',
         },
         fontSize: {
            'heading-mobile': '54px',
            'heading-desktop': '64px',
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
