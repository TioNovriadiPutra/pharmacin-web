/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const tailwindScrollbar = require("tailwind-scrollbar");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        3: "3 3 0%",
      },
      colors: {
        primary: "#58BE62",
        "light-primary": "#D5FAD9",
        secondary: "#295497",
        info: "#ECD37A",
        danger: "#D85E5E",
        "light-danger": "#FFE3E3",
        "light-blue": "#9FC5FE",
        "dark-blue": "#2D3257",
        orange: "#F6B364",
        "main-background": "#F9F9FC",
        gray: "#787878",
        "light-gray": "#AAAAAA",
        border: "#ECECF5",
        inactive: "#EFEFEF",
        "inactive-label": "#8C8C8C",
        black: "#373737",
        modal: "rgba(0, 0, 0, 0.5)",
        bar: "#E0DDDD",
        placeholder: "#ABABAB",
        "sub-title": "#969696",
        "table-border": "#F2F2F3",
        skeleton: "#F2F2F2",
      },
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans"],
      },
      margin: {
        18: "70px",
        26: "106px",
        3.75: "15px",
        4.5: "18px",
        1.75: "7px",
        10.5: "42px",
        22: "82px",
      },
      padding: {
        26: "107px",
        4.5: "18px",
        0.75: "3px",
        10.5: "42px",
        4.25: "17px",
        2.75: "11px",
        5.5: "21px",
      },
      width: {
        1.25: "5px",
        82: "322px",
        18: "68px",
        98: "542px",
      },
      height: {
        13: "54px",
      },
      gap: {
        12.5: "50px",
        13: "54px",
        4.75: "19px",
        4.5: "18px",
        8.5: "34px",
        3.75: "15px",
      },
      maxHeight: {
        84: "324px",
      },
      spacing: {
        8.5: "34px",
      },
    },
    borderRadius: {
      sm: "8px",
      md: "10px",
      lg: "14px",
    },
    boxShadow: {
      "dropdown-menu": "1px 1px 12px rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true, preferredStrategy: "pseudoelements" })],
};
