module.exports = {
  daisyui: {
    themes: ["dark", "light"],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
