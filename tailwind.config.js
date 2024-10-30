/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        shorten: "url('../public/shorten.svg')",
        boost: "url('../public/boost.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "#2bd1d1",
        purple: "#3a3053",
      },
    },
  },
  plugins: [],
});
