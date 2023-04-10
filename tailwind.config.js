/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JosefinSans: ["Josefin Sans"],
        Quason: ["wondar-quason-free"],
      },
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
        "ourStory-hero-section-bg": "url('/ourStory.png')",
        "meetTheTeam-hero-section-bg": "url('/meetTheTeamBG.png')",
        "rentOurSpace-hero-section-bg": "url('/rentSpaceBG.png')",
        "hamsa-bg": "url('/hamsa.svg')",
        "lotus-bg": "url('/lotus.svg')",
        "moon-bg": "url('/moon.svg')",
        "chakra-bg": "url('/chakra1.svg')",
        "class-instudio-bg": "url('/hamsa-leaning-left.svg')",
        "class-outdoor-bg": "url('/hamsa-middle.svg')",
        "class-online-bg": "url('/hamsa-leaning-right.svg')",
        "chakra-events-bg": "url('/chakra-bg-events.svg')",
        "chakra-team-bg": "url('/chakra-team-bg.svg')",
        "red-underline-bg": "url('/red-underline.svg')",
        "heading-underline-bg": "url('/heading-underline.svg')",
      },
      backgroundSize: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "100%": "100%",
      },
      transitionDuration: {
        1000: "1000ms",
      },
      transitionDelay: {
        1000: "1000ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
