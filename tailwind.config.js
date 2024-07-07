/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // dark theme colors
        primaryDark: "hsl(224, 71%, 4%)",
        secondaryDark: "hsl(221, 39%, 11%)",

        // light theme colors
        primaryLight: "hsl(0, 0%, 100%)",
        secondaryLight: "hsl(240, 25%, 98%)",
      },
      fontFamily: {
        logo: "Playwrite AU TAS, cursive",
      },
    },
  },
  plugins: [],
};
