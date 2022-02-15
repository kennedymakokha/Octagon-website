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
        'project': "url('assets/projects.jpg')",
        'home': "url('assets/home.jpg')",
        'cms': "url('assets/cms.jpg')",
        'dyna': "url('assets/dynamics.jpg')",
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
