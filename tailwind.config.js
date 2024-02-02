/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f8fafb",
        background: "#fff",
        gray: {
          100: "#fafafa",
          200: "rgba(3, 2, 41, 0.7)",
          300: "rgba(255, 255, 255, 0.8)",
        },
        grey: "#a0a3bd",
        darkslateblue: "#22285e",
        primary: "#9058ff",
        dark: "#212121",
        lavender: "#e8e9ff",
        blueviolet: {
          100: "#7950f2",
          200: "#7750f1",
        },
        lightcyan: "#e4fff8",
        mediumseagreen: "#0dad82",
        gainsboro: "#d9d9d9",
        black: "#000",
        gray1: "#fcfcfd",
        aliceblue: "#e8eff7",
        darkslategray: "#373b5c",
        lightgray: "rgba(206, 206, 206, 0.7)",
        "black-100": "#1c1d22",
        "black-50": "#53545d",
      },
      spacing: {},
      fontFamily: {
        urbanist: "Urbanist",
        poppins: "Poppins",
        nunito: "Nunito",
        "paragraph-2-regular": "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
        mini: "15px",
        "481xl": "500px",
      },
    },
    fontSize: {
      base: "0.89rem",
      "5xl": "1.33rem",
      lgi: "1.06rem",
      xl: "1.11rem",
      "2xl-8": "1.21rem",
      mid: "0.94rem",
      lg: "1rem",
      xs: "0.67rem",
      "9xl": "1.56rem",
      "3xl": "1.22rem",
      sm: "0.78rem",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
