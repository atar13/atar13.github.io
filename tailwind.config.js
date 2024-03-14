/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./hugo_stats.json",
      "./content/**/*.{html,js}", 
      "./layouts/**/*.{html,js}"
  ],
  theme: {
    extend: {
        colors: {
            "color1": "var(--color1)",
            "color2": "var(--color2)",
            "color3": "var(--color3)",
            "color4": "var(--color4)",
        },
    },
  },
  plugins: [],
}

