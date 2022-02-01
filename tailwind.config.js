module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('assets/about.jpeg')",
        'team': "url('assets/team.jpeg')",
        'contact': "url('assets/contact.jpeg')",
        'vision': "url('assets/vision.jpg')",
        'origin': "url('assets/origin.jpg')",
      },
      colors: {
        'primary': {
          '600': '#950098',

        },
        'secondary': {
          '600': '#009893',

        }
      }
    },
  },
  plugins: [],
}
