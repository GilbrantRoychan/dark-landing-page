module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "openSans": ["Open-Sans"],
        "raleway": ["Raleway"]
      },
      colors: {
        "intro": "#181F2B",
        "main": "#181F2A",
        "footer": "#1C2431",
        "testi": "#202A3C",
        "CTA1": "#65E2D9",
        "CTA2": "#123949",
        "hoverCTA1": "#3FCBC1",
        "texthover": "#676767"
      },
      dropShadow: {
        "primary": "6px 6px 20px rgba(0,0,0, 0.2)"
      }
    },
  },
  plugins: [],
}