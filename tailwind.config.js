module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: "26.25rem",

        dynamic: "min(90% , 1200px)",
      },
      colors: {
        "vivid-purple": "#7F00FF",
        magneta: "#E100FF",
      },
    },
  },
  plugins: [],
};
