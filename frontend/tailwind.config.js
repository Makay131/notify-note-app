/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "notify-color-primary": "##8981d8",
        "notify-color-primary-dark": "#6a61c0",
        "notify-color-primary-light": "#e6e5f7",
        "notify-color-secondary": "#9d9d9d",
        "notify-color-secondary-dark": "#565656",
        "notify-color-secondary-light": "#bfbfbf",
        "notify-color-option-yellow": "#ffcc61",
        "notify-color-option-orange": "#ff9745",
        "notify-color-option-blue": "#47d8ff",
        "notify-color-background": "#f9f9f9",
      },
    },
  },
  plugins: [],
}