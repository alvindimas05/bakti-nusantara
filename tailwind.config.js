/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {},
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["retro", "night"]
  }
}

