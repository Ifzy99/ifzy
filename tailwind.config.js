/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      animation: {
        "slide-left": "slide-left 1s ease-in",
        "slide-right": "slide-right 1s ease-in forwards",
        'slide-up': 'slideUp 1s ease-out forwards',
        "bounce": "bounce 2s infinite",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(4rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "bounce": {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        lightBlue: "hsl(233, 100%, 69%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
        cyanLight: "hsl(180, 66%, 69%)",
        strongCyan: "hsl(171, 66%, 44%)",
        darkViolet: "hsl(257, 27%, 26%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
        grayishViolet: "hsl(257, 7%, 63%)",
        gray: {
          900: '#1a202c', 
        },
        'navy-blue': '#0a2472', 
        'coral': '#ff6b6b',
        'coral-dark': '#ff5252',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};
