module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aorent: "#FE9D66",
        aorentwht: "#F9F9F9",
        aorentgray: "#2A6F97",
        aorentgray1: "#012A4A",
        aorentgreen: "#0C760A",
        aorentblue: "#A9D6E5",
        aorentdark: "#012A4A",
        aorentwht2: "#E5E5E5",
        aorentfont: "#6B779A",
        aorentdark: "#222B45",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "bg-back1": "url('/assets/best-budgeting-apps.jpg')",
        "bg-back2": "url('/assets/iStock-1214054918-1024x805.jpg')",
      }),
    },
  },
  plugins: [],
};
