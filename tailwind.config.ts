import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#0d9488",
          "teal-dark": "#0f766e",
          amber: "#d97706",
          "amber-dark": "#b45309",
          cream: "#fdf8f0",
          slate: "#1e3a5f",
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
