/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": { min: "276px", max: "359px" }, // Fold
        xs: { min: "360px", max: "389px" }, // Mobile
        "2sm": { min: "390px", max: "559px" }, // Wide Mobile
        sm: { min: "560px", max: "667px" }, // Wide Wide Mobile - 500px
        tb: { min: "668px", max: "1023px" }, // Tablet
        lg: { min: "1024px" }, // Laptop
        xl: { min: "1280px" }, // Desktop
      },
      fontFamily: {
        MainFont: ["MainFont_Regular"],
      },
    },
  },
  plugins: [],
};
