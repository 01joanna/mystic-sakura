/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "linear-gradient(to purple, red, blue)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellowColor: "#F2CF5F",
        purpleDark: "#7847AC",
        pinkColor: "#EF146E",
        yellowDark: "#918666",
        pureWhite: "#FFFFFF",
        blueDark: "#201043",
        blueLigth: "#270c4f",
        purpleColor: "#D02FDD",
        purpleDrak: "#380063",
        bluePlaceHolder: "#1C133E",
      },
      fontFamily: {
        showcard: ["Showcard Gothic", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
    plugins: [],
  },
};
