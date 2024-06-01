/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      backgroundImage: {
        "banu": "url('/assets/background-banu.gif')"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["night"]
  }
}

