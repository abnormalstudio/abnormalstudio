module.exports = {
  siteMetadata: {
    siteUrl: `https://www.abnormalstudio.com`,
    title: `ABNORMAL studio`
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
        fonts: [`arapey`, `jura:300,400,400i,700`]
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
