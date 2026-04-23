/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accentaccent-1": "var(--accentaccent-1)",
        backgroundbackground: "var(--backgroundbackground)",
        textlink: "var(--textlink)",
        texttext: "var(--texttext)",
      },
      fontFamily: {
        head: "var(--head-font-family)",
      },
    },
  },
  plugins: [],
};
