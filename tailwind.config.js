/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleYellowBiege: "#F9F4EC",
        mahogany: "#9F2420 ",
        charcoal: "#545454",
        dimGray: "#454545",
        offWhite: "#FAFAFA",
        warmGoldenYellow: "#F6C460",
        paleIvory: "#F9F4EC",
      },
      backgroundImage: {
        "hero-section-bg": "url('/peopleImageYoga.svg')",
      },

      // fontFamily: {
      //   Josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
