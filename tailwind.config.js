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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellowColor: "#E1C057",
        purpleDark: "#583182",
        pinkColor: "#EF146E",
        yellowDark: "#918666",
        pureWhite: "#FFFFFF",
        blueDark: "#201043",
        purpleColor: "#DO2FDD",
        purplePlaceholder: "#380063",
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
