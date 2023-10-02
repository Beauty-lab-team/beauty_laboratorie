/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: '#FAFAFA',
            'text-1': '#1A1A1A',
            'text-2': '#7c7c85',
            'accent-1': '#467bb8',
            'accent-2': '#f3f3f4',
            navbar: 'rgba(255, 255, 255, 0.7)',
            navlinks: '#9699a0',
            'navlinks-current': '#414358',
         },
         fontSize: {
            'heading-mobile': '56px',
            'heading-desktop': '72px',
            'cardHeading-mobile': '28px',
            'cardHeading-desktop': '30px',
         },
         fontFamily: {
            helvetica: ['Helvetica', 'sans-serif'],
            forum: ['Forum', 'serif'],
         },
         borderRadius: {
            basic: '24px',
            inner: '18px',
         },
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
}
