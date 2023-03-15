/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgDesk: "url(/src/assets/image-header-desktop.jpg)",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
        deca: "Lexend Deca",
      },
      colors: {
        primary: "#AB5CDB",
        secondary: "#1B1937",
        dark: "#0A0C1C",
      },
    },
  },
  plugins: [],
};
