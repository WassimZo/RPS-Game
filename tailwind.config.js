/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shadowPulse: {
          to: { boxShadow: "0px 0px 0px 1.5rem rgba(255, 255, 255, 0.25)" },
        },
      },
    },
  },
  plugins: [],
};
