/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {

        primary: {
          DEFAULT: "#EC4899",
          hover: "#B92C70",
          light: "#F5C2DA"
        },

        dark: {
          DEFAULT: "#0B0B0B",
          soft: "#1A1A1A"
        },

        background: {
          DEFAULT: "#111111",
          soft: "#EFE9E1"
        },

        text: {
          DEFAULT: "#1F1F1F",
          muted: "#6B6B6B"
        },

        border: "#E5DFD7",

      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"]
      },

      boxShadow: {
        luxury: "0 10px 40px rgba(0,0,0,0.15)"
      },

      borderRadius: {
        luxury: "14px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lgx: '992px',   // 👈 NEW BREAKPOINT
      lg: '1024px',
      xl: '1280px',
    },
   
  },
  plugins: [],
};

