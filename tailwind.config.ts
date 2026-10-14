import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Основной текст: глубокий чернильно-фиолетовый вместо чистого чёрного
        ink: {
          DEFAULT: "#33304f",
          soft: "#5a5679",
          faint: "#7d7a99",
        },
        // Мятный оттенок для спокойных зон
        mint: {
          50: "#f0fbf6",
          100: "#d9f5e8",
          200: "#b7ebd2",
          300: "#8adcb8",
          400: "#55c697",
        },
      },
      fontFamily: {
        display: ['"Unbounded Variable"', "ui-rounded", "system-ui", "sans-serif"],
        sans: ['"Nunito Variable"', "ui-rounded", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rise: {
          "0%": { transform: "translateY(24px) scale(0.9)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        pop: {
          "0%": { transform: "scale(0.6) rotate(-8deg)", opacity: "0" },
          "70%": { transform: "scale(1.08) rotate(2deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        pop: "pop 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        wiggle: "wiggle 0.5s ease-in-out 2",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(120, 100, 160, 0.28)",
        lift: "0 18px 40px -16px rgba(120, 100, 160, 0.38)",
      },
    },
  },
  plugins: [],
};

export default config;
