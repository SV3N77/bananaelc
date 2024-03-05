import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rubyblue: "#79ADDC",
        peach: "#FFC09F",
        flax: "#FFEE93",
        lavender: "#E9EBF8",
        lemonchiffon: "#FCF5C7",
        celadon: "#ADF7B6",
        viridian: "#56876D",
      },
    },
  },
  plugins: [],
};
export default config;
