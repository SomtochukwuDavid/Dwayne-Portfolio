/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        ink: "#F2F4F8",
        accent: "#3B82F6",
        "accent-hover": "#2563EB",
        rule: "#1F2937",
        "ink-soft": "#94A3B8",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        base: ["16px", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "1120px",
        prose: "720px",
      },
      borderRadius: { sm: "4px", DEFAULT: "6px" },
    },
  },
  plugins: [],
};