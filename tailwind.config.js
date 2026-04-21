/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        verus: {
          gold: "#E5B200",
          "gold-light": "#FFD700",
          "gold-dark": "#B8860B",
          black: "#030303",
          border: "rgba(255,255,255,0.05)",
          glass: "rgba(255,255,255,0.02)",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E5B200, #FFD700)",
      },
    },
  },
  plugins: [],
};
