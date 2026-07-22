/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        verus: { gold: "#E5B200", goldLight: "#FFD700" },
      },
      fontFamily: {
        sans: ["sans-serif"],
        mono: ["monospace"],
        display: ["sans-serif"],
      },
    },
  },
  plugins: [],
}