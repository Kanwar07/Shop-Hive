module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #cda88e, #c3a086, #ba977f, #b08f77, #a78770)",
      },
      boxShadow: {
        "custom-lg": "0px 5px 15px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
