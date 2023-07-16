/** @type {import('tailwindcss').Config} **/

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        fill: "-webkit-fill-available",
      },
      height: {
        fill: "-webkit-fill-available",
      },
      fontSize: {
        body1: "14px",
        body2: "16px",
      },
      colors: {
        primary: "#0B1116",
        error: "#FF3333",
        pending: "#ff5c09",
        success: "#0e9d47",
      },
    },
  },
  safelist: ["bg-primary", "bg-error", "bg-success", "bg-pending"],
};
