import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        otti: {
          teal: "#0F4C5C",
          grey: "#6C757D",
          cream: "#FAF9F6",
          sand: "#E5D7C5",
          copper: "#B47C48",
          sky: "#7CC6FE",
          orange: "#FF8C00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
