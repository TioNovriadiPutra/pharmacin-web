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
        18: "4.375rem",
        26: "6.625rem",
        3.75: "0.938rem",
        4.5: "1.125rem",
        1.75: "0.438rem",
        10.5: "2.625rem",
        22: "5.125rem",
        3.25: "0.813rem",
      },
      padding: {
        26: "6.688rem",
        4.5: "1.125rem",
        0.75: "0.188rem",
        10.5: "2.625rem",
        4.25: "1.063rem",
        2.75: "0.688rem",
        5.5: "1.313rem",
        11.5: "2.813rem",
        1.75: "0.438rem",
        3.75: "0.938rem",
      },
      width: {
        1.25: "0.313rem",
        82: "20.125rem",
        18: "4.25rem",
        97: "30.25rem",
        98: "33.875rem",
        100: "49.625rem",
        23: "5.25rem",
        10.5: "2.625rem",
        66: "16.563rem",
        34: "8.625rem",
        15: "3.688rem",
      },
      height: {
        13: "3.375rem",
        46: "11.875rem",
        10.5: "2.625rem",
        22: "5.75rem",
      },
      gap: {
        12.5: "3.125rem",
        13: "3.375rem",
        4.75: "1.188rem",
        4.5: "1.125rem",
        8.5: "2.125rem",
        3.75: "0.938rem",
        5.5: "1.375rem",
        22: "5.125rem",
      },
      minHeight: {
        9.5: "2.375rem",
      },
      maxHeight: {
        84: "20.25rem",
        100: "35.875rem",
      },
      spacing: {
        8.5: "2.125rem",
        10.5: "2.625rem",
        70: "17.625rem",
      },
    },
    borderRadius: {
      none: "0rem",
      xs: "0.375rem",
      sm: "0.5rem",
      md: "0.625rem",
      lg: "0.875rem",
      full: "3.125rem",
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
