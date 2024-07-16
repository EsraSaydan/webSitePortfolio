/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customLightGreen: "#CBF281",
        customBlue: "#4731D3",
        customWhite: "#F9F9F9",
        customBestWhite: "#FFFFFF",
        customDarkGreen: "#1A210B",
        customDarkBlue: "#171043",
        customDarkSf: "#252128",
        customDarkProject: "#2B2727",
        customButton: "#3730A3",
        customSkills: "#4832D3",
      },
    },
  },
  plugins: [],
};
