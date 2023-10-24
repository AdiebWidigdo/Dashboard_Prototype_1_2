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
        darkgray: "#999494",
        "colors-white-100": "#fff",
        dimgray: "#593f3f",
        rosybrown: "#8f6d6d",
        lavender: "#e1deee",
        royalblue: "#1e6dd5",
        darkslategray: {
          "100": "#373737",
          "200": "#042d4b",
        },
        gray: "#8c8c8c",
        silver: "#c6c6c6",
        steelblue: "#044d82",
      },
      spacing: {},
      fontFamily: {
        "baloo-bhaina-2": "'Baloo Bhaina 2'",
        "dm-sans": "'DM Sans'",
        inherit: "inherit",
        hind: "Hind",
        "baloo-2": "'Baloo 2'",
      },
    },
    fontSize: {
      xs: "12px",
      "3xs": "10px",
      xl: "20px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      "13xl": "32px",
      "5xs": "8px",
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
