/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.5s ease-in-out", // Duration and easing
      },
      colors: {
        "custom-blue": "rgba(0, 73, 198, 1)",
        "button-color": "rgba(21, 112, 239, 1)",
        "grey-variant": "rgba(65, 70, 81, 1)",
      },
      screens: {
        ssm: { min: "550px" },
        xs: { max: "550px" },
        xxs: { max: "450px" },
        ss: { max: "380px" },
      },
      boxShadow: {
        custom: "0px 0px 24px 0px rgba(8, 23, 53, 0.16)",
      },
      height: {
        DVH: "100dvh",
      },
    },
  },
  plugins: [],
};
