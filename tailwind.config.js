/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#42D2FF",
        secondary: "#F74743",
        middle: "#c8e0fd",
        "button-red": "#F53838",
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          // ...
          colors: {
            danger: {
              DEFAULT: "#F53838",
            },
          },
        },
        dark: {
          // ...
          colors: {},
        },
        // ... custom themes
      },
    }),
  ],
};
