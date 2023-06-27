module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: true,
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        cambria: ["Cambria"],
        courierNew: ["Courier New"],
        tahoma: ["Tahoma"],
      },
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      borderColor: ["dark", "dark-focus"],
      textColor: ["dark", "dark-hover"],
    },
  },
  plugins: [],
};
