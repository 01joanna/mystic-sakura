/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
      colors: {
        yellowcolor: '#E1C057',
        purpledark: '#583182',
        pinkcolor: '#EF146E',
        yellowdark: '#918666',
        purewhite: '#FFFFFF',       
        bluedark: '#201043',
        purplecolor:'#DO2FDD'
          },
          fontFamily: {
            'showcard': ['Showcard Gothic', 'sans-serif'],
            'jost': ['Jost', 'sans-serif']
          }
      },
      plugins: [],
}
}