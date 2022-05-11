module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#f8f8f8",
        primaryText: "#999999",
        secondaryText: "#101010",
        paragraphText: "#8d8d8d",
        circle: "#f94751",
      },
      fontFamily: {
        Eczar: "Eczar, serif",
      },

      boxShadow: {
        mainShadow: "0px 6px 20px rgba(0,0,0,0.4)",
      },

      screens: {
        sm: "380px",

        md: "680px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
