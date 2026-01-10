/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        subtleZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        floatLeft: {
          "0%, 100%": { transform: "translateY(0) rotate(-12deg)" },
          "50%": { transform: "translateY(-10px) rotate(-12deg)" },
        },
        floatRight: {
          "0%, 100%": { transform: "translateY(0) rotate(12deg)" },
          "50%": { transform: "translateY(-10px) rotate(12deg)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "subtle-zoom": "subtleZoom 6s ease-in-out infinite alternate",
        "float-left": "floatLeft 4s ease-in-out infinite",
        "float-right": "floatRight 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
