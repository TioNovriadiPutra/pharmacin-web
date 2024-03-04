/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const tailwindScrollbar = require("tailwind-scrollbar");
// eslint-disable-next-line no-undef
const tailwindAspectRatio = require("@tailwindcss/aspect-ratio");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
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
        3.25: "13px",
      },
      padding: {
        26: "107px",
        4.5: "18px",
        0.75: "3px",
        10.5: "42px",
        4.25: "17px",
        2.75: "11px",
        5.5: "21px",
        11.5: "45px",
        1.75: "7px",
        3.75: "15px",
      },
      width: {
        1.25: "5px",
        82: "322px",
        18: "68px",
        97: "484px",
        98: "542px",
        100: "794px",
        23: "84px",
        10.5: "42px",
        66: "265px",
        34: "138px",
      },
      height: {
        13: "54px",
        46: "190px",
        10.5: "42px",
      },
      gap: {
        12.5: "50px",
        13: "54px",
        4.75: "19px",
        4.5: "18px",
        8.5: "34px",
        3.75: "15px",
        5.5: "22px",
      },
      maxHeight: {
        84: "324px",
        100: "574px",
      },
      spacing: {
        8.5: "34px",
        10.5: "42px",
        70: "282px",
      },
    },
    borderRadius: {
      none: "0px",
      xs: "6px",
      sm: "8px",
      md: "10px",
      lg: "14px",
      full: "50px",
    },
    boxShadow: {
      "dropdown-menu": "1px 1px 12px rgba(0, 0, 0, 0.25)",
      "profile-menu": "1px 1px 12px rgba(0, 0, 0, 0.1)",
    },
  },
  corePlugins: {
    aspectRation: false,
  },
  plugins: [
    tailwindScrollbar({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
    tailwindAspectRatio,
  ],
};
