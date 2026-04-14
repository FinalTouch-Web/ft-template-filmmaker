import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        "paper-3": "var(--paper-3)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        signal: "var(--signal)",
        "signal-2": "var(--signal-2)",
        rule: "var(--rule)",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        slate: "0.18em",
        display: "-0.02em",
      },
      fontSize: {
        slate: ["10px", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      lineHeight: {
        stamp: "0.92",
      },
    },
  },
  plugins: [],
};
export default config;
