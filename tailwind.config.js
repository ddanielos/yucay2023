/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '300': '550px'
      },
      fontFamily: {
        roboto: ["RobotoMono", "sans-serif"],
      },
      fontSize: {
        '21':'21px',
      },
      colors:{
        'prymary-color':'#F4EFE2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url(/assets/background_hero.jpg)",
      },
    },
  },
  plugins: [],
}
