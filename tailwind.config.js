/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryColor: "#3F51B5",
        headingColor: "#081e21",
        smallTextColor: "#193256",
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100px * 14))" },
        },
      },
    },
  },
  plugins: [],
};
