/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      // screens: {
      //   custom: '1000px',
      // },
      colors: {
        customBlue: '#0062FF',
        customLightBlue: '#3474b4',
        customPink: '#FFFAFA',
        customRed: '#FC3847',
        customYellow: '#FDBC1E',
        customLightYellow: '#FFD898FF',
        customCream: '#FDBC1E12',
        customGreen: '#4CAF50',
        customBlack: '#2B2B2B',
        customDarkCream: '#FDBC1E33',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
