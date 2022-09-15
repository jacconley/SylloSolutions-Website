module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "gNkmtUSsyvfKxr9s59TLK4",
        token: "wfIQgZGiPJw2xnOE1mJqLDZXIctoWZKPF9bJbU1YRkCWL17I6DyBEgae9uSttARO0ikQu0lpIIl4PG7s6TTaw",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
