module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-img": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-90deg)" },
          "50%": { transform: "rotate(-180deg)" },
          "75%": { transform: "rotate(-270deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 30s linear infinite",
        "rotate-img": "rotate-img 13s linear infinite",
      },
      colors: {
        primary: "#525E75",
        secondary: "#F0F0F0",
        btnColor: "#78938A",
        cardColor: "#F0F0F0",
        iconColor: "#525E75",
        iconAndroidColor: "#92BA92",
        terminal: "#282c34",
      },
    },
  },
  plugins: [],
};
