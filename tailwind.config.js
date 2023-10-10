/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/banner/banner.png')",
        "qoute-pattern": "url('/src/assets/banner/banner2.png')",
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "14rem",
      },
    },
  },
  plugins: [],
};
