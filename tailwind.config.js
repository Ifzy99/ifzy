/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    // "./node_modules/flowbite-react/lib/**/*.js",
    // "./pages/**/*.{ts,tsx}",
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
        "slide-up": "slide-up 1s ease-out",
        "slide-left": "slide-left 2s ease-out",
         "marquee": "marquee 60s linear infinite",
        "reverse-marquee": "reverse-marquee 60s linear infinite",
        "bounce":"bounce 2s infinite",
        // 'marquee-scroll-x': 'scroll-x 60s linear infinite',
        // 'marquee-scroll-x-reverse': 'scroll-x-reverse 60s linear infinite',
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100vh)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "reverse-marquee": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bounce":{
          "0%, 100%": {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        // 'scroll-x': {
        //   '0%': { transform: 'translateX(0)' },
        //   '100%': { transform: 'translateX(calc(-100% - var(--gap)))' },
        // },
        // 'scroll-x-reverse': {
        //   '0%': { transform: 'translateX(calc(-100% - var(--gap)))' },
        //   '100%': { transform: 'translateX(0)' },
        // },
        // 'fade': {
        //   '100%': { opacity: 0, visibility: 'hidden' },
        // },
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
        softRed: "hsl(0, 94%, 66%)",
        red: "hsl(0, 87%, 67%)",
        cyanLight: "hsl(180, 66%, 69%)",
        cyan: "hsl(180, 66%, 49%)",
        strongCyan: "hsl(171, 66%, 44%)",
        darkViolet: "hsl(257, 27%, 26%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
        grayishViolet: "hsl(257, 7%, 63%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
