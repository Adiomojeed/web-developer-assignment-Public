import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          500: "#535862",
          700: "#181D27",
        },
        accent: {
          50: "#F9F5FF",
          500: "#7F56D9"
        },
        "gray-700": "#334155"
      },
      boxShadow: {
        sm: "0px 2px 4px -4px rgba(10, 13, 18, 0.6), 0px 8px 4px -2px rgba(10, 13, 18, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
