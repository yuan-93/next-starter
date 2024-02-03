import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-poppins)", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-poppins)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

export default config;
