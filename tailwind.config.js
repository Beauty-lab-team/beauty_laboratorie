/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: '#FAFAFA',
            'text-1': '#1A1A1A',
            'text-2': '#7c7c85',
            'accent-1': '#414358',
            'accent-2': '#eff0f2',
            navbar: 'rgba(255, 255, 255, 0.7)',
            navlinks: '#9699a0',
            'navlinks-current': '#414358',
            footer: '#F2F2F2',
            'footer-text': '#9699a0',
         },
         fontSize: {
            'heading-mobile': '52px',
            'heading-desktop': '62px',
            'cardHeading-mobile': '28px',
            'cardHeading-desktop': '30px',
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
