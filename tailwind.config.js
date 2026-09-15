/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#137fec",
        "primary-ink": "#0b62c4",
        "primary-glow": "#4d9ffd",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "terminal-bg": "#1e1e1e",
        "terminal-header": "#2d2d2d",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      boxShadow: {
        pixel: "0 4px 0 rgba(0,0,0,0.1)",
        "pixel-border": "0 0 0 1px rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
