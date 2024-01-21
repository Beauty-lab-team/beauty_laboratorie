/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: '#FAFAFA',
            'text-1': '#1A1A1A',
            'text-2': '#7c7c85',
            'text-3': '#9699a0',
            'accent-1': '#4559ac',
            'accent-2': '#f4f4f8',
            navbar: 'rgba(255, 255, 255, 0.6)',
         },
         fontSize: {
            'heading-mobile': '52px',
            'heading-desktop': '66px',
            'cardHeading-mobile': '24px',
            'cardHeading-desktop': '28px',
         },
         fontFamily: {
            helvetica: ['Helvetica', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            forum: ['Forum', 'serif'],
            praho: ['Praho-regular', 'serif'],
         },
         borderRadius: {
            basic: '20px',
            inner: '14px',
         },
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
}
