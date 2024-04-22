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
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100vh)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        "slide-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
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
      },
    },
  },
  plugins: [
    // require("flowbite/plugin")
  ],
};
