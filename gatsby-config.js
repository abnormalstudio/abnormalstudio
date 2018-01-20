module.exports = {
  siteMetadata: {
    siteUrl: `https://www.abmornalstudio.com`,
    title: `ABnormalStudio`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-accessibilityjs`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `arapey`,
          `jura:300,400,400i,700`
          // `antic slab\:300,400,400i,700`
          // `poppins\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
