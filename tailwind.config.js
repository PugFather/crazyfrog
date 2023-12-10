/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Grandstander"],
        display: ["Permanent Marker"],
      },
      backgroundImage: {
        hero: "url('src/assets/hero_grad.png')",
      },
    },
  },
  plugins: [],
};
