/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2EAD8", // Newsprint — page ground
        kraft: "#E7DBC0", // secondary surface / tag stock
        ink: "#2B211B", // Stall Ink — headings, body, keylines
        oxblood: {
          DEFAULT: "#7A1F1A",
          dark: "#5E1712",
        },
        mute: "#6E6142", // Cardboard, darkened for AA text contrast
        line: "#8A7A55", // Cardboard, for hairlines/borders only
        live: "#E8FF47", // the one high-voltage color
        footer: {
          DEFAULT: "#211A15",
          mute: "#B7A98A",
        },
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flash-live": {
          "0%": { backgroundColor: "#E8FF47" },
          "40%": { backgroundColor: "#FFFDE8" },
          "100%": { backgroundColor: "#E8FF47" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "flash-live": "flash-live 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
