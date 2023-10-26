/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f4f5f6",
          "200": "#efefef",
          "300": "#edecf1",
          "400": "#eaeaeb",
        },
        "colors-white-100": "#fff",
        royalblue: "#1e6dd5",
        darkgray: "#999494",
        dimgray: "#593f3f",
        gray: "#8c8c8c",
        darkslategray: {
          "100": "#373737",
          "200": "#042d4b",
        },
        rosybrown: "#8f6d6d",
        silver: "#c6c6c6",
        lavender: "#e1deee",
        steelblue: "#044d82",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        "baloo-bhaina-2": "'Baloo Bhaina 2'",
        hind: "Hind",
        "baloo-2": "'Baloo 2'",
        inherit: "inherit",
      },
    },
    fontSize: {
      "5xs": "8px",
      xs: "12px",
      "3xs": "10px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
