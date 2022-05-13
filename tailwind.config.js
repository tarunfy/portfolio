module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Glimer-Outlined": ["Glimer-Outlined", "sans-serif"],
        "Glimer-Bold": ["Glimer-Bold", "sans-serif"],
        "Glimer-Heavy": ["Glimer-Heavy", "sans-serif"],
        "Glimer-Light": ["Glimer-Light", "sans-serif"],
        "Glimer-Medium": ["Glimer-Medium", "sans-serif"],
        "Glimer-Regular": ["Glimer-Regular", "sans-serif"],
      },

      boxShadow: {
        custom1: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0,  0px)" },
          "50% ": { transform: "translate(0, 15px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
    },
    screens: {
      vvs: "393px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1/2xl": "1366px",
      "1xl": "1440px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
