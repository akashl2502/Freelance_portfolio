/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1440px",
        xl: "1280px",
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      const components = {
        ".underline-animation": {
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "0%",
            height: "2px",
            background: "#f87c44",
            bottom: "0",
            left: "50%",
            transition: "all 0.5s",
          },
          "&:hover::after": {
            width: "100%",
            left: "0",
          },
        },
      };
      addComponents(components);
    },
  ],
};
